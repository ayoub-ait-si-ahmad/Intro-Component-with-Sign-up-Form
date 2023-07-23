const form = document.getElementById('signup_form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  
  resetErrors();

  let hasError = false;

  if (firstNameInput.value.trim() === '') {
    showError(firstNameInput, 'First Name cannot be empty');
    hasError = true;
  }

  if (lastNameInput.value.trim() === '') {
    showError(lastNameInput, 'Last Name cannot be empty');
    hasError = true;
  }

  if (!isValidEmail(emailInput.value)) {
    showError(emailInput, 'Looks like this is not a valid email');
    hasError = true;
  }

  if (passwordInput.value.trim() === '') {
    showError(passwordInput, 'Password cannot be empty');
    hasError = true;
  }

  if (!hasError) {
    form.submit();
  }
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function showError(inputElement, errorMessage) {
  const errorElement = document.getElementById(`${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  inputElement.classList.add('error');
}

function resetErrors() {
  const errorElements = document.querySelectorAll('.error_message');
  const inputElements = document.querySelectorAll('.form__input');

  errorElements.forEach((errorElement) => {
    errorElement.textContent = '';
  });

  inputElements.forEach((inputElement) => {
    inputElement.classList.remove('error');
  });
}

function showError(inputElement, errorMessage) {
  const errorElement = document.getElementById(`${inputElement.id}-error`);
  const iconElement = inputElement.nextElementSibling; 
  errorElement.textContent = errorMessage;
  inputElement.classList.add('error');
  iconElement.style.display = 'inline'; 
}

function resetErrors() {
  const errorElements = document.querySelectorAll('.error_message');
  const inputElements = document.querySelectorAll('.form__input');
  const iconElements = document.querySelectorAll('.icon_error');

  errorElements.forEach((errorElement) => {
    errorElement.textContent = '';
  });

  inputElements.forEach((inputElement) => {
    inputElement.classList.remove('error');
  });

  iconElements.forEach((iconElement) => {
    iconElement.style.display = 'none';
  });
}
