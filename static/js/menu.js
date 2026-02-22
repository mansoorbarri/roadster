'use strict';

(function iifeMenu(document, window, undefined) {
	var menuBtn = document.querySelector('.menu__btn');
	var	menu = document.querySelector('.menu__list');
	var root = document.documentElement;
	var themeToggle = document.querySelector('.theme-toggle');
	var themeStorageKey = 'roadster-theme';
	var allLinks;

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
		var parentItem;

		// Only on mobile (matches CSS breakpoint)
		if (window.innerWidth < 767) {
			e.preventDefault();
			parentItem = this.parentElement;
			parentItem.classList.toggle('submenu-open');
		}
	}

	function getSystemTheme() {
		return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}

	function getStoredTheme() {
		var storedTheme;

		try {
			storedTheme = window.localStorage.getItem(themeStorageKey);
		} catch (e) {
			return null;
		}

		return storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : null;
	}

	function setTheme(theme, persist) {
		var didPersist = true;

		root.setAttribute('data-theme', theme);

		if (persist) {
			try {
				window.localStorage.setItem(themeStorageKey, theme);
			} catch (e) {
				didPersist = false;
			}
		}

		return didPersist;
	}

	function updateThemeToggle(theme) {
		var nextTheme = theme === 'dark' ? 'light' : 'dark';
		var label = 'Switch to ' + nextTheme + ' theme';

		themeToggle.setAttribute('aria-label', label);
		themeToggle.setAttribute('title', label);
		themeToggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
		themeToggle.querySelector('.theme-toggle__label').textContent = theme === 'dark' ? 'Dark' : 'Light';
	}

	function initTheme() {
		var storedTheme;
		var activeTheme;
		var mediaQuery;

		if (!themeToggle) {
			return;
		}

		storedTheme = getStoredTheme();
		activeTheme = storedTheme || root.getAttribute('data-theme') || getSystemTheme();
		setTheme(activeTheme, false);
		updateThemeToggle(activeTheme);

		themeToggle.addEventListener('click', function () {
			var nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
			setTheme(nextTheme, true);
			updateThemeToggle(nextTheme);
		}, false);

		if (window.matchMedia) {
			mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
			if (typeof mediaQuery.addEventListener === 'function') {
				mediaQuery.addEventListener('change', function (e) {
					var systemTheme;

					if (!getStoredTheme()) {
						systemTheme = e.matches ? 'dark' : 'light';
						setTheme(systemTheme, false);
						updateThemeToggle(systemTheme);
					}
				});
			} else if (typeof mediaQuery.addListener === 'function') {
				mediaQuery.addListener(function (e) {
					var systemTheme;

					if (!getStoredTheme()) {
						systemTheme = e.matches ? 'dark' : 'light';
						setTheme(systemTheme, false);
						updateThemeToggle(systemTheme);
					}
				});
			}
		}
	}

	if (menuBtn && menu) {
		menuBtn.addEventListener('click', toggleMenu, false);
		menu.addEventListener('transitionend', removeMenuTransition, false);

		// Add click handlers for all links that have a submenu sibling
		allLinks = menu.querySelectorAll('a');
		allLinks.forEach(function (link) {
			var parent = link.parentElement;
			if (parent.querySelector('.submenu')) {
				link.addEventListener('click', toggleSubmenu, false);
			}
		});
	}

	initTheme();
}(document, window));
