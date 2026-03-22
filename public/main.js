// Nav scroll shadow
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.main-nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu
const hamburger = document.querySelector('.nav-hamburger');
const drawer = document.querySelector('.nav-drawer');
if (hamburger && drawer) {
  hamburger.addEventListener('click', () => drawer.classList.toggle('open'));
  // close on link click
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('open')));
}

// Scroll to top on page load
window.scrollTo(0, 0);

// FadeUp IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Shop filter
const filterBtns = document.querySelectorAll('.filter-btn');
if (filterBtns.length) {
  // Read filter from URL on load
  const params = new URLSearchParams(window.location.search);
  const initial = params.get('filter') || 'all';
  applyFilter(initial);
  filterBtns.forEach(btn => {
    if (btn.dataset.filter === initial) btn.classList.add('active');
  });

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(btn.dataset.filter);
      // update URL without reload
      const url = new URL(window.location);
      if (btn.dataset.filter === 'all') url.searchParams.delete('filter');
      else url.searchParams.set('filter', btn.dataset.filter);
      window.history.pushState({}, '', url);
    });
  });
}

function applyFilter(f) {
  document.querySelectorAll('.product-card').forEach(card => {
    const show = f === 'all' || card.dataset.filter === f;
    card.style.display = show ? '' : 'none';
  });
}

// Format selector on product page
document.querySelectorAll('.format-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.format-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // update price display
    const priceEl = document.querySelector('.product-price');
    if (priceEl && btn.dataset.price) priceEl.textContent = '\u20ac' + btn.dataset.price;
  });
});
