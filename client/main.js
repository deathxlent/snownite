import { GameEngine } from './GameEngine.js';
import { NetworkClient } from './NetworkClient.js';

let gameEngine = null;
let networkClient = null;

const mainMenu = document.getElementById('main-menu');
const connectMenu = document.getElementById('connect-menu');
const gameUI = document.getElementById('game-ui');
const loading = document.getElementById('loading');
const canvas = document.getElementById('game-canvas');

window.startSinglePlayer = function() {
  showLoading();
  
  setTimeout(() => {
    hideAllMenus();
    gameUI.classList.add('active');
    
    gameEngine = new GameEngine(canvas, false, null);
    gameEngine.start();
    
    hideLoading();
  }, 100);
};

window.showConnectMenu = function() {
  mainMenu.classList.add('hidden');
  connectMenu.style.display = 'flex';
};

window.backToMainMenu = function() {
  connectMenu.style.display = 'none';
  mainMenu.classList.remove('hidden');
};

window.connectToServer = async function() {
  const serverAddress = document.getElementById('server-address').value;
  const playerName = document.getElementById('player-name').value;
  
  if (!serverAddress || !playerName) {
    alert('请填写服务器地址和玩家名称');
    return;
  }
  
  showLoading();
  
  try {
    networkClient = new NetworkClient();
    await networkClient.connect(serverAddress, playerName);
    
    hideAllMenus();
    gameUI.classList.add('active');
    
    gameEngine = new GameEngine(canvas, true, networkClient);
    gameEngine.start();
    
  } catch (error) {
    console.error('Connection failed:', error);
    alert('连接服务器失败: ' + error.message);
  } finally {
    hideLoading();
  }
};

window.exitGame = function() {
  if (gameEngine) {
    gameEngine.destroy();
    gameEngine = null;
  }
  
  if (networkClient) {
    networkClient.disconnect();
    networkClient = null;
  }
  
  gameUI.classList.remove('active');
  mainMenu.classList.remove('hidden');
};

function showLoading() {
  loading.classList.add('active');
}

function hideLoading() {
  loading.classList.remove('active');
}

function hideAllMenus() {
  mainMenu.classList.add('hidden');
  connectMenu.style.display = 'none';
  gameUI.classList.remove('active');
}

window.addEventListener('beforeunload', () => {
  if (gameEngine) {
    gameEngine.destroy();
  }
  if (networkClient) {
    networkClient.disconnect();
  }
});
