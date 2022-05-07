const swiper = new Swiper('.swiper', {
    // Navigation arrows

    slidesPerView: 3,
    spaceBetween: 40,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      798: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 480px
      1022: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      // when window width is >= 640px
    },
    navigation: {
      nextEl: '.arrow-slider-right',
      prevEl: '.arrow-slider-left',
    },
});

const swiperTab = new Swiper('.swiper-tab', {
  // Navigation arrows

  slidesPerView: 3,
  spaceBetween: 34,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 480px
    470: {
      slidesPerView: 3,
      spaceBetween: 34
    },
    // when window width is >= 640px
  },
  
  navigation: {
    nextEl: '.arrow-tab-right',
    prevEl: '.arrow-tab-left',
  },
});

const tabSwiperPanel = document.querySelector('.slider-mobile-tab');
const swiperButtons = document.querySelectorAll('.image-slide');
const singleImage = document.querySelectorAll('.window-tabs');

tabSwiperPanel.addEventListener('click', (e) => {
      if (e.target.closest('.image-slide')) {
          const tabBtn = e.target.closest('.image-slide');
          swiperButtons.forEach((btn, index) => {
              if (btn === tabBtn) {
                  if (singleImage[index].classList.contains('d-none')) {
                      singleImage[index].classList.remove('d-none');
                  }
              } else {
                  singleImage[index].classList.add('d-none');
              }
          })
      }
})