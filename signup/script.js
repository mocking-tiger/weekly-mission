import * as common from "../signin/common.js";

const errInputEmail = document.createElement('h6');
const errInputPassword = document.createElement('h6');
const errCheckEmail = document.createElement('h6');
const errCheckPassword = document.createElement('h6');
const repeatPassword = document.querySelector('.repeat-password');
const eye = document.querySelector('.eye');
const eye2 = document.querySelector('.eye2');

document.addEventListener('DOMContentLoaded', (e)=>{
  if(localStorage.getItem('accessToken')) location.href = '../folder/folder.html';
})

common.emailInput.addEventListener('focusout', () => {
  if (common.emailInput.value === '') {
    errCheckEmail.remove();
    common.emailInput.classList.add('invalid-value');
    errInputEmail.innerText = common.PLEASE_INPUT_EMAIL;
    common.emailInput.after(errInputEmail);
  } else if (common.regEmail.test(common.emailInput.value) != true) {
    errCheckEmail.remove();
    common.emailInput.classList.add('invalid-value');
    errInputEmail.innerText = common.INVALID_EMAIL;
    common.emailInput.after(errInputEmail);
  } else if (common.emailInput.value !== '') {
    errCheckEmail.remove();
    fetch('https://bootcamp-api.codeit.kr/api/check-email', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: common.emailInput.value,
      })
    }).then((response) => {
      if (response.status === 409) {
        common.emailInput.classList.add('invalid-value');
        errInputEmail.innerText = '이미 사용 중인 이메일입니다.';
        common.emailInput.after(errInputEmail);
      } else {
        common.emailInput.classList.remove('check-value')
        common.emailInput.classList.remove('invalid-value')
        errInputEmail.remove();
      }
    });
  } else {
    common.emailInput.classList.remove('check-value')
    common.emailInput.classList.remove('invalid-value')
    errInputEmail.remove();
  }
});

common.passwordInput.addEventListener('focusout', () => {
  if (common.passwordInput.value === '') {
    common.passwordInput.classList.add('invalid-value');
    errInputPassword.innerText = common.PLEASE_INPUT_PASSWORD;
    common.passwordInput.after(errInputPassword);
  } else if (common.regPassword.test(common.passwordInput.value) !== true) {
    common.passwordInput.classList.add('invalid-value');
    errInputPassword.innerText = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
    common.passwordInput.after(errInputPassword);
  } else if (repeatPassword.value !== common.passwordInput.value) {
    errInputPassword.remove();
    common.passwordInput.classList.remove('invalid-value')
    repeatPassword.classList.add('invalid-value');
    errCheckPassword.innerText = '비밀번호가 일치하지 않아요.';
    repeatPassword.after(errCheckPassword);
  } else {
    common.passwordInput.classList.remove('invalid-value')
    common.passwordInput.classList.remove('check-value')
    repeatPassword.classList.remove('invalid-value');
    errInputPassword.remove();
    errCheckPassword.remove();
  }
})

repeatPassword.addEventListener('focusout', () => {
  if (repeatPassword.value !== common.passwordInput.value) {
    repeatPassword.classList.add('invalid-value');
    errCheckPassword.innerText = '비밀번호가 일치하지 않아요.';
    repeatPassword.after(errCheckPassword);
  } else {
    repeatPassword.classList.remove('invalid-value');
    errCheckPassword.remove();
  }
})

function login() {
  if (common.emailInput.value === '') {
    errCheckEmail.remove();
    common.emailInput.classList.add('invalid-value');
    errInputEmail.innerText = common.PLEASE_INPUT_EMAIL;
    common.emailInput.after(errInputEmail);
  } else if (common.passwordInput.value === '') {
    common.passwordInput.classList.add('invalid-value');
    errInputPassword.innerText = common.PLEASE_INPUT_PASSWORD;
    common.passwordInput.after(errInputPassword);
  } else if (!common.emailInput.classList.contains('invalid-value') &&
    !common.passwordInput.classList.contains('invalid-value') &&
    !repeatPassword.classList.contains('invalid-value')) {
    fetch('https://bootcamp-api.codeit.kr/api/sign-up', {
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
      }
    })

  }
}

common.submit.addEventListener('click', (e) => {
  e.preventDefault();
  login();
})

document.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    login();
  }
})

eye.addEventListener('click', (e)=>{
  common.passwordTypeChange();
})

let isPasswordType = false;
eye2.addEventListener('click', (e)=>{
  if(isPasswordType === false){
    repeatPassword.type = 'text';
    eye2.src = common.eyes[1];
    isPasswordType = true;
  }else{
    repeatPassword.type = 'password';
    eye2.src = common.eyes[0];
    isPasswordType = false;
  }
})
