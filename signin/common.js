export const emailInput = document.querySelector('.inputEmail');
export const passwordInput = document.querySelector('.inputPassword');
export const errMsg = document.createElement('h6');
export const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
export const regPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
export const submit = document.querySelector('.submit');
export const eyes = ["/img/eye-off.svg", "/img/eye-on.svg"];
export const PLEASE_INPUT_EMAIL = '이메일을 입력해주세요.';
export const PLEASE_INPUT_PASSWORD = '비밀번호를 입력해주세요.';
export const INVALID_EMAIL = '올바른 이메일 주소가 아닙니다.';
