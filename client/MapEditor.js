import { GAME_CONFIG } from '../shared/constants.js';

export class MapEditor {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.worldSize = GAME_CONFIG.WORLD_SIZE;
    this.viewScale = 1;
    this.offsetX = 0;
    this.offsetY = 0;

    this.houses = [];
    this.walls = [];

    this.tool = 'wall';
    this.selectedObject = null;
    this.selectedIndex = -1;
    this.wallAngle = 0;
    this.houseRadius = 2.5;

    this.isDragging = false;
    this.isPanning = false;
    this.dragStart = { x: 0, y: 0 };
    this.panStart = { x: 0, y: 0 };
    this.panOffsetStart = { x: 0, y: 0 };

    this.mouseWorldX = 0;
    this.mouseWorldZ = 0;

    this.gridSnap = true;
    this.snapSize = 2;

    this.mapName = '我的地图';

    this._resize();
    this._bindEvents();
    this._centerView();
    this.render();
  }

  _resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
  }

  _centerView() {
    const padding = 40;
    const scaleX = (this.canvas.width - padding * 2) / this.worldSize;
    const scaleY = (this.canvas.height - padding * 2) / this.worldSize;
    this.viewScale = Math.min(scaleX, scaleY);
    this.offsetX = this.canvas.width / 2;
    this.offsetY = this.canvas.height / 2;
  }

  worldToScreen(wx, wz) {
    return {
      x: this.offsetX + wx * this.viewScale,
      y: this.offsetY + wz * this.viewScale
    };
  }

  screenToWorld(sx, sy) {
    return {
      x: (sx - this.offsetX) / this.viewScale,
      z: (sy - this.offsetY) / this.viewScale
    };
  }

  snapWorld(wx, wz) {
    if (!this.gridSnap) return { x: wx, z: wz };
    return {
      x: Math.round(wx / this.snapSize) * this.snapSize,
      z: Math.round(wz / this.snapSize) * this.snapSize
    };
  }

  _bindEvents() {
    this.canvas.addEventListener('mousedown', (e) => this._onMouseDown(e));
    this.canvas.addEventListener('mousemove', (e) => this._onMouseMove(e));
    this.canvas.addEventListener('mouseup', (e) => this._onMouseUp(e));
    this.canvas.addEventListener('wheel', (e) => this._onWheel(e));
    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    window.addEventListener('keydown', (e) => this._onKeyDown(e));

    window.addEventListener('mapEditorResize', () => {
      this._resize();
      this.render();
    });
  }

  _onMouseDown(e) {
    const rect = this.canvas.getBoundingClientRect();
    const sx = e.clientX - rect.left;
    const sy = e.clientY - rect.top;

    if (e.button === 1 || (e.button === 0 && e.altKey)) {
      this.isPanning = true;
      this.dragStart = { x: e.clientX, y: e.clientY };
      this.panOffsetStart = { x: this.offsetX, y: this.offsetY };
      return;
    }

    if (e.button === 2) {
      this.wallAngle += Math.PI / 8;
      this.render();
      return;
    }

    if (e.button === 0) {
      const world = this.screenToWorld(sx, sy);
      const snapped = this.snapWorld(world.x, world.z);

      if (this.tool === 'wall') {
        const hitIdx = this._hitTestWall(world.x, world.z);
        if (hitIdx >= 0) {
          this.selectedObject = 'wall';
          this.selectedIndex = hitIdx;
          this.isDragging = true;
          this.dragStart = { x: snapped.x, z: snapped.z };
        } else {
          const wall = {
            x: snapped.x,
            z: snapped.z,
            angle: this.wallAngle,
            width: GAME_CONFIG.WALL_WIDTH,
            thickness: GAME_CONFIG.WALL_THICKNESS
          };
          this.walls.push(wall);
          this.selectedObject = 'wall';
          this.selectedIndex = this.walls.length - 1;
        }
      } else if (this.tool === 'house') {
        const hitIdx = this._hitTestHouse(world.x, world.z);
        if (hitIdx >= 0) {
          this.selectedObject = 'house';
          this.selectedIndex = hitIdx;
          this.isDragging = true;
          this.dragStart = { x: snapped.x, z: snapped.z };
        } else {
          const house = {
            x: snapped.x,
            z: snapped.z,
            radius: this.houseRadius
          };
          this.houses.push(house);
          this.selectedObject = 'house';
          this.selectedIndex = this.houses.length - 1;
        }
      } else if (this.tool === 'erase') {
        const wallIdx = this._hitTestWall(world.x, world.z);
        if (wallIdx >= 0) {
          this.walls.splice(wallIdx, 1);
          this.selectedObject = null;
          this.selectedIndex = -1;
        } else {
          const houseIdx = this._hitTestHouse(world.x, world.z);
          if (houseIdx >= 0) {
            this.houses.splice(houseIdx, 1);
            this.selectedObject = null;
            this.selectedIndex = -1;
          }
        }
      } else if (this.tool === 'select') {
        const wallIdx = this._hitTestWall(world.x, world.z);
        if (wallIdx >= 0) {
          this.selectedObject = 'wall';
          this.selectedIndex = wallIdx;
          this.isDragging = true;
          this.dragStart = { x: snapped.x, z: snapped.z };
        } else {
          const houseIdx = this._hitTestHouse(world.x, world.z);
          if (houseIdx >= 0) {
            this.selectedObject = 'house';
            this.selectedIndex = houseIdx;
            this.isDragging = true;
            this.dragStart = { x: snapped.x, z: snapped.z };
          } else {
            this.selectedObject = null;
            this.selectedIndex = -1;
          }
        }
      }

      this.render();
    }
  }

  _onMouseMove(e) {
    const rect = this.canvas.getBoundingClientRect();
    const sx = e.clientX - rect.left;
    const sy = e.clientY - rect.top;
    const world = this.screenToWorld(sx, sy);
    const snapped = this.snapWorld(world.x, world.z);
    this.mouseWorldX = snapped.x;
    this.mouseWorldZ = snapped.z;

    if (this.isPanning) {
      const dx = e.clientX - this.dragStart.x;
      const dy = e.clientY - this.dragStart.y;
      this.offsetX = this.panOffsetStart.x + dx;
      this.offsetY = this.panOffsetStart.y + dy;
      this.render();
      return;
    }

    if (this.isDragging && this.selectedIndex >= 0) {
      const dx = snapped.x - this.dragStart.x;
      const dz = snapped.z - this.dragStart.z;
      if (this.selectedObject === 'wall' && this.selectedIndex < this.walls.length) {
        this.walls[this.selectedIndex].x += dx;
        this.walls[this.selectedIndex].z += dz;
      } else if (this.selectedObject === 'house' && this.selectedIndex < this.houses.length) {
        this.houses[this.selectedIndex].x += dx;
        this.houses[this.selectedIndex].z += dz;
      }
      this.dragStart = { x: snapped.x, z: snapped.z };
    }

    this.render();
  }

  _onMouseUp(e) {
    this.isDragging = false;
    this.isPanning = false;
  }

  _onWheel(e) {
    e.preventDefault();
    const rect = this.canvas.getBoundingClientRect();
    const sx = e.clientX - rect.left;
    const sy = e.clientY - rect.top;

    const worldBefore = this.screenToWorld(sx, sy);

    const factor = e.deltaY > 0 ? 0.9 : 1.1;
    this.viewScale = Math.max(2, Math.min(20, this.viewScale * factor));

    const worldAfter = this.screenToWorld(sx, sy);
    this.offsetX += (worldAfter.x - worldBefore.x) * this.viewScale;
    this.offsetY += (worldAfter.z - worldBefore.z) * this.viewScale;

    this.render();
  }

  _onKeyDown(e) {
    if (e.key === 'Delete' || e.key === 'Backspace') {
      this.deleteSelected();
    } else if (e.key === 'r' || e.key === 'R') {
      if (this.selectedObject === 'wall' && this.selectedIndex >= 0 && this.selectedIndex < this.walls.length) {
        this.walls[this.selectedIndex].angle += Math.PI / 8;
        this.render();
      }
    } else if (e.key === 'Escape') {
      this.selectedObject = null;
      this.selectedIndex = -1;
      this.render();
    }
  }

  _hitTestWall(wx, wz) {
    for (let i = this.walls.length - 1; i >= 0; i--) {
      const wall = this.walls[i];
      const cos = Math.cos(-wall.angle);
      const sin = Math.sin(-wall.angle);
      const dx = wx - wall.x;
      const dz = wz - wall.z;
      const localX = dx * cos - dz * sin;
      const localZ = dx * sin + dz * cos;
      if (Math.abs(localX) <= wall.width / 2 + 1 && Math.abs(localZ) <= wall.thickness / 2 + 1) {
        return i;
      }
    }
    return -1;
  }

  _hitTestHouse(wx, wz) {
    for (let i = this.houses.length - 1; i >= 0; i--) {
      const house = this.houses[i];
      const dist = Math.sqrt((wx - house.x) ** 2 + (wz - house.z) ** 2);
      if (dist <= house.radius + 0.5) {
        return i;
      }
    }
    return -1;
  }

  deleteSelected() {
    if (this.selectedObject === 'wall' && this.selectedIndex >= 0 && this.selectedIndex < this.walls.length) {
      this.walls.splice(this.selectedIndex, 1);
    } else if (this.selectedObject === 'house' && this.selectedIndex >= 0 && this.selectedIndex < this.houses.length) {
      this.houses.splice(this.selectedIndex, 1);
    }
    this.selectedObject = null;
    this.selectedIndex = -1;
    this.render();
  }

  clearAll() {
    this.houses = [];
    this.walls = [];
    this.selectedObject = null;
    this.selectedIndex = -1;
    this.render();
  }

  setTool(tool) {
    this.tool = tool;
    this.selectedObject = null;
    this.selectedIndex = -1;
    this.render();
  }

  setWallAngle(angle) {
    this.wallAngle = angle;
    if (this.selectedObject === 'wall' && this.selectedIndex >= 0 && this.selectedIndex < this.walls.length) {
      this.walls[this.selectedIndex].angle = angle;
    }
    this.render();
  }

  setHouseRadius(radius) {
    this.houseRadius = radius;
    if (this.selectedObject === 'house' && this.selectedIndex >= 0 && this.selectedIndex < this.houses.length) {
      this.houses[this.selectedIndex].radius = radius;
    }
    this.render();
  }

  getMapData() {
    return {
      name: this.mapName,
      version: 1,
      worldSize: this.worldSize,
      houses: this.houses.map(h => ({ x: h.x, z: h.z, radius: h.radius })),
      walls: this.walls.map(w => ({ x: w.x, z: w.z, angle: w.angle, width: w.width, thickness: w.thickness }))
    };
  }

  loadMapData(data) {
    this.mapName = data.name || '未命名';
    this.houses = (data.houses || []).map(h => ({ x: h.x, z: h.z, radius: h.radius || 2.5 }));
    this.walls = (data.walls || []).map(w => ({
      x: w.x, z: w.z, angle: w.angle || 0,
      width: w.width || GAME_CONFIG.WALL_WIDTH,
      thickness: w.thickness || GAME_CONFIG.WALL_THICKNESS
    }));
    this.selectedObject = null;
    this.selectedIndex = -1;
    this.render();
  }

  saveToLocalStorage() {
    const data = this.getMapData();
    const maps = this._getStoredMaps();
    const existing = maps.findIndex(m => m.name === data.name);
    if (existing >= 0) {
      maps[existing] = data;
    } else {
      maps.push(data);
    }
    localStorage.setItem('snownite_maps', JSON.stringify(maps));
    return data.name;
  }

  static deleteFromLocalStorage(name) {
    const maps = MapEditor.getStoredMaps();
    const idx = maps.findIndex(m => m.name === name);
    if (idx >= 0) {
      maps.splice(idx, 1);
      localStorage.setItem('snownite_maps', JSON.stringify(maps));
    }
  }

  _getStoredMaps() {
    try {
      return JSON.parse(localStorage.getItem('snownite_maps') || '[]');
    } catch {
      return [];
    }
  }

  static getStoredMaps() {
    try {
      return JSON.parse(localStorage.getItem('snownite_maps') || '[]');
    } catch {
      return [];
    }
  }

  static async getBundledMaps() {
    try {
      const resp = await fetch('/maps/manifest.json');
      if (!resp.ok) return [];
      return await resp.json();
    } catch {
      return [];
    }
  }

  static async loadBundledMap(filename) {
    const resp = await fetch(`/maps/${filename}`);
    if (!resp.ok) throw new Error('Map not found');
    return await resp.json();
  }

  static loadStoredMap(name) {
    const maps = MapEditor.getStoredMaps();
    return maps.find(m => m.name === name) || null;
  }

  exportAsFile() {
    const data = this.getMapData();
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data.name.replace(/[^a-zA-Z0-9\u4e00-\u9fff]/g, '_')}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  importFromFile() {
    return new Promise((resolve) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.json';
      input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) { resolve(false); return; }
        const reader = new FileReader();
        reader.onload = (ev) => {
          try {
            const data = JSON.parse(ev.target.result);
            this.loadMapData(data);
            resolve(true);
          } catch {
            resolve(false);
          }
        };
        reader.readAsText(file);
      };
      input.click();
    });
  }

  render() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    ctx.fillStyle = '#1a2a3a';
    ctx.fillRect(0, 0, w, h);

    this._drawGrid();

    const halfWorld = this.worldSize / 2;
    const tl = this.worldToScreen(-halfWorld, -halfWorld);
    const br = this.worldToScreen(halfWorld, halfWorld);
    ctx.strokeStyle = '#4a6a8a';
    ctx.lineWidth = 2;
    ctx.strokeRect(tl.x, tl.y, br.x - tl.x, br.y - tl.y);

    this.houses.forEach((house, i) => this._drawHouse(house, i));
    this.walls.forEach((wall, i) => this._drawWall(wall, i));

    this._drawGhost();
    this._drawInfo();
  }

  _drawGrid() {
    const ctx = this.ctx;
    const gridSize = 10;
    const halfWorld = this.worldSize / 2;

    ctx.strokeStyle = '#2a3a4a';
    ctx.lineWidth = 0.5;

    for (let x = -halfWorld; x <= halfWorld; x += gridSize) {
      const s1 = this.worldToScreen(x, -halfWorld);
      const s2 = this.worldToScreen(x, halfWorld);
      ctx.beginPath();
      ctx.moveTo(s1.x, s1.y);
      ctx.lineTo(s2.x, s2.y);
      ctx.stroke();
    }

    for (let z = -halfWorld; z <= halfWorld; z += gridSize) {
      const s1 = this.worldToScreen(-halfWorld, z);
      const s2 = this.worldToScreen(halfWorld, z);
      ctx.beginPath();
      ctx.moveTo(s1.x, s1.y);
      ctx.lineTo(s2.x, s2.y);
      ctx.stroke();
    }

    ctx.strokeStyle = '#3a4a5a';
    ctx.lineWidth = 1;
    const origin = this.worldToScreen(0, 0);
    const s1h = this.worldToScreen(-halfWorld, 0);
    const s2h = this.worldToScreen(halfWorld, 0);
    ctx.beginPath();
    ctx.moveTo(s1h.x, s1h.y);
    ctx.lineTo(s2h.x, s2h.y);
    ctx.stroke();

    const s1v = this.worldToScreen(0, -halfWorld);
    const s2v = this.worldToScreen(0, halfWorld);
    ctx.beginPath();
    ctx.moveTo(s1v.x, s1v.y);
    ctx.lineTo(s2v.x, s2v.y);
    ctx.stroke();
  }

  _drawHouse(house, index) {
    const ctx = this.ctx;
    const s = this.worldToScreen(house.x, house.z);
    const r = house.radius * this.viewScale;
    const isSelected = this.selectedObject === 'house' && this.selectedIndex === index;

    ctx.beginPath();
    ctx.arc(s.x, s.y, r, 0, Math.PI * 2);

    if (isSelected) {
      ctx.fillStyle = 'rgba(100, 200, 255, 0.4)';
      ctx.strokeStyle = '#64c8ff';
      ctx.lineWidth = 2;
    } else {
      ctx.fillStyle = 'rgba(240, 240, 255, 0.3)';
      ctx.strokeStyle = '#c0c0e0';
      ctx.lineWidth = 1.5;
    }
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = isSelected ? '#64c8ff' : '#c0c0e0';
    ctx.font = `${Math.max(10, 12)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🏠', s.x, s.y);
  }

  _drawWall(wall, index) {
    const ctx = this.ctx;
    const isSelected = this.selectedObject === 'wall' && this.selectedIndex === index;

    const cos = Math.cos(wall.angle);
    const sin = Math.sin(wall.angle);
    const hw = wall.width / 2;
    const ht = wall.thickness / 2;

    const corners = [
      { dx: -hw, dz: -ht },
      { dx: hw, dz: -ht },
      { dx: hw, dz: ht },
      { dx: -hw, dz: ht }
    ];

    const screenCorners = corners.map(c => {
      const wx = wall.x + c.dx * cos - c.dz * sin;
      const wz = wall.z + c.dx * sin + c.dz * cos;
      return this.worldToScreen(wx, wz);
    });

    ctx.beginPath();
    ctx.moveTo(screenCorners[0].x, screenCorners[0].y);
    for (let i = 1; i < screenCorners.length; i++) {
      ctx.lineTo(screenCorners[i].x, screenCorners[i].y);
    }
    ctx.closePath();

    if (isSelected) {
      ctx.fillStyle = 'rgba(255, 200, 100, 0.5)';
      ctx.strokeStyle = '#ffc864';
      ctx.lineWidth = 2;
    } else {
      ctx.fillStyle = 'rgba(200, 210, 230, 0.4)';
      ctx.strokeStyle = '#a0b0c0';
      ctx.lineWidth = 1.5;
    }
    ctx.fill();
    ctx.stroke();

    const center = this.worldToScreen(wall.x, wall.z);
    const endX = wall.x + cos * hw;
    const endZ = wall.z + sin * hw;
    const endScreen = this.worldToScreen(endX, endZ);
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.lineTo(endScreen.x, endScreen.y);
    ctx.strokeStyle = isSelected ? '#ffc864' : '#8090a0';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  _drawGhost() {
    if (this.isDragging || this.isPanning) return;
    if (this.tool !== 'wall' && this.tool !== 'house') return;

    const ctx = this.ctx;
    const snapped = this.snapWorld(this.mouseWorldX, this.mouseWorldZ);

    if (this.tool === 'wall') {
      const wall = {
        x: snapped.x,
        z: snapped.z,
        angle: this.wallAngle,
        width: GAME_CONFIG.WALL_WIDTH,
        thickness: GAME_CONFIG.WALL_THICKNESS
      };
      const cos = Math.cos(wall.angle);
      const sin = Math.sin(wall.angle);
      const hw = wall.width / 2;
      const ht = wall.thickness / 2;
      const corners = [
        { dx: -hw, dz: -ht },
        { dx: hw, dz: -ht },
        { dx: hw, dz: ht },
        { dx: -hw, dz: ht }
      ];
      const screenCorners = corners.map(c => {
        const wx = wall.x + c.dx * cos - c.dz * sin;
        const wz = wall.z + c.dx * sin + c.dz * cos;
        return this.worldToScreen(wx, wz);
      });
      ctx.beginPath();
      ctx.moveTo(screenCorners[0].x, screenCorners[0].y);
      for (let i = 1; i < screenCorners.length; i++) {
        ctx.lineTo(screenCorners[i].x, screenCorners[i].y);
      }
      ctx.closePath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.fill();
      ctx.stroke();
      ctx.setLineDash([]);
    } else if (this.tool === 'house') {
      const s = this.worldToScreen(snapped.x, snapped.z);
      const r = this.houseRadius * this.viewScale;
      ctx.beginPath();
      ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.fill();
      ctx.stroke();
      ctx.setLineDash([]);
    }
  }

  _drawInfo() {
    const ctx = this.ctx;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillRect(8, this.canvas.height - 32, 320, 24);
    ctx.fillStyle = '#a0b0c0';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(
      `坐标: (${this.mouseWorldX.toFixed(1)}, ${this.mouseWorldZ.toFixed(1)})  |  墙: ${this.walls.length}  屋: ${this.houses.length}  |  ${this.gridSnap ? '吸附开' : '吸附关'}`,
      16, this.canvas.height - 20
    );
  }

  destroy() {
    this.canvas.removeEventListener('mousedown', this._onMouseDown);
    this.canvas.removeEventListener('mousemove', this._onMouseMove);
    this.canvas.removeEventListener('mouseup', this._onMouseUp);
    this.canvas.removeEventListener('wheel', this._onWheel);
  }
}
