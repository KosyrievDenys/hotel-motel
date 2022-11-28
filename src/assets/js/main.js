document.addEventListener('DOMContentLoaded', function () {

  const headerScroll = document.getElementsByTagName('header')[0];
  window.addEventListener("scroll", function () {
    const windowScrollTop = window.pageYOffset;
    if (windowScrollTop > 0) {
      headerScroll.classList.add('header-scroll');
    } else {
      headerScroll.classList.remove('header-scroll');
    }
  })

});