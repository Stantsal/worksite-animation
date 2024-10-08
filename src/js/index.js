import mobileNav from './modules/mobile-nav.js';
mobileNav();

document.addEventListener("DOMContentLoaded", function() {
    // Получаем текущий URL
    const currentPath = window.location.pathname.split("/").pop(); // Имя файла страницы
    const currentHash = window.location.hash; // Получаем хеш (якорь)

    // Получаем все ссылки в меню
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Сравниваем href с текущим путем и хешем
        if (href === currentPath || (href === currentPath + currentHash && currentHash !== '')) {
            link.classList.add('active'); // Добавляем класс active
        } else {
            link.classList.remove('active'); // Убираем класс active для остальных
        }
    });
});











     // Скролл эффект для карточек
     window.addEventListener('scroll', function() {
      const cards = document.querySelectorAll('.co2-card-parts');
      cards.forEach(card => {
          const cardPosition = card.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;

          if (cardPosition < screenPosition) {
              card.classList.add('active');
          }
      });
  });


    // Скролл эффект для карточек
    window.addEventListener('scroll', function() {
      const cards = document.querySelectorAll('.card-parts');
      cards.forEach(card => {
          const cardPosition = card.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;

          if (cardPosition < screenPosition) {
              card.classList.add('active');
          }
      });
  });




  const translations = {
    en: "Hello! How are you today?",
    ru: "Привет! Как ты сегодня?",
    ge: "გამარჯობა! დღეს როგორ ხარ?"
};

// Получаем все кнопки
const buttons = document.querySelectorAll('.lang-btn');
const textElement = document.getElementById('text');

// Функция смены текста при клике
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        textElement.innerText = translations[lang];
    });
});