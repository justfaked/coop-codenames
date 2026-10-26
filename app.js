// Oberfläche: Menü, Spielfeld und lokaler Spielstand (pro Raum im localStorage).

const $ = (id) => document.getElementById(id);

const ROLE_LABELS = { chef: 'Geheimdienstchef', ermittler: 'Ermittler' };
const CARD_LABELS = { agent: 'Agent', neutral: 'Passant', assassin: 'Attentäter' };
const THEME_ICONS = {
  klassisch: '🕵️', tiere: '🐾', fantasy: '🐉', harrypotter: '⚡', essen: '🍕', weltraum: '🚀', sport: '⚽',
};

let game = null; // { room, theme, role, board, history, selected, justRevealed, resultDismissed }

// Der klassische Spielstand behält seinen ursprünglichen Schlüssel.
function storageKey(room, theme) {
  return theme === DEFAULT_THEME ? `coop-codenames:${room}` : `coop-codenames:${theme}:${room}`;
}

function loadHistory(room, theme) {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKey(room, theme)));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveHistory() {
  try {
    localStorage.setItem(storageKey(game.room, game.theme), JSON.stringify(game.history));
  } catch {
    // Ohne Speicher läuft das Spiel trotzdem, nur ohne Fortsetzen nach Neuladen.
  }
}

function readHash() {
  const params = new URLSearchParams(location.hash.slice(1));
  const room = normalizeRoom(params.get('raum') || '');
  const theme = params.get('thema') || DEFAULT_THEME;
  const role = params.get('rolle');
  return room && THEMES[theme] && ROLE_LABELS[role] ? { room, theme, role } : null;
}

function startGame(room, theme, role) {
  game = {
    room,
    theme,
    role,
    board: createBoard(room, theme, THEMES[theme].words),
    history: loadHistory(room, theme),
    selected: null,
    justRevealed: null,
    resultDismissed: false,
  };
  $('menu').hidden = true;
  $('game').hidden = false;
  document.body.dataset.role = role;
  $('room-label').textContent = `Raum ${room}`;
  $('theme-label').textContent = `${THEME_ICONS[theme] || ''} ${THEMES[theme].name}`.trim();
  $('role-label').textContent = ROLE_LABELS[role];
  render();
}

function showMenu() {
  game = null;
  $('game').hidden = true;
  $('result').hidden = true;
  $('menu').hidden = false;
  delete document.body.dataset.role;
}

function route() {
  const target = readHash();
  if (target) startGame(target.room, target.theme, target.role);
  else showMenu();
}

function go(room, theme, role) {
  const hash = `#raum=${room}&thema=${theme}&rolle=${role}`;
  if (location.hash === hash) route();
  else location.hash = hash;
}

function render() {
  const state = deriveState(game.board, game.history);
  const boardEl = $('board');
  boardEl.textContent = '';
  boardEl.classList.toggle('over', Boolean(state.result));

  game.board.forEach((card, index) => {
    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'card';
    el.dataset.index = index;
    el.dataset.role = card.role;
    const isRevealed = state.revealed.has(index);
    el.classList.toggle('revealed', isRevealed);
    el.classList.toggle('selected', game.selected === index);
    el.classList.toggle('flip', game.justRevealed === index);
    el.disabled = isRevealed || Boolean(state.result);

    const word = document.createElement('span');
    word.className = 'word';
    word.textContent = card.word;
    el.append(word);

    if (isRevealed || game.role === 'chef' || state.result) {
      el.setAttribute('aria-label', `${card.word}, ${CARD_LABELS[card.role]}${isRevealed ? ', aufgedeckt' : ''}`);
    }
    boardEl.append(el);
  });
  game.justRevealed = null;

  const progress = $('progress');
  progress.textContent = '';
  for (let i = 0; i < AGENTS; i++) {
    const seg = document.createElement('span');
    seg.classList.toggle('on', i < state.found);
    progress.append(seg);
  }

  $('stat-found').textContent = `${state.found}/${AGENTS} Agenten`;
  $('stat-round').textContent = `Runde ${state.round}`;
  $('undo').disabled = game.history.length === 0;
  $('pass').disabled = Boolean(state.result);

  $('hint').textContent = hintText(state);
  $('hint').dataset.tone = state.result || (game.selected !== null ? 'select' : '');

  if (state.result && !game.resultDismissed) showResult(state);
  else $('result').hidden = true;
}

function hintText(state) {
  if (state.result === 'won') return 'Gewonnen! Alle Agenten gefunden.';
  if (state.result === 'lost') return 'Verloren – ein Attentäter wurde aufgedeckt.';
  if (game.selected !== null) return `„${game.board[game.selected].word}“ nochmal antippen zum Aufdecken.`;
  if (game.role === 'chef') return 'Gib einen Hinweis: ein Wort und eine Zahl.';
  return 'Tippe auf einen Begriff, um ihn auszuwählen.';
}

function showResult(state) {
  const won = state.result === 'won';
  const rounds = state.round;
  $('result-title').textContent = won ? 'Gewonnen!' : 'Verloren';
  $('result-text').textContent = won
    ? `Alle ${AGENTS} Agenten in ${rounds} ${rounds === 1 ? 'Runde' : 'Runden'} gefunden.`
    : `Ein Attentäter wurde aufgedeckt. ${state.found} von ${AGENTS} Agenten gefunden.`;
  $('result').classList.toggle('lost', !won);
  $('result').hidden = false;
}

function onCardClick(index) {
  if (game.selected === index) {
    game.selected = null;
    game.justRevealed = index;
    game.history.push({ type: 'reveal', index });
    saveHistory();
  } else {
    game.selected = index;
  }
  render();
}

function nextGame() {
  const next = String(Number(game.room) + 1);
  go(next, game.theme, game.role);
}

// --- Menü ---

const savedRoom = (() => {
  try { return localStorage.getItem('coop-codenames:last-room') || ''; } catch { return ''; }
})();
$('room').value = savedRoom;

const savedTheme = (() => {
  try { return localStorage.getItem('coop-codenames:last-theme'); } catch { return null; }
})();

for (const [id, theme] of Object.entries(THEMES)) {
  const label = document.createElement('label');
  label.className = 'theme';
  const input = document.createElement('input');
  input.type = 'radio';
  input.name = 'theme';
  input.value = id;
  input.checked = id === (THEMES[savedTheme] ? savedTheme : DEFAULT_THEME);
  const name = document.createElement('span');
  const icon = document.createElement('span');
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = THEME_ICONS[id] || '';
  name.append(icon, theme.name);
  label.append(input, name);
  $('themes').append(label);
}

$('random-room').addEventListener('click', () => {
  $('room').value = String(1000 + Math.floor(Math.random() * 9000));
});

$('room').addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/\D/g, '');
});

$('join').addEventListener('submit', (e) => {
  e.preventDefault();
  const room = normalizeRoom($('room').value);
  if (!room) return;
  const form = new FormData(e.target);
  const theme = form.get('theme');
  const role = form.get('role');
  try {
    localStorage.setItem('coop-codenames:last-room', room);
    localStorage.setItem('coop-codenames:last-theme', theme);
  } catch {}
  go(room, theme, role);
});

// --- Spiel ---

$('board').addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  if (!card || card.disabled) return;
  onCardClick(Number(card.dataset.index));
});

document.addEventListener('click', (e) => {
  if (!game || game.selected === null) return;
  if (e.target.closest('.card')) return;
  game.selected = null;
  render();
});

$('undo').addEventListener('click', () => {
  game.history.pop();
  game.selected = null;
  game.resultDismissed = false;
  saveHistory();
  render();
});

$('pass').addEventListener('click', () => {
  game.history.push({ type: 'pass' });
  saveHistory();
  render();
});

$('next').addEventListener('click', () => {
  if (confirm(`Zu Raum ${Number(game.room) + 1} wechseln? Alle anderen müssen ebenfalls „Nächstes Spiel“ drücken.`)) nextGame();
});

$('back').addEventListener('click', () => {
  history.pushState(null, '', location.pathname + location.search);
  showMenu();
});

$('result-close').addEventListener('click', () => {
  game.resultDismissed = true;
  $('result').hidden = true;
});

$('result-next').addEventListener('click', nextGame);

window.addEventListener('hashchange', route);
route();
