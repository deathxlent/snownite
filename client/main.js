import { GameEngine } from './GameEngine.js';
import { NetworkClient } from './NetworkClient.js';
import { MapEditor } from './MapEditor.js';

let gameEngine = null;
let networkClient = null;
let mapEditor = null;
let pendingMapData = null;

const mainMenu = document.getElementById('main-menu');
const connectMenu = document.getElementById('connect-menu');
const mapSelectMenu = document.getElementById('map-select-menu');
const mapEditorPage = document.getElementById('map-editor-page');
const gameUI = document.getElementById('game-ui');
const loading = document.getElementById('loading');
const canvas = document.getElementById('game-canvas');

function startSinglePlayer(mapData) {
  showLoading();

  setTimeout(() => {
    hideAllMenus();
    gameUI.classList.add('active');

    try {
      if (mapData) {
        window.__pendingMapData = mapData;
      }
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

async function showMapSelectMenu() {
  hideAllMenus();
  mapSelectMenu.style.display = 'flex';

  const mapList = document.getElementById('map-list');
  mapList.innerHTML = '<div style="color:rgba(255,255,255,0.6);text-align:center;">加载中...</div>';

  const storedMaps = MapEditor.getStoredMaps();
  let bundledMaps = [];
  try {
    bundledMaps = await MapEditor.getBundledMaps();
  } catch { }

  const allMaps = [];

  for (const m of bundledMaps) {
    allMaps.push({ ...m, source: 'bundled' });
  }

  for (const m of storedMaps) {
    if (!bundledMaps.find(b => b.name === m.name)) {
      allMaps.push({ ...m, source: 'local' });
    }
  }

  if (allMaps.length === 0) {
    mapList.innerHTML = '<div style="color:rgba(255,255,255,0.6);text-align:center;">暂无保存的地图</div>';
  } else {
    mapList.innerHTML = '';
    for (const mapInfo of allMaps) {
      const item = document.createElement('div');
      item.className = 'map-item';

      const info = document.createElement('div');
      info.className = 'map-item-info';
      const nameSpan = document.createElement('span');
      nameSpan.className = 'map-item-name';
      nameSpan.textContent = mapInfo.name;
      const tag = document.createElement('span');
      tag.className = 'map-source-tag';
      tag.textContent = mapInfo.source === 'bundled' ? '内置' : '本地';
      nameSpan.appendChild(tag);
      const detail = document.createElement('span');
      detail.className = 'map-item-detail';
      detail.textContent = `墙: ${mapInfo.walls?.length || 0}  屋: ${mapInfo.houses?.length || 0}`;
      info.appendChild(nameSpan);
      info.appendChild(detail);

      const actions = document.createElement('div');
      actions.className = 'map-item-actions';

      const playBtn = document.createElement('button');
      playBtn.className = 'map-item-btn map-item-play';
      playBtn.textContent = '▶ 开玩';
      playBtn.addEventListener('click', async () => {
        let mapData = mapInfo;
        if (mapInfo.source === 'bundled' && mapInfo.filename) {
          try {
            mapData = await MapEditor.loadBundledMap(mapInfo.filename);
          } catch {
            alert('地图加载失败');
            return;
          }
        }
        mapSelectMenu.style.display = 'none';
        startSinglePlayer(mapData);
      });

      const editBtn = document.createElement('button');
      editBtn.className = 'map-item-btn map-item-edit';
      editBtn.textContent = '✏️ 编辑';
      editBtn.addEventListener('click', async () => {
        let mapData = mapInfo;
        if (mapInfo.source === 'bundled' && mapInfo.filename) {
          try {
            mapData = await MapEditor.loadBundledMap(mapInfo.filename);
          } catch {
            alert('地图加载失败');
            return;
          }
        }
        mapSelectMenu.style.display = 'none';
        openMapEditor(mapData);
      });

      actions.appendChild(playBtn);
      actions.appendChild(editBtn);

      if (mapInfo.source === 'local') {
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'map-item-btn map-item-delete';
        deleteBtn.textContent = '🗑️';
        deleteBtn.addEventListener('click', () => {
          if (confirm(`确定删除地图 "${mapInfo.name}" 吗？`)) {
            MapEditor.deleteFromLocalStorage(mapInfo.name);
            showMapSelectMenu();
          }
        });
        actions.appendChild(deleteBtn);
      }

      item.appendChild(info);
      item.appendChild(actions);
      mapList.appendChild(item);
    }
  }
}

function openMapEditor(mapData) {
  hideAllMenus();
  mapEditorPage.style.display = 'flex';

  const editorCanvas = document.getElementById('editor-canvas');
  if (mapEditor) {
    mapEditor.destroy();
  }
  mapEditor = new MapEditor(editorCanvas);

  if (mapData) {
    mapEditor.loadMapData(mapData);
    document.getElementById('editor-map-name').value = mapData.name || '我的地图';
  }

  window.dispatchEvent(new Event('mapEditorResize'));
}

function closeMapEditor() {
  if (mapEditor) {
    mapEditor.destroy();
    mapEditor = null;
  }
  mapEditorPage.style.display = 'none';
  mainMenu.classList.remove('hidden');
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

function truncateName(name, maxChars = 8) {
  let count = 0;
  let result = '';
  for (const char of name) {
    if (count >= maxChars) break;
    result += char;
    count++;
  }
  return result;
}

async function connectToServer() {
  const serverAddress = document.getElementById('server-address').value.trim();
  let playerName = document.getElementById('player-name').value.trim();

  if (!serverAddress) {
    alert('请填写服务器地址');
    return;
  }

  if (!playerName) {
    alert('请输入你的名字');
    return;
  }

  playerName = truncateName(playerName, 8);

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

  window.__pendingMapData = null;

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
  mapSelectMenu.style.display = 'none';
  mapEditorPage.style.display = 'none';
  gameUI.classList.remove('active');
}

document.getElementById('btn-single').addEventListener('click', async () => {
  const storedMaps = MapEditor.getStoredMaps();
  let bundledMaps = [];
  try {
    bundledMaps = await MapEditor.getBundledMaps();
  } catch { }

  if (storedMaps.length > 0 || bundledMaps.length > 0) {
    showMapSelectMenu();
  } else {
    startSinglePlayer(null);
  }
});

document.getElementById('btn-random-map').addEventListener('click', () => {
  mapSelectMenu.style.display = 'none';
  startSinglePlayer(null);
});

document.getElementById('btn-map-select-back').addEventListener('click', () => {
  mapSelectMenu.style.display = 'none';
  mainMenu.classList.remove('hidden');
});

document.getElementById('btn-multi').addEventListener('click', showConnectMenu);
document.getElementById('btn-connect').addEventListener('click', connectToServer);
document.getElementById('btn-back').addEventListener('click', backToMainMenu);
document.getElementById('back-btn').addEventListener('click', exitGame);
document.getElementById('btn-editor').addEventListener('click', () => openMapEditor(null));

document.querySelectorAll('[data-tool]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-tool]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if (mapEditor) {
      mapEditor.setTool(btn.dataset.tool);
    }
  });
});

document.getElementById('editor-snap').addEventListener('change', (e) => {
  if (mapEditor) {
    mapEditor.gridSnap = e.target.checked;
  }
});

document.getElementById('editor-map-name').addEventListener('input', (e) => {
  if (mapEditor) {
    mapEditor.mapName = e.target.value;
  }
});

document.getElementById('editor-save').addEventListener('click', () => {
  if (mapEditor) {
    const name = mapEditor.saveToLocalStorage();
    alert(`地图 "${name}" 已保存到本地！`);
  }
});

document.getElementById('editor-export').addEventListener('click', () => {
  if (mapEditor) {
    mapEditor.exportAsFile();
  }
});

document.getElementById('editor-import').addEventListener('click', async () => {
  if (mapEditor) {
    const success = await mapEditor.importFromFile();
    if (!success) {
      alert('导入失败，请选择有效的地图JSON文件');
    } else {
      document.getElementById('editor-map-name').value = mapEditor.mapName;
    }
  }
});

document.getElementById('editor-clear').addEventListener('click', () => {
  if (mapEditor && confirm('确定清空地图？')) {
    mapEditor.clearAll();
  }
});

document.getElementById('editor-play').addEventListener('click', () => {
  if (mapEditor) {
    const mapData = mapEditor.getMapData();
    mapEditorPage.style.display = 'none';
    startSinglePlayer(mapData);
  }
});

document.getElementById('editor-back').addEventListener('click', closeMapEditor);

window.addEventListener('beforeunload', () => {
  if (gameEngine) {
    gameEngine.destroy();
  }
  if (networkClient) {
    networkClient.disconnect();
  }
});

window.addEventListener('resize', () => {
  if (mapEditor && mapEditorPage.style.display === 'flex') {
    window.dispatchEvent(new Event('mapEditorResize'));
  }
});
