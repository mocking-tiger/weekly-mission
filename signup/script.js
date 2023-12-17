import * as common from "../signin/common.js";
const errInputEmail = document.createElement('h6');
const errInputPassword = document.createElement('h6');
const errCheckEmail = document.createElement('h6');
const errCheckPassword = document.createElement('h6');
const repeatPassword = document.querySelector('#repeatPassword');
const eyes = document.querySelector('#eyes');
const eyes2 = document.querySelector('#eyes2');

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
  } else if (common.emailInput.value == 'test@codeit.com') {
    errCheckEmail.remove();
    common.emailInput.classList.add('invalidValue');
    errInputEmail.innerText = '이미 사용 중인 이메일입니다.';
    common.emailInput.after(errInputEmail);
  } else {
    common.emailInput.classList.remove('checkValue')
    common.emailInput.classList.remove('invalidValue')
    errInputEmail.remove();
  }
});

common.passwordInput.addEventListener('focusout', () => {
  if (common.passwordInput.value == '') {
    common.passwordInput.classList.add('invalidValue');
    errInputPassword.innerText = '비밀번호를 입력해주세요.';
    common.passwordInput.after(errInputPassword);
  } else if (common.regPassword.test(common.passwordInput.value) != true) {
    common.passwordInput.classList.add('invalidValue');
    errInputPassword.innerText = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
    common.passwordInput.after(errInputPassword);
  } else if (repeatPassword.value !== common.passwordInput.value) {
    errInputPassword.remove();
    common.passwordInput.classList.remove('invalidValue')
    repeatPassword.classList.add('invalidValue');
    errCheckPassword.innerText = '비밀번호가 일치하지 않아요.';
    repeatPassword.after(errCheckPassword);
  } else {
    common.passwordInput.classList.remove('invalidValue')
    common.passwordInput.classList.remove('checkValue')
    repeatPassword.classList.remove('invalidValue');
    errInputPassword.remove();
    errCheckPassword.remove();
  }
})

repeatPassword.addEventListener('focusout', () => {
  if (repeatPassword.value !== common.passwordInput.value) {
    repeatPassword.classList.add('invalidValue');
    errCheckPassword.innerText = '비밀번호가 일치하지 않아요.';
    repeatPassword.after(errCheckPassword);
  } else {
    repeatPassword.classList.remove('invalidValue');
    errCheckPassword.remove();
  }
})

function login() {
  if (common.emailInput.value == '') {
    errCheckEmail.remove();
    common.emailInput.classList.add('invalidValue');
    errInputEmail.innerText = '이메일을 입력해주세요.';
    common.emailInput.after(errInputEmail);
  } else if(common.passwordInput.value == ''){
    common.passwordInput.classList.add('invalidValue');
    errInputPassword.innerText = '비밀번호를 입력해주세요.';
    common.passwordInput.after(errInputPassword);
  } else if (!common.emailInput.classList.contains('invalidValue') &&
    !common.passwordInput.classList.contains('invalidValue') &&
    !repeatPassword.classList.contains('invalidValue')) {
    location.href = '../folder/folder.html'
  }
}

common.submit.addEventListener('click', (e) => {
  e.preventDefault();
  login();
})

document.addEventListener('keydown', (e) => {
  if(e.key=='Enter'){
    login();
  }
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

let cnt2 = 0;
eyes2.addEventListener('click', (e) => {
  cnt2++;
  if (cnt2 >= common.eyes.length) {
    cnt2 = 0;
    repeatPassword.type='password'
  }else{
    repeatPassword.type='text'
  }
  eyes2.src = common.eyes[cnt2];
  
})