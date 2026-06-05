import * as THREE from 'three';
import { COLORS, GAME_CONFIG } from '../shared/constants.js';

export class TallWall {
  constructor(scene, x, z, angle, onDestroy = null) {
    this.scene = scene;
    this.x = x;
    this.z = z;
    this.angle = angle;
    this.hp = GAME_CONFIG.TALL_WALL_HP;
    this.maxHp = GAME_CONFIG.TALL_WALL_HP;
    this.destroyed = false;
    this.onDestroy = onDestroy;

    this.width = GAME_CONFIG.TALL_WALL_WIDTH;
    this.height = GAME_CONFIG.TALL_WALL_HEIGHT;
    this.thickness = GAME_CONFIG.TALL_WALL_THICKNESS;

    this._createMesh();
  }

  _createMesh() {
    this.group = new THREE.Group();
    this.group.position.set(this.x, 0, this.z);
    this.group.rotation.y = this.angle;

    const wallGeometry = new THREE.BoxGeometry(this.width, this.height, this.thickness);
    const wallMaterial = new THREE.MeshStandardMaterial({
      color: COLORS.TALL_WALL,
      roughness: 0.75,
      metalness: 0.1,
      transparent: true,
      opacity: 0.95
    });

    this.wallMesh = new THREE.Mesh(wallGeometry, wallMaterial);
    this.wallMesh.position.y = this.height / 2;
    this.wallMesh.castShadow = true;
    this.wallMesh.receiveShadow = true;

    const snowCapGeometry = new THREE.BoxGeometry(this.width + 0.2, 0.15, this.thickness + 0.2);
    const snowCapMaterial = new THREE.MeshStandardMaterial({
      color: COLORS.WALL_SNOW,
      roughness: 0.7,
      metalness: 0.0
    });

    this.snowCapMesh = new THREE.Mesh(snowCapGeometry, snowCapMaterial);
    this.snowCapMesh.position.y = this.height + 0.075;
    this.snowCapMesh.castShadow = true;

    this.group.add(this.wallMesh);
    this.group.add(this.snowCapMesh);
    this.scene.add(this.group);

    this.collider = {
      type: 'wall',
      x: this.x,
      z: this.z,
      angle: this.angle,
      width: this.width,
      thickness: this.thickness,
      tallWall: this
    };
  }

  takeDamage(amount) {
    if (this.destroyed) return;

    this.hp = Math.max(0, this.hp - amount);

    const hpRatio = this.hp / this.maxHp;
    this.wallMesh.material.opacity = 0.3 + hpRatio * 0.65;

    if (hpRatio < 0.3) {
      this.wallMesh.material.emissive = new THREE.Color(0x444444);
      this.wallMesh.material.emissiveIntensity = 0.3 * (1 - hpRatio);
      this.wallMesh.material.needsUpdate = true;
    }

    if (this.hp <= 0) {
      this._onDestroy();
    }
  }

  _onDestroy() {
    this.destroyed = true;
    this._createDestroyEffect();
    this.remove();

    if (this.onDestroy) {
      this.onDestroy(this);
    }
  }

  _createDestroyEffect() {
    const particleCount = 30;
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
      positions.push(
        this.x + (Math.random() - 0.5) * this.width,
        Math.random() * this.height,
        this.z + (Math.random() - 0.5) * this.thickness
      );
      velocities.push(
        (Math.random() - 0.5) * 5,
        Math.random() * 4 + 1,
        (Math.random() - 0.5) * 5
      );
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xe0e8f0,
      size: 0.15,
      transparent: true,
      opacity: 1
    });

    const particles = new THREE.Points(geometry, material);
    this.scene.add(particles);

    let life = 0.8;
    const gravity = 20;
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
      material.opacity = Math.max(0, life / 0.8);

      requestAnimationFrame(animate);
    };
    animate();
  }

  update(deltaTime) {
    if (this.destroyed) return;
  }

  remove() {
    if (this.group) {
      this.scene.remove(this.group);
      this.wallMesh.geometry.dispose();
      this.wallMesh.material.dispose();
      this.snowCapMesh.geometry.dispose();
      this.snowCapMesh.material.dispose();
    }
  }
}
