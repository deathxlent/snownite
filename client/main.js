import { GameEngine } from './GameEngine.js';
import { NetworkClient } from './NetworkClient.js';

let gameEngine = null;
let networkClient = null;

const mainMenu = document.getElementById('main-menu');
const connectMenu = document.getElementById('connect-menu');
const gameUI = document.getElementById('game-ui');
const loading = document.getElementById('loading');
const canvas = document.getElementById('game-canvas');

function startSinglePlayer() {
  showLoading();
  
  setTimeout(() => {
    hideAllMenus();
    gameUI.classList.add('active');
    
    try {
      gameEngine = new GameEngine(canvas, false, null, '');
      gameEngine.start();
    } catch (error) {
      console.error('Game init error:', error);
      alert('游戏初始化失败: ' + error.message);
      backToMainMenu();
    }
    
    hideLoading();
  }, 100);
}

function showConnectMenu() {
  mainMenu.classList.add('hidden');
  connectMenu.style.display = 'flex';
  
  const serverInput = document.getElementById('server-address');
  if (serverInput && serverInput.value === 'ws://localhost:8765') {
    const currentHost = window.location.hostname;
    if (currentHost && currentHost !== 'localhost' && currentHost !== '127.0.0.1') {
      serverInput.value = `ws://${currentHost}:8765`;
    }
  }
}

function backToMainMenu() {
  connectMenu.style.display = 'none';
  mainMenu.classList.remove('hidden');
}

async function connectToServer() {
  const serverAddress = document.getElementById('server-address').value.trim();
  const playerName = document.getElementById('player-name').value.trim();
  
  if (!serverAddress) {
    alert('请填写服务器地址');
    return;
  }
  
  if (!playerName) {
    alert('请输入你的名字');
    return;
  }
  
  showLoading();
  
  try {
    networkClient = new NetworkClient();
    await networkClient.connect(serverAddress, playerName);
    
    hideAllMenus();
    gameUI.classList.add('active');
    
    gameEngine = new GameEngine(canvas, true, networkClient, playerName);
    gameEngine.start();
    
  } catch (error) {
    console.error('Connection failed:', error);
    alert('连接服务器失败: ' + error.message);
  } finally {
    hideLoading();
  }
}

function exitGame() {
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
}

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

document.getElementById('btn-single').addEventListener('click', startSinglePlayer);
document.getElementById('btn-multi').addEventListener('click', showConnectMenu);
document.getElementById('btn-connect').addEventListener('click', connectToServer);
document.getElementById('btn-back').addEventListener('click', backToMainMenu);
document.getElementById('back-btn').addEventListener('click', exitGame);

window.addEventListener('beforeunload', () => {
  if (gameEngine) {
    gameEngine.destroy();
  }
  if (networkClient) {
    networkClient.disconnect();
  }
});
