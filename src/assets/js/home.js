document.addEventListener('DOMContentLoaded', function () {

  const windowWidth = window.innerWidth;
  const introBtnSpan = document.getElementsByClassName('intro-btn-p');
  if (windowWidth < 1024) {
    introBtnSpan.innerHTML = 'Book a room';
  }

});