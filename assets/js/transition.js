// Page transition: fade in on load
document.addEventListener('DOMContentLoaded', function () {
  document.body.style.opacity = '1';
});

// Fade out on internal link click, then navigate
document.querySelectorAll('a[href]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    var href = link.getAttribute('href');
    if (
      !href ||
      href.startsWith('#') ||
      href.startsWith('http') ||
      href.startsWith('https') ||
      href.startsWith('mailto') ||
      href === ''
    ) return;
    e.preventDefault();
    document.body.style.opacity = '0';
    setTimeout(function () {
      window.location.href = href;
    }, 300);
  });
});
