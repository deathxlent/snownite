import { WebSocketServer } from 'ws';
import { GAME_CONFIG, MESSAGE_TYPES, MAP_OBSTACLES } from '../shared/constants.js';

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

function checkMapCollision(x, z, radius) {
  const halfWorld = GAME_CONFIG.WORLD_SIZE / 2;
  if (x < -halfWorld + radius || x > halfWorld - radius ||
      z < -halfWorld + radius || z > halfWorld - radius) {
    return true;
  }

  for (const house of MAP_OBSTACLES.houses) {
    const dist = Math.sqrt((x - house.x) ** 2 + (z - house.z) ** 2);
    if (dist < house.radius + radius) {
      return true;
    }
  }

  for (const wall of MAP_OBSTACLES.walls) {
    if (pointInWallRect(x, z, wall, radius)) {
      return true;
    }
  }

  return false;
}

function pointInWallRect(px, pz, wall, radius = 0) {
  const cos = Math.cos(-wall.angle);
  const sin = Math.sin(-wall.angle);
  const dx = px - wall.x;
  const dz = pz - wall.z;
  const localX = dx * cos - dz * sin;
  const localZ = dx * sin + dz * cos;
  const padding = radius + 0.3;
  return Math.abs(localX) <= wall.width / 2 + padding && Math.abs(localZ) <= wall.thickness / 2 + padding;
}

function checkSpawnCollision(x, z, excludeId = null) {
  const minDistance = 3;
  for (const [id, player] of players) {
    if (id === excludeId) continue;
    const dx = x - player.x;
    const dz = z - player.z;
    if (dx * dx + dz * dz < minDistance * minDistance) {
      return true;
    }
  }
  return false;
}

function generateWallPositions() {
  if (MAP_OBSTACLES.walls.length > 0) return;

  const walls = [];
  const wallCount = GAME_CONFIG.WALL_COUNT;
  const worldSize = GAME_CONFIG.WORLD_SIZE * 0.8;
  const halfWorld = GAME_CONFIG.WORLD_SIZE / 2;

  const seededRandom = (seed) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  let seed = 54321;
  for (let i = 0; i < wallCount; i++) {
    let x, z, angle;
    let valid = true;
    let attempts = 0;

    do {
      seed++;
      x = (seededRandom(seed) - 0.5) * worldSize;
      seed++;
      z = (seededRandom(seed) - 0.5) * worldSize;
      seed++;
      angle = seededRandom(seed) * Math.PI;

      valid = true;
      attempts++;

      for (const wall of walls) {
        const dist = Math.sqrt((x - wall.x) ** 2 + (z - wall.z) ** 2);
        if (dist < GAME_CONFIG.WALL_MIN_GAP) {
          valid = false;
          break;
        }
      }

      if (valid) {
        for (const house of MAP_OBSTACLES.houses) {
          const dist = Math.sqrt((x - house.x) ** 2 + (z - house.z) ** 2);
          if (dist < house.radius + GAME_CONFIG.WALL_MIN_GAP) {
            valid = false;
            break;
          }
        }
      }

      if (valid) {
        const centerDist = Math.sqrt(x * x + z * z);
        if (centerDist < 8) valid = false;
      }
    } while (!valid && attempts < 100);

    if (valid) {
      walls.push({
        x, z, angle,
        width: GAME_CONFIG.WALL_WIDTH,
        thickness: GAME_CONFIG.WALL_THICKNESS,
        height: GAME_CONFIG.WALL_HEIGHT
      });
    }
  }

  MAP_OBSTACLES.walls = walls;
}

generateWallPositions();

function assignSpawnPosition(team) {
  const spawnDistance = 25;
  const maxAttempts = 50;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    let baseX, baseZ;
    if (team === 'blue') {
      baseX = -spawnDistance + (Math.random() - 0.5) * 10;
      baseZ = (Math.random() - 0.5) * 15;
    } else {
      baseX = spawnDistance + (Math.random() - 0.5) * 10;
      baseZ = (Math.random() - 0.5) * 15;
    }

    if (!checkSpawnCollision(baseX, baseZ) &&
        !checkMapCollision(baseX, baseZ, GAME_CONFIG.PLAYER_RADIUS * 2)) {
      return {
        x: baseX,
        z: baseZ,
        yaw: team === 'blue' ? 0 : Math.PI
      };
    }
  }

  const angle = team === 'blue' ? 0 : Math.PI;
  return {
    x: Math.cos(angle) * spawnDistance,
    z: Math.sin(angle) * spawnDistance,
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
      players: getPlayersList(),
      walls: MAP_OBSTACLES.walls
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
            type: MESSAGE_TYPES.PLAYER_NAME_UPDATE,
            data: {
              id: playerId,
              name: player.name
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
