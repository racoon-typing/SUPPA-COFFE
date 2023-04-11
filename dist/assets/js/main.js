
const spolerListNode = document.querySelector('.services__list');
const servicesList = document.querySelectorAll('.services__item');
const bodyList = document.querySelectorAll('.services__item-body');

// services__item-body-open
function handleSpoler(evt) {
    const bodyId = evt.target.closest('.services__item').id;
    servicesList[bodyId].classList.toggle('services__item-open');
}

spolerListNode.addEventListener('click', handleSpoler)
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});
const burgerMenu = document.querySelector('.header__menu-burger');
const navNode = document.querySelector('.header__nav');
const pageBody = document.querySelector('.page__body');
const navList = document.querySelector('.nav__list');

function toggleMenu() {
    navNode.classList.toggle('nav__open');
    burgerMenu.classList.toggle('header__menu-burger-open');
    navList.classList.toggle('nav__list-open');

    // Флаг на открытие меню
    const isOpen = navNode.className.includes('nav__open');
    if (isOpen) {
        pageBody.style.overflow = 'hidden'
    } else {
        pageBody.style.overflow = 'auto'
    }
}

burgerMenu.addEventListener('click', toggleMenu)


// Закрыть меню
function closeMenu() {
    burgerMenu.classList.remove('header__menu-burger-open');
    navNode.classList.remove('nav__open');
    navList.classList.remove('nav__list-open');
    pageBody.style.overflow = 'auto'
}

// Прокрутка
function scrollToTopik(evt) {
    const itemId = evt.target.id;

    switch (itemId) {
        // 1
        case 'about':
            closeMenu();
            break;
        // 2
        case 'we':
            closeMenu();
            break;
        // 3
        case 'events':
            closeMenu();
            break;
        // 4
        case 'partner':
            closeMenu();
            break;
        case 'member':
            closeMenu();
            break;
    }
}

navList.addEventListener('click', scrollToTopik)