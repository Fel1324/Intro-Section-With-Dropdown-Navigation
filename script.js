const menu = document.querySelector('.menu');
const overlay = document.querySelector('#overlay');
const openBtn = document.querySelector('.open-menu');
const closeBtn = document.querySelector('.close-menu');

openBtn.addEventListener('click', () => {
    menu.classList.add('menu-open');
    overlay.style.display = 'block';

    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

function closeMenu(){
    menu.classList.remove('menu-open');
    overlay.style.display = 'none';

    document.body.style.overflow = 'auto';
}
