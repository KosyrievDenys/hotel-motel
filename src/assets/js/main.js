document.addEventListener('DOMContentLoaded', function () {

  const header = document.getElementsByTagName('header')[0];
  window.addEventListener("scroll", function () {
    const windowScrollTop = window.pageYOffset;
    if (windowScrollTop > 0) {
      header.classList.add('header-scroll');
    } else {
      header.classList.remove('header-scroll');
    }
  })

  new Swiper('.swiper-socials', {
    slidesPerView: 'auto',
    spaceBetween: 22,
    grabCursor: true,
  })

  new Swiper('.swiper-big', {
    slidesPerView: 'auto',
    centeredSlides: true,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 15,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      grabCursor: true,
    },
    breakpoints: {
      1024: {
        spaceBetween: 115,
      },
    },
  })

});