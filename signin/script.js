import * as common from "./common.js";
const errInputEmail = document.createElement('h6');
const errInputPassword = document.createElement('h6');
const errCheckEmail = document.createElement('h6');
const errCheckPassword = document.createElement('h6');
const eyes = document.querySelector('#eyes');



common.emailInput.addEventListener('focusout', () => {
  if (common.emailInput.value == '') {
    errCheckEmail.remove();
    common.emailInput.classList.add('invalidValue');
    errInputEmail.innerText = '이메일을 입력해주세요.';
    common.emailInput.after(errInputEmail);
  } else if (common.regExp.test(common.emailInput.value) != true) {
    errCheckEmail.remove();
    common.emailInput.classList.add('invalidValue');
    errInputEmail.innerText = '올바른 이메일 주소가 아닙니다.';
    common.emailInput.after(errInputEmail);
  } else {
    common.emailInput.classList.remove('checkValue')
    common.emailInput.classList.remove('invalidValue')
    errInputEmail.remove();
  }
});

common.passwordInput.addEventListener('focusout', () => {
  if (common.passwordInput.value == '') {
    errCheckPassword.remove();
    common.passwordInput.classList.add('invalidValue');
    errInputPassword.innerText = '비밀번호를 입력해주세요.';
    common.passwordInput.after(errInputPassword);
  } else {
    common.passwordInput.classList.remove('invalidValue')
    common.passwordInput.classList.remove('checkValue')
    errInputPassword.remove();
    errCheckPassword.remove();
  }
})

function login() {
  if (common.emailInput.value == 'test@codeit.com' && common.passwordInput.value == 'codeit101') {
    location.href = '../folder/folder.html'
  } else if (common.emailInput.value != '' && common.passwordInput.value != '' && common.regExp.test(common.emailInput.value) == true) {
    common.emailInput.classList.add('checkValue');
    errCheckEmail.innerText = '이메일을 확인해주세요.';
    common.emailInput.after(errCheckEmail);
    common.passwordInput.classList.add('checkValue');
    errCheckPassword.innerText = '비밀번호를 확인해주세요.';
    common.passwordInput.after(errCheckPassword);
  }
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
    common.passwordInput.type='password'
  }else{
    common.passwordInput.type='text'
  }
  eyes.src = common.eyes[cnt];
  
})