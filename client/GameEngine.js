import * as THREE from 'three';
import { GAME_CONFIG } from '../shared/constants.js';
import { InputSystem } from './InputSystem.js';
import { MapGenerator } from './MapGenerator.js';
import { Snowman } from './Snowman.js';
import { ThirdPersonCamera } from './ThirdPersonCamera.js';

export class GameEngine {
  constructor(canvas, isNetworked = false, networkClient = null) {
    this.canvas = canvas;
    this.isNetworked = isNetworked;
    this.networkClient = networkClient;
    
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.clock = null;
    
    this.inputSystem = null;
    this.mapGenerator = null;
    this.localPlayer = null;
    this.thirdPersonCamera = null;
    
    this.remotePlayers = new Map();
    
    this.isRunning = false;
    this.animationFrameId = null;
    
    this.lastNetworkUpdate = 0;
    
    this._init();
  }
  
  _init() {
    this.scene = new THREE.Scene();
    
    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );
    
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    this.clock = new THREE.Clock();
    
    this.inputSystem = new InputSystem(this.canvas);
    this.mapGenerator = new MapGenerator(this.scene);
    
    this.localPlayer = new Snowman(this.scene, true);
    this.localPlayer.setPosition(0, 0, 0);
    this.localPlayer.setRotation(0);
    
    this.thirdPersonCamera = new ThirdPersonCamera(this.camera, this.localPlayer);
    this.thirdPersonCamera.setRotation(0, -0.25);
    
    this.thirdPersonCamera.update(0.016);
    this.camera.position.copy(this.camera.position);
    
    window.addEventListener('resize', () => this._onResize());
    
    if (this.isNetworked && this.networkClient) {
      this.networkClient.onPlayerJoin = (playerData) => this._onPlayerJoin(playerData);
      this.networkClient.onPlayerLeave = (playerId) => this._onPlayerLeave(playerId);
      this.networkClient.onWorldState = (state) => this._onWorldState(state);
    }
  }
  
  _onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
  
  start() {
    if (this.isRunning) return;
    
    this.isRunning = true;
    this.clock.start();
    this.inputSystem.showTouchControls(true);
    this.inputSystem.showPointerLockHint(true);
    this._gameLoop();
  }
  
  stop() {
    this.isRunning = false;
    this.inputSystem.showTouchControls(false);
    this.inputSystem.showPointerLockHint(false);
    this.inputSystem.exitPointerLock();
    
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }
  
  _gameLoop() {
    if (!this.isRunning) return;
    
    const deltaTime = this.clock.getDelta();
    
    this._update(deltaTime);
    this._render();
    
    this.animationFrameId = requestAnimationFrame(() => this._gameLoop());
  }
  
  _update(deltaTime) {
    const movement = this.inputSystem.getMovementInput();
    const look = this.inputSystem.getLookInput();
    
    this.thirdPersonCamera.updateLookInput(look.yaw, look.pitch);
    
    const cameraYaw = this.thirdPersonCamera.getYaw();
    
    this.localPlayer.setRotation(cameraYaw);
    
    const forward = new THREE.Vector2(
      Math.sin(cameraYaw),
      Math.cos(cameraYaw)
    );
    const right = new THREE.Vector2(
      Math.cos(cameraYaw),
      -Math.sin(cameraYaw)
    );
    
    const moveDirection = new THREE.Vector2();
    moveDirection.add(forward.clone().multiplyScalar(movement.forward - movement.backward));
    moveDirection.add(right.clone().multiplyScalar(movement.right - movement.left));
    
    if (moveDirection.length() > 0) {
      moveDirection.normalize();
      
      const speed = GAME_CONFIG.PLAYER_SPEED * deltaTime;
      const currentPos = this.localPlayer.getPosition();
      
      let newX = currentPos.x + moveDirection.x * speed;
      let newZ = currentPos.z + moveDirection.y * speed;
      
      if (!this.mapGenerator.checkCollision(newX, currentPos.z, GAME_CONFIG.PLAYER_RADIUS)) {
        currentPos.x = newX;
      }
      if (!this.mapGenerator.checkCollision(currentPos.x, newZ, GAME_CONFIG.PLAYER_RADIUS)) {
        currentPos.z = newZ;
      }
      
      this.localPlayer.setPosition(currentPos.x, 0, currentPos.z);
    }
    
    this.localPlayer.updateLookRotation(this.thirdPersonCamera.getPitch());
    
    this.thirdPersonCamera.update(deltaTime);
    
    if (this.isNetworked && this.networkClient) {
      const now = Date.now();
      if (now - this.lastNetworkUpdate > 1000 / GAME_CONFIG.NETWORK_TICK_RATE) {
        this.lastNetworkUpdate = now;
        this.networkClient.sendPlayerUpdate({
          x: this.localPlayer.getPosition().x,
          z: this.localPlayer.getPosition().z,
          yaw: this.localPlayer.getRotation()
        });
      }
    }
  }
  
  _render() {
    this.renderer.render(this.scene, this.camera);
  }
  
  _onPlayerJoin(playerData) {
    if (playerData.id === this.networkClient.playerId) return;
    
    const snowman = new Snowman(this.scene, false);
    snowman.setPosition(playerData.x || 0, 0, playerData.z || 0);
    snowman.setRotation(playerData.yaw || 0);
    
    this.remotePlayers.set(playerData.id, {
      snowman,
      data: playerData
    });
    
    this._updatePlayerCount();
  }
  
  _onPlayerLeave(playerId) {
    const player = this.remotePlayers.get(playerId);
    if (player) {
      player.snowman.remove();
      this.remotePlayers.delete(playerId);
    }
    this._updatePlayerCount();
  }
  
  _onWorldState(state) {
    for (const playerData of state.players) {
      if (playerData.id === this.networkClient.playerId) continue;
      
      let player = this.remotePlayers.get(playerData.id);
      if (!player) {
        player = {
          snowman: new Snowman(this.scene, false),
          data: playerData
        };
        this.remotePlayers.set(playerData.id, player);
      }
      
      player.snowman.setPosition(playerData.x, 0, playerData.z);
      player.snowman.setRotation(playerData.yaw);
      player.data = playerData;
    }
    
    this._updatePlayerCount();
  }
  
  _updatePlayerCount() {
    const count = 1 + this.remotePlayers.size;
    document.getElementById('player-count').textContent = `玩家: ${count}`;
  }
  
  destroy() {
    this.stop();
    
    for (const player of this.remotePlayers.values()) {
      player.snowman.remove();
    }
    this.remotePlayers.clear();
    
    if (this.localPlayer) {
      this.localPlayer.remove();
    }
    
    if (this.renderer) {
      this.renderer.dispose();
    }
  }
}
