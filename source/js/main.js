const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const pageHeader = document.querySelector('.page-header');
const pageForm = document.querySelector('.contest-form');
const surnameField = document.querySelector('#member-surname');
const nameField = document.querySelector('#member-name');
const mailField = document.querySelector('#member-mail');
const failureMessage = document.querySelector('.modal-failure');
const successMessage = document.querySelector('.modal-success');
const modalFailureButton =  document.querySelector('.modal-failure__button');
const modalSucessButton = document.querySelector ('.modal-success__button');
const valid = document.querySelectorAll('[required]');
const validArray = Array.prototype.slice.call(valid);



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

  pageForm.addEventListener('submit', (evt) => {
    // evt.preventDefault();

      if (!valid.value) {
        evt.preventDefault();
        let empty = validArray.find(item => item.value == '');
        empty.focus();
        empty.classList.add('error');
        failureMessage.classList.add('modal-failure--show');
      }

      // else {
      //   successMessage.classList.add('modal-success--show');
      // }

  });

  modalFailureButton.addEventListener('click', (evt) => {
    failureMessage.classList.remove('modal-failure--show');
  });

  // successMessage.addEventListener('click', (evt) => {
  //   successMessage.classList.remove('modal-success--show');
  // });
