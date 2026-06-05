import * as THREE from 'three';
import { COLORS, GAME_CONFIG } from '../shared/constants.js';

export class Snowman {
  constructor(scene, isLocalPlayer = false, team = 'blue', showNameLabel = false, playerName = '', isAI = false, localTeam = 'blue') {
    this.scene = scene;
    this.isLocalPlayer = isLocalPlayer;
    this.team = team;
    this.isAI = isAI;
    this.localTeam = localTeam;
    this.group = new THREE.Group();
    this.yaw = 0;
    this.pitch = 0;
    this.camera = null;

    this.hp = GAME_CONFIG.PLAYER_MAX_HP;
    this.maxHp = GAME_CONFIG.PLAYER_MAX_HP;
    this.isDead = false;

    this.isHit = false;
    this.hitTimer = 0;
    this.hitDuration = 0.3;

    this.coreFlashTimer = 0;

    this.knockbackActive = false;
    this.knockbackVelocity = new THREE.Vector3(0, 0, 0);
    this.knockbackDecay = 6;
    this.knockbackMinSpeed = 0.5;

    this.bodyMeshes = [];
    this.faceMeshes = [];
    this.accessoryMeshes = [];
    this.outlineMeshes = [];

    this.speedMultiplier = 1.0;
    this.snowballCount = 5;

    this.deathCoreMesh = null;
    this.respawnTimer = 0;
    this.isRespawning = false;

    this._createBody();
    this._createHead();
    this._createFace();
    this._createArms();
    this._createScarf();
    this._createHat();
    this._createCore();
    this._createIndicator(showNameLabel, playerName, isAI);

    scene.add(this.group);

    this.collider = {
      type: 'cylinder',
      x: 0,
      z: 0,
      radius: 0.65,
      snowman: this
    };
  }

  _createBody() {
    const bottomGeometry = new THREE.SphereGeometry(0.75, 32, 32);
    const headGeometry = new THREE.SphereGeometry(0.5, 32, 32);

    const snowMaterial = new THREE.MeshStandardMaterial({
      color: COLORS.SNOW,
      roughness: 0.85,
      metalness: 0.05
    });

    this.bottomSphere = new THREE.Mesh(bottomGeometry, snowMaterial);
    this.bottomSphere.position.y = 0.75;
    this.bottomSphere.castShadow = true;
    this.bottomSphere.receiveShadow = true;

    this.headSphere = new THREE.Mesh(headGeometry, snowMaterial.clone());
    this.headSphere.position.y = 1.7;
    this.headSphere.castShadow = true;
    this.headSphere.receiveShadow = true;

    this.bodyMeshes = [this.bottomSphere, this.headSphere];

    this.group.add(this.bottomSphere);
    this.group.add(this.headSphere);

    const buttonGeometry = new THREE.SphereGeometry(0.06, 16, 16);
    const buttonMaterial = new THREE.MeshStandardMaterial({
      color: COLORS.COAL,
      roughness: 0.3
    });

    for (let i = 0; i < 3; i++) {
      const button = new THREE.Mesh(buttonGeometry, buttonMaterial);
      button.position.set(0, 1.1 - i * 0.2, 0.65);
      this.group.add(button);
      this.faceMeshes.push(button);
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
    leftEye.position.set(-0.15, 1.8, 0.42);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.15, 1.8, 0.42);

    const noseGeometry = new THREE.ConeGeometry(0.08, 0.4, 16);
    const noseMaterial = new THREE.MeshStandardMaterial({
      color: COLORS.CARROT,
      roughness: 0.6
    });

    this.nose = new THREE.Mesh(noseGeometry, noseMaterial);
    this.nose.position.set(0, 1.65, 0.55);
    this.nose.rotation.x = Math.PI / 2;

    const mouthGeometry = new THREE.TorusGeometry(0.1, 0.03, 8, 16, Math.PI);
    const mouthMaterial = new THREE.MeshStandardMaterial({
      color: COLORS.COAL,
      roughness: 0.3
    });

    const mouth = new THREE.Mesh(mouthGeometry, mouthMaterial);
    mouth.position.set(0, 1.5, 0.45);
    mouth.rotation.x = Math.PI;
    mouth.rotation.z = Math.PI;

    this.faceMeshes.push(leftEye, rightEye, this.nose, mouth);

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
    leftArm.position.set(-0.55, 1.15, 0);
    leftArm.rotation.z = Math.PI / 5;
    leftArm.castShadow = true;

    const rightArm = new THREE.Mesh(armGeometry, armMaterial.clone());
    rightArm.position.set(0.55, 1.15, 0);
    rightArm.rotation.z = -Math.PI / 5;
    rightArm.castShadow = true;

    const handGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const handMaterial = new THREE.MeshStandardMaterial({
      color: 0x5a3d2b,
      roughness: 0.8
    });

    const leftHand = new THREE.Mesh(handGeometry, handMaterial);
    leftHand.position.set(-0.75, 0.9, 0);

    const rightHand = new THREE.Mesh(handGeometry, handMaterial.clone());
    rightHand.position.set(0.75, 0.9, 0);

    this.accessoryMeshes.push(leftArm, rightArm, leftHand, rightHand);

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

    const scarfGeometry = new THREE.TorusGeometry(0.48, 0.08, 16, 32);
    const scarfMaterial = new THREE.MeshStandardMaterial({
      color: scarfColor,
      roughness: 0.7,
      metalness: 0.1
    });

    const scarf = new THREE.Mesh(scarfGeometry, scarfMaterial);
    scarf.position.set(0, 1.45, 0);
    scarf.rotation.x = Math.PI / 2;
    scarf.castShadow = true;

    const tailGeometry = new THREE.BoxGeometry(0.15, 0.4, 0.08);
    const scarfTail = new THREE.Mesh(tailGeometry, scarfMaterial.clone());
    scarfTail.position.set(0.15, 1.25, 0.4);
    scarfTail.rotation.z = -0.3;
    scarfTail.castShadow = true;

    this.accessoryMeshes.push(scarf, scarfTail);

    this.group.add(scarf);
    this.group.add(scarfTail);
  }

  _createHat() {
    const hatBrimGeometry = new THREE.CylinderGeometry(0.42, 0.42, 0.05, 32);
    const hatTopGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.45, 32);

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
    hatBrim.position.y = 2.1;
    hatBrim.castShadow = true;

    const hatTop = new THREE.Mesh(hatTopGeometry, hatMaterial.clone());
    hatTop.position.y = 2.35;
    hatTop.castShadow = true;

    const ribbonGeometry = new THREE.CylinderGeometry(0.31, 0.31, 0.08, 32);
    const ribbon = new THREE.Mesh(ribbonGeometry, ribbonMaterial);
    ribbon.position.y = 2.15;
    ribbon.castShadow = true;

    this.accessoryMeshes.push(hatBrim, hatTop, ribbon);

    this.group.add(hatBrim);
    this.group.add(hatTop);
    this.group.add(ribbon);
  }

  _createCore() {
    const coreGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: COLORS.CORE,
      emissive: COLORS.CORE,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.6,
      transparent: true,
      opacity: 0
    });

    this.coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    this.coreMesh.position.set(0, 1.7, 0);
    this.group.add(this.coreMesh);
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

  takeDamage(amount, isHeadshot = false) {
    if (this.isDead) return;

    this.hp = Math.max(0, this.hp - amount);
    this.isHit = true;
    this.hitTimer = this.hitDuration;

    const meshes = [this.bottomSphere, this.headSphere];
    meshes.forEach(mesh => {
      if (mesh.material) {
        mesh.material.emissive = new THREE.Color(isHeadshot ? 0xff0000 : 0xff6b6b);
        mesh.material.emissiveIntensity = isHeadshot ? 0.8 : 0.5;
      }
    });

    this._updateTransparency();

    if (this.hp <= 0) {
      this.isDead = true;
      this._onDeath();
    }
  }

  _onDeath() {
    this._createDeathCore();
    this._setVisibility(false);
    this.isRespawning = true;
    this.respawnTimer = 5.0;
    this.knockbackActive = false;
  }

  _createDeathCore() {
    if (this.deathCoreMesh) {
      this.scene.remove(this.deathCoreMesh);
      this.deathCoreMesh.geometry.dispose();
      this.deathCoreMesh.material.dispose();
    }

    const coreGeometry = new THREE.IcosahedronGeometry(0.25, 1);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      emissive: 0x330000,
      emissiveIntensity: 0.4,
      roughness: 0.3,
      metalness: 0.8
    });

    this.deathCoreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    this.deathCoreMesh.position.set(
      this.group.position.x,
      0.25,
      this.group.position.z
    );

    this.scene.add(this.deathCoreMesh);
  }

  _setVisibility(visible) {
    this.group.visible = visible;
    if (this.indicatorGroup) {
      this.indicatorGroup.visible = visible;
    }
  }

  updateSpeedMultiplier() {
    const baseSpeed = 1.05;
    const missingHpBonus = (this.maxHp - this.hp) * 0.01;
    const snowballPenalty = this.snowballCount * 0.01;
    this.speedMultiplier = baseSpeed + missingHpBonus - snowballPenalty;
  }

  respawn(x, z) {
    this.hp = GAME_CONFIG.PLAYER_MAX_HP;
    this.isDead = false;
    this.isRespawning = false;
    this.snowballCount = 5;
    this.knockbackActive = false;
    this.knockbackVelocity.set(0, 0, 0);

    this.group.position.set(x, 0, z);
    this.collider.x = x;
    this.collider.z = z;

    if (this.deathCoreMesh) {
      this.scene.remove(this.deathCoreMesh);
      this.deathCoreMesh.geometry.dispose();
      this.deathCoreMesh.material.dispose();
      this.deathCoreMesh = null;
    }

    this._setVisibility(true);
    this._updateTransparency();
    this.updateSpeedMultiplier();
  }

  applyKnockback(directionX, directionZ, distance) {
    const initialSpeed = 18;
    this.knockbackVelocity.set(directionX * initialSpeed, 0, directionZ * initialSpeed);
    this.knockbackActive = true;
  }

  hit() {
    this.takeDamage(GAME_CONFIG.SNOWBALL_DAMAGE);
  }

  _updateTransparency() {
    const hp = this.hp;
    const maxHp = this.maxHp;

    let bodyOpacity;
    let faceOpacity = 1;
    let accessoryOpacity = 1;
    let coreOpacity = 0;
    let showOutline = false;

    if (hp >= 70) {
      bodyOpacity = 1;
    } else if (hp >= 30) {
      bodyOpacity = 0.3 + (hp - 30) / 40 * 0.7;
    } else if (hp >= 10) {
      bodyOpacity = 0.1 + (hp - 10) / 20 * 0.2;
      coreOpacity = 1;
    } else {
      bodyOpacity = 0.05;
      faceOpacity = 0.1;
      accessoryOpacity = 0.1;
      coreOpacity = 1;
      showOutline = true;
    }

    this.bodyMeshes.forEach(mesh => {
      mesh.material.transparent = bodyOpacity < 1;
      mesh.material.opacity = bodyOpacity;
      mesh.material.depthWrite = bodyOpacity >= 1;
      mesh.material.needsUpdate = true;
    });

    this.faceMeshes.forEach(mesh => {
      mesh.material.transparent = faceOpacity < 1;
      mesh.material.opacity = faceOpacity;
      mesh.material.depthWrite = faceOpacity >= 1;
      mesh.material.needsUpdate = true;
    });

    this.accessoryMeshes.forEach(mesh => {
      mesh.material.transparent = accessoryOpacity < 1;
      mesh.material.opacity = accessoryOpacity;
      mesh.material.depthWrite = accessoryOpacity >= 1;
      mesh.material.needsUpdate = true;
    });

    this.coreMesh.material.opacity = coreOpacity;
    this.coreMesh.material.transparent = coreOpacity < 1;
    this.coreMesh.material.depthWrite = coreOpacity >= 1;
    this.coreMesh.material.needsUpdate = true;

    if (showOutline && this.outlineMeshes.length === 0) {
      this._createOutlines();
    } else if (!showOutline && this.outlineMeshes.length > 0) {
      this._removeOutlines();
    }
  }

  _createOutlines() {
    const outlineMaterial = new THREE.MeshBasicMaterial({
      color: COLORS.SNOW,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });

    this.bodyMeshes.forEach(mesh => {
      const outlineMesh = new THREE.Mesh(mesh.geometry, outlineMaterial.clone());
      outlineMesh.position.copy(mesh.position);
      outlineMesh.scale.multiplyScalar(1.05);
      this.group.add(outlineMesh);
      this.outlineMeshes.push(outlineMesh);
    });
  }

  _removeOutlines() {
    this.outlineMeshes.forEach(mesh => {
      this.group.remove(mesh);
      mesh.material.dispose();
    });
    this.outlineMeshes = [];
  }

  _createIndicator(showNameLabel, playerName, isAI) {
    this.indicatorGroup = new THREE.Group();
    this.indicatorGroup.position.y = 3.2;

    const isTeammate = this.team === this.localTeam;
    const shouldShowName = this.isLocalPlayer || isTeammate;

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
    } else if (shouldShowName && showNameLabel) {
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

    this.scene.add(this.indicatorGroup);
  }

  update(deltaTime) {
    this.collider.x = this.group.position.x;
    this.collider.z = this.group.position.z;

    if (this.isDead) {
      if (this.isRespawning && this.respawnTimer > 0) {
        this.respawnTimer -= deltaTime;
      }
      if (this.deathCoreMesh) {
        this.deathCoreMesh.rotation.y += deltaTime * 2;
        this.deathCoreMesh.rotation.x += deltaTime * 1.5;
        this.deathCoreMesh.position.y = 0.25 + Math.sin(Date.now() * 0.003) * 0.05;
      }
      return;
    }

    this.updateSpeedMultiplier();

    if (this.knockbackActive) {
      const kb = this.knockbackVelocity;
      const speed = Math.sqrt(kb.x * kb.x + kb.z * kb.z);
      if (speed < this.knockbackMinSpeed) {
        this.knockbackActive = false;
        kb.set(0, 0, 0);
      } else {
        const decay = Math.max(0, 1 - this.knockbackDecay * deltaTime);
        kb.x *= decay;
        kb.z *= decay;
      }
    }

    if (this.indicatorGroup) {
      this.indicatorGroup.position.x = this.group.position.x;
      this.indicatorGroup.position.z = this.group.position.z;

      if (this.camera) {
        this.indicatorGroup.lookAt(this.camera.position);
      }
    }

    if (this.isHit) {
      this.hitTimer -= deltaTime;
      if (this.hitTimer <= 0) {
        this.isHit = false;
        const meshes = [this.bottomSphere, this.headSphere];
        meshes.forEach(mesh => {
          if (mesh.material) {
            mesh.material.emissiveIntensity = 0;
          }
        });
      }
    }

    if (this.hp < 30 && this.hp > 0) {
      this.coreFlashTimer += deltaTime;
      const flashSpeed = this.hp < 10 ? 12 : 6;
      const flash = Math.sin(this.coreFlashTimer * flashSpeed) * 0.5 + 0.5;
      this.coreMesh.material.emissiveIntensity = 0.3 + flash * 0.7;
      this.coreMesh.material.needsUpdate = true;
    }
  }

  updateNameLabel(playerName) {
    if (!this.indicatorGroup) return;

    const isTeammate = this.team === this.localTeam;
    const shouldShowName = this.isLocalPlayer || isTeammate;

    if (!shouldShowName) return;

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
    if (this.indicatorGroup) {
      this.scene.remove(this.indicatorGroup);
    }
    this._removeOutlines();
    this.scene.remove(this.group);
  }
}
