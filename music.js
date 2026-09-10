(() => {
  const theme = document.createElement('style');
  theme.textContent = `
    :root{
      --ink:#071a33!important;
      --cream:#fff7ea!important;
      --gold:#d7b877!important;
      --soft:#d8e0ec!important;
      --line:rgba(215,184,119,.30)!important;
      --serif:'Italianno','Brush Script MT',cursive!important;
      --script:'Italianno','Brush Script MT',cursive!important;
      --sans:'Italianno','Brush Script MT',cursive!important;
    }
    *,button,a,input,textarea,select{font-family:'Italianno','Brush Script MT',cursive!important}
    html,body{background:#071a33!important}
    body,.theatre{background:radial-gradient(ellipse at 50% 40%,#173e6b 0,#0b2850 42%,#06172d 100%)!important}
    .silk{background:repeating-linear-gradient(95deg,transparent 0%,rgba(215,184,119,.10) 9%,rgba(3,18,40,.45) 15%,rgba(215,184,119,.18) 19%,rgba(5,24,50,.72) 24%)!important}
    .secondary{background:#0b2850dd!important}
    .secondary:hover{background:#173e6b!important}
    .portrait-arch{background:#102d52!important}
    .portrait-shade{background:linear-gradient(transparent 60%,rgba(7,26,51,.82))!important}
    .venue-image{background:linear-gradient(rgba(7,26,51,.52),rgba(7,26,51,.78)),url('./assets/cards/venue.webp') center 45%/cover!important}
    .noscript{background:#071a33!important}
    .handwriting,.signature,.letter b,.portrait-script,.years{font-family:'Italianno','Brush Script MT',cursive!important}
    .masthead-date,.text-button,.personal-note,.cover-copy,.duration,.button,.surname,.birthday-note,.date-side,.address,.finale-name,.final-details p,.final-details span,.whatsapp-note,.player-bottom>span{font-family:'Italianno','Brush Script MT',cursive!important;letter-spacing:.02em!important}
    .signature{font-size:48px!important}
    .masthead-date{font-size:22px!important}
    .text-button{font-size:22px!important}
    .personal-note{font-size:25px!important}
    .cover h1{font-size:clamp(42px,6vw,64px)!important}
    .cover-copy{font-size:25px!important;line-height:1.55!important}
    .button{font-size:24px!important}
    .duration{font-size:20px!important}
    .handwriting{font-size:clamp(38px,4.4vw,56px)!important}
    .poem{font-size:clamp(44px,7vw,88px)!important}
    .name{font-size:clamp(72px,9.5vw,126px)!important}
    .surname{font-size:38px!important}
    .years{font-size:48px!important}
    .birthday-note,.date-scene .scene-content>p:last-child,.dress-scene p:last-child{font-size:24px!important}
    .date-side{font-size:30px!important}
    .month{font-size:clamp(48px,6.5vw,72px)!important}
    .time{font-size:60px!important}
    .time span{font-size:32px!important}
    .venue-name{font-size:clamp(76px,11vw,128px)!important}
    .address{font-size:29px!important}.address span{font-size:24px!important}
    .dress-title{font-size:clamp(58px,7.5vw,86px)!important}
    .finale .handwriting{font-size:43px!important}
    .finale h2{font-size:clamp(82px,10.5vw,122px)!important}
    .finale-name{font-size:24px!important}
    .final-details p{font-size:22px!important}.final-details strong{font-size:26px!important}.final-details span{font-size:20px!important}
    .whatsapp-note,.player-bottom>span{font-size:20px!important}
    @media(max-width:650px){
      .masthead-date{font-size:18px!important}
      .text-button{font-size:19px!important}
      .personal-note{font-size:22px!important}
      .cover-copy{font-size:22px!important}
      .button{font-size:21px!important}
      .duration{font-size:18px!important}
      .surname{font-size:34px!important}
      .birthday-note,.date-scene .scene-content>p:last-child,.dress-scene p:last-child{font-size:21px!important}
      .address{font-size:25px!important}.address span{font-size:21px!important}
      .finale-name{font-size:21px!important}.final-details p{font-size:20px!important}.final-details span{font-size:18px!important}
      .whatsapp-note,.player-bottom>span{font-size:18px!important}
    }
  `;
  document.head.append(theme);

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
