'use strict';
(function iifeMenu(document, window, undefined) {
  var menuBtn = document.querySelector('.menu__btn');
  var menuDrawer = document.querySelector('.menu__drawer');
  var menuOverlay = document.querySelector('.menu__overlay');
  var menuClose = document.querySelector('.menu__close');
  var body = document.body;

  function openMenu() {
    menuDrawer.classList.add('active');
    menuOverlay.classList.add('active');
    menuBtn.classList.add('menu__btn--active');
    body.style.overflow = 'hidden';
    menuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    menuDrawer.classList.remove('active');
    menuOverlay.classList.remove('active');
    menuBtn.classList.remove('menu__btn--active');
    body.style.overflow = '';
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    if (menuDrawer.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (menuBtn) menuBtn.addEventListener('click', toggleMenu, false);
  if (menuClose) menuClose.addEventListener('click', closeMenu, false);
  if (menuOverlay) menuOverlay.addEventListener('click', closeMenu, false);

  var hasSubmenuLinks = document.querySelectorAll('.menu__drawer .has-submenu');

  function toggleSubmenu(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      var parentItem = this.parentElement;
      var siblings = parentItem.parentElement.querySelectorAll('.menu__item');
      siblings.forEach(function (sibling) {
        if (sibling !== parentItem) sibling.classList.remove('active');
      });
      parentItem.classList.toggle('active');
    }
  }

  hasSubmenuLinks.forEach(function (link) {
    link.addEventListener('click', toggleSubmenu, false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menuDrawer.classList.contains('active')) closeMenu();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768 && menuDrawer.classList.contains('active')) closeMenu();
  });
})(document, window);