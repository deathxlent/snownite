import * as THREE from 'three';
import { GAME_CONFIG } from '../shared/constants.js';

export class ThirdPersonCamera {
  constructor(camera, target) {
    this.camera = camera;
    this.target = target;
    
    this.yaw = 0;
    this.pitch = 0;
    
    this.desiredYaw = 0;
    this.desiredPitch = 0;
    
    this.distance = GAME_CONFIG.CAMERA_DISTANCE;
    this.height = GAME_CONFIG.CAMERA_HEIGHT;
    this.offsetRight = GAME_CONFIG.CAMERA_OFFSET_RIGHT;
    
    this.smoothness = 15;
  }
  
  updateLookInput(deltaYaw, deltaPitch) {
    this.desiredYaw -= deltaYaw;
    this.desiredPitch += deltaPitch;
    this.desiredPitch = Math.max(-1.0, Math.min(0.6, this.desiredPitch));
  }
  
  setRotation(yaw, pitch) {
    this.desiredYaw = yaw;
    this.desiredPitch = pitch || 0;
    this.yaw = yaw;
    this.pitch = pitch || 0;
  }
  
  getYaw() {
    return this.yaw;
  }
  
  getPitch() {
    return this.pitch;
  }
  
  update(deltaTime) {
    const t = Math.min(1, deltaTime * this.smoothness);
    
    this.yaw = THREE.MathUtils.lerp(this.yaw, this.desiredYaw, t);
    this.pitch = THREE.MathUtils.lerp(this.pitch, this.desiredPitch, t);
    
    const targetPos = this.target.getPosition();
    
    const forward = new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    
    const desiredCameraPos = targetPos.clone()
      .sub(forward.clone().multiplyScalar(this.distance))
      .add(right.clone().multiplyScalar(this.offsetRight))
      .add(new THREE.Vector3(0, this.height, 0));
    
    const lookDir = new THREE.Vector3(
      Math.sin(this.yaw) * Math.cos(this.pitch),
      Math.sin(this.pitch),
      Math.cos(this.yaw) * Math.cos(this.pitch)
    );
    
    const lookTarget = targetPos.clone()
      .add(new THREE.Vector3(0, 1.5, 0))
      .add(lookDir.clone().multiplyScalar(10));
    
    this.camera.position.lerp(desiredCameraPos, t);
    this.camera.lookAt(lookTarget);
  }
}
