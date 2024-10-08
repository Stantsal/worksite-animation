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




function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    const mailtoLink = `mailto:example@company.com?subject=Вопрос от ${name}&body=Имя: ${name}%0AEmail: ${email}%0AСообщение: ${message}`;
    window.location.href = mailtoLink;
}

// Анимации для заголовков и форм
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.contacts__title, .contacts__info-title, .contacts__form-title, .contacts__map-title').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.3}s`;
    });
});