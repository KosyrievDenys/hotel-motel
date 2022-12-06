document.addEventListener('DOMContentLoaded', function () {

  let filter = document.getElementsByClassName('filter')[0];
  filter.addEventListener('click', function () {
    filter.classList.toggle('filter-active');
  })

  let linkItem = document.getElementsByClassName('link-item');
  let filterSearch = document.getElementsByClassName('filter-search')[0];
  for (let i = 0; i < linkItem.length; i++) {
    linkItem[i].addEventListener('click', function () {
      filterSearch.textContent = linkItem[i].innerHTML;
    })
  }

});