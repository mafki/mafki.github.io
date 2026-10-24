(function () {
  var h = document.querySelector('.site-header'), b = h && h.querySelector('.menu-btn'), n = document.getElementById('nav');
  if (!b || !n) return;
  h.classList.add('js');
  function set(open) {
    h.classList.toggle('open', open);
    b.setAttribute('aria-expanded', String(open));
    b.textContent = open ? 'Close' : 'Menu';
  }
  b.addEventListener('click', function () { set(b.getAttribute('aria-expanded') !== 'true'); });
  n.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && h.classList.contains('open')) { set(false); b.focus(); }
  });
  window.matchMedia('(min-width:861px)').addEventListener('change', function (e) { if (e.matches) set(false); });
})();
