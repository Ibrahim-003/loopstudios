const $navBtn = document.querySelector('.header__toggler');
const $btnIcon = document.querySelectorAll('.header__togglerIcon');
const $nav = document.querySelector('.nav-mobile');

$navBtn.addEventListener('click', (e) => {
    $nav.classList.toggle('nav-mobile--active-state');
    
    $btnIcon.forEach((icon) => {
        icon.classList.toggle('header__togglerIcon--active');
    })
})