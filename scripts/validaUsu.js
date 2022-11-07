// VALIDAÇÃO

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const estado = document.getElementById("estado");
const cidade = document.getElementById("cidade");
const logradouro = document.getElementById("logradouro"); 
const num = document.getElementById("num"); 
const bairro = document.getElementById("bairro"); 
const celular = document.getElementById("celular"); 
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation"); 

var nm = document.getElementById("valNome"); 
var em = document.getElementById("valEmail"); 
var es = document.getElementById("valEstado"); 
var cid = document.getElementById("valCidade"); 
var lg = document.getElementById("valLog"); 
var n = document.getElementById("valNum");
var br = document.getElementById("valBairro"); 
var cel = document.getElementById("valCelular"); 
var sn1 = document.getElementById("validaSn1"); 
var sn2 = document.getElementById("validaSn2"); 


form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const estadoValue = estado.value;
    const cidadeValue = cidade.value;
    const logradouroValue = logradouro.value;
    const numeroValue = num.value;
    const bairroValue = bairro.value;
    const celularValue = celular.value;
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

    if (cidadeValue === "0") {
        cid.className = "form-control error";
    } else {
        cid.className = "form-control success";
        validado++;
    }

    if (estadoValue === "0") {
        es.className = "form-control error";
    } else {
        es.className = "form-control success";
        validado++;
    }

    if (logradouroValue === "") {
        lg.className = "form-control error";
    } else {
        lg.className = "form-control success";
        validado++;
    }

    if (numeroValue === "") {
        n.className = "form-control error";
    } else {
        n.className = "form-control success";
        validado++;
    }

    if (bairroValue === "") {
        br.className = "form-control error";
    } else {
        br.className = "form-control success";
        validado++;
    }

    if (celularValue === "") {
        cel.className = "form-control error";
    } else {
        cel.className = "form-control success";
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

    if (validado === 10) {
        console.log("O formulário está 100% válido!");
    }
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}