// show password
const passInput = document.querySelectorAll('input[type="password"]');
const eyeImg = document.querySelector('.pass-eye img');
function showPass() {
  passInput.forEach((x) => {
    if (x.type === "password") {
      x.type = "text";
      eyeImg.src = "images/eye-show.png";
    } else {
      x.type = "password";
      eyeImg.src = "images/eye-hide.png";
    }
  })
};

/* Start SMS Code input logic */

const fieldset = document.querySelector(".validation");
const fields = document.querySelectorAll(".validation .form-control");

function handleInputField({ target }) {
  const value = target.value.slice(0, 1);
  target.value = value;

  const step = value ? 1 : -1;
  const fieldIndex = [...fields].findIndex((field) => field === target);
  const focusToIndex = fieldIndex + step;

  if (focusToIndex < 0 || focusToIndex >= fields.length) return;

  fields[focusToIndex].focus();
  
}
fields.forEach((field) => {
  field.addEventListener("input", handleInputField);
});

/* End SMS Code input logic */

// CUSTOM FILE NAME
$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".upload-file-text").addClass("selected").html(fileName);
});

$('.terms').on("click",function(){
  $('.terms-and-conditions').removeClass('d-none');
  $('.privacy-policy').addClass('d-none')
})
$('.privacy').on("click",function(){
  $('.terms-and-conditions').addClass('d-none');
  $('.privacy-policy').removeClass('d-none')
})