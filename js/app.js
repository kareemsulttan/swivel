// show password
const formGroup = document.querySelectorAll('.form-group');
const passInput = document.querySelectorAll('input[type="password"]');
const eyeImg = document.querySelector('.pass-eye img');
formGroup.forEach((thisForm) => {
  const thisInput = thisForm.currentTarget;
  const pswInput = thisForm.querySelector('input[type="password"]')
  console.log(pswInput)
})

/* 
function showPass() {
    passInput.forEach((x) => {
      const thisField = x.currentTarget;
      if (thisField.type === "password") {
        thisField.type = "text";
        eyeImg.src = "images/eye-show.png";
      } else {
        thisField.type = "password";
        eyeImg.src = "images/eye-hide.png";
      }
    })
  }; 
*/