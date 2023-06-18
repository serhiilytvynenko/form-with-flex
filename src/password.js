'use strict';
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('password-confirmation');
  if (passwordInput.value !== confirmPasswordInput.value) {
    console.log('Confirm Password Error');
  } else{
     console.log('good');
  }
});