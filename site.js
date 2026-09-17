(() => {
  const videos = [...document.querySelectorAll('video[data-loop]')];
  const button = document.querySelector('[data-motion-toggle]');
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = preference.matches;
  const visible = new Set();
  const sync = () => {
    document.documentElement.classList.toggle('motion-paused', paused);
    if (button) {
      button.textContent = paused ? 'Play animations' : 'Pause animations';
      button.setAttribute('aria-pressed', String(paused));
    }
    videos.forEach(video => {
      if (paused || document.hidden || !visible.has(video)) video.pause();
      else video.play().catch(() => { video.controls = true; });
    });
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(({target, isIntersecting}) => isIntersecting ? visible.add(target) : visible.delete(target));
    sync();
  }, {threshold: 0.1});
  videos.forEach(video => observer.observe(video));
  button?.addEventListener('click', () => { paused = !paused; sync(); });
  preference.addEventListener('change', event => { paused = event.matches; sync(); });
  document.addEventListener('visibilitychange', sync);
  sync();
})();
