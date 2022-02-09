  // Menu elements
  var appMenu = $('.applications-menu > li > a');
  var appMenuClose = $('.submenu-close');
  // Open Submenu
  appMenu.on('click', function (e) {
    e.preventDefault();
    $('.submenu-wrapper.show').removeClass('show');
    $(this).next('.submenu-wrapper').addClass('show');
    $('.submenu-overlay').show();
  });
  // Close Subment
  appMenuClose.on('click', function (e) {
    $('.submenu-wrapper').removeClass('show');
    $('.submenu-overlay').hide();
    e.preventDefault();
  })

  function menuClose() {
    $('.submenu-wrapper').removeClass('show');
    $('.submenu-overlay').hide();
  }
  $(document).on('keyup', function (event) {
    if (event.key == "Escape") {
      menuClose();
    }
  });
  $(window).on('resize', menuClose);
  $('.submenu-overlay').on('click', menuClose);