'use-strict';
const name = document.querySelector('.input__name');
const email = document.querySelector('.input__email');
const username = document.querySelector('.input__username');
const password = document.querySelector('.input__password');
const rePassword = document.querySelector('.input__repassword');
const btnVerify = document.querySelector('.btn-verify');
const btnNext = document.querySelector('.btn-next');
const message = document.querySelector('.message');

btnVerify.addEventListener('click', () => {
  if (username.value === '' || username.value === null) {
    alert('Username is required');
  } else {
    passwordLength();
  }
});

const passwordLength = () => {
  if (password.value.length < 8) {
    alert('password must be at least 8 characters');
  } else {
    passwordIdenticalVerify();
  }
};

const passwordIdenticalVerify = () => {
  if (password.value === rePassword.value && password.value !== '') {
    message.innerHTML = 'password OK, click next to continue';
    btnNext.classList.remove('active');
    btnVerify.classList.add('active');
    document.cookie = `username=${username.value};path=/shopping-kart.html`;
  } else {
    message.innerHTML = 'password unmatch';
  }
};
