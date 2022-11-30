document.addEventListener('DOMContentLoaded', function () {

  new Swiper(".swiper-rooms", {
    slidesPerView: 'auto',
    centeredSlides: true,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          type: 'progressbar',
        },
      },
      768: {
        spaceBetween: 24,
        pagination: {
          el: ".swiper-pagination",
          type: 'fraction',
        },
      }
    }
  })

  new Swiper(".swiper-restaurants", {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 24,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    }
  })

});