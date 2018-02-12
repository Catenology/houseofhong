import $ from 'jquery';
import svg4everybody from 'svg4everybody';

// use external svg
svg4everybody();

// header sticks to top if window scrolls more than 600
$(window).on('scroll', () => {
  const scrollAmount = $(window).scrollTop();
  const siteHeader = $('.site-header');
  const menuIcon = $('.menu-icon');
  if (scrollAmount > 400) {
    $(siteHeader).addClass('sticky');
    $(menuIcon).addClass('sticky');
  } else {
    $(siteHeader).removeClass('sticky');
    $(menuIcon).removeClass('sticky');
  }
});

// dismiss overlay menu when clicked
$('.site-nav-menu-item').on('click', () => {
  const windowWidth = $(window).width();
  const menuCheckBox = $('#menu-checkbox');
  if (windowWidth < 760) {
    $(menuCheckBox).prop('checked', false);
  }
});
