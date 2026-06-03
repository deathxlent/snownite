import { GAME_CONFIG } from '../shared/constants.js';

export class InputSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = {};
    this.isPointerLocked = false;
    this.pointerLockAvailable = true;
    
    this.mouse = {
      deltaX: 0,
      deltaY: 0
    };
    
    this.touch = {
      moveJoystick: { active: false, x: 0, y: 0, touchId: null },
      lookJoystick: { active: false, x: 0, y: 0, touchId: null }
    };
    
    this.isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    
    this.gamepad = {
      moveJoystick: { active: false, x: 0, y: 0 },
      lookJoystick: { active: false, x: 0, y: 0 }
    };
    this.gamepadConnected = false;
    
    this.sprintPressed = false;
    this.touchSprintPressed = false;
    this.gatherPressed = false;
    this.touchGatherPressed = false;
    this.throwPressed = false;
    this.throwPressStartTime = 0;
    this.touchThrowPressed = false;
    
    this._initKeyboard();
    this._initMouse();
    this._initGamepad();
    if (this.isTouchDevice) {
      this._initTouch();
    }
  }
  
  _initKeyboard() {
    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
      if (e.code === 'Space') {
        e.preventDefault();
        this.sprintPressed = true;
      }
    });
    
    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
      if (e.code === 'Space') {
        this.sprintPressed = false;
      }
    });
  }
  
  _onPointerLockFailed() {
    this.pointerLockAvailable = false;
    const hint = document.getElementById('pointer-lock-hint');
    if (hint) {
      hint.textContent = '请在新标签页中打开以启用鼠标控制视角';
    }
  }

  _requestPointerLock() {
    if (this.isPointerLocked || this.isTouchDevice || !this.pointerLockAvailable) return;
    try {
      const result = this.canvas.requestPointerLock();
      if (result && typeof result.catch === 'function') {
        result.catch(() => {
          this._onPointerLockFailed();
        });
      }
    } catch (e) {
      this._onPointerLockFailed();
    }
  }

  _initMouse() {
    this.canvas.addEventListener('click', () => {
      this._requestPointerLock();
    });

    this.canvas.addEventListener('mousedown', (e) => {
      if (e.button === 2) {
        this.gatherPressed = true;
      }
      if (e.button === 0 && this.isPointerLocked) {
        this.throwPressed = true;
        this.throwPressStartTime = Date.now();
      }
    });

    this.canvas.addEventListener('mouseup', (e) => {
      if (e.button === 2) {
        this.gatherPressed = false;
      }
      if (e.button === 0) {
        this.throwPressed = false;
      }
    });

    const hint = document.getElementById('pointer-lock-hint');
    if (hint) {
      hint.addEventListener('click', () => {
        if (this.pointerLockAvailable) {
          this._requestPointerLock();
        } else {
          window.open(window.location.href, '_blank');
        }
      });
    }

    document.addEventListener('pointerlockchange', () => {
      this.isPointerLocked = document.pointerLockElement === this.canvas;
      const hint = document.getElementById('pointer-lock-hint');
      if (hint) {
        if (this.isPointerLocked) {
          hint.classList.remove('active');
        } else {
          hint.classList.add('active');
        }
      }
    });

    document.addEventListener('pointerlockerror', () => {
      this._onPointerLockFailed();
    });

    document.addEventListener('mousemove', (e) => {
      if (this.isPointerLocked) {
        this.mouse.deltaX -= e.movementX * GAME_CONFIG.MOUSE_SENSITIVITY;
        this.mouse.deltaY -= e.movementY * GAME_CONFIG.MOUSE_SENSITIVITY * 0.8;
      }
    });

    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  }
  
  _initTouch() {
    const moveJoystick = document.getElementById('move-joystick');
    const moveKnob = document.getElementById('move-knob');
    const lookJoystick = document.getElementById('look-joystick');
    const lookKnob = document.getElementById('look-knob');
    
    if (!moveJoystick || !lookJoystick) return;
    
    const setupJoystick = (element, knob, state) => {
      let startX = 0;
      let startY = 0;
      
      element.addEventListener('touchstart', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const touch = e.changedTouches[0];
        state.touchId = touch.identifier;
        state.active = true;
        startX = touch.clientX;
        startY = touch.clientY;
      }, { passive: false });
      
      element.addEventListener('touchmove', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!state.active) return;
        
        const touch = this._findTouch(e.changedTouches, state.touchId);
        if (!touch) return;
        
        const maxDist = 40;
        
        let dx = touch.clientX - startX;
        let dy = touch.clientY - startY;
        
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > maxDist) {
          dx = (dx / dist) * maxDist;
          dy = (dy / dist) * maxDist;
        }
        
        state.x = dx / maxDist;
        state.y = dy / maxDist;
        
        if (Math.abs(state.x) < GAME_CONFIG.JOYSTICK_DEADZONE) state.x = 0;
        if (Math.abs(state.y) < GAME_CONFIG.JOYSTICK_DEADZONE) state.y = 0;
        
        knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
      }, { passive: false });
      
      const endHandler = (e) => {
        e.preventDefault();
        const touch = this._findTouch(e.changedTouches, state.touchId);
        if (!touch) return;
        
        state.active = false;
        state.x = 0;
        state.y = 0;
        state.touchId = null;
        knob.style.transform = 'translate(-50%, -50%)';
      };
      
      element.addEventListener('touchend', endHandler, { passive: false });
      element.addEventListener('touchcancel', endHandler, { passive: false });
    };
    
    setupJoystick(moveJoystick, moveKnob, this.touch.moveJoystick);
    setupJoystick(lookJoystick, lookKnob, this.touch.lookJoystick);
    
    const sprintBtn = document.getElementById('sprint-btn');
    if (sprintBtn) {
      const updateSprintUI = (pressed) => {
        if (pressed) {
          sprintBtn.classList.add('sprinting');
        } else {
          sprintBtn.classList.remove('sprinting');
        }
      };
      
      sprintBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setTouchSprintPressed(true);
        updateSprintUI(true);
      }, { passive: false });
      
      const endSprint = (e) => {
        e.preventDefault();
        this.setTouchSprintPressed(false);
        updateSprintUI(false);
      };
      
      sprintBtn.addEventListener('touchend', endSprint, { passive: false });
      sprintBtn.addEventListener('touchcancel', endSprint, { passive: false });
      
      sprintBtn.addEventListener('mousedown', (e) => {
        e.preventDefault();
        this.setTouchSprintPressed(true);
        updateSprintUI(true);
      });
      
      const endSprintMouse = () => {
        this.setTouchSprintPressed(false);
        updateSprintUI(false);
      };
      
      sprintBtn.addEventListener('mouseup', endSprintMouse);
      sprintBtn.addEventListener('mouseleave', endSprintMouse);
    }
    
    const gatherBtn = document.getElementById('gather-btn');
    if (gatherBtn) {
      const updateGatherUI = (pressed) => {
        if (pressed) {
          gatherBtn.classList.add('gathering');
        } else {
          gatherBtn.classList.remove('gathering');
        }
      };
      
      gatherBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setTouchGatherPressed(true);
        updateGatherUI(true);
      }, { passive: false });
      
      const endGather = (e) => {
        e.preventDefault();
        this.setTouchGatherPressed(false);
        updateGatherUI(false);
      };
      
      gatherBtn.addEventListener('touchend', endGather, { passive: false });
      gatherBtn.addEventListener('touchcancel', endGather, { passive: false });
      
      gatherBtn.addEventListener('mousedown', (e) => {
        e.preventDefault();
        this.setTouchGatherPressed(true);
        updateGatherUI(true);
      });
      
      const endGatherMouse = () => {
        this.setTouchGatherPressed(false);
        updateGatherUI(false);
      };
      
      gatherBtn.addEventListener('mouseup', endGatherMouse);
      gatherBtn.addEventListener('mouseleave', endGatherMouse);
    }
    
    const throwBtn = document.getElementById('throw-btn');
    if (throwBtn) {
      const updateThrowUI = (pressed) => {
        if (pressed) {
          throwBtn.classList.add('throwing');
        } else {
          throwBtn.classList.remove('throwing');
        }
      };
      
      throwBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setTouchThrowPressed(true);
        updateThrowUI(true);
      }, { passive: false });
      
      const endThrow = (e) => {
        e.preventDefault();
        this.setTouchThrowPressed(false);
        updateThrowUI(false);
      };
      
      throwBtn.addEventListener('touchend', endThrow, { passive: false });
      throwBtn.addEventListener('touchcancel', endThrow, { passive: false });
      
      throwBtn.addEventListener('mousedown', (e) => {
        e.preventDefault();
        this.setTouchThrowPressed(true);
        updateThrowUI(true);
      });
      
      const endThrowMouse = () => {
        this.setTouchThrowPressed(false);
        updateThrowUI(false);
      };
      
      throwBtn.addEventListener('mouseup', endThrowMouse);
      throwBtn.addEventListener('mouseleave', endThrowMouse);
    }
  }
  
  _findTouch(touchList, id) {
    for (let i = 0; i < touchList.length; i++) {
      if (touchList[i].identifier === id) {
        return touchList[i];
      }
    }
    return null;
  }
  
  _initGamepad() {
    window.addEventListener('gamepadconnected', (e) => {
      this.gamepadConnected = true;
      console.log('游戏手柄已连接:', e.gamepad.id);
    });
    
    window.addEventListener('gamepaddisconnected', (e) => {
      this.gamepadConnected = false;
      console.log('游戏手柄已断开:', e.gamepad.id);
    });
  }
  
  _updateGamepadState() {
    if (!this.gamepadConnected) return;
    
    const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
    let gamepad = null;
    
    for (let i = 0; i < gamepads.length; i++) {
      if (gamepads[i]) {
        gamepad = gamepads[i];
        break;
      }
    }
    
    if (!gamepad) {
      this.gamepad.moveJoystick.x = 0;
      this.gamepad.moveJoystick.y = 0;
      this.gamepad.lookJoystick.x = 0;
      this.gamepad.lookJoystick.y = 0;
      return;
    }
    
    let leftX = gamepad.axes[0];
    let leftY = gamepad.axes[1];
    let rightX = gamepad.axes[2];
    let rightY = gamepad.axes[3];
    
    if (Math.abs(leftX) < GAME_CONFIG.JOYSTICK_DEADZONE) leftX = 0;
    if (Math.abs(leftY) < GAME_CONFIG.JOYSTICK_DEADZONE) leftY = 0;
    if (Math.abs(rightX) < GAME_CONFIG.JOYSTICK_DEADZONE) rightX = 0;
    if (Math.abs(rightY) < GAME_CONFIG.JOYSTICK_DEADZONE) rightY = 0;
    
    this.gamepad.moveJoystick.x = leftX;
    this.gamepad.moveJoystick.y = leftY;
    this.gamepad.lookJoystick.x = rightX;
    this.gamepad.lookJoystick.y = rightY;
    
    this.gamepad.moveJoystick.active = leftX !== 0 || leftY !== 0;
    this.gamepad.lookJoystick.active = rightX !== 0 || rightY !== 0;
    
    this.gamepad.buttonA = gamepad.buttons[0] ? gamepad.buttons[0].pressed : false;
    this.gamepad.buttonLT = gamepad.buttons[6] ? gamepad.buttons[6].pressed : false;
    this.gamepad.buttonRT = gamepad.buttons[7] ? gamepad.buttons[7].pressed : false;
    
    if (this.gamepad.buttonRT && !this.gamepad.buttonRTPrev) {
      this.throwPressStartTime = Date.now();
    }
    this.gamepad.buttonRTPrev = this.gamepad.buttonRT;
  }
  
  isSprintPressed() {
    if (this.isTouchDevice) {
      return this.touchSprintPressed;
    }
    
    this._updateGamepadState();
    
    if (this.gamepadConnected && this.gamepad.buttonA) {
      return true;
    }
    
    return this.sprintPressed;
  }
  
  isGatherPressed() {
    if (this.isTouchDevice) {
      return this.touchGatherPressed;
    }
    
    this._updateGamepadState();
    
    if (this.gamepadConnected && this.gamepad.buttonLT) {
      return true;
    }
    
    return this.gatherPressed;
  }
  
  isThrowPressed() {
    if (this.isTouchDevice) {
      return this.touchThrowPressed;
    }
    
    this._updateGamepadState();
    
    if (this.gamepadConnected && this.gamepad.buttonRT) {
      return true;
    }
    
    return this.throwPressed;
  }
  
  getThrowChargeTime() {
    if (!this.isThrowPressed()) return 0;
    return (Date.now() - this.throwPressStartTime) / 1000;
  }
  
  resetThrowCharge() {
    this.throwPressStartTime = Date.now();
  }
  
  setTouchSprintPressed(pressed) {
    this.touchSprintPressed = pressed;
  }
  
  setTouchGatherPressed(pressed) {
    this.touchGatherPressed = pressed;
  }
  
  setTouchThrowPressed(pressed) {
    if (pressed && !this.touchThrowPressed) {
      this.throwPressStartTime = Date.now();
    }
    this.touchThrowPressed = pressed;
  }
  
  getMovementInput() {
    if (this.isTouchDevice) {
      const x = this.touch.moveJoystick.x;
      const y = this.touch.moveJoystick.y;
      return {
        forward: y < 0 ? -y : 0,
        backward: y > 0 ? y : 0,
        left: x < 0 ? -x : 0,
        right: x > 0 ? x : 0
      };
    }
    
    this._updateGamepadState();
    
    if (this.gamepadConnected && this.gamepad.moveJoystick.active) {
      const x = this.gamepad.moveJoystick.x;
      const y = this.gamepad.moveJoystick.y;
      return {
        forward: y < 0 ? -y : 0,
        backward: y > 0 ? y : 0,
        left: x < 0 ? -x : 0,
        right: x > 0 ? x : 0
      };
    }
    
    return {
      forward: this.keys['KeyW'] || this.keys['ArrowUp'] ? 1 : 0,
      backward: this.keys['KeyS'] || this.keys['ArrowDown'] ? 1 : 0,
      left: this.keys['KeyA'] || this.keys['ArrowLeft'] ? 1 : 0,
      right: this.keys['KeyD'] || this.keys['ArrowRight'] ? 1 : 0
    };
  }
  
  getLookInput() {
    if (this.isTouchDevice) {
      return {
        yaw: -this.touch.lookJoystick.x * GAME_CONFIG.TOUCH_SENSITIVITY * 10,
        pitch: -this.touch.lookJoystick.y * GAME_CONFIG.TOUCH_SENSITIVITY * 10 * 0.8
      };
    }
    
    this._updateGamepadState();
    
    if (this.gamepadConnected && this.gamepad.lookJoystick.active) {
      return {
        yaw: -this.gamepad.lookJoystick.x * GAME_CONFIG.GAMEPAD_SENSITIVITY * GAME_CONFIG.GAMEPAD_LOOK_SPEED * 100 * 0.25,
        pitch: -this.gamepad.lookJoystick.y * GAME_CONFIG.GAMEPAD_SENSITIVITY * GAME_CONFIG.GAMEPAD_LOOK_SPEED * 100 * 0.8
      };
    }
    
    const input = {
      yaw: this.mouse.deltaX,
      pitch: this.mouse.deltaY
    };
    
    this.mouse.deltaX = 0;
    this.mouse.deltaY = 0;
    
    return input;
  }
  
  requestPointerLock() {
    this._requestPointerLock();
  }
  
  exitPointerLock() {
    if (this.isPointerLocked) {
      document.exitPointerLock();
    }
  }
  
  showTouchControls(show) {
    const touchControls = document.getElementById('touch-controls');
    if (show && this.isTouchDevice) {
      touchControls.classList.add('active');
    } else {
      touchControls.classList.remove('active');
    }
  }
  
  showPointerLockHint(show) {
    if (this.isTouchDevice) return;
    const hint = document.getElementById('pointer-lock-hint');
    if (hint) {
      if (show) {
        hint.classList.add('active');
      } else {
        hint.classList.remove('active');
      }
    }
  }
}
