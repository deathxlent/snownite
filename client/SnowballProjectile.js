import * as THREE from 'three';
import { GAME_CONFIG } from '../shared/constants.js';

export class SnowballProjectile {
  constructor(scene, startPos, velocity, isCharged = false, onHit = null, onGroundHit = null, ignoreSnowman = null) {
    this.scene = scene;
    this.velocity = velocity.clone();
    this.isCharged = isCharged;
    this.onHit = onHit;
    this.onGroundHit = onGroundHit;
    this.ignoreSnowman = ignoreSnowman;
    this.active = true;
    this.lifetime = 5;
    this.gravity = GAME_CONFIG.THROW_GRAVITY;
    this.radius = GAME_CONFIG.THROW_SNOWBALL_RADIUS;
    this.trailPoints = [];
    this.trailLifetime = GAME_CONFIG.THROW_TRAIL_LIFETIME;

    this._createMesh(startPos);
    this._createTrail();
  }

  _createMesh(pos) {
    const geometry = new THREE.SphereGeometry(this.radius, 12, 12);
    const material = new THREE.MeshStandardMaterial({
      color: this.isCharged ? 0xcceeff : 0xffffff,
      roughness: 0.8,
      metalness: this.isCharged ? 0.2 : 0.0
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.copy(pos);
    this.mesh.castShadow = true;
    this.scene.add(this.mesh);
  }

  _createTrail() {
    const trailGeometry = new THREE.BufferGeometry();
    const trailMaterial = new THREE.PointsMaterial({
      color: this.isCharged ? 0xaaddff : 0xffffff,
      size: 0.08,
      transparent: true,
      opacity: 0.6
    });

    this.trail = new THREE.Points(trailGeometry, trailMaterial);
    this.scene.add(this.trail);
  }

  _updateTrail() {
    this.trailPoints.push({
      position: this.mesh.position.clone(),
      time: 0
    });

    const positions = [];
    for (let i = this.trailPoints.length - 1; i >= 0; i--) {
      const point = this.trailPoints[i];
      point.time += 0.016;

      if (point.time > this.trailLifetime) {
        this.trailPoints.splice(i, 1);
        continue;
      }

      positions.push(point.position.x, point.position.y, point.position.z);
    }

    this.trail.geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    this.trail.geometry.attributes.position.needsUpdate = true;
  }

  _createShatterEffect() {
    const particleCount = this.isCharged ? 20 : 12;
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
      positions.push(this.mesh.position.x, this.mesh.position.y, this.mesh.position.z);
      velocities.push(
        (Math.random() - 0.5) * 4,
        Math.random() * 3,
        (Math.random() - 0.5) * 4
      );
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      transparent: true,
      opacity: 1
    });

    const particles = new THREE.Points(geometry, material);
    this.scene.add(particles);

    let life = 0.5;
    const animate = () => {
      life -= 0.016;
      if (life <= 0) {
        this.scene.remove(particles);
        geometry.dispose();
        material.dispose();
        return;
      }

      const posAttr = particles.geometry.attributes.position;
      for (let i = 0; i < particleCount; i++) {
        posAttr.setX(i, posAttr.getX(i) + velocities[i * 3] * 0.016);
        posAttr.setY(i, posAttr.getY(i) + velocities[i * 3 + 1] * 0.016);
        posAttr.setZ(i, posAttr.getZ(i) + velocities[i * 3 + 2] * 0.016);
        velocities[i * 3 + 1] -= this.gravity * 0.016;
      }
      posAttr.needsUpdate = true;
      material.opacity = life * 2;

      requestAnimationFrame(animate);
    };
    animate();
  }

  _createHitSplashEffect() {
    const particleCount = 25;
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const velocities = [];

    const pos = this.mesh.position;
    const speed = Math.sqrt(this.velocity.x ** 2 + this.velocity.y ** 2 + this.velocity.z ** 2);
    const hitDirX = speed > 0 ? this.velocity.x / speed : 0;
    const hitDirY = speed > 0 ? this.velocity.y / speed : 0;
    const hitDirZ = speed > 0 ? this.velocity.z / speed : 0;

    for (let i = 0; i < particleCount; i++) {
      positions.push(pos.x, pos.y, pos.z);

      const spread = 0.7;
      const randX = (Math.random() - 0.5) * spread;
      const randY = (Math.random() - 0.5) * spread;
      const randZ = (Math.random() - 0.5) * spread;

      const reflectFactor = 0.6 + Math.random() * 0.4;
      velocities.push(
        (-hitDirX * reflectFactor + randX) * (3 + Math.random() * 3),
        (-hitDirY * reflectFactor + Math.abs(randY)) * (2 + Math.random() * 3),
        (-hitDirZ * reflectFactor + randZ) * (3 + Math.random() * 3)
      );
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.08,
      transparent: true,
      opacity: 1
    });

    const particles = new THREE.Points(geometry, material);
    this.scene.add(particles);

    let life = 0.6;
    const gravity = 25;
    const animate = () => {
      life -= 0.016;
      if (life <= 0) {
        this.scene.remove(particles);
        geometry.dispose();
        material.dispose();
        return;
      }

      const posAttr = particles.geometry.attributes.position;
      for (let i = 0; i < particleCount; i++) {
        posAttr.setX(i, posAttr.getX(i) + velocities[i * 3] * 0.016);
        posAttr.setY(i, posAttr.getY(i) + velocities[i * 3 + 1] * 0.016);
        posAttr.setZ(i, posAttr.getZ(i) + velocities[i * 3 + 2] * 0.016);
        velocities[i * 3 + 1] -= gravity * 0.016;
      }
      posAttr.needsUpdate = true;
      material.opacity = Math.max(0, life / 0.6);
      material.size = 0.08 * (0.5 + life);

      requestAnimationFrame(animate);
    };
    animate();
  }

  update(deltaTime, colliders) {
    if (!this.active) return;

    this.lifetime -= deltaTime;
    if (this.lifetime <= 0) {
      this.destroy();
      return;
    }

    this.velocity.y -= this.gravity * deltaTime;

    const oldPos = this.mesh.position.clone();
    this.mesh.position.x += this.velocity.x * deltaTime;
    this.mesh.position.y += this.velocity.y * deltaTime;
    this.mesh.position.z += this.velocity.z * deltaTime;

    this._updateTrail();

    if (this.mesh.position.y <= this.radius) {
      this.mesh.position.y = this.radius;
      this._createShatterEffect();
      if (this.onGroundHit) {
        this.onGroundHit(this.mesh.position.x, this.mesh.position.z);
      }
      this.destroy();
      return;
    }

    for (const collider of colliders) {
      const hitResult = this._checkCollision(collider);
      if (hitResult) {
        this._createShatterEffect();
        if (collider.snowman) {
          this._createHitSplashEffect();
        }
        if (this.onHit) {
          this.onHit(collider, hitResult);
        }
        this.destroy();
        return;
      }
    }
  }

  _checkCollision(collider) {
    const pos = this.mesh.position;

    if (collider.type === 'wall' && collider.tallWall) {
      const tallWall = collider.tallWall;
      if (tallWall.destroyed) return null;

      const cos = Math.cos(-collider.angle);
      const sin = Math.sin(-collider.angle);
      const dx = pos.x - collider.x;
      const dz = pos.z - collider.z;
      const localX = dx * cos - dz * sin;
      const localZ = dx * sin + dz * cos;

      if (Math.abs(localX) <= collider.width / 2 + this.radius &&
          Math.abs(localZ) <= collider.thickness / 2 + this.radius) {
        if (pos.y > 0 && pos.y < tallWall.height + 0.3) {
          tallWall.takeDamage(this.isCharged ? GAME_CONFIG.CHARGED_SNOWBALL_DAMAGE : GAME_CONFIG.SNOWBALL_DAMAGE);
          return { hitWall: true };
        }
      }
    }

    if (collider.type === 'cylinder') {
      const dx = pos.x - collider.x;
      const dz = pos.z - collider.z;
      const distXZ = Math.sqrt(dx * dx + dz * dz);

      if (distXZ < collider.radius + this.radius) {
        if (pos.y > 0 && pos.y < 3.5) {
          return true;
        }
      }
    }

    if (collider.snowman) {
      if (collider.snowman === this.ignoreSnowman) {
        return null;
      }

      const snowmanPos = collider.snowman.getPosition();
      const dx = pos.x - snowmanPos.x;
      const dz = pos.z - snowmanPos.z;
      const distXZ = Math.sqrt(dx * dx + dz * dz);

      if (distXZ < 0.75 + this.radius) {
        if (pos.y > 0.5 && pos.y < 3.0) {
          const isHeadshot = pos.y >= GAME_CONFIG.HEAD_HIT_Y;
          const hitDirectionX = this.velocity.x !== 0 || this.velocity.z !== 0
            ? this.velocity.x / Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.z * this.velocity.z)
            : 0;
          const hitDirectionZ = this.velocity.x !== 0 || this.velocity.z !== 0
            ? this.velocity.z / Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.z * this.velocity.z)
            : 0;

          return {
            isHeadshot,
            isCharged: this.isCharged,
            hitDirectionX,
            hitDirectionZ
          };
        }
      }
    }

    return null;
  }

  destroy() {
    this.active = false;
    this.scene.remove(this.mesh);
    this.scene.remove(this.trail);
    this.mesh.geometry.dispose();
    this.mesh.material.dispose();
    this.trail.geometry.dispose();
    this.trail.material.dispose();
  }
}
