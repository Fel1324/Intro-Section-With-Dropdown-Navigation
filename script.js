const menu = document.querySelector('.menu');
const overlay = document.querySelector('#overlay');
const openBtn = document.querySelector('.open-menu');
const closeBtn = document.querySelector('.close-menu');

function open(){
    // MENU
    menu.classList.add('menu-open');
    overlay.style.display = 'block';

    document.body.style.overflow = 'hidden';
}

function close(){
    // MENU
    menu.classList.remove('menu-open');
    overlay.style.display = 'none';

    document.body.style.overflow = 'auto';
}

openBtn.addEventListener('click', open)
closeBtn.addEventListener('click', close);
overlay.addEventListener('click', close);


