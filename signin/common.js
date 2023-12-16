export const emailInput = document.querySelector('#inputEmail');
export const errMsg = document.createElement('h6');
export const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;



export const isEmailValid = function(){
  if(emailInput.value == ''){
    emailInput.classList.add('invalidEmail');
    errMsg.innerText = '이메일을 입력해주세요.';
    emailInput.after(errMsg);
  }else if(regExp.test(emailInput.value)!=true){
    emailInput.classList.add('invalidEmail');
    errMsg.innerText = '올바른 이메일 주소가 아닙니다.';
    emailInput.after(errMsg);
  }else{
    emailInput.classList.remove('invalidEmail')
    errMsg.remove();
  }
}
