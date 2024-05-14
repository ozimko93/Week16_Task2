const form = document.forms.registration;
const name = form.elements.name;
const email = form.elements.email;
const age = form.elements.age;
const gender = form.elements.gender;
const profession = form.elements.profession;
const password = form.elements.password;
const agreement = form.elements.agreement;

const errorName = document.getElementById('err_name');
const errorEmail = document.getElementById('err_email');
const errorAge = document.getElementById('err_age');
const errorGender = document.getElementById('err_gender');
const errorProfession = document.getElementById('err_profession');
const errorPassword = document.getElementById('err_password');
const errorAgreement = document.getElementById('err_agreement');

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  errorName.style.display = 'none';
  errorEmail.style.display = 'none';
  errorAge.style.display = 'none';
  errorGender.style.display = 'none';
  errorProfession.style.display = 'none';
  errorPassword.style.display = 'none';
  errorAgreement.style.display = 'none';
  let hasError = false;
  if (name.value === '') {
    errorName.textContent = 'Введите имя пользователя';
    errorName.style.display = 'block';
    hasError = true;
  } else if (!/^[A-Za-zА-Яа-яЁё\s]{2,20}$/.test(name.value)) {
    errorName.textContent =
      'Имя может содержать только буквы и пробелы, от 2 до 20 символов';
    errorName.style.display = 'block';
    hasError = true;
  }
  if (email.value === '') {
    errorEmail.textContent = 'Введите адрес электронной почты';
    errorEmail.style.display = 'block';
    hasError = true;
  }
  if (age.value === '') {
    errorAge.textContent = 'Введите возраст';
    errorAge.style.display = 'block';
    hasError = true;
  }
  if (gender.value === '') {
    errorGender.textContent = 'Пол не выбран';
    errorGender.style.display = 'block';
    hasError = true;
  }
  if (profession.value === 'Выберите Вашу профессию') {
    errorProfession.textContent = 'Профессия не выбрана';
    errorProfession.style.display = 'block';
    hasError = true;
  }
  if (password.value === '') {
    errorPassword.textContent = 'Введите пароль';
    errorPassword.style.display = 'block';
    hasError = true;
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(password.value)) {
    errorPassword.textContent =
      'Пароль должен содержать не менее 8 символов, хотя бы одну заглавную букву, одну строчную букву и одну цифру';
    errorPassword.style.display = 'block';
    hasError = true;
  }
  if (agreement.checked === false) {
    errorAgreement.textContent = 'Необходимо согласие с условиями.';
    errorAgreement.style.display = 'block';
    hasError = true;
  }
  if (!hasError) {
    console.log('Имя:' + name.value);
    console.log('Почта:' + email.value);
    console.log('Возраст:' + age.value);
    console.log('Пол:' + gender.value);
    console.log('Профессия:' + profession.value);
    form.reset();
  }
});
const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
  input.addEventListener('focus', function () {
    input.style.border = '1px solid #6A5ACD';
    input.style.outline = 'none';
  });
  input.addEventListener('blur', function () {
    input.style.border = '';
  });
});
