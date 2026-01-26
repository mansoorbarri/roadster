'use strict';

(function iifeMenu(document, window, undefined) {
	var menuBtn = document.querySelector('.menu__btn');
	var	menu = document.querySelector('.menu__list');

	function toggleMenu() {
		menu.classList.toggle('menu__list--active');
		menu.classList.toggle('menu__list--transition');
		this.classList.toggle('menu__btn--active');
		this.setAttribute(
			'aria-expanded',
			this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
		);
	}

	function removeMenuTransition() {
		this.classList.remove('menu__list--transition');
	}

	function toggleSubmenu(e) {
		// Only on mobile (matches CSS breakpoint)
		if (window.innerWidth < 767) {
			e.preventDefault();
			var parentItem = this.parentElement;
			parentItem.classList.toggle('submenu-open');
		}
	}

	if (menuBtn && menu) {
		menuBtn.addEventListener('click', toggleMenu, false);
		menu.addEventListener('transitionend', removeMenuTransition, false);

		// Add click handlers for all links that have a submenu sibling
		var allLinks = menu.querySelectorAll('a');
		allLinks.forEach(function(link) {
			var parent = link.parentElement;
			if (parent.querySelector('.submenu')) {
				link.addEventListener('click', toggleSubmenu, false);
			}
		});
	}
}(document, window));
