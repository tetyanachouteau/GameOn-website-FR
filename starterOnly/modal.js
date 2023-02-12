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
const form = document.querySelector("form");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener("click", closeModal);

// Add submit event to form
form.addEventListener("submit", validate)

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch modal form
function closeModal() {
  modalbg.style.display = "none";
}

// validate
function validate(e) {
  const formulaire = e.target;
  const formData = new FormData(formulaire);

  for (const [key, value] of formData) {
    console.log(`${key}: ${value}\n`);
  }

  // au début pas d'erreur
  let isValidate = true;

  // on teste nom 
  const inputNom = document.querySelector("#last");
  // calcul s'il y a au moins un erreur ou pas 
  isValidate = NomPrenomInput(inputNom) && isValidate;

  // on test prénom
  const inputPrenom = document.querySelector("#first");
  isValidate = NomPrenomInput(inputPrenom) && isValidate;

  // on test email
  const inputEmail = document.querySelector("#email");
  isValidate = Html5Input(inputEmail) && isValidate;

  // on test date
  const inputDate = document.querySelector("#birthdate");
  isValidate = Html5Input(inputDate) && isValidate;

  // on test Quantity
  const inputQuantity = document.querySelector("#quantity");
  isValidate = Html5Input(inputQuantity) && isValidate;

  // on test location
  const inputRadio = document.querySelector("[name='location']");
  isValidate = Html5Input(inputRadio) && isValidate;

  // on test conditions generales
  const inputCheckbox1 = document.querySelector("#checkbox1");
  isValidate = Html5Input(inputCheckbox1) && isValidate;

  if (!isValidate)
    // arrête de la proparation de l'evenenement
    e.preventDefault();
}

function NomPrenomInput(input) {
  if (input.value.toString().trim().length < 2) {
    input.parentElement.dataset.errorVisible = true;
    //input.parentElement.setAttribute("data-error-visible", "true");
    if (input.id === "first") {
      input.parentElement.dataset.error = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
    } else {
      input.parentElement.dataset.error = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    }
    return false;
  }
  else {
    delete input.parentElement.dataset.errorVisible;
    //input.parentElement.remouveAttribute("data-error-visible")
    delete input.parentElement.dataset.error;
    return true;

  }
}

function Html5Input(input) {
  if (!input.checkValidity()) {
    input.parentElement.dataset.errorVisible = true;
    console.log(input.validity);
    if (input.validity.typeMismatch)
      input.parentElement.dataset.error = "Votre email est invalide.";
    if (input.validity.valueMissing) {
      if (input.id === "checkbox1") {
        input.parentElement.dataset.error = "Vous devez vérifier que vous acceptez les termes et conditions.";
      } else if (input.id === "birthdate") {
        input.parentElement.dataset.error = "Vous devez entrer votre date de naissance.";
      } else if (input.name === "location") {
        input.parentElement.dataset.error = "Vous devez choisir une option.";
      } else {
        input.parentElement.dataset.error = "Le champs est obligatoire.";
      }
    }
    return false;
  }
  else {
    delete input.parentElement.dataset.errorVisible;
    delete input.parentElement.dataset.error;
    return true;

  }
}



