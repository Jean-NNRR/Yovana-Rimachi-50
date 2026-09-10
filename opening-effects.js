(() => {
  const style = document.createElement('style');
  style.textContent = `
    /* Stronger, more readable typography */
    .masthead-date{font-size:42px!important}.text-button{font-size:40px!important}
    .personal-note{font-size:46px!important}.cover-copy{font-size:46px!important;line-height:1.32!important}
    .cover h1{font-size:clamp(86px,12vw,138px)!important}.button{font-size:42px!important}.duration{font-size:34px!important}
    .handwriting{font-size:clamp(72px,8vw,108px)!important}.poem{font-size:clamp(78px,11vw,148px)!important}
    .name{font-size:clamp(126px,16vw,196px)!important}.surname{font-size:66px!important}.years{font-size:88px!important}
    .birthday-note,.date-scene .scene-content>p:last-child,.dress-scene p:last-child{font-size:44px!important}
    .date-side{font-size:54px!important}.month{font-size:clamp(84px,10vw,122px)!important}.time{font-size:102px!important}.time span{font-size:56px!important}
    .venue-name{font-size:clamp(120px,16vw,188px)!important}.address{font-size:50px!important}.address span{font-size:42px!important}
    .dress-title{font-size:clamp(96px,13vw,148px)!important}.finale .handwriting{font-size:78px!important}.finale h2{font-size:clamp(126px,16vw,190px)!important}
    .finale-name{font-size:44px!important}.final-details p{font-size:40px!important}.final-details strong{font-size:48px!important}.final-details span{font-size:36px!important}
    .whatsapp-note,.player-bottom>span,.chapter,.player button{font-size:34px!important}

    .god-kicker{font-size:42px!important}.god-title{font-size:clamp(82px,15vw,132px)!important}.god-copy{font-size:clamp(38px,7vw,56px)!important;line-height:1.22!important}.god-enter{font-size:38px!important;padding:14px 30px!important}

    .opening-fireworks{position:fixed;inset:0;z-index:10020;pointer-events:none;overflow:hidden;mix-blend-mode:screen}
    .opening-fireworks canvas{width:100%;height:100%;display:block}
    .opening-fireworks.fade{animation:fwFade .9s ease forwards}
    @keyframes fwFade{to{opacity:0;visibility:hidden}}

    @media(max-width:650px){
      .masthead-date{font-size:33px!important}.text-button{font-size:34px!important}.personal-note{font-size:38px!important}
      .cover h1{font-size:clamp(72px,21vw,104px)!important}.cover-copy{font-size:36px!important}.button{font-size:35px!important}.duration{font-size:30px!important}
      .handwriting{font-size:clamp(58px,16vw,84px)!important}.poem{font-size:clamp(66px,19vw,106px)!important}
      .name{font-size:clamp(94px,27vw,142px)!important}.surname{font-size:52px!important}.years{font-size:70px!important}
      .birthday-note,.date-scene .scene-content>p:last-child,.dress-scene p:last-child{font-size:36px!important}
      .date-side{font-size:44px!important}.month{font-size:clamp(70px,20vw,98px)!important}.time{font-size:82px!important}.time span{font-size:46px!important}
      .venue-name{font-size:clamp(90px,25vw,132px)!important}.address{font-size:40px!important}.address span{font-size:34px!important}
      .dress-title{font-size:clamp(78px,22vw,114px)!important}.finale .handwriting{font-size:62px!important}.finale h2{font-size:clamp(98px,28vw,142px)!important}
      .finale-name{font-size:36px!important}.final-details p{font-size:34px!important}.final-details strong{font-size:40px!important}.final-details span{font-size:30px!important}
      .whatsapp-note,.player-bottom>span,.chapter,.player button{font-size:30px!important}
      .god-kicker{font-size:34px!important}.god-title{font-size:clamp(78px,23vw,112px)!important}.god-copy{font-size:clamp(34px,9vw,46px)!important}.god-enter{font-size:34px!important}
    }
  `;
  document.head.append(style);

  const layer = document.createElement('div');
  layer.className = 'opening-fireworks';
  layer.setAttribute('aria-hidden', 'true');
  const canvas = document.createElement('canvas');
  layer.append(canvas);
  document.body.append(layer);

  const ctx = canvas.getContext('2d');
  let w = 0, h = 0, dpr = 1;
  const particles = [];
  let running = true;
  const start = performance.now();
  const palette = ['#fff7da','#f5d785','#d9b768','#9fd0ff','#dfefff'];

  function resize(){
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = innerWidth; h = innerHeight;
    canvas.width = Math.floor(w*dpr); canvas.height = Math.floor(h*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  resize();
  addEventListener('resize', resize, {passive:true});

  function burst(x,y,count=42,scale=1){
    for(let i=0;i<count;i++){
      const a = Math.random()*Math.PI*2;
      const sp = (1.1 + Math.random()*3.5)*scale;
      particles.push({
        x,y,px:x,py:y,
        vx:Math.cos(a)*sp, vy:Math.sin(a)*sp,
        life:1, decay:.010+Math.random()*.012,
        size:.9+Math.random()*2.6,
        color:palette[(Math.random()*palette.length)|0],
        gravity:.018+Math.random()*.025,
        twinkle:Math.random()*Math.PI*2
      });
    }
  }

  const schedule = [
    [180,.14,.22,48,1.05],[520,.82,.18,52,1.05],[920,.28,.40,44,.95],
    [1320,.70,.34,48,1],[1780,.10,.58,42,.9],[2220,.88,.54,48,1],
    [2780,.40,.25,56,1.1],[3300,.62,.48,52,1.05],[3900,.20,.70,44,.95],
    [4450,.80,.72,48,1]
  ];
  const fired = new Set();

  function frame(now){
    if(!running) return;
    const elapsed = now-start;
    for(let i=0;i<schedule.length;i++){
      if(elapsed>=schedule[i][0] && !fired.has(i)){
        fired.add(i);
        const [,rx,ry,c,s] = schedule[i];
        burst(w*rx,h*ry,c,s);
      }
    }

    ctx.clearRect(0,0,w,h);
    ctx.globalCompositeOperation='lighter';
    for(let i=particles.length-1;i>=0;i--){
      const p=particles[i];
      p.px=p.x;p.py=p.y;p.x+=p.vx;p.y+=p.vy;p.vy+=p.gravity;p.vx*=.992;p.life-=p.decay;p.twinkle+=.18;
      if(p.life<=0){particles.splice(i,1);continue;}
      const alpha=p.life*(.72+.28*Math.sin(p.twinkle));
      ctx.strokeStyle=p.color;ctx.globalAlpha=Math.max(0,alpha*.5);ctx.lineWidth=Math.max(.5,p.size*.55);
      ctx.beginPath();ctx.moveTo(p.px,p.py);ctx.lineTo(p.x,p.y);ctx.stroke();
      ctx.globalAlpha=Math.max(0,alpha);ctx.fillStyle=p.color;
      ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fill();
    }
    ctx.globalAlpha=1;

    if(elapsed<5600 || particles.length){requestAnimationFrame(frame)}
    else{
      layer.classList.add('fade');
      setTimeout(()=>{running=false;layer.remove()},950);
    }
  }
  requestAnimationFrame(frame);

  function startMusic(){
    const audio = document.getElementById('invitationMusic');
    if(!audio) return;
    audio.volume = .6;
    const promise = audio.play();
    if(promise && typeof promise.catch==='function') promise.catch(()=>{});
  }

  // Try immediately. Mobile browsers may block this until a gesture.
  setTimeout(startMusic, 80);
  const unlock = () => {
    startMusic();
    removeEventListener('pointerdown', unlock, true);
    removeEventListener('touchstart', unlock, true);
  };
  addEventListener('pointerdown', unlock, true);
  addEventListener('touchstart', unlock, true);

  const enter = document.querySelector('.god-enter');
  if(enter) enter.addEventListener('click', startMusic, {capture:true});
  const open = document.getElementById('open');
  if(open) open.addEventListener('click', startMusic, {capture:true});
})();