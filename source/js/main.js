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
const modalSuccessButton = document.querySelector ('.modal-success__button');

const isEscapeKey = (evt) => evt.key === 'Escape';

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

const closeMessage = () => {
  const removeListener = () => {
    document.removeEventListener('keydown', onMessageEscapeKeydown);
    window.removeEventListener('click', onClickMessage );
  };

  function onMessageEscapeKeydown(evt)  {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      if (failureMessage.classList.contains('modal-failure--show')) {
        failureMessage.classList.remove('modal-failure--show');
      }
    }
  }

  function onClickMessage(evt) {
    removeListener();
    evt.preventDefault();
    if (failureMessage.classList.contains('modal-failure--show')) {
          failureMessage.classList.remove('modal-failure--show');
        }
  }

  document.addEventListener('keydown', onMessageEscapeKeydown);
  window.addEventListener('click', onClickMessage);
};



if (pageForm) {
    pageForm.addEventListener("submit", function (evt) {
        if (!nameField.value || !mailField.value || !surnameField.value) {
            evt.preventDefault();

            if (failureMessage.classList.contains('modal-failure--show')) {
              failureMessage.classList.remove('modal-failure--show');
            }
            else {
              failureMessage.classList.add('modal-failure--show');
            };

            if (!nameField.value) {
                nameField.classList.add("error");
            }
            if (!mailField.value) {
                mailField.classList.add("error");
            }
            if (!surnameField.value) {
                surnameField.classList.add("error");
          }

        } else {
            localStorage.setItem("name", nameField.value);
            if (successMessage.classList.contains('modal-success--show')) {
              successMessage.classList.remove('modal-success--show');
            }
            else {
              successMessage.classList.add('modal-success--show');
            };
        }

        modalFailureButton.addEventListener('click', function (evt) {
          if (failureMessage.classList.contains('modal-failure--show')) {
            failureMessage.classList.remove('modal-failure--show');
          }
          else {
            failureMessage.classList.add('modal-failure--show');
          };
        });

        closeMessage();

        modalSuccessButton.addEventListener('click', function (evt) {
          if (successMessage.classList.contains('modal-success--show')) {
            successMessage.classList.remove('modal-success--show');
          }
          else {
            successMessage.classList.add('modal-success--show');
          };
        });
    });

    nameField.addEventListener("click", function (evt) {
        this.classList.remove("error");
    });

    mailField.addEventListener("click", function (evt) {
        this.classList.remove("error");
    });

    surnameField.addEventListener("click", function (evt) {
      this.classList.remove("error");
  });
}
