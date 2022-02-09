const name = document.querySelector('.input__name').value;
const email = document.querySelector('.input__email').value;
const username = document.querySelector('.input__username');
const address = document.querySelector('.input__address').value;
const btn = document.querySelector('.cookie-btn');

btn.addEventListener('click', () => {
  console.log(document.cookie);
  getcookieValue();
});

const cookieValue = document.cookie
  .split('; ')
  .find(row => row.startsWith('username='))
  .split('=')[1];
const getcookieValue = () => {
  username.value = cookieValue;
};
