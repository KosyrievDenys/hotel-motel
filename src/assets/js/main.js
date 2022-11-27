document.addEventListener('DOMContentLoaded', function () {

  const headerScroll = document.getElementsByTagName('header')[0];
  const windowWidth = window.innerWidth;
  window.addEventListener("scroll", function () {
    const windowScrollTop = window.pageYOffset;
    if (windowScrollTop > 0 && windowWidth > 1024) {
      headerScroll.classList.add('header-scroll');
    } else {
      headerScroll.classList.remove('header-scroll');
    }
  })

});