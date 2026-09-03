const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const gateway = document.getElementById('gateway');
const enterButton = document.getElementById('enterButton');
const progressBar = document.getElementById('progressBar');
const nav = document.querySelector('.nav');
const cursorGlow = document.getElementById('cursorGlow');
const hero = document.querySelector('.hero');
const manifesto = document.querySelector('.manifesto');
const portraitScene = document.querySelector('.portrait-scene');
const portraitFrame = document.getElementById('portraitFrame');
const wordLeft = document.querySelector('.word-left');
const wordRight = document.querySelector('.word-right');
const depthOne = document.querySelector('.depth-one');
const depthTwo = document.querySelector('.depth-two');

document.body.classList.add('locked');
nav.style.opacity = '0';
nav.style.transform = 'translateY(-18px)';

let opened = false;
function openInvitation() {
  if (opened) return;
  opened = true;
  gateway.classList.add('opened');
  gateway.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('locked');
  nav.style.opacity = '1';
  nav.style.transform = 'none';
  document.querySelectorAll('.hero .reveal').forEach((el, index) => {
    setTimeout(() => el.classList.add('in'), 450 + index * 170);
  });
}
enterButton.addEventListener('click', openInvitation);
gateway.addEventListener('click', event => {
  if (event.target === gateway) openInvitation();
});
addEventListener('keydown', event => {
  if (!opened && (event.key === 'Enter' || event.key === ' ' || event.key === 'Escape')) openInvitation();
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const delay = Number(entry.target.dataset.delay || 0);
    setTimeout(() => entry.target.classList.add('in'), delay);
    observer.unobserve(entry.target);
  });
}, { threshold: 0.14, rootMargin: '0px 0px -5% 0px' });
document.querySelectorAll('.reveal:not(.hero .reveal)').forEach((el, index) => {
  if (el.closest('.detail-stage')) el.dataset.delay = String((index % 3) * 120);
  observer.observe(el);
});

let pointerX = innerWidth / 2;
let pointerY = innerHeight / 2;
let glowX = pointerX;
let glowY = pointerY;
addEventListener('pointermove', event => {
  pointerX = event.clientX;
  pointerY = event.clientY;
}, { passive: true });

function animateGlow() {
  glowX += (pointerX - glowX) * 0.12;
  glowY += (pointerY - glowY) * 0.12;
  cursorGlow.style.transform = `translate3d(${glowX - 170}px,${glowY - 170}px,0)`;
  requestAnimationFrame(animateGlow);
}
if (!reducedMotion && matchMedia('(pointer:fine)').matches) animateGlow();

document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('pointermove', event => {
    if (reducedMotion || !matchMedia('(pointer:fine)').matches) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    card.style.setProperty('--mx', `${x * 100}%`);
    card.style.setProperty('--my', `${y * 100}%`);
    const lift = card.classList.contains('detail-main') ? 60 : 18;
    card.style.transform = `perspective(1000px) translateZ(${lift}px) rotateX(${(0.5 - y) * 12}deg) rotateY(${(x - 0.5) * 14}deg)`;
  });
  card.addEventListener('pointerleave', () => {
    card.style.transform = card.classList.contains('detail-main') ? 'translateZ(60px)' : '';
  });
});

document.querySelectorAll('.magnetic').forEach(button => {
  button.addEventListener('pointermove', event => {
    if (reducedMotion || !matchMedia('(pointer:fine)').matches) return;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    button.style.transform = `translate3d(${x * 0.055}px,${y * 0.08 - 5}px,0)`;
  });
  button.addEventListener('pointerleave', () => button.style.transform = '');
});

let heroProgress = 0;
let scrollTicking = false;
function paintScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  progressBar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;

  const heroRect = hero.getBoundingClientRect();
  heroProgress = clamp(-heroRect.top / Math.max(1, hero.offsetHeight - innerHeight));
  const heroCopy = document.querySelector('.hero-copy');
  if (!reducedMotion) {
    heroCopy.style.transform = `translate3d(0,${(innerWidth < 800 ? 19 : 14) - heroProgress * 22}vh,0) scale(${1 - heroProgress * 0.09})`;
    heroCopy.style.opacity = String(1 - heroProgress * 1.25);
  }

  const manifestoRect = manifesto.getBoundingClientRect();
  const manifestoProgress = clamp((innerHeight - manifestoRect.top) / (innerHeight + manifestoRect.height));
  if (!reducedMotion) {
    depthOne.style.transform = `translate3d(${manifestoProgress * 100 - 45}px,${manifestoProgress * 80}px,0) rotate(${-14 + manifestoProgress * 8}deg)`;
    depthTwo.style.transform = `translate3d(${45 - manifestoProgress * 100}px,${-manifestoProgress * 60}px,0) rotate(${13 - manifestoProgress * 7}deg)`;
  }

  const portraitRect = portraitScene.getBoundingClientRect();
  const portraitProgress = clamp(-portraitRect.top / Math.max(1, portraitScene.offsetHeight - innerHeight));
  if (!reducedMotion) {
    const scale = 0.86 + Math.sin(portraitProgress * Math.PI) * 0.16 + portraitProgress * 0.05;
    portraitFrame.style.transform = `translate(-50%,-50%) scale(${scale}) rotateY(${(portraitProgress - 0.5) * -9}deg)`;
    wordLeft.style.transform = `translate3d(${portraitProgress * -80}px,0,${portraitProgress * 40}px)`;
    wordRight.style.transform = `translate3d(${portraitProgress * 80}px,0,${portraitProgress * 40}px)`;
  }
  scrollTicking = false;
}
function requestScrollPaint() {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(paintScroll);
}
addEventListener('scroll', requestScrollPaint, { passive: true });
addEventListener('resize', requestScrollPaint, { passive: true });
paintScroll();

async function createThreeScene() {
  const canvas = document.getElementById('stage');
  try {
    const THREE = await import('https://cdn.jsdelivr.net/npm/three@0.180.0/+esm');
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.7));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x090406, 0.045);
    const camera = new THREE.PerspectiveCamera(37, 1, 0.1, 100);
    camera.position.set(0, 0.2, 10.2);

    const sculpture = new THREE.Group();
    sculpture.position.y = -0.25;
    scene.add(sculpture);

    const edgeMaterial = new THREE.MeshPhysicalMaterial({ color: 0x7e4818, metalness: 0.95, roughness: 0.23, clearcoat: 1 });
    const goldMaterial = new THREE.MeshPhysicalMaterial({ color: 0xe0b15d, metalness: 0.9, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.1 });
    const darkGold = new THREE.MeshPhysicalMaterial({ color: 0x3f1f0c, metalness: 0.88, roughness: 0.3, clearcoat: 0.7 });

    const coinBack = new THREE.Mesh(new THREE.CylinderGeometry(2.35, 2.35, 0.44, 128), edgeMaterial);
    coinBack.rotation.x = Math.PI / 2;
    coinBack.position.z = -0.1;
    sculpture.add(coinBack);
    const coinFace = new THREE.Mesh(new THREE.CylinderGeometry(2.13, 2.13, 0.48, 128), goldMaterial);
    coinFace.rotation.x = Math.PI / 2;
    coinFace.position.z = 0.05;
    sculpture.add(coinFace);
    const inset = new THREE.Mesh(new THREE.CylinderGeometry(1.82, 1.82, 0.5, 128), darkGold);
    inset.rotation.x = Math.PI / 2;
    inset.position.z = 0.09;
    sculpture.add(inset);

    const textCanvas = document.createElement('canvas');
    textCanvas.width = 1024;
    textCanvas.height = 1024;
    const context = textCanvas.getContext('2d');
    const gradient = context.createLinearGradient(0, 170, 0, 800);
    gradient.addColorStop(0, '#fff2c8');
    gradient.addColorStop(0.48, '#e5bd71');
    gradient.addColorStop(1, '#8a5427');
    context.fillStyle = gradient;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.shadowColor = 'rgba(0,0,0,.48)';
    context.shadowBlur = 30;
    context.font = '600 520px Georgia, serif';
    context.fillText('50', 512, 525);
    const textTexture = new THREE.CanvasTexture(textCanvas);
    textTexture.colorSpace = THREE.SRGBColorSpace;
    const number = new THREE.Mesh(
      new THREE.PlaneGeometry(3.5, 3.5),
      new THREE.MeshBasicMaterial({ map: textTexture, transparent: true, depthWrite: false })
    );
    number.position.z = 0.38;
    sculpture.add(number);

    const rings = [];
    [
      [2.82, 0.026, 0xe9c67b, 0.45, [1.18, 0.2, 0.1]],
      [3.2, 0.018, 0x9e3558, 0.4, [0.25, 1.02, 0.4]],
      [3.55, 0.012, 0xffdf9a, 0.24, [0.65, 0.55, 1.1]]
    ].forEach(([radius, tube, color, opacity, rotation]) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(radius, tube, 12, 180),
        new THREE.MeshStandardMaterial({ color, metalness: 0.8, roughness: 0.25, transparent: true, opacity })
      );
      ring.rotation.set(...rotation);
      sculpture.add(ring);
      rings.push(ring);
    });

    const gems = [];
    for (let index = 0; index < 14; index++) {
      const gem = new THREE.Mesh(
        new THREE.OctahedronGeometry(index % 4 === 0 ? 0.115 : 0.07),
        new THREE.MeshPhysicalMaterial({ color: index % 3 ? 0xf6dca0 : 0xa93c61, metalness: 0.55, roughness: 0.12, clearcoat: 1 })
      );
      const angle = index / 14 * Math.PI * 2;
      const radius = 2.6 + (index % 2) * 0.48;
      gem.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.7, (index % 3 - 1) * 0.7);
      sculpture.add(gem);
      gems.push(gem);
    }

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = innerWidth < 800 ? 260 : 520;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 13;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 11;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({ color: 0xf5d38d, size: 0.025, transparent: true, opacity: 0.55, sizeAttenuation: true })
    );
    scene.add(particles);

    scene.add(new THREE.AmbientLight(0xffe4c0, 1.1));
    const keyLight = new THREE.PointLight(0xffcf7f, 55, 24, 1.8);
    keyLight.position.set(4, 5, 6);
    scene.add(keyLight);
    const wineLight = new THREE.PointLight(0xa52f56, 45, 20, 1.7);
    wineLight.position.set(-4, -2, 4);
    scene.add(wineLight);
    const rimLight = new THREE.PointLight(0x7caed8, 18, 18, 2);
    rimLight.position.set(0, 2, -5);
    scene.add(rimLight);

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let dragging = false;
    let lastPointerX = 0;
    let spinVelocity = 0;
    canvas.addEventListener('pointermove', event => {
      const rect = canvas.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.55;
      targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.26;
      if (dragging) {
        spinVelocity = (event.clientX - lastPointerX) * 0.008;
        sculpture.rotation.y += spinVelocity;
        lastPointerX = event.clientX;
      }
    }, { passive: true });
    canvas.addEventListener('pointerdown', event => {
      dragging = true;
      lastPointerX = event.clientX;
      canvas.setPointerCapture?.(event.pointerId);
    });
    canvas.addEventListener('pointerup', event => {
      dragging = false;
      canvas.releasePointerCapture?.(event.pointerId);
    });
    canvas.addEventListener('pointercancel', () => dragging = false);

    function resize() {
      const width = Math.max(1, canvas.clientWidth);
      const height = Math.max(1, canvas.clientHeight);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.fov = width < 800 ? 48 : 37;
      camera.updateProjectionMatrix();
      sculpture.scale.setScalar(width < 800 ? 0.73 : 1);
    }
    new ResizeObserver(resize).observe(canvas);
    resize();

    const start = performance.now();
    function render(time) {
      const seconds = (time - start) * 0.001;
      if (!reducedMotion) {
        currentX += (targetX - currentX) * 0.04;
        currentY += (targetY - currentY) * 0.04;
        if (!dragging) {
          sculpture.rotation.y += spinVelocity;
          spinVelocity *= 0.94;
        }
        sculpture.rotation.y += 0.0016;
        sculpture.rotation.x += ((-currentY + heroProgress * 0.22) - sculpture.rotation.x) * 0.035;
        sculpture.rotation.z = Math.sin(seconds * 0.4) * 0.025 + heroProgress * 0.15;
        sculpture.position.y = -0.2 + Math.sin(seconds * 0.8) * 0.06 - heroProgress * 0.55;
        sculpture.scale.multiplyScalar(1);
        rings[0].rotation.z = seconds * 0.08;
        rings[1].rotation.z = -seconds * 0.06;
        rings[2].rotation.y = seconds * 0.04;
        gems.forEach((gem, index) => {
          gem.rotation.x = seconds * (0.4 + index * 0.01);
          gem.rotation.y = seconds * (0.28 + index * 0.012);
        });
        particles.rotation.y = seconds * 0.008;
        camera.position.z = 10.2 - heroProgress * 2.1;
        camera.position.x = currentX * -0.7;
        camera.position.y = 0.2 + currentY * 0.4 + heroProgress * 0.45;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  } catch (error) {
    const context = canvas.getContext('2d');
    const ratio = Math.min(devicePixelRatio || 1, 2);
    canvas.width = innerWidth * ratio;
    canvas.height = innerHeight * ratio;
    context.scale(ratio, ratio);
    const gradient = context.createRadialGradient(innerWidth / 2, innerHeight * 0.42, 10, innerWidth / 2, innerHeight * 0.42, Math.min(innerWidth, innerHeight) * 0.34);
    gradient.addColorStop(0, '#ffe6a8');
    gradient.addColorStop(0.36, '#d0a054');
    gradient.addColorStop(0.7, '#5d2c16');
    gradient.addColorStop(1, 'rgba(20,8,11,0)');
    context.fillStyle = gradient;
    context.beginPath();
    context.arc(innerWidth / 2, innerHeight * 0.42, Math.min(innerWidth, innerHeight) * 0.27, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = '#fff0c0';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.font = `600 ${Math.min(innerWidth * 0.32, 260)}px Georgia,serif`;
    context.fillText('50', innerWidth / 2, innerHeight * 0.42);
  }
}
createThreeScene();
