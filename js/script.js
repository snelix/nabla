const menu = document.querySelector('.menu');
const burger = document.querySelector('.hamburger');
const overlay = document.querySelector('.menu-overlay');


burger.addEventListener('click', ()=> {
    menu.classList.toggle('active');
});

overlay.addEventListener('click', ()=> {
    menu.classList.remove('active');
});