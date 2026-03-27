document.addEventListener('DOMContentLoaded', function () {
	const burger = document.querySelector('.header-burger');
	const menu = document.querySelector('.header-list');
	const body = document.body;

	// Бургер-меню
	burger.addEventListener('click', function (e) {
		e.stopPropagation();
		menu.classList.toggle('active');
		burger.classList.toggle('active');
		body.classList.toggle('no-scroll');
	});

	// Закриття меню при кліку поза ним
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

	// Підменю (мобільна логіка з подвійним кліком)
	document.querySelectorAll('.header-item').forEach(item => {
		const link = item.querySelector('.header-link');
		const submenu = item.querySelector('.sub-list');

		if (!submenu) return;

		link.addEventListener('click', function (e) {
			if (window.innerWidth > 768) return;

			if (!item.classList.contains('active')) {
				e.preventDefault(); // перший клік — відкриваємо
				closeAllSubmenus();
				item.classList.add('active');
				submenu.style.display = 'block';
			} else {
				// другий клік — дозволяємо перехід
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
	const pathParts = window.location.pathname.split('/');
	const currentLang = pathParts[1];
	const restOfPath = pathParts.slice(2).join('/');

<a href="#" onclick="switchLanguage('uk')">ua</a> | 
<a href="#" onclick="switchLanguage('ru')">ru</a>

	const targetPath = `/${lang}/${restOfPath || ''}`;
	const fallbackPath = `/${lang}/`;

	fetch(targetPath, { method: 'HEAD' })
		.then(response => {
			if (response.ok) {
				window.location.href = targetPath;
			} else {
				window.location.href = fallbackPath;
			}
		})
		.catch(() => {
			window.location.href = fallbackPath;
		});
}
