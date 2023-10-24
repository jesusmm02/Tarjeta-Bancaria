let formElement = document.getElementById("creditCardForm");
let nameElement = document.getElementById("nombre");
let numElement = document.getElementById("numero");
let fechaElement = document.getElementById("fecha");
let cvvElement = document.getElementById("cvv");
let submitButtonElement = document.getElementById("submitButton");

let nameValid = false;
let numMASTERCARDValid = false;
let numVISAValid = false;
let numAEValid = false;
let fechaValid = false;
let cvvValid = false;
let regexName = /^[A-Za-z\s]{1,20}$/;
let regexNumMasterCard = /^(51|52|53|54|55)\d{14}$/;
let regexNumVisa = /^4\d{12}(\d{3})?$/;
let regexNumAE = /^(34|37)\d{13}$/;
let regexFecha = /^\d{2}\d{2}$/;
let regexCVV = /^\d{3}$/;

const USERNAME_INVALID = "Solo tendrá letras y espacios en blanco, un total de 20 carácteres";
const MASTERCARD_INVALID = "16 dígitos, empiezan del 51 al 55, ambos incluidos";
const VISA_INVALID = "13 o 16 dígitos, empiezan por 4";
const AE_INVALID = "15 dígitos, empiezan por 34 o 37";
const FECHA_INVALID = "Fecha incorrecta";
const CVV_INVALID = "Solo 3 dígitos";

nameElement.addEventListener("blur", validateName);
numElement.addEventListener("blur", validateNumMasterCard);
numElement.addEventListener("blur", validateNumVisa)
numElement.addEventListener("blur", validateNumAE);
fechaElement.addEventListener("blur", validateFecha);
cvvElement.addEventListener("blur", validateCVV);


    function checkFullForm() {
        if (nameValid && numValid && fechaValid && cvvValid) {
            submitButtonElement.classList.remove("notAvailable");
        } else {
            submitButtonElement.classList = "notAvailable";
        }
    }

function validateName() {
    nameValid = regexName.test(nameElement.value);
    nameElement.className = nameValid ? "success" : "error";
  
    if (!nameValid) {
      // Obtenemos la etiqueta <small> del div al que pertenece el input
      nameElement.parentNode.getElementsByTagName("small")[0].innerHTML = USERNAME_INVALID;
    } else {
      nameElement.parentNode.getElementsByTagName("small")[0].innerHTML = "";
    }
  
    checkFullForm();
}


function validateNumMasterCard() {
    numMASTERCARDValid = regexNumMasterCard.test(numElement.value);
    numElement.className = numMASTERCARDValid ? "success" : "error";
  
    if (!numMASTERCARDValid) {
      numElement.parentNode.getElementsByTagName("small")[0].innerHTML = MASTERCARD_INVALID;
    } else {
      numElement.parentNode.getElementsByTagName("small")[0].innerHTML = "";
    }
  
    checkFullForm();
  }

  function validateNumVisa() {
    numVISAValid = regexNumVisa.test(numElement.value);
    numElement.className = numVISAValid ? "success" : "error";
  
    if (!numVISAValid) {
      numElement.parentNode.getElementsByTagName("small")[0].innerHTML = VISA_INVALID;
    } else {
      numElement.parentNode.getElementsByTagName("small")[0].innerHTML = "";
    }
  
    checkFullForm();
  }

  function validateNumAE() {
    numAEValid = regexNumAE.test(numElement.value);
    numElement.className = numAEValid ? "success" : "error";
  
    if (!numAEValid) {
      numElement.parentNode.getElementsByTagName("small")[0].innerHTML = AE_INVALID;
    } else {
      numElement.parentNode.getElementsByTagName("small")[0].innerHTML = "";
    }
  
    checkFullForm();
  }

  function validateFecha(){
    fechaValid = regexFecha.test(fechaElement.value);
    fechaElement.className = fechaValid ? "success" : "error";

    if (!fechaValid) {
        fechaElement.parentNode.getElementsByTagName("small")[0].innerHTML = FECHA_INVALID;
    } else {
        fechaElement.parentNode.getElementsByTagName("small")[0].innerHTML = "";
    }

    checkFullForm();
  }

  function validateCVV() {
    cvvValid = regexCVV.test(cvvElement.value);
    cvvElement.className = cvvValid ? "success" : "error";
  
    if (!cvvValid) {
      cvvElement.parentNode.getElementsByTagName("small")[0].innerHTML = CVV_INVALID;
    } else {
      cvvElement.parentNode.getElementsByTagName("small")[0].innerHTML = "";
    }
  
    checkFullForm();
  }


  formElement.addEventListener('submit', event => {
    event.preventDefault();
    alert("Enviado");
  });