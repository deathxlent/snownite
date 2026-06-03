import { MESSAGE_TYPES } from '../shared/constants.js';

export class NetworkClient {
  constructor() {
    this.ws = null;
    this.playerId = null;
    this.playerName = 'Player';
    this.playerTeam = 'blue';
    this.isConnected = false;
    
    this.onPlayerJoin = null;
    this.onPlayerLeave = null;
    this.onWorldState = null;
    this.onWelcome = null;
    this.onDisconnect = null;
  }
  
  connect(serverUrl, playerName) {
    return new Promise((resolve, reject) => {
      this.playerName = playerName;
      
      try {
        this.ws = new WebSocket(serverUrl);
      } catch (error) {
        reject(error);
        return;
      }
      
      this.ws.onopen = () => {
        console.log('Connected to server');
      };
      
      this.ws.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data);
          this._handleMessage(message);
        } catch (error) {
          console.error('Error parsing message:', error);
        }
      };
      
      this.ws.onclose = () => {
        console.log('Disconnected from server');
        this.isConnected = false;
        if (this.onDisconnect) {
          this.onDisconnect();
        }
      };
      
      this.ws.onerror = (event) => {
        console.error('WebSocket error event:', event);
        reject(new Error('无法连接服务器，请检查地址是否正确'));
      };
      
      const timeout = setTimeout(() => {
        reject(new Error('Connection timeout'));
      }, 5000);
      
      this._originalOnWelcome = this.onWelcome;
      this.onWelcome = (data) => {
        clearTimeout(timeout);
        this.isConnected = true;
        this.playerId = data.playerId;
        this.playerTeam = data.team || 'blue';
        if (this._originalOnWelcome) {
          this._originalOnWelcome(data);
        }
        resolve();
      };
    });
  }
  
  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.isConnected = false;
    this.playerId = null;
  }
  
  _handleMessage(message) {
    switch (message.type) {
      case MESSAGE_TYPES.WELCOME:
        if (this.onWelcome) {
          this.onWelcome(message.data);
        }
        break;
        
      case MESSAGE_TYPES.PLAYER_JOIN:
        if (this.onPlayerJoin) {
          this.onPlayerJoin(message.data);
        }
        break;
        
      case MESSAGE_TYPES.PLAYER_LEAVE:
        if (this.onPlayerLeave) {
          this.onPlayerLeave(message.data);
        }
        break;
        
      case MESSAGE_TYPES.WORLD_STATE:
        if (this.onWorldState) {
          this.onWorldState(message.data);
        }
        break;
    }
  }
  
  sendPlayerUpdate(data) {
    if (!this.isConnected || !this.ws) return;
    
    this._send({
      type: MESSAGE_TYPES.PLAYER_MOVE,
      data: {
        id: this.playerId,
        name: this.playerName,
        ...data
      }
    });
  }
  
  _send(message) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(message));
    }
  }
}
