import { GAME_CONFIG } from '../shared/constants.js';

export class SnowballManager {
  constructor(gridGround, mapGenerator = null) {
    this.gridGround = gridGround;
    this.mapGenerator = mapGenerator;
    this.snowballCount = 0;
    this.maxSnowballs = GAME_CONFIG.MAX_SNOWBALLS;
    this.baseGatherDuration = GAME_CONFIG.GATHER_DURATION;
    this.minGatherDuration = GAME_CONFIG.MIN_GATHER_DURATION;
    this.speedupThreshold = GAME_CONFIG.GATHER_SPEEDUP_THRESHOLD;
    this.speedupPerBall = GAME_CONFIG.GATHER_SPEEDUP_PER_BALL;
    this.snowballCost = GAME_CONFIG.SNOWBALL_COST;

    this.isGathering = false;
    this.gatherProgress = 0;
    this.gatherPosition = null;
    this.gatherYaw = 0;
    this.currentGatherDuration = this.baseGatherDuration;

    this.consecutiveCount = 0;
    this.holdActive = false;
  }

  canGather(playerX, playerZ, playerYaw) {
    if (this.snowballCount >= this.maxSnowballs) return false;
    if (this.isGathering) return false;

    return true;
  }

  setHoldActive(active) {
    if (!active && this.holdActive) {
      this._resetConsecutive();
    }
    this.holdActive = active;
  }

  startGather(playerX, playerZ, playerYaw) {
    if (this.snowballCount >= this.maxSnowballs) return false;

    this.isGathering = true;
    this.gatherProgress = 0;
    this.gatherPosition = { x: playerX, z: playerZ };
    this.gatherYaw = playerYaw;

    return true;
  }

  update(deltaTime, playerX, playerZ, playerYaw) {
    this.gridGround.update(deltaTime);

    if (this.mapGenerator) {
      this.mapGenerator.updateWalls(deltaTime);
    }

    if (!this.isGathering) {
      if (this.holdActive && this.snowballCount < this.maxSnowballs) {
        this.startGather(playerX, playerZ, playerYaw);
      }
      return;
    }

    this.gatherProgress += deltaTime;

    if (this.gatherProgress >= this.currentGatherDuration) {
      this._completeGather();
    }
  }

  _completeGather() {
    this.isGathering = false;

    let success = false;

    if (this.mapGenerator) {
      const wallGathered = this.mapGenerator.tryGatherFromWall(
        this.gatherPosition.x,
        this.gatherPosition.z,
        this.gatherYaw,
        this.snowballCost
      );
      if (wallGathered >= this.snowballCost) {
        success = true;
      } else {
        success = this.gridGround.tryGatherSnow(
          this.gatherPosition.x,
          this.gatherPosition.z,
          this.gatherYaw,
          this.snowballCost - wallGathered
        );
        if (wallGathered > 0 && success) {
          success = true;
        }
      }
    } else {
      success = this.gridGround.tryGatherSnow(
        this.gatherPosition.x,
        this.gatherPosition.z,
        this.gatherYaw,
        this.snowballCost
      );
    }

    if (success && this.snowballCount < this.maxSnowballs) {
      this.snowballCount++;
      this.consecutiveCount++;
      this._updateSpeed();
      this._updateUI();
    }

    this.gatherProgress = 0;
    this.gatherPosition = null;
  }

  _updateSpeed() {
    if (this.consecutiveCount >= this.speedupThreshold) {
      const extraBalls = this.consecutiveCount - this.speedupThreshold;
      const reduction = extraBalls * this.speedupPerBall;
      this.currentGatherDuration = Math.max(
        this.minGatherDuration,
        this.baseGatherDuration - reduction
      );
    } else {
      this.currentGatherDuration = this.baseGatherDuration;
    }
  }

  _resetConsecutive() {
    this.consecutiveCount = 0;
    this.currentGatherDuration = this.baseGatherDuration;
  }

  cancelGather() {
    this.isGathering = false;
    this.gatherProgress = 0;
    this.gatherPosition = null;
  }

  getProgress() {
    if (!this.isGathering) return 0;
    return Math.min(1, this.gatherProgress / this.currentGatherDuration);
  }

  getRemainingTime() {
    if (!this.isGathering) return 0;
    return Math.max(0, this.currentGatherDuration - this.gatherProgress);
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
      countElement.textContent = `⚪ ${this.snowballCount} / ${this.maxSnowballs}`;
    }
  }

  updateGatherUI() {
    const progressBar = document.getElementById('gather-progress-bar');
    const progressFill = document.getElementById('gather-progress-fill');
    const countdownEl = document.getElementById('gather-countdown');
    const consecutiveEl = document.getElementById('consecutive-count');
    const speedEl = document.getElementById('gather-speed');

    if (progressBar && progressFill) {
      if (this.isGathering || this.holdActive) {
        progressBar.style.display = 'block';
        progressFill.style.width = `${this.getProgress() * 100}%`;

        const speedPercent = ((this.baseGatherDuration - this.currentGatherDuration) / (this.baseGatherDuration - this.minGatherDuration)) * 100;
        const hue = 200 - speedPercent * 1.2;
        progressFill.style.background = `linear-gradient(90deg, hsl(${hue}, 70%, 50%), hsl(${hue - 30}, 70%, 60%))`;
      } else {
        progressBar.style.display = 'none';
      }
    }

    if (countdownEl) {
      if (this.isGathering) {
        countdownEl.style.display = 'block';
        countdownEl.textContent = `${this.getRemainingTime().toFixed(1)}s`;
      } else {
        countdownEl.style.display = 'none';
      }
    }

    if (consecutiveEl) {
      if (this.consecutiveCount > 0 && this.holdActive) {
        consecutiveEl.style.display = 'block';
        if (this.consecutiveCount >= this.speedupThreshold) {
          consecutiveEl.classList.add('speedup');
          const speedBonus = ((this.baseGatherDuration - this.currentGatherDuration) / this.baseGatherDuration * 100).toFixed(0);
          consecutiveEl.textContent = `连续攒雪球 x${this.consecutiveCount}  ⚡ +${speedBonus}% 速度`;
        } else {
          consecutiveEl.classList.remove('speedup');
          consecutiveEl.textContent = `连续攒雪球 x${this.consecutiveCount}`;
        }
      } else {
        consecutiveEl.style.display = 'none';
      }
    }

    if (speedEl) {
      speedEl.style.display = 'none';
    }
  }
}
