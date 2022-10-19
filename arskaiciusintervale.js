let skaicius = +prompt("Įveskite skaičių");
let iP = +prompt("Įveskite intervalo pradžią");
let iPa = +prompt("Įveskite intervalo pabaigą");
let arYraIn = arYraIntervale(skaicius, iP, iPa);
arYra(arYraIn, iP, iPa);

function arYraIntervale(x, y, z) {
    if (x > y && x < z) {       // kaip jūs buvot padaręs tai kaip tik randa ar nėra intervale
        return false;
    } else {
        return true;
    }

}
function arYra(intervale, y, z) {
    if (intervale == false) {
        console.log("Skaičius nėra intervale tarp " + y + " ir " + z);
    }  else {
        console.log("Skaičius yra intervale tarp " + y + " ir " + z);
    }
 }
