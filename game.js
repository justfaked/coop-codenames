// Reine Spiellogik: aus einer Raumnummer entsteht deterministisch ein Spielfeld,
// sodass alle Geräte im selben Raum dasselbe Feld sehen.

const BOARD_SIZE = 25;
const AGENTS = 9;
const ASSASSINS = 2;

// Wird beim Spielstart mit der Raumnummer kombiniert; ändern = neue Spielfelder.
const SEED_VERSION = 'coop-codenames-v1';
const DEFAULT_THEME = 'klassisch';

function hashString(str) {
  let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  return h1 >>> 0;
}

function mulberry32(seed) {
  return function () {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle(items, rand) {
  const a = items.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// "007" und "7" sollen denselben Raum ergeben.
function normalizeRoom(input) {
  const digits = String(input).replace(/\D/g, '').replace(/^0+(?=\d)/, '');
  return digits;
}

// Das klassische Thema behält den ursprünglichen Seed, damit alte Räume gleich bleiben.
function createBoard(room, theme, words) {
  const key = theme === DEFAULT_THEME ? room : `${theme}:${room}`;
  const rand = mulberry32(hashString(`${SEED_VERSION}:${key}`));
  const picked = shuffle(words, rand).slice(0, BOARD_SIZE);
  const roles = shuffle([
    ...Array(AGENTS).fill('agent'),
    ...Array(ASSASSINS).fill('assassin'),
    ...Array(BOARD_SIZE - AGENTS - ASSASSINS).fill('neutral'),
  ], rand);
  return picked.map((word, i) => ({ word, role: roles[i] }));
}

// Der Spielstand wird aus der Liste der Aktionen abgeleitet, damit "Rückgängig"
// einfach die letzte Aktion entfernt.
// Aktionen: { type: 'reveal', index } | { type: 'pass' }
function deriveState(board, history) {
  const revealed = new Set();
  let round = 1;
  let found = 0;
  let misses = 0;
  let result = null; // 'won' | 'lost'

  for (const action of history) {
    if (result) break;
    if (action.type === 'pass') {
      round++;
      continue;
    }
    if (revealed.has(action.index)) continue;
    revealed.add(action.index);
    const role = board[action.index].role;
    if (role === 'agent') {
      found++;
      if (found === AGENTS) result = 'won';
    } else if (role === 'assassin') {
      result = 'lost';
    } else {
      misses++;
      round++;
    }
  }
  return { revealed, round, found, misses, result };
}

if (typeof module !== 'undefined') {
  module.exports = { BOARD_SIZE, AGENTS, ASSASSINS, DEFAULT_THEME, normalizeRoom, createBoard, deriveState };
}
