// Simple hide-on-scroll behavior: hide when scrolling down, show on scroll up
(() => {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  let lastScroll = window.pageYOffset || document.documentElement.scrollTop;
  let ticking = false;

  function onScroll() {
    const current = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(current - lastScroll) < 10) return; // ignore tiny deltas

    if (current > lastScroll && current > 80) {
      // scrolling down
      nav.classList.add('nav-hidden');
      nav.classList.remove('nav-scrolled');
    } else {
      // scrolling up
      nav.classList.remove('nav-hidden');
      if (current > 40) nav.classList.add('nav-scrolled');
    }

    lastScroll = current;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

})();
