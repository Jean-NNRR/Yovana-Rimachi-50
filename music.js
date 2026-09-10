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

    .spotlight-stage{position:fixed;inset:0;overflow:hidden;pointer-events:none;z-index:7;mix-blend-mode:screen}
    .spotlight{position:absolute;width:72vw;height:115vh;top:-8vh;opacity:.72;filter:blur(4px);will-change:transform,opacity;transform-origin:50% 0}
    .spotlight::before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,247,211,.95) 0%,rgba(255,222,143,.70) 16%,rgba(139,202,255,.36) 45%,rgba(59,128,226,.18) 68%,transparent 92%);clip-path:polygon(47% 0,53% 0,100% 100%,0 100%)}
    .spotlight.left-a{left:-38vw;animation:flashSweepLeft 5.8s ease-in-out infinite}
    .spotlight.left-b{left:-26vw;opacity:.48;animation:flashSweepLeft2 7.6s ease-in-out infinite -2.4s}
    .spotlight.right-a{right:-38vw;animation:flashSweepRight 6.4s ease-in-out infinite -1.2s}
    .spotlight.right-b{right:-26vw;opacity:.46;animation:flashSweepRight2 8.3s ease-in-out infinite -4s}
    .flash-burst{position:absolute;width:34vw;height:34vw;border-radius:50%;background:radial-gradient(circle,rgba(255,248,220,.95) 0%,rgba(255,215,119,.48) 18%,rgba(110,186,255,.22) 44%,transparent 70%);filter:blur(6px);opacity:0;animation:burst 4.8s ease-in-out infinite}
    .flash-burst.left{left:-12vw;top:18vh}.flash-burst.right{right:-12vw;top:54vh;animation-delay:-2.1s}
    .edge-flash{position:absolute;top:0;bottom:0;width:12px;opacity:.8;filter:blur(4px);background:linear-gradient(180deg,transparent 0%,rgba(255,230,157,.15) 20%,rgba(255,238,189,.95) 50%,rgba(116,192,255,.55) 72%,transparent 100%);animation:edgeFlash 3.6s ease-in-out infinite}
    .edge-flash.left{left:0}.edge-flash.right{right:0;animation-delay:-1.8s}
    @keyframes flashSweepLeft{0%,100%{transform:rotate(24deg) translateX(-12vw);opacity:.18}22%{opacity:.95}45%{transform:rotate(-4deg) translateX(25vw);opacity:.72}62%{opacity:.24}}
    @keyframes flashSweepLeft2{0%,100%{transform:rotate(8deg) translateX(-16vw);opacity:.10}38%{transform:rotate(-18deg) translateX(30vw);opacity:.72}52%{opacity:.30}}
    @keyframes flashSweepRight{0%,100%{transform:rotate(-24deg) translateX(12vw);opacity:.16}28%{opacity:.92}50%{transform:rotate(5deg) translateX(-26vw);opacity:.75}72%{opacity:.22}}
    @keyframes flashSweepRight2{0%,100%{transform:rotate(-8deg) translateX(16vw);opacity:.10}35%{transform:rotate(18deg) translateX(-30vw);opacity:.70}58%{opacity:.26}}
    @keyframes burst{0%,100%{opacity:0;transform:scale(.55)}20%{opacity:.18}24%{opacity:.98;transform:scale(1.12)}31%{opacity:.12;transform:scale(.86)}52%{opacity:0}}
    @keyframes edgeFlash{0%,100%{opacity:.20}42%{opacity:.35}48%{opacity:1}56%{opacity:.28}}

    .god-intro{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:32px;background:radial-gradient(circle at 50% 36%,rgba(26,77,132,.97),rgba(7,26,51,.995) 58%,#041327 100%);overflow:hidden;text-align:center;color:#fff7ea}
    .god-intro::before,.god-intro::after{content:'';position:absolute;width:66vw;height:120vh;top:-15vh;background:linear-gradient(180deg,rgba(255,244,202,.85),rgba(215,184,119,.28) 35%,rgba(91,166,255,.14) 63%,transparent 88%);clip-path:polygon(48% 0,52% 0,100% 100%,0 100%);filter:blur(8px);opacity:.58;animation:introSweep 6s ease-in-out infinite alternate;pointer-events:none}
    .god-intro::before{left:-30vw;transform:rotate(17deg)}
    .god-intro::after{right:-30vw;transform:rotate(-17deg);animation-delay:-3s}
    .god-card{position:relative;z-index:2;width:min(760px,92vw);padding:28px 18px}
    .god-cross{font-size:56px;line-height:1;color:#d7b877;text-shadow:0 0 24px rgba(215,184,119,.55);margin-bottom:14px}
    .god-kicker{font-size:34px;color:#d7b877;margin-bottom:10px}
    .god-title{font-size:clamp(64px,12vw,106px);line-height:.95;margin:0 0 20px;color:#fff7ea;text-shadow:0 4px 22px rgba(0,0,0,.28)}
    .god-copy{font-size:clamp(30px,5.7vw,46px);line-height:1.28;max-width:680px;margin:0 auto 28px;color:#fff8e8}
    .god-enter{border:1px solid rgba(215,184,119,.75);background:rgba(12,45,82,.74);color:#f8e2ae;border-radius:999px;padding:12px 26px;font-size:32px;box-shadow:0 0 30px rgba(215,184,119,.14);backdrop-filter:blur(8px)}
    .god-enter:active{transform:scale(.98)}
    .god-intro.hide{animation:introOut .8s ease forwards;pointer-events:none}
    @keyframes introSweep{from{opacity:.28;transform:rotate(14deg) translateX(-4vw)}to{opacity:.7;transform:rotate(-6deg) translateX(10vw)}}
    @keyframes introOut{to{opacity:0;visibility:hidden;transform:scale(1.025)}}

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
      .spotlight{width:105vw;height:120vh;filter:blur(3px)}
      .spotlight.left-a{left:-72vw}.spotlight.left-b{left:-58vw}.spotlight.right-a{right:-72vw}.spotlight.right-b{right:-58vw}
      .flash-burst{width:62vw;height:62vw}
      .god-intro{padding:22px}
      .god-cross{font-size:46px}
      .god-kicker{font-size:29px}
      .god-copy{font-size:clamp(28px,7.4vw,38px)}
      .god-enter{font-size:29px}
    }
  `;
  document.head.append(theme);

  const spotlights = document.createElement('div');
  spotlights.className = 'spotlight-stage';
  spotlights.setAttribute('aria-hidden','true');
  spotlights.innerHTML = `
    <span class="spotlight left-a"></span>
    <span class="spotlight left-b"></span>
    <span class="spotlight right-a"></span>
    <span class="spotlight right-b"></span>
    <span class="flash-burst left"></span>
    <span class="flash-burst right"></span>
    <span class="edge-flash left"></span>
    <span class="edge-flash right"></span>`;
  document.body.append(spotlights);

  const intro = document.createElement('section');
  intro.className = 'god-intro';
  intro.setAttribute('aria-label','Agradecimiento a Dios');
  intro.innerHTML = `
    <div class="god-card">
      <div class="god-cross">✦</div>
      <div class="god-kicker">Con gratitud</div>
      <h1 class="god-title">Gracias, Dios</h1>
      <p class="god-copy">Por el regalo de la vida, por cada bendición, por mi familia y por permitirme llegar a mis 50 años rodeada de amor.</p>
      <button class="god-enter" type="button">Continuar a la invitación</button>
    </div>`;
  document.body.append(intro);
  intro.querySelector('.god-enter').addEventListener('click', () => {
    intro.classList.add('hide');
    setTimeout(() => intro.remove(), 900);
  });

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