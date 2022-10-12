let skaicius = +prompt("Įveskite skaičių")
let arSkaicius5kartotinis = ar5kartotinis(skaicius);
isvestiAr5kartotinis(arSkaicius5kartotinis, skaicius);

function ar5kartotinis(x) {
    if (x % 5 == 0) {
        return true;
    }
    else {
        return false;
    }
}
function isvestiAr5kartotinis(kartotinis, skaicius) {
    if (kartotinis == true) {
        console.log(skaicius + " Skaičius yra penketo kartotinis");
    }
    else {
        console.log(skaicius + " Skaičius nėra penketo kartotinis");
    }
}