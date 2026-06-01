import { GAME_CONFIG } from '../shared/constants.js';

export class InputSystem {
  constructor() {
    this.keys = {};
    this.mouse = {
      isDown: false,
      lastX: 0,
      lastY: 0,
      deltaX: 0,
      deltaY: 0
    };
    this.touch = {
      moveJoystick: { active: false, x: 0, y: 0 },
      lookJoystick: { active: false, x: 0, y: 0 }
    };
    
    this.isTouchDevice = 'ontouchstart' in window;
    
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
    const canvas = document.getElementById('game-canvas');
    
    canvas.addEventListener('mousedown', (e) => {
      if (e.button === 0) {
        this.mouse.isDown = true;
        this.mouse.lastX = e.clientX;
        this.mouse.lastY = e.clientY;
      }
    });
    
    window.addEventListener('mouseup', (e) => {
      if (e.button === 0) {
        this.mouse.isDown = false;
      }
    });
    
    canvas.addEventListener('mousemove', (e) => {
      if (this.mouse.isDown) {
        this.mouse.deltaX += (e.clientX - this.mouse.lastX) * GAME_CONFIG.MOUSE_SENSITIVITY;
        this.mouse.deltaY += (e.clientY - this.mouse.lastY) * GAME_CONFIG.MOUSE_SENSITIVITY;
        this.mouse.lastX = e.clientX;
        this.mouse.lastY = e.clientY;
      }
    });
    
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  }
  
  _initTouch() {
    const moveJoystick = document.getElementById('move-joystick');
    const moveKnob = document.getElementById('move-knob');
    const lookJoystick = document.getElementById('look-joystick');
    const lookKnob = document.getElementById('look-knob');
    
    const setupJoystick = (element, knob, state) => {
      let startX = 0, startY = 0;
      let knobStartX = 0, knobStartY = 0;
      
      element.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        state.active = true;
        startX = touch.clientX;
        startY = touch.clientY;
        const rect = element.getBoundingClientRect();
        knobStartX = rect.left + rect.width / 2;
        knobStartY = rect.top + rect.height / 2;
      });
      
      element.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (!state.active) return;
        
        const touch = e.touches[0];
        const maxDist = 35;
        
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
      });
      
      element.addEventListener('touchend', (e) => {
        e.preventDefault();
        state.active = false;
        state.x = 0;
        state.y = 0;
        knob.style.transform = 'translate(-50%, -50%)';
      });
    };
    
    setupJoystick(moveJoystick, moveKnob, this.touch.moveJoystick);
    setupJoystick(lookJoystick, lookKnob, this.touch.lookJoystick);
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
  
  showTouchControls(show) {
    const touchControls = document.getElementById('touch-controls');
    if (show && this.isTouchDevice) {
      touchControls.classList.add('active');
    } else {
      touchControls.classList.remove('active');
    }
  }
}
