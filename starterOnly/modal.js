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
function launchModal() {
  modalbg.style.display = "block";
}

// launch modal form
function closeModal() {
  modalbg.style.display = "none";
}

// validate
function validate() {
  // au début pas d'erreur
  let isValidate = true;

  // on teste nom 
  const inputNom = document.querySelector("#last");
  // calcul s'il y a au moins un erreur ou pas 
  isValidate =  NomPrenomInput(inputNom) && isValidate;

  // on test prénom
  const inputPrenom = document.querySelector("#first");
  isValidate =  NomPrenomInput(inputPrenom) && isValidate;

  // on test email
  const inputEmail = document.querySelector("#email");
  isValidate =  Html5Input(inputEmail) && isValidate;

  // on test Quantity
  const inputQuantity = document.querySelector("#quantity");
  isValidate =  Html5Input(inputQuantity) && isValidate;

  // on test location
  const inputRadio = document.querySelector("[name='location']");
  isValidate =  Html5Input(inputRadio) && isValidate;

  // on test conditions generales
  const inputCheckbox1 = document.querySelector("#checkbox1");
  isValidate =  Html5Input(inputCheckbox1) && isValidate;
  
  return isValidate;
}

function NomPrenomInput(input) {
  if (input.value.toString().trim().length < 2) {
    input.parentElement.dataset.errorVisible = true;
    input.parentElement.dataset.error = "Doit contenir 2 caractères au moins";
    //input.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
  else {
    delete input.parentElement.dataset.errorVisible;
    //input.parentElement.remouveAttribute("data-error-visible")
    return true;

  }
}

function Html5Input(input) {
  if (!input.checkValidity()) {
    input.parentElement.dataset.errorVisible = true;
    return false;
  }
  else {
    delete input.parentElement.dataset.errorVisible;
    return true;

  }
}



