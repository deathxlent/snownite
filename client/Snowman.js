import * as THREE from 'three';
import { COLORS } from '../shared/constants.js';

export class Snowman {
  constructor(scene, isLocalPlayer = false, team = 'blue', showNameLabel = false, playerName = '', isAI = false) {
    this.scene = scene;
    this.isLocalPlayer = isLocalPlayer;
    this.team = team;
    this.isAI = isAI;
    this.group = new THREE.Group();
    this.yaw = 0;
    this.pitch = 0;
    this.isHit = false;
    this.hitTimer = 0;
    this.hitDuration = 0.3;
    this.camera = null;
    
    this._createBody();
    this._createHead();
    this._createFace();
    this._createArms();
    this._createScarf();
    this._createHat();
    this._createIndicator(showNameLabel, playerName, isAI);
    
    scene.add(this.group);
    
    this.collider = {
      type: 'cylinder',
      x: 0,
      z: 0,
      radius: 0.75,
      snowman: this
    };
  }
  
  _createBody() {
    const bottomGeometry = new THREE.SphereGeometry(0.75, 32, 32);
    const middleGeometry = new THREE.SphereGeometry(0.58, 32, 32);
    const topGeometry = new THREE.SphereGeometry(0.45, 32, 32);
    
    const snowMaterial = new THREE.MeshStandardMaterial({
      color: COLORS.SNOW,
      roughness: 0.85,
      metalness: 0.05
    });
    
    this.bottomSphere = new THREE.Mesh(bottomGeometry, snowMaterial);
    this.bottomSphere.position.y = 0.75;
    this.bottomSphere.castShadow = true;
    this.bottomSphere.receiveShadow = true;
    
    this.middleSphere = new THREE.Mesh(middleGeometry, snowMaterial);
    this.middleSphere.position.y = 1.7;
    this.middleSphere.castShadow = true;
    this.middleSphere.receiveShadow = true;
    
    this.headSphere = new THREE.Mesh(topGeometry, snowMaterial);
    this.headSphere.position.y = 2.55;
    this.headSphere.castShadow = true;
    this.headSphere.receiveShadow = true;
    
    this.group.add(this.bottomSphere);
    this.group.add(this.middleSphere);
    this.group.add(this.headSphere);
    
    const buttonGeometry = new THREE.SphereGeometry(0.06, 16, 16);
    const buttonMaterial = new THREE.MeshStandardMaterial({
      color: COLORS.COAL,
      roughness: 0.3
    });
    
    for (let i = 0; i < 3; i++) {
      const button = new THREE.Mesh(buttonGeometry, buttonMaterial);
      button.position.set(0, 1.75 - i * 0.22, 0.52);
      this.group.add(button);
    }
  }
  
  _createHead() {
    this.headGroup = new THREE.Group();
    this.headGroup.position.copy(this.headSphere.position);
    this.group.add(this.headGroup);
  }
  
  _createFace() {
    const eyeGeometry = new THREE.SphereGeometry(0.08, 16, 16);
    const eyeMaterial = new THREE.MeshStandardMaterial({
      color: COLORS.COAL,
      roughness: 0.3
    });
    
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.15, 2.65, 0.38);
    
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.15, 2.65, 0.38);
    
    const noseGeometry = new THREE.ConeGeometry(0.08, 0.4, 16);
    const noseMaterial = new THREE.MeshStandardMaterial({
      color: COLORS.CARROT,
      roughness: 0.6
    });
    
    this.nose = new THREE.Mesh(noseGeometry, noseMaterial);
    this.nose.position.set(0, 2.5, 0.55);
    this.nose.rotation.x = Math.PI / 2;
    
    const mouthGeometry = new THREE.TorusGeometry(0.1, 0.03, 8, 16, Math.PI);
    const mouthMaterial = new THREE.MeshStandardMaterial({
      color: COLORS.COAL,
      roughness: 0.3
    });
    
    const mouth = new THREE.Mesh(mouthGeometry, mouthMaterial);
    mouth.position.set(0, 2.35, 0.4);
    mouth.rotation.x = Math.PI;
    mouth.rotation.z = Math.PI;
    
    this.group.add(leftEye);
    this.group.add(rightEye);
    this.group.add(this.nose);
    this.group.add(mouth);
  }
  
  _createArms() {
    const armGeometry = new THREE.CylinderGeometry(0.035, 0.025, 1.1, 8);
    const armMaterial = new THREE.MeshStandardMaterial({
      color: COLORS.TREE_TRUNK,
      roughness: 0.9
    });
    
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-0.55, 1.7, 0);
    leftArm.rotation.z = Math.PI / 5;
    leftArm.castShadow = true;
    
    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(0.55, 1.7, 0);
    rightArm.rotation.z = -Math.PI / 5;
    rightArm.castShadow = true;
    
    const handGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const handMaterial = new THREE.MeshStandardMaterial({
      color: 0x5a3d2b,
      roughness: 0.8
    });
    
    const leftHand = new THREE.Mesh(handGeometry, handMaterial);
    leftHand.position.set(-0.75, 1.45, 0);
    
    const rightHand = new THREE.Mesh(handGeometry, handMaterial);
    rightHand.position.set(0.75, 1.45, 0);
    
    this.group.add(leftArm);
    this.group.add(rightArm);
    this.group.add(leftHand);
    this.group.add(rightHand);
  }
  
  _createScarf() {
    let scarfColor;
    if (this.isAI) {
      scarfColor = this.team === 'blue' ? 0x1e3a5f : 0x8B6914;
    } else {
      scarfColor = this.team === 'blue' ? 0x4a90d9 : 0xd94a4a;
    }
    
    const scarfGeometry = new THREE.TorusGeometry(0.45, 0.08, 16, 32);
    const scarfMaterial = new THREE.MeshStandardMaterial({
      color: scarfColor,
      roughness: 0.7,
      metalness: 0.1
    });
    
    const scarf = new THREE.Mesh(scarfGeometry, scarfMaterial);
    scarf.position.set(0, 2.1, 0);
    scarf.rotation.x = Math.PI / 2;
    scarf.castShadow = true;
    
    const tailGeometry = new THREE.BoxGeometry(0.15, 0.4, 0.08);
    const scarfTail = new THREE.Mesh(tailGeometry, scarfMaterial);
    scarfTail.position.set(0.15, 1.85, 0.4);
    scarfTail.rotation.z = -0.3;
    scarfTail.castShadow = true;
    
    this.group.add(scarf);
    this.group.add(scarfTail);
  }
  
  _createHat() {
    const hatBrimGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.05, 32);
    const hatTopGeometry = new THREE.CylinderGeometry(0.28, 0.28, 0.45, 32);
    
    const hatColor = 0x2c3e50;
    let ribbonColor;
    if (this.isAI) {
      ribbonColor = this.team === 'blue' ? 0x1e3a5f : 0x8B6914;
    } else {
      ribbonColor = this.team === 'blue' ? 0x4a90d9 : 0xd94a4a;
    }
    
    const hatMaterial = new THREE.MeshStandardMaterial({
      color: hatColor,
      roughness: 0.5,
      metalness: 0.1
    });
    
    const ribbonMaterial = new THREE.MeshStandardMaterial({
      color: ribbonColor,
      roughness: 0.6,
      metalness: 0.2
    });
    
    const hatBrim = new THREE.Mesh(hatBrimGeometry, hatMaterial);
    hatBrim.position.y = 2.9;
    hatBrim.castShadow = true;
    
    const hatTop = new THREE.Mesh(hatTopGeometry, hatMaterial);
    hatTop.position.y = 3.15;
    hatTop.castShadow = true;
    
    const ribbonGeometry = new THREE.CylinderGeometry(0.29, 0.29, 0.08, 32);
    const ribbon = new THREE.Mesh(ribbonGeometry, ribbonMaterial);
    ribbon.position.y = 2.95;
    ribbon.castShadow = true;
    
    this.group.add(hatBrim);
    this.group.add(hatTop);
    this.group.add(ribbon);
  }
  
  setPosition(x, y, z) {
    this.group.position.set(x, y, z);
  }
  
  getPosition() {
    return this.group.position.clone();
  }
  
  setRotation(yaw) {
    this.yaw = yaw;
    this.group.rotation.y = yaw;
  }
  
  getRotation() {
    return this.yaw;
  }
  
  updateLookRotation(pitch) {
    this.pitch = Math.max(-0.5, Math.min(0.5, pitch));
    this.headGroup.rotation.x = -this.pitch * 0.5;
  }
  
  setCamera(camera) {
    this.camera = camera;
  }
  
  hit() {
    this.isHit = true;
    this.hitTimer = this.hitDuration;
    
    const meshes = [this.bottomSphere, this.middleSphere, this.headSphere];
    meshes.forEach(mesh => {
      if (mesh.material) {
        mesh.material.emissive = new THREE.Color(0xff6b6b);
        mesh.material.emissiveIntensity = 0.5;
      }
    });
  }
  
  _createIndicator(showNameLabel, playerName, isAI) {
    this.indicatorGroup = new THREE.Group();
    this.indicatorGroup.position.y = 4.0;
    
    if (isAI) {
      const cubeGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
      const cubeColor = this.team === 'blue' ? 0x1e3a5f : 0x8B6914;
      const cubeMaterial = new THREE.MeshStandardMaterial({
        color: cubeColor,
        roughness: 0.7,
        metalness: 0.1
      });
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.y = 0.15;
      this.indicatorGroup.add(cube);
    } else if (showNameLabel) {
      const shape = new THREE.Shape();
      shape.moveTo(0, -0.05);
      shape.lineTo(-0.2, 0.35);
      shape.lineTo(0.2, 0.35);
      shape.lineTo(0, -0.05);
      
      const triGeometry = new THREE.ShapeGeometry(shape);
      const triMaterial = new THREE.MeshBasicMaterial({
        color: 0x8ab4f8,
        side: THREE.DoubleSide
      });
      const triangle = new THREE.Mesh(triGeometry, triMaterial);
      triangle.position.y = 0.2;
      this.indicatorGroup.add(triangle);
      
      if (playerName) {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgba(138, 180, 248, 0.95)';
        ctx.fillRect(0, 0, 512, 64);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 32px Microsoft YaHei, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(playerName, 256, 32);
        
        const texture = new THREE.CanvasTexture(canvas);
        const labelGeometry = new THREE.PlaneGeometry(3.2, 0.4);
        const labelMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          side: THREE.DoubleSide
        });
        const label = new THREE.Mesh(labelGeometry, labelMaterial);
        label.position.y = -0.2;
        this.indicatorGroup.add(label);
      }
    }
    
    this.group.add(this.indicatorGroup);
  }
  
  update(deltaTime) {
    this.collider.x = this.group.position.x;
    this.collider.z = this.group.position.z;
    
    if (this.indicatorGroup && this.camera) {
      this.indicatorGroup.quaternion.copy(this.camera.quaternion);
      const flip = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI);
      this.indicatorGroup.quaternion.multiply(flip);
    }
    
    if (this.isHit) {
      this.hitTimer -= deltaTime;
      if (this.hitTimer <= 0) {
        this.isHit = false;
        const meshes = [this.bottomSphere, this.middleSphere, this.headSphere];
        meshes.forEach(mesh => {
          if (mesh.material) {
            mesh.material.emissiveIntensity = 0;
          }
        });
      }
    }
  }
  
  updateNameLabel(playerName) {
    if (!this.indicatorGroup) return;
    
    const oldLabel = this.indicatorGroup.children.find(child => child.geometry && child.geometry.type === 'PlaneGeometry');
    if (oldLabel) {
      this.indicatorGroup.remove(oldLabel);
      if (oldLabel.material && oldLabel.material.map) {
        oldLabel.material.map.dispose();
      }
    }
    
    if (playerName) {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'rgba(138, 180, 248, 0.95)';
      ctx.fillRect(0, 0, 512, 64);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 32px Microsoft YaHei, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(playerName, 256, 32);
      
      const texture = new THREE.CanvasTexture(canvas);
      const labelGeometry = new THREE.PlaneGeometry(3.2, 0.4);
      const labelMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide
      });
      const label = new THREE.Mesh(labelGeometry, labelMaterial);
      label.position.y = -0.2;
      this.indicatorGroup.add(label);
    }
  }
  
  remove() {
    this.scene.remove(this.group);
  }
}
