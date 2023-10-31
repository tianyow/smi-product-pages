// Cache selectors
const $menu = $('.applications-menu');
const $submenu = $('.submenu-wrapper');
const $overlay = $('.submenu-overlay');

// Menu toggle logic
function toggleMenu() {
  if ($submenu.is(':visible')) {
    closeMenu();
  } else {
    openMenu();
  }
}

// Open menu logic
function openMenu() {
  $submenu.addClass('show');
  $overlay.show();
}

// Close menu logic
function closeMenu() {
  $submenu.removeClass('show');
  $overlay.hide();
}

// Event delegation
$menu.on('click', 'li > a', function(e) {
  e.preventDefault();
  toggleMenu();
});

// Close on escape key
window.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    closeMenu();
  }
});

// Close on outside click
$overlay.on('click', closeMenu);

// Close on resize
window.addEventListener('resize', closeMenu);