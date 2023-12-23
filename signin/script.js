import * as common from "./common.js";

const errInputEmail = document.createElement('h6');
const errInputPassword = document.createElement('h6');
const errCheckEmail = document.createElement('h6');
const errCheckPassword = document.createElement('h6');
const eyes = document.querySelector('#eyes');
const newMember = {
  email: 'test@codeit.com',
  password: 'sprint101',
};

common.emailInput.addEventListener('focusout', () => {
  if (common.emailInput.value === '') {
    errCheckEmail.remove();
    common.emailInput.classList.add('invalidValue');
    errInputEmail.innerText = common.PLEASE_INPUT_EMAIL;
    common.emailInput.after(errInputEmail);
  } else if (common.regEmail.test(common.emailInput.value) != true) {
    errCheckEmail.remove();
    common.emailInput.classList.add('invalidValue');
    errInputEmail.innerText = common.INVALID_EMAIL;
    common.emailInput.after(errInputEmail);
  } else {
    common.emailInput.classList.remove('checkValue')
    common.emailInput.classList.remove('invalidValue')
    errInputEmail.remove();
    errCheckEmail.remove();
  }
});

common.passwordInput.addEventListener('focusout', () => {
  if (common.passwordInput.value === '') {
    errCheckPassword.remove();
    common.passwordInput.classList.add('invalidValue');
    errInputPassword.innerText = common.PLEASE_INPUT_PASSWORD;
    common.passwordInput.after(errInputPassword);
  } else {
    common.passwordInput.classList.remove('invalidValue')
    common.passwordInput.classList.remove('checkValue')
    errInputPassword.remove();
    errCheckPassword.remove();
  }
})

function checkValues() {
  common.emailInput.classList.add('checkValue');
  errCheckEmail.innerText = '이메일을 확인해주세요.';
  common.emailInput.after(errCheckEmail);
  common.passwordInput.classList.add('checkValue');
  errCheckPassword.innerText = '비밀번호를 확인해주세요.';
  common.passwordInput.after(errCheckPassword);
}

function login() {
    fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: common.emailInput.value,
        password: common.passwordInput.value,
      }),
    }).then((response) => {
      if (response.status === 200) {
        location.href = '../folder/folder.html';
      } else {
        checkValues();
      }
    });
}

common.submit.addEventListener('click', (e) => {
  e.preventDefault();
  login();
})

let cnt = 0;
eyes.addEventListener('click', (e) => {
  cnt++;
  if (cnt >= common.eyes.length) {
    cnt = 0;
    common.passwordInput.type = 'password'
  } else {
    common.passwordInput.type = 'text'
  }
  eyes.src = common.eyes[cnt];
})

