const menu = document.querySelector('.menu');
const overlay = document.querySelector('#overlay');
const openBtn = document.querySelector('.open-menu');
const closeBtn = document.querySelector('.close-menu');

/* DESKTOP */
const featuresDesk = document.querySelector('.features-desk');
const companyDesk = document.querySelector('.company-desk');
const btnFeaturesDesk = document.querySelector('.btn-features--desk');
const btnCompanyDesk = document.querySelector('.btn-company--desk');

/* MOBILE */
const featuresMobile = document.querySelector('.features-mobile');
const companyMobile = document.querySelector('.company-mobile');
const btnFeaturesMobile = document.querySelector('.btn-features--mobile');
const btnCompanyMobile = document.querySelector('.btn-company--mobile');

function openMenu(){
    // MENU
    menu.classList.add('menu-open');
    overlay.style.display = 'block';

    document.body.style.overflow = 'hidden';
}

function closeMenu(){
    // MENU
    menu.classList.remove('menu-open');
    overlay.style.display = 'none';

    document.body.style.overflow = 'auto';
}

function openFeaturesDesk(){
    featuresDesk.classList.toggle('list-expanded--open');

    btnFeaturesDesk.classList.toggle('generic-button--active');
    // addActiveColorToBtnArrow();
}

function openCompanyDesk(){
    companyDesk.classList.toggle('list-expanded--open');

    btnCompanyDesk.classList.toggle('generic-button--active');
    // addActiveColorToBtnArrow();
}

function openFeaturesMobile(){
    featuresMobile.classList.toggle('list-expanded--open');

    btnFeaturesMobile.classList.toggle('generic-button--active');
    // addActiveColorToBtnArrow();
}

function openCompanyMobile(){
    companyMobile.classList.toggle('list-expanded--open');

    btnCompanyMobile.classList.toggle('generic-button--active');
    // addActiveColorToBtnArrow();
}

openBtn.addEventListener('click', openMenu)
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

btnFeaturesDesk.addEventListener('click', openFeaturesDesk);
btnCompanyDesk.addEventListener('click', openCompanyDesk);

btnFeaturesMobile.addEventListener('click', openFeaturesMobile);
btnCompanyMobile.addEventListener('click', openCompanyMobile);
