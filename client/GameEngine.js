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
    this.aiPlayers = [];
    
    this.stamina = 1.0;
    this.isSprinting = false;
    
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
    
    this.localPlayer = new Snowman(this.scene, true, 'blue');
    this.localPlayer.setPosition(0, 0, 0);
    this.localPlayer.setRotation(0);
    
    this.thirdPersonCamera = new ThirdPersonCamera(this.camera, this.localPlayer);
    this.thirdPersonCamera.setRotation(0, -0.2);
    
    this.thirdPersonCamera.update(0.016);
    this.camera.position.copy(this.camera.position);
    
    if (!this.isNetworked) {
      this._createAIPlayers();
    }
    
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
  
  _checkPlayerCollision(x, z, excludeSnowman = null) {
    const radius = GAME_CONFIG.PLAYER_RADIUS * 2;
    
    if (this.localPlayer && this.localPlayer !== excludeSnowman) {
      const pos = this.localPlayer.getPosition();
      const dx = x - pos.x;
      const dz = z - pos.z;
      if (dx * dx + dz * dz < radius * radius) {
        return true;
      }
    }
    
    for (const player of this.remotePlayers.values()) {
      if (player.snowman === excludeSnowman) continue;
      const pos = player.snowman.getPosition();
      const dx = x - pos.x;
      const dz = z - pos.z;
      if (dx * dx + dz * dz < radius * radius) {
        return true;
      }
    }
    
    for (const ai of this.aiPlayers) {
      if (ai.snowman === excludeSnowman) continue;
      const pos = ai.snowman.getPosition();
      const dx = x - pos.x;
      const dz = z - pos.z;
      if (dx * dx + dz * dz < radius * radius) {
        return true;
      }
    }
    
    return false;
  }
  
  _createAIPlayers() {
    const aiCount = 5;
    const spawnRadius = 15;
    
    for (let i = 0; i < aiCount; i++) {
      const angle = (i / aiCount) * Math.PI * 2;
      const x = Math.cos(angle) * spawnRadius;
      const z = Math.sin(angle) * spawnRadius;
      
      const snowman = new Snowman(this.scene, false, 'red');
      snowman.setPosition(x, 0, z);
      snowman.setRotation(angle + Math.PI);
      
      const aiData = {
        snowman,
        targetYaw: angle + Math.PI,
        moveTimer: 0,
        moveDirection: new THREE.Vector2(
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2
        ).normalize(),
        state: 'patrol'
      };
      
      this.aiPlayers.push(aiData);
    }
    
    this._updatePlayerCount();
  }
  
  _updateAI(deltaTime) {
    const playerPos = this.localPlayer.getPosition();
    
    for (const ai of this.aiPlayers) {
      ai.moveTimer -= deltaTime;
      
      if (ai.moveTimer <= 0) {
        ai.moveTimer = 2 + Math.random() * 3;
        
        const toPlayer = new THREE.Vector2(
          playerPos.x - ai.snowman.getPosition().x,
          playerPos.z - ai.snowman.getPosition().z
        );
        
        const dist = toPlayer.length();
        
        if (dist < 12 && Math.random() > 0.3) {
          toPlayer.normalize();
          ai.moveDirection.copy(toPlayer);
          ai.targetYaw = Math.atan2(toPlayer.x, toPlayer.y);
          ai.state = 'chase';
        } else {
          ai.moveDirection.set(
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2
          ).normalize();
          ai.targetYaw = Math.atan2(ai.moveDirection.x, ai.moveDirection.y);
          ai.state = 'patrol';
        }
      }
      
      const currentYaw = ai.snowman.getRotation();
      let yawDiff = ai.targetYaw - currentYaw;
      while (yawDiff > Math.PI) yawDiff -= Math.PI * 2;
      while (yawDiff < -Math.PI) yawDiff += Math.PI * 2;
      
      const newYaw = currentYaw + yawDiff * Math.min(1, deltaTime * 3);
      ai.snowman.setRotation(newYaw);
      
      const speed = ai.state === 'chase' ? 3.5 : 2.5;
      const moveAmount = speed * deltaTime;
      
      const currentPos = ai.snowman.getPosition();
      let newX = currentPos.x + ai.moveDirection.x * moveAmount;
      let newZ = currentPos.z + ai.moveDirection.y * moveAmount;
      
      if (!this.mapGenerator.checkCollision(newX, currentPos.z, GAME_CONFIG.PLAYER_RADIUS) &&
          !this._checkPlayerCollision(newX, currentPos.z, ai.snowman)) {
        currentPos.x = newX;
      } else {
        ai.moveDirection.x *= -1;
        ai.moveTimer = 0;
      }
      
      if (!this.mapGenerator.checkCollision(currentPos.x, newZ, GAME_CONFIG.PLAYER_RADIUS) &&
          !this._checkPlayerCollision(currentPos.x, newZ, ai.snowman)) {
        currentPos.z = newZ;
      } else {
        ai.moveDirection.y *= -1;
        ai.moveTimer = 0;
      }
      
      ai.snowman.setPosition(currentPos.x, 0, currentPos.z);
    }
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
    const wantSprint = this.inputSystem.isSprintPressed();
    
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
    moveDirection.add(right.clone().multiplyScalar(movement.left - movement.right));
    
    const isMoving = moveDirection.length() > 0;
    
    if (wantSprint && isMoving && this.stamina > 0) {
      this.isSprinting = true;
      this.stamina = Math.max(0, this.stamina - deltaTime / 3);
    } else {
      this.isSprinting = false;
      if (!wantSprint || !isMoving) {
        this.stamina = Math.min(1, this.stamina + deltaTime / 2);
      }
    }
    
    this._updateStaminaUI();
    
    if (isMoving) {
      moveDirection.normalize();
      
      let speed = GAME_CONFIG.PLAYER_SPEED;
      if (this.isSprinting) {
        speed *= 1.5;
      }
      speed *= deltaTime;
      
      const currentPos = this.localPlayer.getPosition();
      
      let newX = currentPos.x + moveDirection.x * speed;
      let newZ = currentPos.z + moveDirection.y * speed;
      
      if (!this.mapGenerator.checkCollision(newX, currentPos.z, GAME_CONFIG.PLAYER_RADIUS) &&
          !this._checkPlayerCollision(newX, currentPos.z, this.localPlayer)) {
        currentPos.x = newX;
      }
      if (!this.mapGenerator.checkCollision(currentPos.x, newZ, GAME_CONFIG.PLAYER_RADIUS) &&
          !this._checkPlayerCollision(currentPos.x, newZ, this.localPlayer)) {
        currentPos.z = newZ;
      }
      
      this.localPlayer.setPosition(currentPos.x, 0, currentPos.z);
    }
    
    this.localPlayer.updateLookRotation(this.thirdPersonCamera.getPitch());
    
    this.thirdPersonCamera.update(deltaTime);
    
    if (!this.isNetworked) {
      this._updateAI(deltaTime);
    }
    
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
    
    const snowman = new Snowman(this.scene, false, 'red');
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
          snowman: new Snowman(this.scene, false, 'red'),
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
    const count = 1 + this.remotePlayers.size + this.aiPlayers.length;
    document.getElementById('player-count').textContent = `玩家: ${count}`;
  }
  
  _updateStaminaUI() {
    const staminaBar = document.getElementById('stamina-bar');
    const staminaFill = document.getElementById('stamina-fill');
    
    if (staminaBar && staminaFill) {
      staminaBar.style.display = 'block';
      staminaFill.style.width = `${this.stamina * 100}%`;
      
      if (this.isSprinting) {
        staminaFill.style.backgroundColor = '#4a90d9';
      } else if (this.stamina < 0.3) {
        staminaFill.style.backgroundColor = '#d94a4a';
      } else {
        staminaFill.style.backgroundColor = '#2ecc71';
      }
    }
  }
  
  destroy() {
    this.stop();
    
    for (const player of this.remotePlayers.values()) {
      player.snowman.remove();
    }
    this.remotePlayers.clear();
    
    for (const ai of this.aiPlayers) {
      ai.snowman.remove();
    }
    this.aiPlayers = [];
    
    if (this.localPlayer) {
      this.localPlayer.remove();
    }
    
    if (this.renderer) {
      this.renderer.dispose();
    }
  }
}
