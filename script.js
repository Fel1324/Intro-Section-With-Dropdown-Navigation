// MENU
const menu = document.querySelector('.menu');
const overlay = document.querySelector('#overlay');
const btnOpen = document.querySelector('.open-menu');
const btnClose = document.querySelector('.close-menu');

btnOpen.addEventListener('click', () => {
    menu.classList.add('menu-open');
    overlay.style.display = 'block';

    document.body.style.overflow = 'hidden';
});

function closeMenu(){
    // MENU
    menu.classList.remove('menu-open');
    overlay.style.display = 'none';

    document.body.style.overflow = 'auto';
}

btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

const buttonsDropdown = document.querySelectorAll('[data-btn]');

buttonsDropdown.forEach(button => {
    const attributeValue = button.dataset.btn;

    button.addEventListener('click', () => {
        toggleDropdown(attributeValue);
        button.classList.toggle('btn-dropdown--active');
    });
});

function toggleDropdown(dropdownType){
    document.querySelector(`[data-dropdown="${dropdownType}"]`).classList.toggle('dropdown-open');
    document.querySelector(`[data-arrow="${dropdownType}"]`).classList.toggle('arrow-rotate');
    document.querySelector(`[data-svg="${dropdownType}"]`).classList.toggle('svg-arrow--active');
}
