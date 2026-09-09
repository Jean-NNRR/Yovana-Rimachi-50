(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const theatre = $('theatre');
  const scenes = ['prologue', 'birthday', 'date', 'venue', 'dress', 'finale'];
  const labels = ['Una invitación para ti', 'Yovana · 50 años', 'La fecha', 'La recepción', 'Vestimenta elegante', 'Te esperamos'];
  const durations = [5200, 7400, 6000, 5800, 5600, Infinity];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let current = -1, elapsed = 0, last = 0, playing = !reduced.matches, opening = false, openingTimer;
  document.querySelectorAll('[data-letters]').forEach(el => {
    const text = el.dataset.letters;
    el.setAttribute('aria-label', text);
    el.replaceChildren(...Array.from(text, (letter, i) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.setAttribute('aria-hidden', 'true');
      span.style.setProperty('--i', i);
      span.style.setProperty('--shift', `${(i - text.length / 2) * 18}px`);
      return span;
    }));
  });
  for (let i = 0; i < 28; i++) {
    const mote = document.createElement('i');
    mote.style.cssText = `--x:${(i * 37.7) % 100}%;--y:${(i * 23.3) % 100}%;--duration:${8 + i % 7}s;--offset:-${i % 9}s`;
    $('dust').append(mote);
  }
  const segments = scenes.map((id, i) => {
    const button = document.createElement('button');
    button.className = 'segment';
    button.setAttribute('aria-label', `Ver: ${labels[i]}`);
    button.innerHTML = '<span></span>';
    button.addEventListener('click', () => show(i, true));
    $('timeline').append(button);
    return button;
  });
  function fit() {
    const active = document.querySelector('.scene.active');
    if (!active) return;
    const content = active.querySelector('.scene-content');
    content.style.setProperty('--fit', '1');
    const scale = Math.min(1, active.clientHeight / Math.max(1, content.offsetHeight));
    content.style.setProperty('--fit', scale.toFixed(3));
  }
  function updateControls() {
    const end = current === scenes.length - 1;
    $('pause').hidden = end;
    $('pause').textContent = playing ? 'Pausar' : 'Reproducir';
    $('pause').setAttribute('aria-label', playing ? 'Pausar invitación' : 'Reproducir invitación');
    $('previous').disabled = current <= 0;
    $('next').disabled = end;
    theatre.classList.toggle('paused', !playing && !end && current >= 0 && !reduced.matches);
  }
  function show(index, manual = false) {
    if (manual) playing = !reduced.matches;
    clearTimeout(openingTimer);
    opening = false;
    theatre.classList.remove('opening');
    current = Math.max(0, Math.min(scenes.length - 1, index));
    elapsed = 0;
    last = performance.now();
    const outgoing = document.querySelector('.scene.active');
    const focusedInOutgoing = outgoing?.contains(document.activeElement);
    document.querySelectorAll('.scene').forEach(scene => {
      const active = scene.id === scenes[current];
      scene.classList.toggle('active', active);
      scene.inert = !active;
      scene.setAttribute('aria-hidden', String(!active));
    });
    theatre.dataset.current = scenes[current];
    $('player').hidden = false;
    $('chapter').textContent = labels[current];
    $('skip').hidden = current === scenes.length - 1;
    segments.forEach((segment, i) => {
      segment.style.setProperty('--progress', i < current || current === scenes.length - 1 ? '1' : '0');
      if (i === current) segment.setAttribute('aria-current', 'step');
      else segment.removeAttribute('aria-current');
    });
    updateControls();
    fit();
    if (focusedInOutgoing || (manual && document.activeElement === $('skip'))) {
      const title = $(scenes[current]).querySelector('h2');
      title.tabIndex = -1;
      title.focus({ preventScroll: true });
    }
  }
  $('open').addEventListener('click', () => {
    if (opening || current >= 0) return;
    opening = true;
    theatre.classList.add('opening');
    openingTimer = setTimeout(() => show(0), reduced.matches ? 0 : 1250);
  });
  $('skip').addEventListener('click', () => show(scenes.length - 1, true));
  $('replay').addEventListener('click', () => { playing = !reduced.matches; show(0, true); });
  $('previous').addEventListener('click', () => show(current - 1, true));
  $('next').addEventListener('click', () => show(current + 1, true));
  function toggle() { playing = !playing; last = performance.now(); updateControls(); }
  $('pause').addEventListener('click', toggle);
  document.addEventListener('keydown', event => {
    if (current < 0 || event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.target.closest('button,a,input,textarea,select')) return;
    if (event.key === 'ArrowRight' && current < scenes.length - 1) { event.preventDefault(); show(current + 1, true); }
    if (event.key === 'ArrowLeft' && current > 0) { event.preventDefault(); show(current - 1, true); }
    if (event.code === 'Space' && current < scenes.length - 1) { event.preventDefault(); toggle(); }
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && current >= 0 && current < scenes.length - 1) { playing = false; updateControls(); }
    last = performance.now();
  });
  reduced.addEventListener('change', () => { playing = !reduced.matches; updateControls(); });
  function tick(now) {
    if (last && current >= 0 && current < scenes.length - 1 && playing && !document.hidden) {
      elapsed += Math.min(now - last, 150);
      segments[current].style.setProperty('--progress', Math.min(1, elapsed / durations[current]).toFixed(4));
      if (elapsed >= durations[current]) show(current + 1);
    }
    last = now;
    requestAnimationFrame(tick);
  }
  new ResizeObserver(fit).observe($('film'));
  document.fonts.ready.then(fit);
  fit();
  requestAnimationFrame(tick);
})();
