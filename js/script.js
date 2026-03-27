document.addEventListener('DOMContentLoaded', function () {
	const burger = document.querySelector('.header-burger');
	const menu = document.querySelector('.header-list');
	const body = document.body;

	burger.addEventListener('click', function (e) {
		e.stopPropagation();
		menu.classList.toggle('active');
		burger.classList.toggle('active');
		body.classList.toggle('no-scroll');
	});

	document.addEventListener('click', function (e) {
		if (
			menu.classList.contains('active') &&
			!e.target.closest('.header-menu')
		) {
			menu.classList.remove('active');
			burger.classList.remove('active');
			body.classList.remove('no-scroll');
			closeAllSubmenus();
		}
	});

	document.querySelectorAll('.header-item').forEach(item => {
		const link = item.querySelector('.header-link');
		const submenu = item.querySelector('.sub-list');

		if (!submenu) return;

		link.addEventListener('click', function (e) {
			if (window.innerWidth > 768) return;

			if (!item.classList.contains('active')) {
				e.preventDefault();
				closeAllSubmenus();
				item.classList.add('active');
				submenu.style.display = 'block';
			}
		});
	});

	function closeAllSubmenus() {
		document.querySelectorAll('.header-item').forEach(item => {
			item.classList.remove('active');
			const submenu = item.querySelector('.sub-list');
			if (submenu) submenu.style.display = 'none';
		});
	}
});

// Перемикач мови
function switchLanguage(lang) {
	const hreflangLink = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);

	if (hreflangLink) {
		const fullUrl = hreflangLink.getAttribute('href');
		const path = new URL(fullUrl).pathname;
		window.location.href = path;
		return;
	}

	const langPrefix = lang === 'uk' ? 'ua' : 'ru';
	window.location.href = `/${langPrefix}/`;
}