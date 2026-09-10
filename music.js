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
    .masthead-date,.text-button,.personal-note,.cover-copy,.duration,.button,.surname,.birthday-note,.date-side,.address,.finale-name,.final-details p,.final-details span,.whatsapp-note,.player-bottom>span{font-family:'Italianno','Brush Script MT',cursive!important;letter-spacing:.012em!important;line-height:1.28!important}
    .signature{font-size:82px!important}
    .masthead-date{font-size:36px!important}
    .text-button{font-size:36px!important}
    .personal-note{font-size:40px!important}
    .cover h1{font-size:clamp(72px,10vw,112px)!important;line-height:.95!important}
    .cover-copy{font-size:40px!important;line-height:1.4!important}
    .button{font-size:38px!important;padding:.7em 1.25em!important}
    .duration{font-size:30px!important}
    .handwriting{font-size:clamp(62px,7vw,92px)!important;line-height:1!important}
    .poem{font-size:clamp(66px,10vw,132px)!important;line-height:.96!important}
    .name{font-size:clamp(108px,14vw,170px)!important;line-height:.85!important}
    .surname{font-size:58px!important}
    .years{font-size:76px!important}
    .birthday-note,.date-scene .scene-content>p:last-child,.dress-scene p:last-child{font-size:38px!important;line-height:1.35!important}
    .date-side{font-size:46px!important}
    .month{font-size:clamp(72px,9vw,106px)!important;line-height:1!important}
    .time{font-size:88px!important;line-height:.95!important}
    .time span{font-size:48px!important}
    .venue-name{font-size:clamp(104px,14vw,166px)!important;line-height:.88!important}
    .address{font-size:44px!important;line-height:1.3!important}.address span{font-size:36px!important}
    .dress-title{font-size:clamp(84px,11vw,126px)!important;line-height:.92!important}
    .finale .handwriting{font-size:68px!important}
    .finale h2{font-size:clamp(112px,14vw,166px)!important;line-height:.86!important}
    .finale-name{font-size:38px!important}
    .final-details p{font-size:34px!important}.final-details strong{font-size:40px!important}.final-details span{font-size:30px!important}
    .whatsapp-note,.player-bottom>span{font-size:30px!important}
    .chapter{font-size:30px!important}
    .player button{font-size:30px!important}
    .letter b{font-size:54px!important}
    .portrait-script{font-size:56px!important}
    .seal span{font-size:34px!important}
    @media(max-width:650px){
      .signature{font-size:66px!important}
      .masthead-date{font-size:28px!important}
      .text-button{font-size:30px!important}
      .personal-note{font-size:32px!important}
      .cover h1{font-size:clamp(60px,18vw,88px)!important}
      .cover-copy{font-size:32px!important;line-height:1.35!important}
      .button{font-size:31px!important}
      .duration{font-size:26px!important}
      .handwriting{font-size:clamp(50px,14vw,72px)!important}
      .poem{font-size:clamp(56px,16vw,92px)!important}
      .name{font-size:clamp(82px,23vw,122px)!important}
      .surname{font-size:46px!important}
      .years{font-size:62px!important}
      .birthday-note,.date-scene .scene-content>p:last-child,.dress-scene p:last-child{font-size:31px!important}
      .date-side{font-size:38px!important}
      .month{font-size:clamp(60px,17vw,86px)!important}
      .time{font-size:70px!important}.time span{font-size:40px!important}
      .venue-name{font-size:clamp(78px,22vw,116px)!important}
      .address{font-size:35px!important}.address span{font-size:29px!important}
      .dress-title{font-size:clamp(68px,19vw,100px)!important}
      .finale .handwriting{font-size:54px!important}
      .finale h2{font-size:clamp(86px,24vw,124px)!important}
      .finale-name{font-size:31px!important}
      .final-details p{font-size:29px!important}.final-details strong{font-size:34px!important}.final-details span{font-size:26px!important}
      .whatsapp-note,.player-bottom>span{font-size:26px!important}
      .chapter{font-size:26px!important}
      .player button{font-size:26px!important}
      .letter b{font-size:46px!important}
      .portrait-script{font-size:46px!important}
      .seal span{font-size:30px!important}
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
