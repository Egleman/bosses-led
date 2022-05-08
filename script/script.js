const buttons = document.querySelectorAll('.header__link-lato-700');
const deskotMenuButtons = document.querySelectorAll('#desktop-menu-md');
const headerMenu = document.querySelector('.header__menu');
const menuContent = document.querySelectorAll('.header__menu-content');
const header = document.querySelector('.header');
const headerSearch = document.querySelector('.header__search');
const headerSearchFull = document.querySelector('.header__search-full');
const menuToggle = document.querySelector('#menu__toggle');


const mobileMenuButtons = document.querySelectorAll('.header__name-wr');
const subMobileMenuButtons = document.querySelectorAll('.header__sub-name-link-group');
const firstUl = document.querySelectorAll('.header__sublist');
const secondUl = document.querySelectorAll('.header__subgroup');
const plusImg = document.querySelectorAll('.plus-img');

const footerMenuButton = document.querySelector('#footer__menu-toggle');
const footerMobileUl = document.querySelector('.footer__list-mobile');

const singleCard = document.querySelectorAll('.window-tabs');
const btnCard = document.querySelectorAll('.single__btn-tab');
const singleTabPanel = document.querySelector('.single__top-window-buttons');

const message = document.querySelector('.header')
const story = document.querySelector('.story__text > a');
const catalog = document.querySelector('.catalog__title');
const feedback = document.querySelector('.feedback');

const arraySection = [message, story, catalog, feedback];

const progressBarItem = document.querySelectorAll('.message-progressbar__item');

let scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300
  });
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1
}
const observer = new IntersectionObserver((entries, observer) => {
    // для каждой записи-целевого элемента
    entries.forEach(entry => {
        // если элемент является наблюдаемым
        if (entry.isIntersecting) {
            const section = entry.target
            arraySection.forEach((item, index) => {
                if (item == section) {
                    progressBarItem[index].classList.add('active-progressbar')
                } else {
                    if (progressBarItem[index].classList.contains('active-progressbar')) {
                        progressBarItem[index].classList.remove('active-progressbar');
                    }
                }
            })
        }
    })
}, options)
arraySection.forEach(item => {
    observer.observe(item);
})

footerMenuButton.addEventListener('change', () => {
    if (footerMenuButton.checked) {
        footerMobileUl.classList.add('active-mobile-ul');
    } else {
        footerMobileUl.classList.remove('active-mobile-ul');
    }
})

mobileMenuButtons.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        firstUl[index].classList.toggle('active-mobile-ul');
        plusImg[index].classList.toggle('rotate-img');
    })
})

subMobileMenuButtons.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        secondUl[index].classList.toggle('active-mobile-ul');
    })
})


document.addEventListener('click', (e) => {
    if (window.innerWidth > 1230) {
        if (e.target.closest('.header__link-lato-700')) {
            e.preventDefault();
            const tabBtn = e.target.closest('.header__link-lato-700');
            buttons.forEach((btn, index) => {
                if (btn === tabBtn) {
                    headerMenu.classList.add('active-menu');
                    header.style.backgroundColor = 'black';
                    btn.classList.add('active-link')
                    menuContent[index].classList.remove('d-none');
                } else {
                    menuContent[index].classList.add('d-none');
                    if(btn.classList.contains('active-link')) {
                        btn.classList.remove('active-link');
                    }
                }
            })
        } else if (!headerMenu.contains(e.target) && !header.contains(e.target)) {
            headerMenu.classList.remove('active-menu');
            if (window.innerWidth <= 606) {
                header.style.backgroundColor = 'black';
            } else {
                header.style.backgroundColor = 'transparent';
            }
            
            buttons.forEach(btn => {
                if (btn.classList.contains('active-link')) {
                    btn.classList.remove('active-link');
                }
            })
            deskotMenuButtons.forEach(btn => {
                if (btn.classList.contains('active-link')) {
                    btn.classList.remove('active-link');
                }
            })
        } else if (e.target.closest('.header__search')) {
            headerSearch.classList.add('d-none');
            headerSearchFull.classList.remove('d-none');
        }
    } else if (window.innerWidth <= 1230 ) {
        if (e.target.closest('#desktop-menu-md')) {
            e.preventDefault();
            const tabBtn = e.target.closest('#desktop-menu-md');
            deskotMenuButtons.forEach((btn, index) => {
                if (btn === tabBtn) {
                    headerMenu.classList.add('active-menu');
                    header.style.backgroundColor = 'black';
                    btn.classList.add('active-link')
                    menuContent[index].classList.remove('d-none');
                } else {
                    menuContent[index].classList.add('d-none');
                    if(btn.classList.contains('active-link')) {
                        btn.classList.remove('active-link');
                    }
                }
            })
        } else if (!headerMenu.contains(e.target) && !header.contains(e.target)) {
            if(menuToggle.checked) {
                menuToggle.checked = false;
            }
            headerMenu.classList.remove('active-menu');
            if (window.innerWidth <= 606) {
                header.style.backgroundColor = 'black';
            } else {
                header.style.backgroundColor = 'transparent';
            }
            deskotMenuButtons.forEach(btn => {
                if (btn.classList.contains('active-link')) {
                    btn.classList.remove('active-link');
                }
            })
            menuContent.forEach(menu => {
                menu.classList.add('d-none')
            })
        } else if (e.target.closest('.header__search')) {
            headerSearch.classList.add('d-none');
            headerSearchFull.classList.remove('d-none');
        }
    }
})

menuToggle.addEventListener('change', () => {
    if (menuToggle.checked) {
        headerMenu.classList.add('active-menu');
        header.style.backgroundColor = 'black';
    } else {
        headerMenu.classList.remove('active-menu');
        if (window.innerWidth <= 606) {
            header.style.backgroundColor = 'black';
        } else {
            header.style.backgroundColor = 'transparent';
        }
        deskotMenuButtons.forEach(btn => {
            if (btn.classList.contains('active-link')) {
                btn.classList.remove('active-link');
            }
        })
        menuContent.forEach(menu => {
            menu.classList.add('d-none')
        })
    }
})


