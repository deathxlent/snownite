import * as THREE from 'three';
import { COLORS } from '../shared/constants.js';

export class Snowman {
  constructor(scene, isLocalPlayer = false) {
    this.scene = scene;
    this.isLocalPlayer = isLocalPlayer;
    this.group = new THREE.Group();
    this.yaw = 0;
    this.pitch = 0;
    
    this._createBody();
    this._createHead();
    this._createFace();
    this._createArms();
    
    if (isLocalPlayer) {
      this._createHat();
    }
    
    scene.add(this.group);
  }
  
  _createBody() {
    const bottomGeometry = new THREE.SphereGeometry(0.8, 32, 32);
    const middleGeometry = new THREE.SphereGeometry(0.6, 32, 32);
    const topGeometry = new THREE.SphereGeometry(0.4, 32, 32);
    
    const snowMaterial = new THREE.MeshStandardMaterial({
      color: COLORS.SNOW,
      roughness: 0.8,
      metalness: 0.1
    });
    
    this.bottomSphere = new THREE.Mesh(bottomGeometry, snowMaterial);
    this.bottomSphere.position.y = 0.8;
    this.bottomSphere.castShadow = true;
    this.bottomSphere.receiveShadow = true;
    
    this.middleSphere = new THREE.Mesh(middleGeometry, snowMaterial);
    this.middleSphere.position.y = 1.8;
    this.middleSphere.castShadow = true;
    this.middleSphere.receiveShadow = true;
    
    this.headSphere = new THREE.Mesh(topGeometry, snowMaterial);
    this.headSphere.position.y = 2.6;
    this.headSphere.castShadow = true;
    this.headSphere.receiveShadow = true;
    
    this.group.add(this.bottomSphere);
    this.group.add(this.middleSphere);
    this.group.add(this.headSphere);
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
    leftEye.position.set(-0.15, 2.7, 0.32);
    
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.15, 2.7, 0.32);
    
    const noseGeometry = new THREE.ConeGeometry(0.08, 0.4, 16);
    const noseMaterial = new THREE.MeshStandardMaterial({
      color: COLORS.CARROT,
      roughness: 0.6
    });
    
    this.nose = new THREE.Mesh(noseGeometry, noseMaterial);
    this.nose.position.set(0, 2.55, 0.5);
    this.nose.rotation.x = Math.PI / 2;
    
    const buttonGeometry = new THREE.SphereGeometry(0.06, 16, 16);
    const buttonMaterial = new THREE.MeshStandardMaterial({
      color: COLORS.COAL,
      roughness: 0.3
    });
    
    for (let i = 0; i < 3; i++) {
      const button = new THREE.Mesh(buttonGeometry, buttonMaterial);
      button.position.set(0, 1.8 - i * 0.25, 0.55);
      this.group.add(button);
    }
    
    this.group.add(leftEye);
    this.group.add(rightEye);
    this.group.add(this.nose);
  }
  
  _createArms() {
    const armGeometry = new THREE.CylinderGeometry(0.03, 0.03, 1.2, 8);
    const armMaterial = new THREE.MeshStandardMaterial({
      color: COLORS.TREE_TRUNK,
      roughness: 0.9
    });
    
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-0.6, 1.8, 0);
    leftArm.rotation.z = Math.PI / 6;
    leftArm.castShadow = true;
    
    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(0.6, 1.8, 0);
    rightArm.rotation.z = -Math.PI / 6;
    rightArm.castShadow = true;
    
    this.group.add(leftArm);
    this.group.add(rightArm);
  }
  
  _createHat() {
    const hatBrimGeometry = new THREE.CylinderGeometry(0.35, 0.35, 0.05, 32);
    const hatTopGeometry = new THREE.CylinderGeometry(0.25, 0.25, 0.4, 32);
    const hatMaterial = new THREE.MeshStandardMaterial({
      color: 0x333366,
      roughness: 0.5
    });
    
    const hatBrim = new THREE.Mesh(hatBrimGeometry, hatMaterial);
    hatBrim.position.y = 2.95;
    hatBrim.castShadow = true;
    
    const hatTop = new THREE.Mesh(hatTopGeometry, hatMaterial);
    hatTop.position.y = 3.175;
    hatTop.castShadow = true;
    
    this.group.add(hatBrim);
    this.group.add(hatTop);
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
  
  remove() {
    this.scene.remove(this.group);
  }
}
