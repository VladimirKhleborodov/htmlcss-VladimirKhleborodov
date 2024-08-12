const changer = document.getElementById('theme-changer');
const changerBurger = document.getElementById('theme-changer-burger');
const html = document.documentElement;

if (changer) {
  changer.addEventListener('change', function() {
    html.toggleAttribute('data-theme-dark');
  });
}


if (changerBurger) {
  changerBurger.addEventListener('change', function() {
    html.toggleAttribute('data-theme-dark');
  });
}
