import mobileNav from "./modules/mobile-nav.js";
mobileNav();

document.addEventListener('DOMContentLoaded', () => {
  
  const menuItems = document.querySelectorAll('.nav-link');


  if (menuItems.length === 0) {
    console.log('Элементы меню не найдены. Проверьте селектор .nav-link');
    return;
  }

 
  menuItems.forEach(item => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
      console.log('Класс active удален у элемента:', item);
    }
  });

 
  const indexToActivate = 2; 
  if (menuItems[indexToActivate]) {
    menuItems[indexToActivate].classList.add('active');
    console.log('Класс active добавлен к элементу:', menuItems[indexToActivate]);
  } else {
    console.log(`Элемент с индексом ${indexToActivate} не найден`);
  }
});