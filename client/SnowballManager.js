import { GAME_CONFIG } from '../shared/constants.js';

export class SnowballManager {
  constructor(gridGround) {
    this.gridGround = gridGround;
    this.snowballCount = 0;
    this.maxSnowballs = GAME_CONFIG.MAX_SNOWBALLS;
    this.gatherDuration = GAME_CONFIG.GATHER_DURATION;
    this.snowballCost = GAME_CONFIG.SNOWBALL_COST;

    this.isGathering = false;
    this.gatherProgress = 0;
    this.gatherPosition = null;
    this.gatherYaw = 0;
  }

  canGather(playerX, playerZ, playerYaw) {
    if (this.snowballCount >= this.maxSnowballs) return false;
    if (this.isGathering) return false;

    return this.gridGround.tryGatherSnow(playerX, playerZ, playerYaw, 0) || true;
  }

  startGather(playerX, playerZ, playerYaw) {
    if (this.isGathering) return false;
    if (this.snowballCount >= this.maxSnowballs) return false;

    this.isGathering = true;
    this.gatherProgress = 0;
    this.gatherPosition = { x: playerX, z: playerZ };
    this.gatherYaw = playerYaw;

    return true;
  }

  update(deltaTime, playerX, playerZ, playerYaw) {
    this.gridGround.update(deltaTime);

    if (!this.isGathering) return;

    this.gatherProgress += deltaTime;

    if (this.gatherProgress >= this.gatherDuration) {
      this._completeGather();
    }
  }

  _completeGather() {
    this.isGathering = false;

    const success = this.gridGround.tryGatherSnow(
      this.gatherPosition.x,
      this.gatherPosition.z,
      this.gatherYaw,
      this.snowballCost
    );

    if (success && this.snowballCount < this.maxSnowballs) {
      this.snowballCount++;
      this._updateUI();
    }

    this.gatherProgress = 0;
    this.gatherPosition = null;
  }

  cancelGather() {
    this.isGathering = false;
    this.gatherProgress = 0;
    this.gatherPosition = null;
  }

  getProgress() {
    if (!this.isGathering) return 0;
    return Math.min(1, this.gatherProgress / this.gatherDuration);
  }

  useSnowball() {
    if (this.snowballCount > 0) {
      this.snowballCount--;
      this._updateUI();
      return true;
    }
    return false;
  }

  _updateUI() {
    const countElement = document.getElementById('snowball-count');
    if (countElement) {
      countElement.textContent = `${this.snowballCount} / ${this.maxSnowballs}`;
    }
  }

  updateGatherUI() {
    const progressBar = document.getElementById('gather-progress-bar');
    const progressFill = document.getElementById('gather-progress-fill');

    if (progressBar && progressFill) {
      if (this.isGathering) {
        progressBar.style.display = 'block';
        progressFill.style.width = `${this.getProgress() * 100}%`;
      } else {
        progressBar.style.display = 'none';
      }
    }
  }
}
