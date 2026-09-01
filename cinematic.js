(() => {
  const progress = document.getElementById('progressBar');
  const hall = document.querySelector('.hall');
  const backlight = document.querySelector('.backlight');
  let ticking = false;

  function paint() {
    const max = document.documentElement.scrollHeight - innerHeight;
    const ratio = max > 0 ? scrollY / max : 0;
    if (progress) progress.style.transform = `scaleX(${ratio})`;
    if (hall && scrollY < innerHeight * 1.25) {
      const travel = Math.min(scrollY / innerHeight, 1);
      hall.style.transform = `scale(${1 + travel * .09}) translateY(${travel * 2.5}%)`;
      hall.style.opacity = String(1 - travel * .35);
      if (backlight) backlight.style.filter = `blur(${12 + travel * 14}px)`;
    }
    ticking = false;
  }

  addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(paint); }
  }, { passive: true });
  addEventListener('resize', paint, { passive: true });

  addEventListener('DOMContentLoaded', () => {
    // Replace the former disabled Maps link with a clean, fully clickable copy.
    setTimeout(() => {
      const oldMap = document.getElementById('maps');
      if (oldMap) oldMap.replaceWith(oldMap.cloneNode(true));
    }, 80);
    paint();
  });
})();
