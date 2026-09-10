(() => {
  const theme = document.createElement('style');
  theme.textContent = `
    :root{
      --ink:#071a33!important;--cream:#fff7ea!important;--gold:#d7b877!important;--soft:#d8e0ec!important;--line:rgba(215,184,119,.30)!important;
      --serif:'Italianno','Brush Script MT',cursive!important;--script:'Italianno','Brush Script MT',cursive!important;--sans:'Italianno','Brush Script MT',cursive!important;
    }
    *,button,a,input,textarea,select{font-family:'Italianno','Brush Script MT',cursive!important}
    html,body{background:#071a33!important}
    body,.theatre{background:radial-gradient(ellipse at 50% 40%,#173e6b 0,#0b2850 42%,#06172d 100%)!important}
    .silk{background:repeating-linear-gradient(95deg,transparent 0%,rgba(215,184,119,.10) 9%,rgba(3,18,40,.45) 15%,rgba(215,184,119,.18) 19%,rgba(5,24,50,.72) 24%)!important}
    .secondary{background:#0b2850dd!important}.secondary:hover{background:#173e6b!important}
    .portrait-arch{background:#102d52!important}.portrait-shade{background:linear-gradient(transparent 60%,rgba(7,26,51,.82))!important}
    .venue-image{background:linear-gradient(rgba(7,26,51,.52),rgba(7,26,51,.78)),url('./assets/cards/venue.webp') center 45%/cover!important}
    .noscript{background:#071a33!important}
    .handwriting,.signature,.letter b,.portrait-script,.years,.masthead-date,.text-button,.personal-note,.cover-copy,.duration,.button,.surname,.birthday-note,.date-side,.address,.finale-name,.final-details p,.final-details span,.whatsapp-note,.player-bottom>span{font-family:'Italianno','Brush Script MT',cursive!important;letter-spacing:.012em!important;line-height:1.28!important}
    .signature{font-size:82px!important}.masthead-date,.text-button{font-size:36px!important}.personal-note,.cover-copy{font-size:40px!important}
    .cover h1{font-size:clamp(72px,10vw,112px)!important;line-height:.95!important}.button{font-size:38px!important;padding:.7em 1.25em!important}.duration{font-size:30px!important}
    .handwriting{font-size:clamp(62px,7vw,92px)!important;line-height:1!important}.poem{font-size:clamp(66px,10vw,132px)!important;line-height:.96!important}.name{font-size:clamp(108px,14vw,170px)!important;line-height:.85!important}.surname{font-size:58px!important}.years{font-size:76px!important}
    .birthday-note,.date-scene .scene-content>p:last-child,.dress-scene p:last-child{font-size:38px!important;line-height:1.35!important}.date-side{font-size:46px!important}.month{font-size:clamp(72px,9vw,106px)!important;line-height:1!important}.time{font-size:88px!important;line-height:.95!important}.time span{font-size:48px!important}
    .venue-name{font-size:clamp(104px,14vw,166px)!important;line-height:.88!important}.address{font-size:44px!important;line-height:1.3!important}.address span{font-size:36px!important}.dress-title{font-size:clamp(84px,11vw,126px)!important;line-height:.92!important}
    .finale .handwriting{font-size:68px!important}.finale h2{font-size:clamp(112px,14vw,166px)!important;line-height:.86!important}.finale-name{font-size:38px!important}.final-details p{font-size:34px!important}.final-details strong{font-size:40px!important}.final-details span{font-size:30px!important}.whatsapp-note,.player-bottom>span,.chapter,.player button{font-size:30px!important}.letter b{font-size:54px!important}.portrait-script{font-size:56px!important}.seal span{font-size:34px!important}
    .cinema-fx{position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:7;mix-blend-mode:screen}
    .beam{position:absolute;top:-18vh;width:36vw;height:138vh;transform-origin:50% 0;opacity:0;will-change:transform,opacity}
    .beam::before{content:'';position:absolute;inset:0;clip-path:polygon(48% 0,52% 0,100% 100%,0 100%);background:linear-gradient(180deg,rgba(255,250,224,.95) 0%,rgba(255,226,142,.66) 18%,rgba(129,194,255,.34) 48%,rgba(41,109,199,.13) 70%,transparent 91%);filter:blur(14px)}
    .beam::after{content:'';position:absolute;left:49.2%;top:0;width:1.6%;height:100%;background:linear-gradient(180deg,rgba(255,255,255,.98),rgba(255,226,142,.70) 32%,rgba(129,194,255,.18) 65%,transparent 100%);filter:blur(3px)}
    .beam.l1{left:-14vw;animation:beamL1 5.8s ease-in-out infinite}.beam.l2{left:5vw;width:27vw;animation:beamL2 8s ease-in-out infinite -3.1s}.beam.r1{right:-14vw;animation:beamR1 6.4s ease-in-out infinite -1.4s}.beam.r2{right:5vw;width:27vw;animation:beamR2 8.7s ease-in-out infinite -4.4s}
    .center-glow{position:absolute;inset:0;background:radial-gradient(circle at 50% 44%,rgba(255,225,139,.18),transparent 38%);animation:centerGlow 5.2s ease-in-out infinite}
    .edge-flash{position:absolute;top:0;bottom:0;width:10px;filter:blur(4px);background:linear-gradient(180deg,transparent,rgba(255,225,146,.95),rgba(119,186,255,.58),transparent);opacity:.35}.edge-flash.left{left:0;animation:edgePulse 3.7s ease-in-out infinite}.edge-flash.right{right:0;animation:edgePulse 4.1s ease-in-out infinite -2s}
    .glitter{position:absolute;inset:0;overflow:hidden}
    .spark{position:absolute;left:var(--x);top:var(--y);width:var(--s);height:var(--s);border-radius:50%;opacity:0;background:radial-gradient(circle,#fffef8 0 22%,#f8df9a 35%,rgba(117,186,255,.82) 62%,transparent 100%);box-shadow:0 0 8px rgba(255,220,126,.98),0 0 22px rgba(110,184,255,.70);animation:sparkFloat var(--d) linear infinite,sparkTwinkle calc(var(--d)*.38) ease-in-out infinite}
    .spark.cross::before,.spark.cross::after{content:'';position:absolute;left:50%;top:50%;background:rgba(255,234,173,.95);transform:translate(-50%,-50%);border-radius:999px;filter:blur(.35px)}.spark.cross::before{width:calc(var(--s)*3.2);height:1.5px}.spark.cross::after{width:1.5px;height:calc(var(--s)*3.2)}
    .spark.big{box-shadow:0 0 12px rgba(255,227,148,1),0 0 32px rgba(255,207,88,.75),0 0 46px rgba(108,180,255,.58)}
    @keyframes beamL1{0%{transform:translateX(-12vw) rotate(22deg) scaleX(.62);opacity:0}16%{opacity:.78}48%{transform:translateX(18vw) rotate(-8deg) scaleX(1.12);opacity:.66}70%{opacity:.25}100%{transform:translateX(30vw) rotate(-18deg) scaleX(.78);opacity:0}}
    @keyframes beamL2{0%{transform:translateX(-10vw) rotate(10deg) scaleX(.55);opacity:0}20%{opacity:.46}50%{transform:translateX(18vw) rotate(-5deg) scaleX(.98);opacity:.40}100%{transform:translateX(28vw) rotate(-14deg) scaleX(.62);opacity:0}}
    @keyframes beamR1{0%{transform:translateX(12vw) rotate(-22deg) scaleX(.62);opacity:0}18%{opacity:.76}50%{transform:translateX(-18vw) rotate(8deg) scaleX(1.12);opacity:.64}72%{opacity:.24}100%{transform:translateX(-30vw) rotate(18deg) scaleX(.78);opacity:0}}
    @keyframes beamR2{0%{transform:translateX(10vw) rotate(-10deg) scaleX(.55);opacity:0}20%{opacity:.44}50%{transform:translateX(-18vw) rotate(5deg) scaleX(.98);opacity:.38}100%{transform:translateX(-28vw) rotate(14deg) scaleX(.62);opacity:0}}
    @keyframes centerGlow{0%,100%{opacity:.18;transform:scale(1)}50%{opacity:.46;transform:scale(1.09)}}
    @keyframes edgePulse{0%,100%{opacity:.18;transform:scaleY(.82)}48%{opacity:.82;transform:scaleY(1.08)}54%{opacity:.28}}
    @keyframes sparkFloat{0%{transform:translate3d(0,14vh,0) scale(.35);opacity:0}12%{opacity:var(--o)}50%{opacity:calc(var(--o)*.8)}100%{transform:translate3d(var(--dx),-40vh,0) scale(1.08);opacity:0}}
    @keyframes sparkTwinkle{0%,100%{filter:brightness(.7)}48%{filter:brightness(1.7)}52%{filter:brightness(1.05)}}
    .god-intro{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:32px;background:radial-gradient(circle at 50% 36%,rgba(26,77,132,.97),rgba(7,26,51,.995) 58%,#041327 100%);overflow:hidden;text-align:center;color:#fff7ea}
    .god-intro::before,.god-intro::after{content:'';position:absolute;width:70vw;height:125vh;top:-18vh;background:linear-gradient(180deg,rgba(255,244,202,.82),rgba(215,184,119,.28) 35%,rgba(91,166,255,.13) 63%,transparent 88%);clip-path:polygon(48% 0,52% 0,100% 100%,0 100%);filter:blur(8px);opacity:.55;animation:introSweep 6s ease-in-out infinite alternate;pointer-events:none}.god-intro::before{left:-34vw}.god-intro::after{right:-34vw;animation-delay:-3s}
    .god-card{position:relative;z-index:2;width:min(760px,92vw);padding:28px 18px}.god-cross{font-size:56px;line-height:1;color:#d7b877;text-shadow:0 0 24px rgba(215,184,119,.55);margin-bottom:14px}.god-kicker{font-size:34px;color:#d7b877;margin-bottom:10px}.god-title{font-size:clamp(64px,12vw,106px);line-height:.95;margin:0 0 20px;color:#fff7ea;text-shadow:0 4px 22px rgba(0,0,0,.28)}.god-copy{font-size:clamp(30px,5.7vw,46px);line-height:1.28;max-width:680px;margin:0 auto 28px;color:#fff8e8}.god-enter{border:1px solid rgba(215,184,119,.75);background:rgba(12,45,82,.74);color:#f8e2ae;border-radius:999px;padding:12px 26px;font-size:32px;box-shadow:0 0 30px rgba(215,184,119,.14);backdrop-filter:blur(8px)}.god-enter:active{transform:scale(.98)}.god-intro.hide{animation:introOut .8s ease forwards;pointer-events:none}
    @keyframes introSweep{from{opacity:.28;transform:rotate(15deg) translateX(-4vw)}to{opacity:.68;transform:rotate(-7deg) translateX(11vw)}}@keyframes introOut{to{opacity:0;visibility:hidden;transform:scale(1.025)}}
    @media(max-width:650px){
      .signature{font-size:66px!important}.masthead-date{font-size:28px!important}.text-button{font-size:30px!important}.personal-note{font-size:32px!important}.cover h1{font-size:clamp(60px,18vw,88px)!important}.cover-copy{font-size:32px!important;line-height:1.35!important}.button{font-size:31px!important}.duration{font-size:26px!important}.handwriting{font-size:clamp(50px,14vw,72px)!important}.poem{font-size:clamp(56px,16vw,92px)!important}.name{font-size:clamp(82px,23vw,122px)!important}.surname{font-size:46px!important}.years{font-size:62px!important}.birthday-note,.date-scene .scene-content>p:last-child,.dress-scene p:last-child{font-size:31px!important}.date-side{font-size:38px!important}.month{font-size:clamp(60px,17vw,86px)!important}.time{font-size:70px!important}.time span{font-size:40px!important}.venue-name{font-size:clamp(78px,22vw,116px)!important}.address{font-size:35px!important}.address span{font-size:29px!important}.dress-title{font-size:clamp(68px,19vw,100px)!important}.finale .handwriting{font-size:54px!important}.finale h2{font-size:clamp(86px,24vw,124px)!important}.finale-name{font-size:31px!important}.final-details p{font-size:29px!important}.final-details strong{font-size:34px!important}.final-details span{font-size:26px!important}.whatsapp-note,.player-bottom>span,.chapter,.player button{font-size:26px!important}.letter b,.portrait-script{font-size:46px!important}.seal span{font-size:30px!important}
      .beam{width:62vw;height:128vh;top:-12vh}.beam.l1{left:-34vw}.beam.l2{left:-6vw}.beam.r1{right:-34vw}.beam.r2{right:-6vw}.beam::before{filter:blur(11px)}.god-intro{padding:22px}.god-cross{font-size:46px}.god-kicker{font-size:29px}.god-copy{font-size:clamp(28px,7.4vw,38px)}.god-enter{font-size:29px}
    }
    @media(prefers-reduced-motion:reduce){.beam,.center-glow,.edge-flash,.spark{animation-duration:12s!important}}
  `;
  document.head.append(theme);

  const fx = document.createElement('div');
  fx.className = 'cinema-fx';
  fx.setAttribute('aria-hidden','true');
  fx.innerHTML = '<span class="beam l1"></span><span class="beam l2"></span><span class="beam r1"></span><span class="beam r2"></span><span class="center-glow"></span><span class="edge-flash left"></span><span class="edge-flash right"></span><div class="glitter"></div>';
  document.body.append(fx);

  const glitter = fx.querySelector('.glitter');
  for (let i = 0; i < 58; i++) {
    const spark = document.createElement('span');
    spark.className = `spark${i % 5 === 0 ? ' cross' : ''}${i % 11 === 0 ? ' big' : ''}`;
    const size = i % 11 === 0 ? 12 : 4 + (i % 7);
    spark.style.setProperty('--x', `${2 + ((i * 17.7) % 96)}%`);
    spark.style.setProperty('--y', `${3 + ((i * 13.1) % 91)}%`);
    spark.style.setProperty('--s', `${size}px`);
    spark.style.setProperty('--d', `${6.6 + (i % 7) * 1.08}s`);
    spark.style.setProperty('--dx', `${(i % 2 ? 1 : -1) * (8 + (i % 9) * 2)}px`);
    spark.style.setProperty('--o', `${0.32 + (i % 6) * 0.09}`);
    spark.style.animationDelay = `-${(i * 0.61) % 9}s,-${(i * 0.29) % 4}s`;
    glitter.append(spark);
  }

  const intro = document.createElement('section');
  intro.className = 'god-intro';
  intro.setAttribute('aria-label','Agradecimiento a Dios');
  intro.innerHTML = '<div class="god-card"><div class="god-cross">✦</div><div class="god-kicker">Con gratitud</div><h1 class="god-title">Gracias, Dios</h1><p class="god-copy">Por el regalo de la vida, por cada bendición, por mi familia y por permitirme llegar a mis 50 años rodeada de amor.</p><button class="god-enter" type="button">Continuar a la invitación</button></div>';
  document.body.append(intro);
  intro.querySelector('.god-enter').addEventListener('click', () => { intro.classList.add('hide'); setTimeout(() => intro.remove(), 900); });

  const button = document.getElementById('music');
  const audio = document.createElement('audio');
  audio.id = 'invitationMusic'; audio.src = './assets/audio/grupo-5-mix-asi-se-goza.mp3'; audio.preload = 'none'; audio.loop = true; audio.volume = .6; document.body.append(audio);
  let started = false, requested = false;
  function draw(){ const enabled = !audio.paused && !audio.error; button.setAttribute('aria-pressed', String(enabled)); button.setAttribute('aria-label', enabled ? 'Silenciar música' : 'Activar música'); button.title = enabled ? 'Silenciar música' : 'Activar música'; button.classList.toggle('muted', !enabled); }
  async function play(){ requested = true; try { await audio.play(); started = true; } catch (_) { requested = false; } draw(); }
  function pause(){ requested = false; audio.pause(); draw(); }
  button.addEventListener('click', () => requested || !audio.paused ? pause() : play());
  ['open','skip'].forEach(id => document.getElementById(id)?.addEventListener('click', () => { if (!started && !requested) play(); }));
  ['playing','pause','error'].forEach(event => audio.addEventListener(event, draw));
  audio.addEventListener('error', () => { requested = false; });
  document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });
  window.addEventListener('pagehide', pause);
  draw();
})();