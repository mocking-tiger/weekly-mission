import * as common from "./common.js";

common.emailInput.addEventListener('focusout', common.isEmailValid);

common.submit.addEventListener('click', (e)=>{
  e.preventDefault();
  if(common.emailInput.value=='test@codeit.com'&&common.passwordInput.value=='codeit101'){
    location.href='../folder/folder.html'
  }else{
    alert('동작확인용')
  }
})
