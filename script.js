// MENU
const menu = document.querySelector('.menu');
const overlay = document.querySelector('#overlay');
const openBtn = document.querySelector('.open-menu');
const closeBtn = document.querySelector('.close-menu');

openBtn.addEventListener('click', e => {
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

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// DROPDOWN MOBILE
// DROPDOWN MOBILE FEATURES
const btnFeaturesMobile = document.querySelector('#btn-features--mobile');
const featuresMobile = document.querySelector('#features-mobile');
const featuresArrowMobile = document.querySelector('#btn-features--mobile > .arrow-button');
const featuresSvgMobile = document.querySelector('#btn-features--mobile > .arrow-button > svg > path');
// DROPDOWN MOBILE COMPANY
const btnCompanyMobile = document.querySelector('#btn-company--mobile');
const companyMobile = document.querySelector('#company-mobile');
const companyArrowMobile = document.querySelector('#btn-company--mobile > .arrow-button');
const companySvgMobile = document.querySelector('#btn-company--mobile > .arrow-button > svg > path');

// DROPDOWN DESKTOP
// DROPDOWN DESKTOP FEATURES
const btnFeaturesDesktop = document.querySelector('#btn-features--desktop');
const featuresDesktop = document.querySelector('#features-desktop');
const featuresArrowDesktop = document.querySelector('#btn-features--desktop > .arrow-button');
const featuresSvgDesktop = document.querySelector('#btn-features--desktop > .arrow-button > svg > path');
// DROPDOWN DESKTOP COMPANY
const btnCompanyDesktop = document.querySelector('#btn-company--desktop');
const companyDesktop = document.querySelector('#company-desktop');
const companyArrowDesktop = document.querySelector('#btn-company--desktop > .arrow-button');
const companySvgDesktop = document.querySelector('#btn-company--desktop > .arrow-button > svg > path');

function openDropdown(dropdown, btn, arrow, svg){
    dropdown.classList.toggle('dropdown-open');
    btn.classList.toggle('btn-dropdown--active');
    arrow.classList.toggle('arrow-rotate');
    svg.classList.toggle('svg-arrow--active');
}

btnFeaturesMobile.addEventListener('click', e => {
    openDropdown(featuresMobile, btnFeaturesMobile, featuresArrowMobile, featuresSvgMobile);
});

btnCompanyMobile.addEventListener('click', e => {
    openDropdown(companyMobile, btnCompanyMobile, companyArrowMobile, companySvgMobile);
});

btnFeaturesDesktop.addEventListener('click', e => {
    openDropdown(featuresDesktop, btnFeaturesDesktop, featuresArrowDesktop, featuresSvgDesktop);
});

btnCompanyDesktop.addEventListener('click', e => {
    openDropdown(companyDesktop, btnCompanyDesktop, companyArrowDesktop, companySvgDesktop);
});
