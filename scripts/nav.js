/* MENU */
let selMenu = document.getElementById("mIco");

// encolhe e expande as opções de navegação 
// https://youtu.be/BpzyuuPIEaQ
function mostraMenu() {
    var x = document.getElementById("mostraOpMobile");
    if (x.className === "menuMobileExpandidon") {
      x.className += " menuMobileExpandidos";
    } else {
      x.className = "menuMobileExpandidon";
    }
}

selMenu.onclick = function() { 
    mostraMenu();
}

// SLIDER
let count = 1;
document.getElementById("radio1").checked = true; 

setInterval( function() {
  nextImage();
}, 5000);

function nextImage() {
  count++; 
  if (count >4 ) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;   
}

