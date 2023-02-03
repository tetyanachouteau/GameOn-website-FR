function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener("click", closeModal);

// launch modal form
functiodata-error-visiblen launchModal() {
  modalbg.style.display = "block";
}

// launch modal form
function closeModal() {
  modalbg.style.display = "none";
}

function NomPrenomInput(input){
  if (input.value.toString().trim().length < 2){
    input.parentElement.setAttribute("data-error-visible", "true");
      return false;
  }
    else{
      input.parentElement.remouveAttribute("data-error-visible")
        return true;

  }
}



