let skaiciusx = +prompt("Įveskite x")
let skaiciusy = +prompt("Įveskite y")
let ardidesnisarmazesnisarlygus = ardidesnis(skaiciusx, skaiciusy)
arskaiciusxdidesnisuzy(ardidesnisarmazesnisarlygus, skaiciusx, skaiciusy)


function ardidesnis(x, y) {
    if (x > y) {
        return -1;
    } else if (x < y) {
        return 1;
    }
    else {
        return 0;
    }
}

function arskaiciusxdidesnisuzy(didesnisArNe, skaiciusx, skaiciusy) {
    if (didesnisArNe == -1) {
        console.log(skaiciusx+ " didesnis uz " +skaiciusy);
    } else if (didesnisArNe == 1) {
        console.log(skaiciusx+ " mazesnis uz " +skaiciusy);
    } else {
        console.log(skaiciusx+ " lygus " +skaiciusy);}
    }