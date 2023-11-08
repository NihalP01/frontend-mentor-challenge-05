const errorMsg = document.getElementById('error-msg');
const email = document.getElementById('email');

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const btnSubmit = document.getElementById('btn-submit');

btnSubmit.addEventListener('click', () => {
  if (!emailPattern.test(email.value)) {
    errorMsg.style.display = 'flex';
    email.style.color = 'hsl(11, 100%, 63%)';
    email.style.border = '2px solid hsl(11, 100%, 63%)';
    email.style.backgroundColor = 'hsla(11, 100%, 63%, 15%)';
  } else {
    errorMsg.style.display = 'none';
    email.style.color = '';
    email.style.border = '';
    email.style.backgroundColor = '';
  }
});
