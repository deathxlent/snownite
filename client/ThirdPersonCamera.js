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
    
    this.smoothness = 8;
  }
  
  updateLookInput(deltaYaw, deltaPitch) {
    this.desiredYaw -= deltaYaw;
    this.desiredPitch += deltaPitch;
    this.desiredPitch = Math.max(-0.8, Math.min(0.5, this.desiredPitch));
  }
  
  setRotation(yaw, pitch) {
    this.desiredYaw = yaw;
    this.desiredPitch = pitch;
    this.yaw = yaw;
    this.pitch = pitch;
  }
  
  getYaw() {
    return this.yaw;
  }
  
  update(deltaTime) {
    const t = Math.min(1, deltaTime * this.smoothness);
    
    this.yaw = THREE.MathUtils.lerp(this.yaw, this.desiredYaw, t);
    this.pitch = THREE.MathUtils.lerp(this.pitch, this.desiredPitch, t);
    
    const targetPos = this.target.getPosition();
    const targetYaw = this.target.getRotation();
    
    const cameraYaw = this.yaw + targetYaw;
    
    const offsetX = Math.sin(cameraYaw) * this.distance + 
                    Math.cos(cameraYaw) * this.offsetRight;
    const offsetZ = Math.cos(cameraYaw) * this.distance - 
                    Math.sin(cameraYaw) * this.offsetRight;
    const offsetY = this.height + Math.sin(this.pitch) * 3;
    
    const desiredCameraPos = new THREE.Vector3(
      targetPos.x - offsetX,
      targetPos.y + offsetY,
      targetPos.z - offsetZ
    );
    
    const lookAtPos = new THREE.Vector3(
      targetPos.x + Math.cos(this.pitch) * Math.sin(cameraYaw) * 5,
      targetPos.y + 2 + Math.sin(this.pitch) * 5,
      targetPos.z + Math.cos(this.pitch) * Math.cos(cameraYaw) * 5
    );
    
    this.camera.position.lerp(desiredCameraPos, t);
    this.camera.lookAt(lookAtPos);
  }
}
