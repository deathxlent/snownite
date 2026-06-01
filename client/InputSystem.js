import { GAME_CONFIG } from '../shared/constants.js';

export class InputSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = {};
    this.isPointerLocked = false;
    
    this.mouse = {
      deltaX: 0,
      deltaY: 0
    };
    
    this.touch = {
      moveJoystick: { active: false, x: 0, y: 0, touchId: null },
      lookJoystick: { active: false, x: 0, y: 0, touchId: null }
    };
    
    this.isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    
    this._initKeyboard();
    this._initMouse();
    if (this.isTouchDevice) {
      this._initTouch();
    }
  }
  
  _initKeyboard() {
    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
    });
    
    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });
  }
  
  _initMouse() {
    this.canvas.addEventListener('click', () => {
      if (!this.isPointerLocked && !this.isTouchDevice) {
        this.canvas.requestPointerLock();
      }
    });
    
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
    
    document.addEventListener('mousemove', (e) => {
      if (this.isPointerLocked) {
        this.mouse.deltaX += e.movementX * GAME_CONFIG.MOUSE_SENSITIVITY;
        this.mouse.deltaY += e.movementY * GAME_CONFIG.MOUSE_SENSITIVITY;
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
  }
  
  _findTouch(touchList, id) {
    for (let i = 0; i < touchList.length; i++) {
      if (touchList[i].identifier === id) {
        return touchList[i];
      }
    }
    return null;
  }
  
  getMovementInput() {
    if (this.isTouchDevice) {
      return {
        forward: -this.touch.moveJoystick.y,
        backward: 0,
        left: -this.touch.moveJoystick.x,
        right: 0
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
        pitch: this.touch.lookJoystick.y * GAME_CONFIG.TOUCH_SENSITIVITY * 10
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
    if (!this.isTouchDevice && !this.isPointerLocked) {
      this.canvas.requestPointerLock();
    }
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
