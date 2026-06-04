import * as THREE from 'three';
import { COLORS, GAME_CONFIG, MAP_OBSTACLES } from '../shared/constants.js';
import { GridGround } from './GridGround.js';

export class MapGenerator {
  constructor(scene) {
    this.scene = scene;
    this.colliders = [];
    this.walls = [];
    this.gridGround = new GridGround(scene);
    this._generateWallPositions();
    this._createSnowHouses();
    this._createWalls();
    this._createLighting();
    this._createFog();
  }

  _seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }

  _generateWallPositions() {
    if (MAP_OBSTACLES.walls.length > 0) return;

    const walls = [];
    const wallCount = GAME_CONFIG.WALL_COUNT;
    const worldSize = GAME_CONFIG.WORLD_SIZE * 0.8;
    const halfWorld = GAME_CONFIG.WORLD_SIZE / 2;

    let seed = 54321;
    for (let i = 0; i < wallCount; i++) {
      let x, z, angle;
      let valid = true;
      let attempts = 0;

      do {
        seed++;
        x = (this._seededRandom(seed) - 0.5) * worldSize;
        seed++;
        z = (this._seededRandom(seed) - 0.5) * worldSize;
        seed++;
        angle = this._seededRandom(seed) * Math.PI;

        valid = true;
        attempts++;

        for (const wall of walls) {
          const dist = Math.sqrt((x - wall.x) ** 2 + (z - wall.z) ** 2);
          if (dist < GAME_CONFIG.WALL_MIN_GAP) {
            valid = false;
            break;
          }
        }

        if (valid) {
          for (const house of MAP_OBSTACLES.houses) {
            const dist = Math.sqrt((x - house.x) ** 2 + (z - house.z) ** 2);
            if (dist < house.radius + GAME_CONFIG.WALL_MIN_GAP) {
              valid = false;
              break;
            }
          }
        }

        if (valid) {
          const centerDist = Math.sqrt(x * x + z * z);
          if (centerDist < 8) valid = false;
        }

        if (valid) {
          const tempWall = { x, z, angle, width: GAME_CONFIG.WALL_WIDTH, thickness: GAME_CONFIG.WALL_THICKNESS };
          if (this._wouldCreateDeadEnd(tempWall, walls)) {
            valid = false;
          }
        }

      } while (!valid && attempts < 100);

      if (valid) {
        const wallData = {
          x, z, angle,
          width: GAME_CONFIG.WALL_WIDTH,
          thickness: GAME_CONFIG.WALL_THICKNESS,
          height: GAME_CONFIG.WALL_HEIGHT,
          snowUnits: GAME_CONFIG.WALL_MAX_SNOW_UNIT
        };
        walls.push(wallData);
      }
    }

    MAP_OBSTACLES.walls = walls;
  }

  _wouldCreateDeadEnd(newWall, existingWalls) {
    const gridSize = 2;
    const halfWorld = GAME_CONFIG.WORLD_SIZE / 2;
    const gridCells = Math.floor(GAME_CONFIG.WORLD_SIZE / gridSize);

    const blocked = new Set();
    for (const house of MAP_OBSTACLES.houses) {
      const cx = Math.floor((house.x + halfWorld) / gridSize);
      const cz = Math.floor((house.z + halfWorld) / gridSize);
      const r = Math.ceil(house.radius / gridSize);
      for (let dx = -r; dx <= r; dx++) {
        for (let dz = -r; dz <= r; dz++) {
          blocked.add(`${cx + dx},${cz + dz}`);
        }
      }
    }

    const allWalls = [...existingWalls, newWall];
    for (const wall of allWalls) {
      this._markWallCells(wall, blocked, gridSize, halfWorld);
    }

    const startX = Math.floor(halfWorld / gridSize);
    const startZ = Math.floor(halfWorld / gridSize);

    if (blocked.has(`${startX},${startZ}`)) return true;

    const visited = new Set();
    const queue = [`${startX},${startZ}`];
    visited.add(`${startX},${startZ}`);

    const borderCells = new Set();
    for (let x = 0; x < gridCells; x++) {
      for (let z = 0; z < gridCells; z++) {
        borderCells.add(`${x},${z}`);
      }
    }

    while (queue.length > 0) {
      const key = queue.shift();
      const [cx, cz] = key.split(',').map(Number);

      const neighbors = [
        `${cx - 1},${cz}`,
        `${cx + 1},${cz}`,
        `${cx},${cz - 1}`,
        `${cx},${cz + 1}`
      ];

      for (const nKey of neighbors) {
        if (visited.has(nKey)) continue;
        if (blocked.has(nKey)) continue;

        const [nx, nz] = nKey.split(',').map(Number);
        if (nx < 0 || nx >= gridCells || nz < 0 || nz >= gridCells) continue;

        visited.add(nKey);
        queue.push(nKey);
      }
    }

    const totalFree = gridCells * gridCells - blocked.size;
    return visited.size < totalFree * 0.9;
  }

  _markWallCells(wall, blocked, gridSize, halfWorld) {
    const cos = Math.cos(wall.angle);
    const sin = Math.sin(wall.angle);
    const halfW = wall.width / 2;
    const halfT = wall.thickness / 2;

    const corners = [
      { dx: -halfW, dz: -halfT },
      { dx: halfW, dz: -halfT },
      { dx: halfW, dz: halfT },
      { dx: -halfW, dz: halfT }
    ];

    const worldCorners = corners.map(c => ({
      x: wall.x + c.dx * cos - c.dz * sin,
      z: wall.z + c.dx * sin + c.dz * cos
    }));

    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
    for (const c of worldCorners) {
      minX = Math.min(minX, c.x);
      maxX = Math.max(maxX, c.x);
      minZ = Math.min(minZ, c.z);
      maxZ = Math.max(maxZ, c.z);
    }

    const padding = 0.5;
    const gxMin = Math.floor((minX - padding + halfWorld) / gridSize);
    const gxMax = Math.ceil((maxX + padding + halfWorld) / gridSize);
    const gzMin = Math.floor((minZ - padding + halfWorld) / gridSize);
    const gzMax = Math.ceil((maxZ + padding + halfWorld) / gridSize);

    for (let gx = gxMin; gx <= gxMax; gx++) {
      for (let gz = gzMin; gz <= gzMax; gz++) {
        const wx = gx * gridSize - halfWorld + gridSize / 2;
        const wz = gz * gridSize - halfWorld + gridSize / 2;
        if (this._pointInWallRect(wx, wz, wall)) {
          blocked.add(`${gx},${gz}`);
        }
      }
    }
  }

  _pointInWallRect(px, pz, wall) {
    const cos = Math.cos(-wall.angle);
    const sin = Math.sin(-wall.angle);
    const dx = px - wall.x;
    const dz = pz - wall.z;
    const localX = dx * cos - dz * sin;
    const localZ = dx * sin + dz * cos;
    const padding = 0.3;
    return Math.abs(localX) <= wall.width / 2 + padding && Math.abs(localZ) <= wall.thickness / 2 + padding;
  }

  _createSnowHouses() {
    MAP_OBSTACLES.houses.forEach((house, index) => {
      this._createSnowHouse(house.x, house.z, index % 2 === 0 ? 1 : 0.8);
    });
  }

  _createSnowHouse(x, z, scale = 1) {
    const houseGroup = new THREE.Group();
    houseGroup.position.set(x, 0, z);
    houseGroup.scale.setScalar(scale);

    const baseGeometry = new THREE.CylinderGeometry(2, 2.5, 2, 16);
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: COLORS.SNOW_HOUSE,
      roughness: 0.7,
      metalness: 0.0
    });

    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = 1;
    base.castShadow = true;
    base.receiveShadow = true;

    const roofGeometry = new THREE.ConeGeometry(2.8, 2, 16);
    const roofMaterial = new THREE.MeshStandardMaterial({
      color: 0xe8e8ff,
      roughness: 0.6
    });

    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = 3;
    roof.castShadow = true;

    const doorGeometry = new THREE.Shape();
    doorGeometry.moveTo(-0.5, 0);
    doorGeometry.lineTo(-0.5, 1.2);
    doorGeometry.quadraticCurveTo(0, 1.5, 0.5, 1.2);
    doorGeometry.lineTo(0.5, 0);
    doorGeometry.lineTo(-0.5, 0);

    const doorExtrudeSettings = { depth: 0.1, bevelEnabled: false };
    const doorGeometry3D = new THREE.ExtrudeGeometry(doorGeometry, doorExtrudeSettings);
    const doorMaterial = new THREE.MeshStandardMaterial({
      color: 0x8B4513,
      roughness: 0.8
    });

    const door = new THREE.Mesh(doorGeometry3D, doorMaterial);
    door.position.set(0, 0.1, 2.45);
    door.rotation.x = -Math.PI / 2;

    const windowGeometry = new THREE.CircleGeometry(0.3, 16);
    const windowMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffcc,
      emissive: 0xffffaa,
      emissiveIntensity: 0.3
    });

    const window1 = new THREE.Mesh(windowGeometry, windowMaterial);
    window1.position.set(1.5, 1.5, 2);
    window1.rotation.y = -Math.PI / 2;

    const window2 = new THREE.Mesh(windowGeometry, windowMaterial.clone());
    window2.position.set(-1.5, 1.5, 2);
    window2.rotation.y = Math.PI / 2;

    houseGroup.add(base);
    houseGroup.add(roof);
    houseGroup.add(door);
    houseGroup.add(window1);
    houseGroup.add(window2);

    this.scene.add(houseGroup);
    this.colliders.push({
      type: 'cylinder',
      x: x,
      z: z,
      radius: 2.5 * scale
    });
  }

  _createWalls() {
    MAP_OBSTACLES.walls.forEach(wallData => {
      this._createWall(wallData);
    });
  }

  _createWall(wallData) {
    const { x, z, angle, width, thickness, height, snowUnits } = wallData;

    const wallGroup = new THREE.Group();
    wallGroup.position.set(x, 0, z);
    wallGroup.rotation.y = angle;

    const wallGeometry = new THREE.BoxGeometry(width, height, thickness);
    const wallMaterial = new THREE.MeshStandardMaterial({
      color: COLORS.WALL,
      roughness: 0.8,
      metalness: 0.05
    });

    const wallMesh = new THREE.Mesh(wallGeometry, wallMaterial);
    wallMesh.position.y = height / 2;
    wallMesh.castShadow = true;
    wallMesh.receiveShadow = true;

    const snowRatio = snowUnits / GAME_CONFIG.WALL_MAX_SNOW_UNIT;
    const snowHeight = height * 0.3 * snowRatio;
    const snowGeometry = new THREE.BoxGeometry(width + 0.2, Math.max(0.05, snowHeight), thickness + 0.2);
    const snowMaterial = new THREE.MeshStandardMaterial({
      color: COLORS.WALL_SNOW,
      roughness: 0.7,
      metalness: 0.0
    });

    const snowMesh = new THREE.Mesh(snowGeometry, snowMaterial);
    snowMesh.position.y = height + snowHeight / 2;
    snowMesh.castShadow = true;

    wallGroup.add(wallMesh);
    wallGroup.add(snowMesh);
    this.scene.add(wallGroup);

    const wallObj = {
      ...wallData,
      group: wallGroup,
      wallMesh,
      snowMesh,
      snowUnits
    };
    this.walls.push(wallObj);

    this.colliders.push({
      type: 'wall',
      x, z, angle, width, thickness,
      wall: wallObj
    });
  }

  updateWalls(deltaTime) {
    if (this.walls.length === 0) return;

    for (const wall of this.walls) {
      if (wall.snowUnits < GAME_CONFIG.WALL_MAX_SNOW_UNIT) {
        wall.snowUnits = Math.min(
          GAME_CONFIG.WALL_MAX_SNOW_UNIT,
          wall.snowUnits + GAME_CONFIG.WALL_SNOW_RECOVERY_RATE * deltaTime
        );
      }

      const snowRatio = wall.snowUnits / GAME_CONFIG.WALL_MAX_SNOW_UNIT;
      const snowHeight = wall.height * 0.3 * snowRatio;
      if (wall.snowMesh) {
        wall.snowMesh.scale.y = Math.max(0.01, snowRatio);
        wall.snowMesh.position.y = wall.height + (wall.height * 0.3 * snowRatio) / 2;
      }
    }
  }

  tryGatherFromWall(worldX, worldZ, yaw, amount) {
    const forward = { x: Math.sin(yaw), z: Math.cos(yaw) };
    const gatherRange = GAME_CONFIG.WALL_GATHER_RANGE;

    let bestWall = null;
    let bestDist = Infinity;

    for (const wall of this.walls) {
      const dx = worldX - wall.x;
      const dz = worldZ - wall.z;
      const dist = Math.sqrt(dx * dx + dz * dz);

      if (dist > wall.width / 2 + gatherRange) continue;

      const toWallX = wall.x - worldX;
      const toWallZ = wall.z - worldZ;
      const dot = forward.x * toWallX + forward.z * toWallZ;
      if (dot <= 0) continue;

      if (dist < bestDist) {
        bestDist = dist;
        bestWall = wall;
      }
    }

    if (bestWall && bestWall.snowUnits >= amount) {
      bestWall.snowUnits -= amount;
      return amount;
    } else if (bestWall && bestWall.snowUnits > 0) {
      const gathered = bestWall.snowUnits;
      bestWall.snowUnits = 0;
      return gathered;
    }

    return 0;
  }

  checkCollision(x, z, radius) {
    const halfWorld = GAME_CONFIG.WORLD_SIZE / 2;
    if (x < -halfWorld + radius || x > halfWorld - radius ||
        z < -halfWorld + radius || z > halfWorld - radius) {
      return true;
    }

    for (const collider of this.colliders) {
      if (collider.type === 'cylinder') {
        const dist = Math.sqrt((x - collider.x) ** 2 + (z - collider.z) ** 2);
        if (dist < collider.radius + radius) {
          return true;
        }
      } else if (collider.type === 'wall') {
        if (this._pointInWallRect(x, z, collider)) {
          return true;
        }
      }
    }

    return false;
  }

  _createLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(20, 30, 20);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 100;
    directionalLight.shadow.camera.left = -50;
    directionalLight.shadow.camera.right = 50;
    directionalLight.shadow.camera.top = 50;
    directionalLight.shadow.camera.bottom = -50;

    this.scene.add(directionalLight);
  }

  _createFog() {
    this.scene.fog = new THREE.Fog(0xd0e8ff, 30, 80);
    this.scene.background = new THREE.Color(0x87CEEB);
  }
}
