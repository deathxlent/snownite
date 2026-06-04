import * as THREE from 'three';
import { COLORS, GAME_CONFIG, MAP_OBSTACLES } from '../shared/constants.js';
import { GridGround } from './GridGround.js';

export class MapGenerator {
  constructor(scene) {
    this.scene = scene;
    this.colliders = [];
    this.gridGround = new GridGround(scene);
    this._generateTreePositions();
    this._createSnowHouses();
    this._createTrees();
    this._createLighting();
    this._createFog();
  }
  
  _seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }
  
  _generateTreePositions() {
    if (MAP_OBSTACLES.trees.length > 0) return;
    
    const trees = [];
    const treeCount = 30;
    const worldSize = GAME_CONFIG.WORLD_SIZE * 0.8;
    
    let seed = 12345;
    for (let i = 0; i < treeCount; i++) {
      let x, z;
      let valid = true;
      let attempts = 0;
      
      do {
        seed++;
        x = (this._seededRandom(seed) - 0.5) * worldSize;
        seed++;
        z = (this._seededRandom(seed) - 0.5) * worldSize;
        
        valid = true;
        attempts++;
        
        for (const pos of trees) {
          const dist = Math.sqrt((x - pos.x) ** 2 + (z - pos.z) ** 2);
          if (dist < 5) {
            valid = false;
            break;
          }
        }
        
        if (valid) {
          for (const house of MAP_OBSTACLES.houses) {
            const dist = Math.sqrt((x - house.x) ** 2 + (z - house.z) ** 2);
            if (dist < house.radius + 3) {
              valid = false;
              break;
            }
          }
        }
        
        if (valid) {
          const centerDist = Math.sqrt(x * x + z * z);
          if (centerDist < 8) valid = false;
        }
        
      } while (!valid && attempts < 100);
      
      seed++;
      const scale = 0.7 + this._seededRandom(seed) * 0.6;
      trees.push({ x, z, radius: 1.2 * scale, scale });
    }
    
    MAP_OBSTACLES.trees = trees;
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
    
    const window2 = new THREE.Mesh(windowGeometry, windowMaterial);
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
  
  _createTrees() {
    MAP_OBSTACLES.trees.forEach(tree => {
      this._createTree(tree.x, tree.z, tree.scale || 1);
    });
  }
  
  _createTree(x, z, scale = 1) {
    const treeGroup = new THREE.Group();
    treeGroup.position.set(x, 0, z);
    treeGroup.scale.setScalar(scale);
    
    const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.3, 2, 8);
    const trunkMaterial = new THREE.MeshStandardMaterial({
      color: COLORS.TREE_TRUNK,
      roughness: 0.9
    });
    
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = 1;
    trunk.castShadow = true;
    
    const leavesMaterial = new THREE.MeshStandardMaterial({
      color: COLORS.TREE_LEAVES,
      roughness: 0.8
    });
    
    const leaves1 = new THREE.Mesh(
      new THREE.ConeGeometry(1.2, 2, 8),
      leavesMaterial
    );
    leaves1.position.y = 2.5;
    leaves1.castShadow = true;
    
    const leaves2 = new THREE.Mesh(
      new THREE.ConeGeometry(0.9, 1.5, 8),
      leavesMaterial
    );
    leaves2.position.y = 3.5;
    leaves2.castShadow = true;
    
    const leaves3 = new THREE.Mesh(
      new THREE.ConeGeometry(0.6, 1, 8),
      leavesMaterial
    );
    leaves3.position.y = 4.2;
    leaves3.castShadow = true;
    
    const snowTopGeometry = new THREE.ConeGeometry(0.7, 0.3, 8);
    const snowMaterial = new THREE.MeshStandardMaterial({
      color: COLORS.SNOW,
      roughness: 0.6
    });
    
    const snowTop = new THREE.Mesh(snowTopGeometry, snowMaterial);
    snowTop.position.y = 4.7;
    snowTop.castShadow = true;
    
    treeGroup.add(trunk);
    treeGroup.add(leaves1);
    treeGroup.add(leaves2);
    treeGroup.add(leaves3);
    treeGroup.add(snowTop);
    
    this.scene.add(treeGroup);
    this.colliders.push({
      type: 'cylinder',
      x: x,
      z: z,
      radius: 1.2 * scale
    });
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
  
  checkCollision(x, z, radius) {
    const halfWorld = GAME_CONFIG.WORLD_SIZE / 2;
    if (x < -halfWorld + radius || x > halfWorld - radius ||
        z < -halfWorld + radius || z > halfWorld - radius) {
      return true;
    }
    
    for (const collider of this.colliders) {
      const dist = Math.sqrt((x - collider.x) ** 2 + (z - collider.z) ** 2);
      if (dist < collider.radius + radius) {
        return true;
      }
    }
    
    return false;
  }
}
