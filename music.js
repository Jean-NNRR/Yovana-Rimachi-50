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

    .side-lights{position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:8;mix-blend-mode:screen}
    .side-light{position:absolute;top:-12vh;width:22vw;height:125vh;filter:blur(8px);opacity:.46;transform-origin:50% 0;will-change:transform,opacity}
    .side-light::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,235,178,.45) 0%,rgba(111,183,255,.23) 30%,rgba(34,106,191,.12) 58%,transparent 88%);clip-path:polygon(44% 0,56% 0,100% 100%,0 100%);filter:blur(10px)}
    .side-light.left{left:-7vw;animation:sweepLeft 8s ease-in-out infinite alternate}
    .side-light.right{right:-7vw;animation:sweepRight 9.5s ease-in-out infinite alternate}
    .side-light.left.second{left:3vw;opacity:.24;animation-duration:11s;animation-delay:-4s}
    .side-light.right.second{right:3vw;opacity:.22;animation-duration:12.5s;animation-delay:-6s}
    .edge-glow{position:absolute;top:0;bottom:0;width:4px;background:linear-gradient(180deg,transparent,rgba(255,221,139,.85),rgba(112,179,255,.55),transparent);filter:blur(3px);opacity:.7;animation:edgePulse 4.8s ease-in-out infinite}
    .edge-glow.left{left:0}.edge-glow.right{right:0;animation-delay:-2.3s}
    .light-orb{position:absolute;width:14px;height:14px;border-radius:50%;background:#ffe2a0;box-shadow:0 0 18px #ffd26f,0 0 42px rgba(120,190,255,.75);opacity:0;animation:orbFloat 7s linear infinite}
    .light-orb.o1{left:4%;top:68%;animation-delay:-1s}.light-orb.o2{right:5%;top:38%;animation-delay:-3.2s}.light-orb.o3{left:8%;top:28%;animation-delay:-5.1s}.light-orb.o4{right:8%;top:76%;animation-delay:-6.2s}
    @keyframes sweepLeft{0%{transform:rotate(12deg) translateX(-4vw) scaleX(.7);opacity:.22}45%{opacity:.58}100%{transform:rotate(-7deg) translateX(8vw) scaleX(1.2);opacity:.42}}
    @keyframes sweepRight{0%{transform:rotate(-12deg) translateX(4vw) scaleX(.72);opacity:.2}50%{opacity:.55}100%{transform:rotate(8deg) translateX(-8vw) scaleX(1.18);opacity:.4}}
    @keyframes edgePulse{0%,100%{opacity:.28;transform:scaleY(.82)}50%{opacity:.82;transform:scaleY(1.04)}}
    @keyframes orbFloat{0%{transform:translateY(18vh) scale(.55);opacity:0}15%{opacity:.75}55%{opacity:.55}100%{transform:translateY(-42vh) scale(1.15);opacity:0}}
    @media(prefers-reduced-motion:reduce){.side-light,.edge-glow,.light-orb{animation:none!important}.side-light{opacity:.22!important}.light-orb{display:none}}

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
      .side-light{width:38vw;filter:blur(6px);opacity:.38}
      .side-light.left{left:-18vw}.side-light.right{right:-18vw}
      .side-light.left.second{left:-2vw}.side-light.right.second{right:-2vw}
    }
  `;
  document.head.append(theme);

  const lights = document.createElement('div');
  lights.className = 'side-lights';
  lights.setAttribute('aria-hidden','true');
  lights.innerHTML = `
    <span class="side-light left"></span>
    <span class="side-light left second"></span>
    <span class="side-light right"></span>
    <span class="side-light right second"></span>
    <span class="edge-glow left"></span>
    <span class="edge-glow right"></span>
    <span class="light-orb o1"></span>
    <span class="light-orb o2"></span>
    <span class="light-orb o3"></span>
    <span class="light-orb o4"></span>`;
  document.body.append(lights);

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