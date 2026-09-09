(() => {
  const button = document.getElementById('music');
  const audio = document.createElement('audio');
  audio.id = 'invitationMusic';
  audio.src = './assets/audio/grupo-5-mix-asi-se-goza.mp3';
  audio.preload = 'none';
  audio.loop = true;
  audio.volume = .6;
  document.body.append(audio);
  let started = false, requested = false;
  function draw() {
    const enabled = !audio.paused && !audio.error;
    button.setAttribute('aria-pressed', String(enabled));
    button.setAttribute('aria-label', enabled ? 'Silenciar música' : 'Activar música');
    button.title = enabled ? 'Silenciar música' : 'Activar música';
    button.classList.toggle('muted', !enabled);
  }
  async function play() {
    requested = true;
    try { await audio.play(); started = true; } catch (_) { requested = false; }
    draw();
  }
  function pause() { requested = false; audio.pause(); draw(); }
  button.addEventListener('click', () => requested || !audio.paused ? pause() : play());
  ['open', 'skip'].forEach(id => document.getElementById(id).addEventListener('click', () => { if (!started && !requested) play(); }));
  ['playing', 'pause', 'error'].forEach(event => audio.addEventListener(event, draw));
  audio.addEventListener('error', () => { requested = false; });
  document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });
  window.addEventListener('pagehide', pause);
  draw();
})();
