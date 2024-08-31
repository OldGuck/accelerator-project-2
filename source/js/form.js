const form = document.querySelector('.form__main-wrapper');
const phoneInput = document.querySelector('.form__input--phone');
const emailInput = document.querySelector('.form__input--email');
const submitButton = document.querySelector('.form__button');

const setInputsListener = (input) => input.addEventListener('change', () => input.classList.remove('form__input--error'));

const validateInput = (input) => {
  if (!input.validity.valid) {
    input.classList.add('form__input--error');
    return false;
  }

  input.classList.remove('form__input--error');
  return true;
};

submitButton.addEventListener('click', () => {
  const phoneIsValid = validateInput(phoneInput);
  const emailIsValid = validateInput(emailInput);

  if (phoneIsValid && emailIsValid) {
    form.submit();
  }
});

setInputsListener(phoneInput);
setInputsListener(emailInput);
