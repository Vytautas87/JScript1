let x = +prompt("Įveskite skaičių!");
arYraNirArDalIs10(x);

function arYraNirArDalIs10(x) {
    if ((x < 0) && (x % 10 == 0)) {
    console.log("Skaičius yra neigiamas ir dalijasi iš 10 be liekanos");
    } else {
    console.log("Skaičius nėra neigiamas arba nesidalija iš 10 be liekanos");
    }
}    