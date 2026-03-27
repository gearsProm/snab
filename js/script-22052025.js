document.addEventListener('DOMContentLoaded', function () {
	const burgerMenu = document.querySelector('.header-burger');
	const menu = document.querySelector('.header-list');
	const burger = document.querySelector('.header-burger');
 
	burgerMenu.addEventListener('click', function () {
	  menu.classList.toggle('active');
	  burger.classList.toggle('active');
	});
 });

 document.addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.header-item').forEach(item => {
	  item.addEventListener('click', function () {
		
		 // Закриваємо всі відкриті підменю
		 document.querySelectorAll('.sub-list').forEach(sub => {
			if (sub !== this.querySelector('.sub-list')) {
			  sub.style.display = 'none';
			  sub.parentElement.classList.remove('active');
			}
		 });

		 // Перемикаємо підменю для натиснутого елемента
		 const submenu = this.querySelector('.sub-list');
		 if (submenu) {
			const isVisible = submenu.style.display === 'block';
			submenu.style.display = isVisible ? 'none' : 'block';
			this.classList.toggle('active', !isVisible);
		 }
	  });
	});
 });

 function switchLanguage(lang) {
	const pathParts = window.location.pathname.split('/');
	const currentLang = pathParts[1];
	const restOfPath = pathParts.slice(2).join('/');

	if (lang === 'uk') lang = 'ua';
	if (lang === 'ru') lang = 'ru';

	const targetPath = `/${lang}/${restOfPath || ''}`;
	const fallbackPath = `/${lang}/`;

	// Перевіряємо, чи існує сторінка
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

