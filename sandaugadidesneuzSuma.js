let skaiciusx = +prompt("Įveskite skaičių x")
let skaiciusy = +prompt("Įveskite skaičių y")
let arSandaugaDidUzSuma = ardidesne(skaiciusx, skaiciusy)
arsandaugadidesneuzSuma(arSandaugaDidUzSuma, skaiciusx, skaiciusy);


function ardidesne(x, y) {
    if ((x * y) > (x + y)) {
        return true;
    }
    else {
        return false;
    }
}
function arsandaugadidesneuzSuma(didesneArNe) {
    if (didesneArNe == true) {
        console.log("Sandauga yra didesnė už sumą");
    }
    else {
        console.log("Sandauga yra ne didesnė už sumą");
    }
}