import * as THREE from 'three';
import { GAME_CONFIG } from '../shared/constants.js';

export class GridGround {
  constructor(scene) {
    this.scene = scene;
    this.cellSize = GAME_CONFIG.GRID_CELL_SIZE;
    this.maxSU = GAME_CONFIG.MAX_SNOW_UNIT;
    this.worldSize = GAME_CONFIG.WORLD_SIZE;
    this.gridCount = Math.floor(this.worldSize / this.cellSize);
    this.halfWorld = this.worldSize / 2;

    this.snowUnits = [];
    this.cellMeshes = [];
    this.recoveryTimer = 0;

    this._initGrid();
    this._createGroundMeshes();
  }

  _initGrid() {
    for (let x = 0; x < this.gridCount; x++) {
      this.snowUnits[x] = [];
      this.cellMeshes[x] = [];
      for (let z = 0; z < this.gridCount; z++) {
        this.snowUnits[x][z] = this.maxSU;
      }
    }
  }

  _getColorForSU(su) {
    if (su >= GAME_CONFIG.SNOW_THRESHOLD_FULL) {
      return GAME_CONFIG.COLOR_SNOW_FULL;
    } else if (su >= GAME_CONFIG.SNOW_THRESHOLD_HALF) {
      return GAME_CONFIG.COLOR_SNOW_HALF;
    } else if (su >= GAME_CONFIG.SNOW_THRESHOLD_SPARSE) {
      return GAME_CONFIG.COLOR_SNOW_SPARSE;
    } else {
      return GAME_CONFIG.COLOR_DIRT;
    }
  }

  _createGroundMeshes() {
    const baseGeometry = new THREE.PlaneGeometry(this.cellSize, this.cellSize);

    for (let x = 0; x < this.gridCount; x++) {
      for (let z = 0; z < this.gridCount; z++) {
        const material = new THREE.MeshStandardMaterial({
          color: this._getColorForSU(this.maxSU),
          roughness: 0.9,
          metalness: 0.0
        });

        const mesh = new THREE.Mesh(baseGeometry, material);
        mesh.rotation.x = -Math.PI / 2;
        mesh.receiveShadow = true;

        const worldX = -this.halfWorld + x * this.cellSize + this.cellSize / 2;
        const worldZ = -this.halfWorld + z * this.cellSize + this.cellSize / 2;
        mesh.position.set(worldX, 0, worldZ);

        this.scene.add(mesh);
        this.cellMeshes[x][z] = mesh;
      }
    }
  }

  _worldToGrid(worldX, worldZ) {
    const gridX = Math.floor((worldX + this.halfWorld) / this.cellSize);
    const gridZ = Math.floor((worldZ + this.halfWorld) / this.cellSize);
    return { x: gridX, z: gridZ };
  }

  _isValidGrid(gridX, gridZ) {
    return gridX >= 0 && gridX < this.gridCount && gridZ >= 0 && gridZ < this.gridCount;
  }

  getSU(worldX, worldZ) {
    const { x, z } = this._worldToGrid(worldX, worldZ);
    if (!this._isValidGrid(x, z)) return 0;
    return this.snowUnits[x][z];
  }

  setSU(worldX, worldZ, value) {
    const { x, z } = this._worldToGrid(worldX, worldZ);
    if (!this._isValidGrid(x, z)) return;
    const clamped = Math.max(0, Math.min(this.maxSU, value));
    this.snowUnits[x][z] = clamped;
    this._updateCellVisual(x, z);
  }

  consumeSU(worldX, worldZ, amount) {
    const { x, z } = this._worldToGrid(worldX, worldZ);
    if (!this._isValidGrid(x, z)) return 0;
    const available = this.snowUnits[x][z];
    const toConsume = Math.min(available, amount);
    this.snowUnits[x][z] -= toConsume;
    this._updateCellVisual(x, z);
    return toConsume;
  }

  _updateCellVisual(gridX, gridZ) {
    if (!this._isValidGrid(gridX, gridZ)) return;
    const su = this.snowUnits[gridX][gridZ];
    const mesh = this.cellMeshes[gridX][gridZ];
    if (mesh) {
      mesh.material.color.setHex(this._getColorForSU(su));
      mesh.material.needsUpdate = true;
    }
  }

  getSurroundingCells(worldX, worldZ, yaw) {
    const { x: gx, z: gz } = this._worldToGrid(worldX, worldZ);

    const forward = { x: Math.sin(yaw), z: Math.cos(yaw) };
    const right = { x: Math.cos(yaw), z: -Math.sin(yaw) };

    const cells = [];

    cells.push({ gridX: gx, gridZ: gz, priority: 0 });

    for (let i = -1; i <= 1; i++) {
      const offsetX = Math.round(forward.x * 1 + right.x * i);
      const offsetZ = Math.round(forward.z * 1 + right.z * i);
      cells.push({ gridX: gx + offsetX, gridZ: gz + offsetZ, priority: 1 });
    }

    const leftX = Math.round(-right.x * 1);
    const leftZ = Math.round(-right.z * 1);
    const rightX = Math.round(right.x * 1);
    const rightZ = Math.round(right.z * 1);
    cells.push({ gridX: gx + leftX, gridZ: gz + leftZ, priority: 2 });
    cells.push({ gridX: gx + rightX, gridZ: gz + rightZ, priority: 2 });

    return cells.filter(cell => this._isValidGrid(cell.gridX, cell.gridZ));
  }

  tryGatherSnow(worldX, worldZ, yaw, amount) {
    const cells = this.getSurroundingCells(worldX, worldZ, yaw);

    cells.sort((a, b) => a.priority - b.priority);

    let remaining = amount;
    for (const cell of cells) {
      if (remaining <= 0) break;

      const available = this.snowUnits[cell.gridX][cell.gridZ];
      if (available > 0) {
        const consumed = Math.min(available, remaining);
        this.snowUnits[cell.gridX][cell.gridZ] -= consumed;
        this._updateCellVisual(cell.gridX, cell.gridZ);
        remaining -= consumed;
      }
    }

    const gathered = amount - remaining;
    return gathered >= amount;
  }

  update(deltaTime) {
    this.recoveryTimer += deltaTime;

    if (this.recoveryTimer >= GAME_CONFIG.SNOW_RECOVERY_INTERVAL) {
      this.recoveryTimer = 0;
      const recoveryRate = GAME_CONFIG.SNOW_RECOVERY_RATE;

      for (let x = 0; x < this.gridCount; x++) {
        for (let z = 0; z < this.gridCount; z++) {
          if (this.snowUnits[x][z] < this.maxSU) {
            this.snowUnits[x][z] = Math.min(this.maxSU, this.snowUnits[x][z] + recoveryRate);
            this._updateCellVisual(x, z);
          }
        }
      }
    }
  }
}
