const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

btnOpen.addEventListener('click', () => {
    menuMobile.style.display = 'block';
    menuMobile.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
});

btnClose.addEventListener('click', () => {
    menuMobile.style.display = 'none';
    menuMobile.style.overflow = 'visible';
    body.style.overflow = 'visible';
});