const singleCard = document.querySelectorAll('.window-tabs');
const btnCard = document.querySelectorAll('.single__btn-tab');
const singleTabPanel = document.querySelector('.single__top-window-buttons');


    singleTabPanel.addEventListener('click', (e) => {
        if(window.innerWidth <= 606) {
        } else {
            if (e.target.closest('.single__btn-tab')) {
                const tabBtn = e.target.closest('.single__btn-tab');
                btnCard.forEach((btn, index) => {
                    if (btn === tabBtn) {
                        if (singleCard[index].classList.contains('d-none')) {
                            singleCard[index].classList.remove('d-none');
                        }
                    } else {
                        if (!singleCard[index].classList.contains('d-none')) {
                            singleCard[index].classList.add('d-none');
                        }
                    }
                })
            }
        }
        
    })