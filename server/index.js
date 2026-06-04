import { WebSocketServer } from 'ws';
import { GAME_CONFIG, MESSAGE_TYPES } from '../shared/constants.js';

const wss = new WebSocketServer({ port: GAME_CONFIG.SERVER_PORT });

const players = new Map();
let nextPlayerId = 1;

console.log(`🎮 雪夜打雪仗服务器启动中...`);
console.log(`📡 WebSocket服务器运行在端口 ${GAME_CONFIG.SERVER_PORT}`);
console.log(`⏱️  网络更新频率: ${GAME_CONFIG.NETWORK_TICK_RATE} Hz`);

function generateId() {
  return `player_${nextPlayerId++}`;
}

function broadcast(message) {
  const messageStr = JSON.stringify(message);
  for (const player of players.values()) {
    if (player.ws.readyState === 1) {
      player.ws.send(messageStr);
    }
  }
}

function sendTo(ws, message) {
  if (ws.readyState === 1) {
    ws.send(JSON.stringify(message));
  }
}

function getPlayersList() {
  const list = [];
  for (const [id, player] of players) {
    list.push({
      id,
      name: player.name,
      team: player.team,
      x: player.x,
      z: player.z,
      yaw: player.yaw
    });
  }
  return list;
}

function assignTeam() {
  let blueCount = 0;
  let redCount = 0;
  for (const player of players.values()) {
    if (player.team === 'blue') blueCount++;
    else if (player.team === 'red') redCount++;
  }
  return blueCount <= redCount ? 'blue' : 'red';
}

function assignSpawnPosition(team) {
  const spawnRadius = 15;
  const teamPlayers = [];
  for (const player of players.values()) {
    if (player.team === team) {
      teamPlayers.push(player);
    }
  }
  const playerIndex = teamPlayers.length;
  const baseAngle = team === 'blue' ? 0 : Math.PI;
  const angle = baseAngle + (playerIndex / 5) * Math.PI * 0.8 - Math.PI * 0.4;
  return {
    x: Math.cos(angle) * spawnRadius,
    z: Math.sin(angle) * spawnRadius,
    yaw: team === 'blue' ? 0 : Math.PI
  };
}

wss.on('connection', (ws) => {
  const playerId = generateId();
  console.log(`🆕 新玩家连接: ${playerId}`);
  
  const team = assignTeam();
  const spawnPos = assignSpawnPosition(team);
  
  const playerData = {
    id: playerId,
    name: 'Unknown',
    team: team,
    x: spawnPos.x,
    z: spawnPos.z,
    yaw: spawnPos.yaw,
    ws: ws
  };
  
  players.set(playerId, playerData);
  
  sendTo(ws, {
    type: MESSAGE_TYPES.WELCOME,
    data: {
      playerId: playerId,
      team: team,
      spawnX: spawnPos.x,
      spawnZ: spawnPos.z,
      spawnYaw: spawnPos.yaw,
      players: getPlayersList()
    }
  });
  
  broadcast({
    type: MESSAGE_TYPES.PLAYER_JOIN,
    data: {
      id: playerId,
      name: playerData.name,
      team: playerData.team,
      x: playerData.x,
      z: playerData.z,
      yaw: playerData.yaw
    }
  });
  
  ws.on('message', (data) => {
    try {
      const message = JSON.parse(data.toString());
      handleMessage(playerId, message);
    } catch (error) {
      console.error(`❌ 解析消息失败 (${playerId}):`, error);
    }
  });
  
  ws.on('close', () => {
    console.log(`👋 玩家断开连接: ${playerId}`);
    players.delete(playerId);
    
    broadcast({
      type: MESSAGE_TYPES.PLAYER_LEAVE,
      data: playerId
    });
  });
  
  ws.on('error', (error) => {
    console.error(`❌ 连接错误 (${playerId}):`, error);
  });
});

function handleMessage(playerId, message) {
  const player = players.get(playerId);
  if (!player) return;
  
  switch (message.type) {
    case MESSAGE_TYPES.PLAYER_MOVE:
      if (message.data) {
        const nameChanged = message.data.name && message.data.name !== player.name;
        if (message.data.name) player.name = message.data.name;
        if (message.data.x !== undefined) player.x = message.data.x;
        if (message.data.z !== undefined) player.z = message.data.z;
        if (message.data.yaw !== undefined) player.yaw = message.data.yaw;
        
        if (nameChanged) {
          broadcast({
            type: MESSAGE_TYPES.PLAYER_JOIN,
            data: {
              id: playerId,
              name: player.name,
              team: player.team,
              x: player.x,
              z: player.z,
              yaw: player.yaw
            }
          });
        }
      }
      break;
  }
}

setInterval(() => {
  broadcast({
    type: MESSAGE_TYPES.WORLD_STATE,
    data: {
      timestamp: Date.now(),
      players: getPlayersList()
    }
  });
}, 1000 / GAME_CONFIG.NETWORK_TICK_RATE);

console.log('✅ 服务器启动完成! 等待玩家连接...');
