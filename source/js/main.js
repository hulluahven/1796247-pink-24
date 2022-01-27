const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const pageHeader = document.querySelector('.page-header');

navMain.classList.remove('main-nav--nojs');

if (pageHeader.classList.contains('page-header--closed')) {
  pageHeader.classList.remove('page-header--closed');
}
else {
  pageHeader.classList.add('page-header--closed');
};


if (navMain.classList.contains('main-nav--opened')) {
  navMain.classList.remove('main-nav--opened');
  navMain.classList.add('main-nav--closed');
};


navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  }
  else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

navToggle.addEventListener('click', () => {
  if(pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
  }
  else {
    pageHeader.classList.add('page-header--closed');
  }
});
