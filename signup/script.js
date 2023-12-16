import * as common from "../signin/common.js";

common.emailInput.addEventListener('focusout', common.isEmailValid)
common.emailInput.addEventListener('focusin', ()=>{
  common.emailInput.classList.remove('invalidEmail')
  common.errMsg.remove();
})
