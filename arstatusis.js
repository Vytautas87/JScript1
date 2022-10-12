let krastinea = +prompt("Įveskite trikampio krastine a");
let krastineb = +prompt("Įveskite trikampio krastine b");
let krastinec = +prompt("Įveskite trikampio krastine c");
let artrikampisstatus = arstatus(krastinea, krastineb, krastinec);
artristatus(artrikampisstatus, krastinea, krastineb, krastinec);


function arstatus(x, y, z) {
    if (z ** 2 == x ** 2 + y ** 2) {
        return true;
    } else {
        return false;
    }
}

function artristatus(Ar) {
    if (Ar == true) {
        console.log("Trikampis yra status");
    } else {
        console.log("Trikampis nėra status");}
    }