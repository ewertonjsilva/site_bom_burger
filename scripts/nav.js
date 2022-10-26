let selMenu = document.getElementById("mIco");

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