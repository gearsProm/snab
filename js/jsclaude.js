
/**
 * Ініціалізація меню сайту
 * Об'єднуємо всі функції меню в одному обробнику DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', function() {
  // Ініціалізація бургер-меню
  initBurgerMenu();
  
  // Ініціалізація підменю
  initSubmenu();
  
  // Закриваємо меню при кліку за межами меню
  document.addEventListener('click', function(event) {
    const menu = document.querySelector('.header-list');
    const burger = document.querySelector('.header-burger');
    
    // Якщо клік не на меню і не на бургер і меню відкрите
    if (!event.target.closest('.header-list') && 
        !event.target.closest('.header-burger') && 
        menu.classList.contains('active')) {
      menu.classList.remove('active');
      burger.classList.remove('active');
    }
  });
});

/**
 * Ініціалізація бургер-меню
 */
function initBurgerMenu() {
  const burgerMenu = document.querySelector('.header-burger');
  const menu = document.querySelector('.header-list');
  
  if (!burgerMenu || !menu) return;
  
  burgerMenu.addEventListener('click', function(event) {
    event.preventDefault();
    menu.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    
    // Закриваємо всі відкриті підменю при перемиканні меню
    document.querySelectorAll('.sub-list').forEach(submenu => {
      submenu.style.display = 'none';
    });
    document.querySelectorAll('.header-item').forEach(item => {
      item.classList.remove('active');
    });
  });
}

/**
 * Ініціалізація підменю
 */
function initSubmenu() {
  const menuItems = document.querySelectorAll('.header-item');
  
  menuItems.forEach(item => {
    const link = item.querySelector('.header-link');
    const submenu = item.querySelector('.sub-list');
    
    if (!submenu) return; // Пропускаємо пункти без підменю
    
    // Додаємо обробник кліку для відкриття/закриття підменю
    link.addEventListener('click', function(event) {
      event.preventDefault();
      
      // Закриваємо всі інші відкриті підменю
      menuItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherSubmenu = otherItem.querySelector('.sub-list');
          if (otherSubmenu) {
            otherSubmenu.style.display = 'none';
            otherItem.classList.remove('active');
          }
        }
      });
      
      // Перемикаємо поточне підменю
      const isOpen = submenu.style.display === 'block';
      submenu.style.display = isOpen ? 'none' : 'block';
      item.classList.toggle('active', !isOpen);
    });
  });
  
  // Для мобільної версії - дозволяємо відкривати підменю через клік на пункті меню
  if (window.innerWidth <= 768) {
    menuItems.forEach(item => {
      item.addEventListener('click', function(event) {
        // Обробка кліка тільки на самому пункті, не на посиланнях підменю
        if (event.target === item || event.target === item.querySelector('.header-link')) {
          const submenu = item.querySelector('.sub-list');
          if (submenu) {
            const isOpen = submenu.style.display === 'block';
            submenu.style.display = isOpen ? 'none' : 'block';
            item.classList.toggle('active', !isOpen);
          }
        }
      });
    });
  }
}

/**
 * Перемикання мови сайту
 * @param {string} lang - Мова, на яку необхідно перемкнути (uk, ru)
 */
function switchLanguage(lang) {
  // Нормалізація коду мови
  lang = lang === 'uk' ? 'ua' : lang;
  
  // Отримуємо поточний шлях
  const pathParts = window.location.pathname.split('/');
  const currentLang = pathParts[1];
  const restOfPath = pathParts.slice(2).join('/');
  
  // Формуємо новий шлях
  const targetPath = `/${lang}/${restOfPath}`;
  const fallbackPath = `/${lang}/`;
  
  // Перевіряємо, чи існує сторінка і перенаправляємо користувача
  fetch(targetPath, { method: 'HEAD' })
    .then(response => {
      window.location.href = response.ok ? targetPath : fallbackPath;
    })
    .catch(() => {
      window.location.href = fallbackPath;
    });
}