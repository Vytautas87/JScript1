let krastinea = +prompt("Įveskite trikampio krastine a");
let krastineb = +prompt("Įveskite trikampio krastine b");
let krastinec = +prompt("Įveskite trikampio krastine c");
let arTrikampisStatus = arStatus(krastinea, krastineb, krastinec);
arTriStatus(arTrikampisStatus);


function arStatus(x, y, z) {
    if ((z ** 2) == (x ** 2) + (y ** 2)) {
        return true;
    } else {
        return false;
    }
}

function arTriStatus(ar) {
    if (ar == true) {
        console.log("Trikampis yra status");
    } else {
        console.log("Trikampis nėra status");}
    }