import mobileNav from "./modules/mobile-nav.js";
mobileNav();

const track = document.querySelector('.slider__track');
let items = Array.from(document.querySelectorAll('.slider__item'));
const itemsToShow = 9;
let position = 0;
let itemWidth = items[0].offsetWidth;
let autoSlide;

// Функция для перемешивания массива
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Перемешиваем слайды при загрузке
shuffleArray(items);
track.innerHTML = ''; // Очищаем трек
items.forEach(item => track.appendChild(item)); // Добавляем перемешанные элементы

// Клонируем первые несколько элементов для бесконечной прокрутки
function cloneItems() {
  for (let i = 0; i < itemsToShow; i++) {
    const clone = items[i].cloneNode(true);
    track.appendChild(clone);
  }
}

// Запускаем клонирование
cloneItems();

// Функция перемещения слайдов
function moveSlider() {
  position -= itemWidth;
  
  // Если позиция ушла дальше, чем длина всех элементов (включая клоны)
  if (Math.abs(position) >= itemWidth * items.length) {
    position = 0; // Возвращаемся в начало
    track.style.transition = 'none'; // Отключаем анимацию для мгновенного перемещения
    track.style.transform = `translateX(${position}px)`;
    
    // Включаем анимацию снова
    setTimeout(() => {
      track.style.transition = 'transform 0.5s ease';
    }, 20);
  } else {
    track.style.transform = `translateX(${position}px)`;
  }
}

// Автопрокрутка
function startAutoSlide() {
  autoSlide = setInterval(moveSlider, 2000);
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

// Начало автопрокрутки
startAutoSlide();

// Остановка прокрутки при наведении на слайдер
track.addEventListener('mouseenter', stopAutoSlide);
track.addEventListener('mouseleave', startAutoSlide);

// Управление через кнопки
document.querySelector('.slider__arrow--next').addEventListener('click', moveSlider);

// Функция для пересчета ширины элемента при изменении размера экрана
window.addEventListener('resize', () => {
  itemWidth = items[0].offsetWidth;
  position = 0;
  track.style.transform = `translateX(${position}px)`;
});
