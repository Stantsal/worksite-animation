import mobileNav from "./modules/mobile-nav.js";
mobileNav();

document.addEventListener("DOMContentLoaded", function() {
  // Получаем текущий URL
  const currentPath = window.location.pathname.split("/").pop(); // Имя файла страницы
  const navLinks = document.querySelectorAll(".nav-link");

  // Перебираем все ссылки
  let isActiveSet = false; // Флаг для проверки, была ли установлена активная ссылка

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    // Проверяем, совпадает ли href с текущим путем
    if (href === currentPath) {
      link.classList.add("active"); // Добавляем класс active
      isActiveSet = true; // Устанавливаем флаг
    } else {
      link.classList.remove("active"); // Убираем класс active для остальных
    }
  });

  // Если активная страница не установлена, устанавливаем по умолчанию
  if (!isActiveSet) {
    document.getElementById("default-active").classList.add("active");
  }

  // Прокручиваем страницу к началу
  window.scrollTo(0, 0);
});

// Скролл эффект для карточек
window.addEventListener("scroll", function() {
  const cards = document.querySelectorAll(".co2-card-parts");
  cards.forEach((card) => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (cardPosition < screenPosition) {
      card.classList.add("active");
    }
  });
});

// Скролл эффект для карточек
window.addEventListener("scroll", function() {
  const cards = document.querySelectorAll(".card-parts");
  cards.forEach((card) => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (cardPosition < screenPosition) {
      card.classList.add("active");
    }
  });
});

const translations = {
  en: "Hello! How are you today?",
  ru: "Привет! Как ты сегодня?",
  ge: "გამარჯობა! დღეს როგორ ხარ?",
};

// Получаем все кнопки
const buttons = document.querySelectorAll(".lang-btn");
const textElement = document.getElementById("text");

// Функция смены текста при клике
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.getAttribute("data-lang");
    textElement.innerText = translations[lang];
  });
});
