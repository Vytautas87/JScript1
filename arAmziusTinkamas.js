let x = +prompt("Įveskite amžių nuo 18 iki 99");
arTinkamas(x);

function arTinkamas(x) {
    if ((x > 18) && (x < 99)) {
    console.log("Amžius yra tinkamas");
    } else {
    console.log("Amžius yra netinkamas");
    }
}