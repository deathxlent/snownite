import * as THREE from 'three';
import { GAME_CONFIG } from '../shared/constants.js';
import { SnowballProjectile } from './SnowballProjectile.js';

export class SnowballThrower {
  constructor(scene, gridGround, mapGenerator = null) {
    this.scene = scene;
    this.gridGround = gridGround;
    this.mapGenerator = mapGenerator;
    this.projectiles = [];
    this.colliders = [];

    this.isCharging = false;
    this.chargeTime = 0;
    this.isCharged = false;
    this.wantThrow = false;
    this.wantThrowPrev = false;

    this.baseSpeed = GAME_CONFIG.THROW_SPEED;
    this.gravity = GAME_CONFIG.THROW_GRAVITY;
    this.chargeThreshold = GAME_CONFIG.THROW_CHARGE_TIME;
    this.chargedMultiplier = GAME_CONFIG.THROW_CHARGED_SPEED_MULTIPLIER;
    this.snowBonus = GAME_CONFIG.THROW_SNOW_GROUND_BONUS;

    this._createTrajectoryPreview();
  }

  _createTrajectoryPreview() {
    const geometry = new THREE.BufferGeometry();
    const material = new THREE.LineDashedMaterial({
      color: 0xffffff,
      dashSize: 0.2,
      gapSize: 0.1,
      transparent: true,
      opacity: 0.6
    });

    this.trajectoryLine = new THREE.Line(geometry, material);
    this.trajectoryLine.visible = false;
    this.scene.add(this.trajectoryLine);

    this.trajectoryTimer = 0;
    this.trajectoryDuration = 0;
  }

  _updateTrajectoryPreview(startPos, velocity, duration = 2) {
    const points = [];
    const step = 0.05;
    const pos = startPos.clone();
    const vel = velocity.clone();

    for (let t = 0; t <= duration; t += step) {
      points.push(pos.clone());
      vel.y -= this.gravity * step;
      pos.add(vel.clone().multiplyScalar(step));

      if (pos.y <= 0.1) {
        points.push(pos.clone());
        break;
      }
    }

    const positions = new Float32Array(points.length * 3);
    for (let i = 0; i < points.length; i++) {
      positions[i * 3] = points[i].x;
      positions[i * 3 + 1] = points[i].y;
      positions[i * 3 + 2] = points[i].z;
    }

    this.trajectoryLine.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.trajectoryLine.geometry.attributes.position.needsUpdate = true;
    this.trajectoryLine.computeLineDistances();
  }

  _showTrajectoryTemporarily(startPos, velocity) {
    this._updateTrajectoryPreview(startPos, velocity);
    this.trajectoryLine.visible = true;
    this.trajectoryTimer = 0;
    this.trajectoryDuration = 0.3;
  }

  _getThrowVelocity(yaw, pitch, isCharged) {
    const speed = isCharged ? this.baseSpeed * this.chargedMultiplier : this.baseSpeed;
    const defaultPitch = Math.PI / 4.5;
    const combinedPitch = pitch + defaultPitch;
    const forward = new THREE.Vector3(
      Math.sin(yaw) * Math.cos(combinedPitch),
      Math.sin(combinedPitch),
      Math.cos(yaw) * Math.cos(combinedPitch)
    ).normalize();

    return forward.multiplyScalar(speed);
  }

  _getThrowStartPosition(playerPos, yaw) {
    const forward = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw));
    return new THREE.Vector3(
      playerPos.x + forward.x * 1.2,
      1.4,
      playerPos.z + forward.z * 1.2
    );
  }

  throw(playerPos, yaw, pitch, isCharged, snowballManager, throwerSnowman = null) {
    if (!snowballManager.useSnowball()) return false;

    const startPos = this._getThrowStartPosition(playerPos, yaw);
    const velocity = this._getThrowVelocity(yaw, pitch, isCharged);

    this._showTrajectoryTemporarily(startPos, velocity);

    const projectile = new SnowballProjectile(
      this.scene,
      startPos,
      velocity,
      isCharged,
      (collider, hitResult) => this._onHit(collider, hitResult),
      (x, z) => this._onGroundHit(x, z),
      throwerSnowman
    );

    this.projectiles.push(projectile);
    return true;
  }

  _onHit(collider, hitResult) {
    if (collider.snowman) {
      const snowman = collider.snowman;

      if (hitResult && typeof hitResult === 'object') {
        const { isHeadshot, isCharged, hitDirectionX, hitDirectionZ } = hitResult;

        let damage;
        if (isCharged) {
          damage = isHeadshot ? GAME_CONFIG.CHARGED_SNOWBALL_HEADSHOT_DAMAGE : GAME_CONFIG.CHARGED_SNOWBALL_DAMAGE;
        } else {
          damage = isHeadshot ? GAME_CONFIG.SNOWBALL_HEADSHOT_DAMAGE : GAME_CONFIG.SNOWBALL_DAMAGE;
        }

        snowman.takeDamage(damage, isHeadshot);

        if (isCharged) {
          snowman.applyKnockback(hitDirectionX, hitDirectionZ, GAME_CONFIG.CHARGED_KNOCKBACK_DISTANCE);
        }
      } else {
        snowman.takeDamage(GAME_CONFIG.SNOWBALL_DAMAGE, false);
      }
    }
  }

  _onGroundHit(x, z) {
    if (this.gridGround) {
      const currentSU = this.gridGround.getSU(x, z);
      const newSU = Math.min(GAME_CONFIG.MAX_SNOW_UNIT, currentSU + this.snowBonus);
      this.gridGround.setSU(x, z, newSU);
    }
  }

  update(deltaTime, playerPos, yaw, pitch, wantThrow, chargeTime, snowballManager, throwerSnowman = null) {
    this.wantThrowPrev = this.wantThrow;
    this.wantThrow = wantThrow;

    if (this.wantThrow) {
      this.chargeTime = chargeTime;
      this.isCharging = true;
      this.isCharged = this.chargeTime >= this.chargeThreshold;

      if (this.isCharging) {
        const startPos = this._getThrowStartPosition(playerPos, yaw);
        const velocity = this._getThrowVelocity(yaw, pitch, this.isCharged);
        this._updateTrajectoryPreview(startPos, velocity, 3);
        this.trajectoryLine.visible = true;

        const material = this.trajectoryLine.material;
        if (this.isCharged) {
          material.color.setHex(0xff6b6b);
          material.opacity = 0.9;
        } else {
          material.color.setHex(0xffffff);
          material.opacity = 0.6;
        }
      }
    }

    if (!this.wantThrow && this.wantThrowPrev && this.isCharging) {
      const wasCharged = this.isCharged;
      this.throw(playerPos, yaw, pitch, wasCharged, snowballManager, throwerSnowman);
      this.isCharging = false;
      this.isCharged = false;
      this.chargeTime = 0;
    }

    if (!this.wantThrow && !this.wantThrowPrev) {
      this.trajectoryTimer += deltaTime;
      if (this.trajectoryTimer >= this.trajectoryDuration) {
        this.trajectoryLine.visible = false;
      }
    }

    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const proj = this.projectiles[i];
      proj.update(deltaTime, this.colliders);
      if (!proj.active) {
        this.projectiles.splice(i, 1);
      }
    }

    this._updateUI();
  }

  _updateUI() {
    const chargeIndicator = document.getElementById('charge-indicator');
    const chargeRing = document.getElementById('charge-ring-visual');
    const chargeText = document.getElementById('charge-text');
    const throwBtn = document.getElementById('throw-btn');

    if (chargeIndicator) {
      if (this.isCharging) {
        chargeIndicator.style.display = 'flex';
        if (chargeRing) {
          if (this.isCharged) {
            chargeRing.classList.add('charged');
          } else {
            chargeRing.classList.remove('charged');
          }
        }
        if (chargeText) {
          if (this.isCharged) {
            chargeText.textContent = '重击！松开发射';
            chargeText.classList.add('charged');
          } else {
            const remaining = Math.max(0, this.chargeThreshold - this.chargeTime).toFixed(1);
            chargeText.textContent = `蓄力中... ${remaining}s`;
            chargeText.classList.remove('charged');
          }
        }
      } else {
        chargeIndicator.style.display = 'none';
      }
    }

    if (throwBtn) {
      if (this.isCharging) {
        throwBtn.classList.add('throwing');
        if (this.isCharged) {
          throwBtn.classList.add('charged');
        } else {
          throwBtn.classList.remove('charged');
        }
      } else {
        throwBtn.classList.remove('throwing', 'charged');
      }
    }
  }

  addCollider(collider) {
    this.colliders.push(collider);
  }

  clear() {
    for (const proj of this.projectiles) {
      proj.destroy();
    }
    this.projectiles = [];
    this.scene.remove(this.trajectoryLine);
    this.trajectoryLine.geometry.dispose();
    this.trajectoryLine.material.dispose();
  }
}
