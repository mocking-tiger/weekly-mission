import * as common from "./common.js";

const errInputEmail = document.createElement('h6');
const errInputPassword = document.createElement('h6');
const errCheckEmail = document.createElement('h6');
const errCheckPassword = document.createElement('h6');
const eye = document.querySelector('.eye');

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
  } else {
    common.emailInput.classList.remove('check-value')
    common.emailInput.classList.remove('invalid-value')
    errInputEmail.remove();
    errCheckEmail.remove();
  }
});

common.passwordInput.addEventListener('focusout', () => {
  if (common.passwordInput.value === '') {
    errCheckPassword.remove();
    common.passwordInput.classList.add('invalid-value');
    errInputPassword.innerText = common.PLEASE_INPUT_PASSWORD;
    common.passwordInput.after(errInputPassword);
  } else {
    common.passwordInput.classList.remove('invalid-value')
    common.passwordInput.classList.remove('check-value')
    errInputPassword.remove();
    errCheckPassword.remove();
  }
})

function checkValues() {
  common.emailInput.classList.add('check-value');
  errCheckEmail.innerText = '이메일을 확인해주세요.';
  common.emailInput.after(errCheckEmail);
  common.passwordInput.classList.add('check-value');
  errCheckPassword.innerText = '비밀번호를 확인해주세요.';
  common.passwordInput.after(errCheckPassword);
}

function login() {

  //엑세스토큰 로컬스토리지에 저장
    fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: common.emailInput.value,
        password: common.passwordInput.value,
      })
    })
    .then((response)=>response.json())
    .then(response=>{
      if(response.data.accessToken){
        localStorage.setItem('accessToken', response.data.accessToken);
      }
    });
  
  //로그인 기능 실행  
    fetch('https://bootcamp-api.codeit.kr/api/sign-in', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: common.emailInput.value,
        password: common.passwordInput.value,
      })
    })
    .then((response) => {
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

eye.addEventListener('click', (e)=>{
  common.passwordTypeChange();
})