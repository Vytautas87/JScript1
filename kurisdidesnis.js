let xs = +prompt("Įveskite x")
let ys = +prompt("Įveskite y")
let zs = +prompt("Įveskite z")
let kuriss = kurisDidziausias(xs, ys, zs);
kuris(kuriss);


function kurisDidziausias(x, y, z) {
    if (x == y && y == z) {
        return 0;
    } else if (Math.max(x, y, z) == x) {
        return 1;
    } else if (Math.max(x, y, z) == y) {
        return 2;
    } else if (Math.max(x, y, z) == z) {    
        return 3;
    }
}

function kuris(ar) {
    if (ar == 1) {
        console.log("Pirmas skaicius didziausias");
    } else if (ar == 2) {
        console.log("Antras skaicius didziausias");
    } else if (ar == 3) {    
        console.log("Trecias skaicius didziausias");
    } else if (ar == 0) { 
        console.log("Skaiciai yra lygus");
    } else {
        console.log("Nepavyko")
    }
}