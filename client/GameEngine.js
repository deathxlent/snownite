import * as THREE from 'three';
import { GAME_CONFIG } from '../shared/constants.js';
import { InputSystem } from './InputSystem.js';
import { MapGenerator } from './MapGenerator.js';
import { Snowman } from './Snowman.js';
import { ThirdPersonCamera } from './ThirdPersonCamera.js';
import { SnowballManager } from './SnowballManager.js';
import { SnowballThrower } from './SnowballThrower.js';
import { SnowballProjectile } from './SnowballProjectile.js';

export class GameEngine {
  constructor(canvas, isNetworked = false, networkClient = null, playerName = '') {
    this.canvas = canvas;
    this.isNetworked = isNetworked;
    this.networkClient = networkClient;
    this.playerName = playerName;
    
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.clock = null;
    
    this.inputSystem = null;
    this.mapGenerator = null;
    this.localPlayer = null;
    this.thirdPersonCamera = null;
    this.localTeam = 'blue';
    
    this.remotePlayers = new Map();
    this.aiPlayers = [];
    
    this.stamina = 1.0;
    this.isSprinting = false;
    this.isGathering = false;
    
    this.snowballManager = null;
    this.snowballThrower = null;
    
    this.isRunning = false;
    this.animationFrameId = null;
    
    this.lastNetworkUpdate = 0;
    
    if (isNetworked && networkClient) {
      this.localTeam = networkClient.playerTeam || 'blue';
    }
    
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
    this.snowballManager = new SnowballManager(this.mapGenerator.gridGround, this.mapGenerator);
    this.snowballThrower = new SnowballThrower(this.scene, this.mapGenerator.gridGround, this.mapGenerator);
    
    this.localPlayer = new Snowman(this.scene, true, this.localTeam, true, this.playerName, false, this.localTeam);
    this.localPlayer.setCamera(this.camera);
    if (this.isNetworked && this.networkClient) {
      this.localPlayer.setPosition(this.networkClient.playerSpawnX, 0, this.networkClient.playerSpawnZ);
      this.localPlayer.setRotation(this.networkClient.playerSpawnYaw);
    } else {
      this.localPlayer.setPosition(0, 0, 0);
      this.localPlayer.setRotation(0);
    }
    
    this.thirdPersonCamera = new ThirdPersonCamera(this.camera, this.localPlayer);
    this.thirdPersonCamera.setRotation(0, -0.2);
    
    this.thirdPersonCamera.update(0.016);
    this.camera.position.copy(this.camera.position);
    
    this._createAIPlayers();
    
    this.snowballThrower.addCollider(this.localPlayer.collider);
    
    window.addEventListener('resize', () => this._onResize());
    
    if (this.isNetworked && this.networkClient) {
      this.networkClient.onPlayerJoin = (playerData) => this._onPlayerJoin(playerData);
      this.networkClient.onPlayerLeave = (playerId) => this._onPlayerLeave(playerId);
      this.networkClient.onWorldState = (state) => this._onWorldState(state);
      this.networkClient.onPlayerNameUpdate = (data) => this._onPlayerNameUpdate(data);
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
  
  _checkAISpawnCollision(x, z, existingAIs) {
    const minDistance = 3;
    for (const ai of existingAIs) {
      const pos = ai.snowman.getPosition();
      const dx = x - pos.x;
      const dz = z - pos.z;
      if (dx * dx + dz * dz < minDistance * minDistance) {
        return true;
      }
    }
    
    if (this.localPlayer) {
      const playerPos = this.localPlayer.getPosition();
      const dx = x - playerPos.x;
      const dz = z - playerPos.z;
      if (dx * dx + dz * dz < minDistance * minDistance) {
        return true;
      }
    }
    
    return false;
  }
  
  _getAISpawnPosition(team, existingAIs) {
    const spawnDistance = 25;
    const maxAttempts = 50;
    
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      let x, z;
      if (team === 'blue') {
        x = -spawnDistance + (Math.random() - 0.5) * 10;
        z = (Math.random() - 0.5) * 15;
      } else {
        x = spawnDistance + (Math.random() - 0.5) * 10;
        z = (Math.random() - 0.5) * 15;
      }
      
      if (!this._checkAISpawnCollision(x, z, existingAIs) &&
          !this.mapGenerator.checkCollision(x, z, GAME_CONFIG.PLAYER_RADIUS)) {
        return { x, z };
      }
    }
    
    const angle = team === 'blue' ? 0 : Math.PI;
    return {
      x: Math.cos(angle) * spawnDistance,
      z: Math.sin(angle) * spawnDistance
    };
  }
  
  _createAIPlayers() {
    const aiCountPerTeam = 5;
    
    const teams = ['blue', 'red'];
    
    for (let teamIndex = 0; teamIndex < 2; teamIndex++) {
      const team = teams[teamIndex];
      const teamIsLocal = team === this.localTeam;
      
      for (let i = 0; i < aiCountPerTeam; i++) {
        const spawnPos = this._getAISpawnPosition(team, this.aiPlayers);
        const angle = team === 'blue' ? 0 : Math.PI;
        
        const snowman = new Snowman(this.scene, false, team, teamIsLocal, '', true, this.localTeam);
        snowman.setCamera(this.camera);
        snowman.setPosition(spawnPos.x, 0, spawnPos.z);
        snowman.setRotation(angle);
        
        const aiData = {
          snowman,
          team,
          isAlly: teamIsLocal,
          targetYaw: angle + Math.PI,
          moveTimer: 0,
          moveDirection: new THREE.Vector2(
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2
          ).normalize(),
          state: 'patrol',
          snowballCount: 5,
          maxSnowballs: 20,
          gatherTimer: 0,
          gatherDuration: 2.0,
          isGathering: false,
          throwCooldown: 0,
          gatherCooldown: 0
        };
        
        this.aiPlayers.push(aiData);
        this.snowballThrower.addCollider(snowman.collider);
      }
    }
    
    this._updatePlayerCount();
  }
  
  _updateAI(deltaTime) {
    for (const ai of this.aiPlayers) {
      ai.snowman.snowballCount = ai.snowballCount;
      
      if (ai.snowman.isDead) {
        ai.snowman.update(deltaTime);
        if (ai.snowman.isRespawning && ai.snowman.respawnTimer <= 0) {
          const spawnPos = this._getRandomSpawnPosition();
          ai.snowman.respawn(spawnPos.x, spawnPos.z);
          ai.snowballCount = 5;
        }
        continue;
      }
      
      if (ai.throwCooldown > 0) ai.throwCooldown -= deltaTime;
      if (ai.gatherCooldown > 0) ai.gatherCooldown -= deltaTime;
      
      if (ai.isGathering) {
        ai.gatherTimer += deltaTime;
        if (ai.gatherTimer >= ai.gatherDuration) {
          ai.isGathering = false;
          ai.gatherTimer = 0;
          if (ai.snowballCount < ai.maxSnowballs) {
            ai.snowballCount++;
          }
          ai.gatherCooldown = 0.5 + Math.random() * 1.5;
        }
        ai.snowman.update(deltaTime);
        continue;
      }
      
      if (ai.gatherCooldown <= 0 && ai.snowballCount < ai.maxSnowballs && Math.random() < 0.01) {
        ai.isGathering = true;
        ai.gatherTimer = 0;
        ai.snowman.update(deltaTime);
        continue;
      }
      
      if (ai.snowballCount > 0 && ai.throwCooldown <= 0 && Math.random() < 0.008) {
        const aiPos = ai.snowman.getPosition();
        const aiYaw = ai.snowman.getRotation();
        const startPos = new THREE.Vector3(
          aiPos.x + Math.sin(aiYaw) * 1.2,
          2.0,
          aiPos.z + Math.cos(aiYaw) * 1.2
        );
        
        const defaultPitch = Math.PI / 4.5;
        const speed = GAME_CONFIG.THROW_SPEED;
        const velocity = new THREE.Vector3(
          Math.sin(aiYaw) * Math.cos(defaultPitch) * speed,
          Math.sin(defaultPitch) * speed,
          Math.cos(aiYaw) * Math.cos(defaultPitch) * speed
        );
        
        const projectile = new SnowballProjectile(
          this.scene,
          startPos,
          velocity,
          false,
          (collider, hitResult) => this._onAIHit(collider, hitResult),
          (x, z) => this._onAIGroundHit(x, z),
          ai.snowman
        );
        this.snowballThrower.projectiles.push(projectile);
        ai.snowballCount--;
        ai.throwCooldown = 1.0 + Math.random() * 2.0;
      }
      
      ai.moveTimer -= deltaTime;
      
      if (ai.moveTimer <= 0) {
        ai.moveTimer = 2 + Math.random() * 3;
        
        const aiPos = ai.snowman.getPosition();
        let nearestEnemyDist = Infinity;
        let nearestEnemyDir = null;
        
        if (ai.team !== this.localTeam) {
          const playerPos = this.localPlayer.getPosition();
          const dx = playerPos.x - aiPos.x;
          const dz = playerPos.z - aiPos.z;
          const dist = Math.sqrt(dx * dx + dz * dz);
          if (dist < nearestEnemyDist) {
            nearestEnemyDist = dist;
            nearestEnemyDir = new THREE.Vector2(dx, dz);
          }
        }
        
        for (const otherAI of this.aiPlayers) {
          if (otherAI === ai || otherAI.team === ai.team) continue;
          const otherPos = otherAI.snowman.getPosition();
          const dx = otherPos.x - aiPos.x;
          const dz = otherPos.z - aiPos.z;
          const dist = Math.sqrt(dx * dx + dz * dz);
          if (dist < nearestEnemyDist) {
            nearestEnemyDist = dist;
            nearestEnemyDir = new THREE.Vector2(dx, dz);
          }
        }
        
        for (const remotePlayer of this.remotePlayers.values()) {
          const playerData = remotePlayer.data;
          if (!playerData || playerData.team === ai.team) continue;
          const dx = (playerData.x || 0) - aiPos.x;
          const dz = (playerData.z || 0) - aiPos.z;
          const dist = Math.sqrt(dx * dx + dz * dz);
          if (dist < nearestEnemyDist) {
            nearestEnemyDist = dist;
            nearestEnemyDir = new THREE.Vector2(dx, dz);
          }
        }
        
        if (nearestEnemyDir && nearestEnemyDist < 15 && Math.random() > 0.3) {
          nearestEnemyDir.normalize();
          ai.moveDirection.copy(nearestEnemyDir);
          ai.targetYaw = Math.atan2(nearestEnemyDir.x, nearestEnemyDir.y);
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
      
      const baseSpeed = ai.state === 'chase' ? 3.5 : 2.5;
      const speed = baseSpeed * ai.snowman.speedMultiplier;
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
      ai.snowman.update(deltaTime);
      
      if (ai.snowman.knockbackActive) {
        const kb = ai.snowman.knockbackVelocity;
        const aiPos = ai.snowman.getPosition();
        let aiNewX = aiPos.x + kb.x * deltaTime;
        let aiNewZ = aiPos.z + kb.z * deltaTime;
        
        if (!this.mapGenerator.checkCollision(aiNewX, aiPos.z, GAME_CONFIG.PLAYER_RADIUS)) {
          aiPos.x = aiNewX;
        } else {
          kb.x = 0;
        }
        if (!this.mapGenerator.checkCollision(aiPos.x, aiNewZ, GAME_CONFIG.PLAYER_RADIUS)) {
          aiPos.z = aiNewZ;
        } else {
          kb.z = 0;
        }
        
        ai.snowman.setPosition(aiPos.x, 0, aiPos.z);
      }
    }
  }
  
  _onAIHit(collider, hitResult) {
    if (collider.snowman) {
      if (hitResult && typeof hitResult === 'object') {
        const { isHeadshot, isCharged, hitDirectionX, hitDirectionZ } = hitResult;
        let damage;
        if (isCharged) {
          damage = isHeadshot ? GAME_CONFIG.CHARGED_SNOWBALL_HEADSHOT_DAMAGE : GAME_CONFIG.CHARGED_SNOWBALL_DAMAGE;
        } else {
          damage = isHeadshot ? GAME_CONFIG.SNOWBALL_HEADSHOT_DAMAGE : GAME_CONFIG.SNOWBALL_DAMAGE;
        }
        collider.snowman.takeDamage(damage, isHeadshot);
        if (isCharged) {
          collider.snowman.applyKnockback(hitDirectionX, hitDirectionZ, GAME_CONFIG.CHARGED_KNOCKBACK_DISTANCE);
        }
      } else {
        collider.snowman.takeDamage(GAME_CONFIG.SNOWBALL_DAMAGE, false);
      }
      this._updateHPUI();
    }
  }
  
  _onAIGroundHit(x, z) {
    if (this.snowballThrower.gridGround) {
      const gridGround = this.snowballThrower.gridGround;
      const currentSU = gridGround.getSU(x, z);
      const newSU = Math.min(GAME_CONFIG.MAX_SNOW_UNIT, currentSU + GAME_CONFIG.THROW_SNOW_GROUND_BONUS);
      gridGround.setSU(x, z, newSU);
    }
  }
  
  start() {
    if (this.isRunning) return;
    
    this.isRunning = true;
    this.clock.start();
    this.inputSystem.showTouchControls(true);
    this.inputSystem.showPointerLockHint(true);
    this.snowballManager._updateUI();
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
    const wantGather = this.inputSystem.isGatherPressed();
    const wantThrow = this.inputSystem.isThrowPressed();
    const chargeTime = this.inputSystem.getThrowChargeTime();
    
    const playerPos = this.localPlayer.getPosition();
    const playerYaw = this.thirdPersonCamera.getYaw();
    const playerPitch = this.thirdPersonCamera.getPitch();
    
    this.snowballManager.setHoldActive(wantGather);
    this.isGathering = this.snowballManager.isGathering || (wantGather && this.snowballManager.snowballCount < this.snowballManager.maxSnowballs);
    
    this.localPlayer.snowballCount = this.snowballManager.snowballCount;
    
    this.snowballManager.update(deltaTime, playerPos.x, playerPos.z, playerYaw);
    this.snowballManager.updateGatherUI();
    
    const canThrow = !wantGather && this.snowballManager.snowballCount > 0;
    
    this.snowballThrower.update(
      deltaTime,
      playerPos,
      playerYaw,
      playerPitch,
      canThrow ? wantThrow : false,
      chargeTime,
      this.snowballManager,
      this.localPlayer
    );
    
    if (!canThrow && wantThrow) {
      this.inputSystem.resetThrowCharge();
    }
    
    this.thirdPersonCamera.updateLookInput(look.yaw, look.pitch);
    
    const cameraYaw = this.thirdPersonCamera.getYaw();
    
    this.localPlayer.setRotation(cameraYaw);
    this.localPlayer.update(deltaTime);
    
    if (this.localPlayer.isDead) {
      this._updateRespawnUI();
      if (this.localPlayer.isRespawning && this.localPlayer.respawnTimer <= 0) {
        this._respawnPlayer();
      }
      return;
    }
    
    if (this.localPlayer.knockbackActive) {
      const kb = this.localPlayer.knockbackVelocity;
      const currentPos = this.localPlayer.getPosition();
      let newX = currentPos.x + kb.x * deltaTime;
      let newZ = currentPos.z + kb.z * deltaTime;
      
      if (!this.mapGenerator.checkCollision(newX, currentPos.z, GAME_CONFIG.PLAYER_RADIUS)) {
        currentPos.x = newX;
      } else {
        kb.x = 0;
      }
      if (!this.mapGenerator.checkCollision(currentPos.x, newZ, GAME_CONFIG.PLAYER_RADIUS)) {
        currentPos.z = newZ;
      } else {
        kb.z = 0;
      }
      
      this.localPlayer.setPosition(currentPos.x, 0, currentPos.z);
    }
    
    this._updateHPUI();
    
    const forward = new THREE.Vector2(
      Math.sin(cameraYaw),
      Math.cos(cameraYaw)
    );
    const right = new THREE.Vector2(
      Math.cos(cameraYaw),
      -Math.sin(cameraYaw)
    );
    
    const moveDirection = new THREE.Vector2();
    if (!this.isGathering) {
      moveDirection.add(forward.clone().multiplyScalar(movement.forward - movement.backward));
      moveDirection.add(right.clone().multiplyScalar(movement.left - movement.right));
    }
    
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
      
      let speed = GAME_CONFIG.PLAYER_SPEED * this.localPlayer.speedMultiplier;
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
    
    this._updateAI(deltaTime);
    this._updateSpeedUI();
    
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
    
    const playerTeam = playerData.team || 'red';
    const isTeammate = playerTeam === this.localTeam;
    const playerName = playerData.name || '';
    const snowman = new Snowman(this.scene, false, playerTeam, isTeammate, playerName, false, this.localTeam);
    snowman.setCamera(this.camera);
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
        const playerTeam = playerData.team || 'red';
        const isTeammate = playerTeam === this.localTeam;
        const playerName = playerData.name || '';
        const snowman = new Snowman(this.scene, false, playerTeam, isTeammate, playerName, false, this.localTeam);
        snowman.setCamera(this.camera);
        player = {
          snowman: snowman,
          data: playerData
        };
        this.remotePlayers.set(playerData.id, player);
      } else {
        if (playerData.name && player.data && playerData.name !== player.data.name) {
          player.snowman.updateNameLabel(playerData.name);
        }
      }
      
      player.snowman.setPosition(playerData.x, 0, playerData.z);
      player.snowman.setRotation(playerData.yaw);
      player.data = playerData;
    }
    
    this._updatePlayerCount();
  }
  
  _onPlayerNameUpdate(data) {
    const player = this.remotePlayers.get(data.id);
    if (player && data.name) {
      player.snowman.updateNameLabel(data.name);
      if (player.data) {
        player.data.name = data.name;
      }
    }
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
  
  _updateHPUI() {
    if (!this.localPlayer) return;
    
    let hpBar = document.getElementById('hp-bar');
    let hpFill = document.getElementById('hp-fill');
    let hpText = document.getElementById('hp-text');
    
    if (!hpBar) {
      const uiContainer = document.getElementById('game-ui');
      if (!uiContainer) return;
      
      hpBar = document.createElement('div');
      hpBar.id = 'hp-bar';
      hpBar.style.cssText = 'position:absolute;bottom:80px;left:50%;transform:translateX(-50%);width:200px;height:20px;background:rgba(0,0,0,0.5);border-radius:10px;border:2px solid rgba(255,255,255,0.3);overflow:hidden;z-index:10;';
      
      hpFill = document.createElement('div');
      hpFill.id = 'hp-fill';
      hpFill.style.cssText = 'width:100%;height:100%;border-radius:8px;transition:width 0.3s,background-color 0.3s;';
      
      hpText = document.createElement('div');
      hpText.id = 'hp-text';
      hpText.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:white;font-size:12px;font-weight:bold;text-shadow:0 0 3px rgba(0,0,0,0.8);';
      
      hpBar.appendChild(hpFill);
      hpBar.appendChild(hpText);
      uiContainer.appendChild(hpBar);
    }
    
    const hp = this.localPlayer.hp;
    const maxHp = GAME_CONFIG.PLAYER_MAX_HP;
    const ratio = hp / maxHp;
    
    hpFill = document.getElementById('hp-fill');
    hpText = document.getElementById('hp-text');
    
    if (hpFill) {
      hpFill.style.width = `${ratio * 100}%`;
      if (hp >= 70) {
        hpFill.style.background = 'linear-gradient(90deg, #2ecc71, #27ae60)';
      } else if (hp >= 30) {
        hpFill.style.background = 'linear-gradient(90deg, #f1c40f, #e67e22)';
      } else if (hp >= 10) {
        hpFill.style.background = 'linear-gradient(90deg, #e74c3c, #c0392b)';
        hpFill.style.animation = 'hp-flash 0.5s infinite';
      } else {
        hpFill.style.background = 'linear-gradient(90deg, #8e44ad, #6c3483)';
        hpFill.style.animation = 'hp-flash 0.3s infinite';
      }
    }
    
    if (hpText) {
      hpText.textContent = `${Math.ceil(hp)} / ${maxHp}`;
    }
  }

  _updateRespawnUI() {
    if (!this.localPlayer) return;
    
    let respawnOverlay = document.getElementById('respawn-overlay');
    
    if (!respawnOverlay) {
      const uiContainer = document.getElementById('game-ui');
      if (!uiContainer) return;
      
      respawnOverlay = document.createElement('div');
      respawnOverlay.id = 'respawn-overlay';
      respawnOverlay.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:100;color:white;font-family:"Microsoft YaHei",sans-serif;';
      
      const title = document.createElement('div');
      title.id = 'respawn-title';
      title.style.cssText = 'font-size:48px;font-weight:bold;margin-bottom:20px;color:#e74c3c;text-shadow:0 0 20px rgba(231,76,60,0.8);';
      title.textContent = '你被淘汰了！';
      
      const timer = document.createElement('div');
      timer.id = 'respawn-timer';
      timer.style.cssText = 'font-size:32px;color:#f39c12;';
      
      respawnOverlay.appendChild(title);
      respawnOverlay.appendChild(timer);
      uiContainer.appendChild(respawnOverlay);
    }
    
    const timerEl = document.getElementById('respawn-timer');
    if (timerEl) {
      const remaining = Math.ceil(this.localPlayer.respawnTimer);
      if (remaining > 0) {
        timerEl.textContent = `${remaining} 秒后复活...`;
      } else {
        timerEl.textContent = '复活中...';
      }
    }
  }

  _hideRespawnUI() {
    const respawnOverlay = document.getElementById('respawn-overlay');
    if (respawnOverlay) {
      respawnOverlay.remove();
    }
  }

  _respawnPlayer() {
    const spawnPos = this._getRandomSpawnPosition();
    this.localPlayer.respawn(spawnPos.x, spawnPos.z);
    this.snowballManager.reset();
    this._hideRespawnUI();
    this._updateHPUI();
    this._updateSpeedUI();
  }

  _getRandomSpawnPosition() {
    const maxAttempts = 100;
    const worldSize = GAME_CONFIG.WORLD_SIZE * 0.8;
    const halfWorld = GAME_CONFIG.WORLD_SIZE / 2;
    
    for (let i = 0; i < maxAttempts; i++) {
      const x = (Math.random() - 0.5) * worldSize;
      const z = (Math.random() - 0.5) * worldSize;
      
      const centerDist = Math.sqrt(x * x + z * z);
      if (centerDist < 8) continue;
      
      if (!this.mapGenerator.checkCollision(x, z, GAME_CONFIG.PLAYER_RADIUS * 2) &&
          !this._checkPlayerCollision(x, z, null)) {
        return { x, z };
      }
    }
    
    return { x: 0, z: 0 };
  }

  _updateSpeedUI() {
    if (!this.localPlayer || this.localPlayer.isDead) return;
    
    let speedUI = document.getElementById('speed-indicator');
    if (!speedUI) {
      const uiContainer = document.getElementById('game-ui');
      if (!uiContainer) return;
      
      speedUI = document.createElement('div');
      speedUI.id = 'speed-indicator';
      speedUI.style.cssText = 'position:absolute;bottom:110px;left:50%;transform:translateX(-50%);color:white;font-size:14px;font-weight:bold;text-shadow:0 0 3px rgba(0,0,0,0.8);font-family:"Microsoft YaHei",sans-serif;z-index:11;';
      uiContainer.appendChild(speedUI);
    }
    
    const speedPercent = Math.round(this.localPlayer.speedMultiplier * 100);
    let color = '#2ecc71';
    if (speedPercent > 120) color = '#e74c3c';
    else if (speedPercent > 100) color = '#f39c12';
    else if (speedPercent < 90) color = '#3498db';
    
    speedUI.style.color = color;
    speedUI.textContent = `速度: ${speedPercent}%  |  HP: ${Math.ceil(this.localPlayer.hp)}  |  雪球: ${this.snowballManager.snowballCount}`;
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
