'use strict';
const emailInput = document.getElementById('email');
function validateEmail(event) {
  event.preventDefault();
  
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue) && emailValue) {
    emailInput.style.border = '2px solid red';
    emailInput.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message');
    errorDiv.textContent = 'Wrong email';
    errorDiv.style.color = 'red';
    
    const cancelButton = document.querySelector('input[type="reset"]');
    cancelButton.parentNode.insertBefore(errorDiv, cancelButton.nextSibling);
  } else {
    emailInput.classList.remove('error');
    const errorDiv = document.querySelector('.error-message');
    if (errorDiv) {
      errorDiv.remove();
    }
  }
}
emailInput.addEventListener('input', validateEmail);
