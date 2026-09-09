/* Original, locally synthesized piano-style accompaniment. No network audio. */
(() => {
  const button = document.getElementById('music');
  let context, master, timer, enabled = false, started = false, next = 0, step = 0;
  const beat = 60 / 76;
  const chords = [[48,55,60,64],[45,52,57,60],[41,48,53,57],[43,50,55,59],[48,55,60,64],[45,52,57,60],[41,48,53,57],[43,50,55,59]];
  const melody = [[76,79,81,79],[76,72,76,74],[72,77,76,72],[74,71,67,74],[76,79,84,83],[81,79,76,72],[77,76,74,72],[71,74,79,72]];
  function note(midi, time, volume, length = 2.4) {
    const frequency = 440 * 2 ** ((midi - 69) / 12);
    [1, 2, 3, 4].forEach((partial, i) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.value = frequency * partial;
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(volume * [1,.22,.065,.02][i], time + .012);
      gain.gain.exponentialRampToValueAtTime(.0001, time + length / (1 + i * .3));
      oscillator.connect(gain); gain.connect(master);
      oscillator.start(time); oscillator.stop(time + length + .05);
      oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
    });
  }
  function schedule() {
    if (!enabled || document.hidden || context.state !== 'running') return;
    while (next < context.currentTime + .25) {
      const bar = Math.floor(step / 8) % chords.length;
      const position = step % 8;
      const chord = chords[bar];
      note(chord[[0,2,1,3,0,2,1,3][position]], next, position === 0 ? .10 : .052);
      if (position % 2 === 0) note(melody[bar][position / 2], next, .075, 2.8);
      next += beat / 2; step++;
    }
  }
  function draw() {
    button.setAttribute('aria-pressed', String(enabled));
    button.setAttribute('aria-label', enabled ? 'Silenciar música' : 'Activar música');
    button.title = enabled ? 'Silenciar música' : 'Activar música';
    button.classList.toggle('muted', !enabled);
  }
  async function play() {
    try {
      if (!context) {
        const Audio = window.AudioContext || window.webkitAudioContext;
        if (!Audio) throw new Error('Audio unavailable');
        context = new Audio();
        master = context.createGain(); master.gain.value = 0;
        const compressor = context.createDynamicsCompressor();
        master.connect(compressor); compressor.connect(context.destination);
      }
      await context.resume();
      if (context.state !== 'running') throw new Error('Audio suspended');
      enabled = true; started = true;
      master.gain.cancelScheduledValues(context.currentTime);
      master.gain.setTargetAtTime(.65, context.currentTime, .25);
      next = context.currentTime + .05;
      clearInterval(timer); schedule(); timer = setInterval(schedule, 100);
    } catch (_) { enabled = false; }
    draw();
  }
  function mute() {
    enabled = false; clearInterval(timer);
    if (context) { master.gain.cancelScheduledValues(context.currentTime); master.gain.setTargetAtTime(0, context.currentTime, .06); }
    draw();
  }
  button.addEventListener('click', () => enabled ? mute() : play());
  ['open', 'skip'].forEach(id => document.getElementById(id).addEventListener('click', () => { if (!started) play(); }));
  document.addEventListener('visibilitychange', () => { if (document.hidden) mute(); });
  window.addEventListener('pagehide', mute);
  draw();
})();
