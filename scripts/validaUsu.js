// VALIDAÇÃO

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation"); 
var nm = document.getElementById("valNome"); 
var em = document.getElementById("valEmail"); 
var sn1 = document.getElementById("validaSn1"); 
var sn2 = document.getElementById("validaSn2"); 

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value; 
    let validado = 0;

    if (usernameValue === "") {
        nm.className = "form-control error";
    } else {
        nm.className = "form-control success";
        validado++;
    }

    if (emailValue === "") {
        em.className = "form-control error";
    } else if (!checkEmail(emailValue)) {
        em.className = "form-control error";
    } else {
        em.className = "form-control success";
        validado++;
    }

    if (passwordValue === "") {
        sn1.className = "form-control error";
    } else if (passwordValue.length < 7) {
        sn1.className = "form-control error";
    } else {
        sn1.className = "form-control success";
        validado++;
    }

    if (passwordConfirmationValue === "") {
        sn2.className = "form-control error";
    } else if (passwordConfirmationValue !== passwordValue) {
        sn2.className = "form-control error";
    } else {
        sn2.className = "form-control success";
        validado++;
    }

    if (validado === 4) {
        console.log("O formulário está 100% válido!");
    }
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}