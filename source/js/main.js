const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const pageHead = document.querySelector('.page-header');
const pageForm = document.querySelector('.contest-form');
const surnameField = document.querySelector('#member-surname');
const nameField = document.querySelector('#member-name');
const mailField = document.querySelector('#member-mail');
const failureMessage = document.querySelector('modal-failure');
const successMessage = document.querySelector('modal-success');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

navToggle.addEventListener('click', () => {
  if(pageHead.classList.contains('page-header--closed')) {
    pageHead.classList.remove('page-header--closed');
  } else {
    pageHead.classList.add('page-header--closed');
  }
});


// pageForm.addEventListener('submit', function (event) {
//   if(!surnameField.validity.valid) {
//     // surnameField.style = 'outline: 5px solid green';
//     failureMessage.classList.add('modal-failure--show');
//     event.preventDefault();
//   }
// });
