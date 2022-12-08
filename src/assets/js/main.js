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

  let filter = document.getElementsByClassName('filter');
  for (let i = 0; i < filter.length; i++) {
    filter[i].addEventListener('click', function () {
      filter[i].classList.toggle('filter-active');
    })
  }

  let linkItem = document.getElementsByClassName('link-item');
  let filterSearch = document.getElementsByClassName('filter-search');
  for (let k = 0; k < filterSearch.length; k++) {
    for (let i = 0; i < linkItem.length; i++) {
      linkItem[i].addEventListener('click', function () {
        filterSearch[k].textContent = linkItem[i].innerHTML;
      })
    }
  }


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