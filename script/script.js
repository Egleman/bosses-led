let headerLinksMenu = document.querySelectorAll('.header__link-lato-700');
let tabPanel = document.querySelector('.header__left');
let menuContent = document.querySelectorAll('.header__menu-content');
let headerMenu = document.querySelector('.header__menu');
let header = document.querySelector('.header');

tabPanel.addEventListener('click', (e) => {
    console.log('hello')
    e.preventDefault();
    if (e.target.closest('.header__link-lato-700')) {
        const tabBtn = e.target.closest('.header__link-lato-700');
        headerLinksMenu.forEach((headerLink, index) => {
            if (headerLink === tabBtn) {
                if (headerMenu.style.top !== '-200%' && headerMenu.style.opacity !== '0') {
                    header.style.backgroundColor = 'black';
                    headerMenu.style.top = '100%';
                    headerMenu.style.opacity = '1';
                    headerLink.classList.add('active-link');
                    menuContent[index].classList.remove('d-none');
                } else {
                    headerLink.classList.add('active-link');
                    menuContent[index].classList.remove('d-none');
                }
                
            } else {
                headerLink.classList.remove('active-link');
                menuContent[index].classList.add('d-none');
            }
        })
    }
});
