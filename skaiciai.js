veiksmas = +prompt("Įveskite: sudėtis, daugyba, dalyba arba atimtis");
skaicius1 = +prompt("Įveskite pirmą skaičių");
skaicius2 = +prompt("Įveskite antrą skaičių");
let atsakymas = veiksmai(veiksmas, skaicius1, skaicius2);
veiksmai(atsakymas);

function veiksmai(veiksm, a, b) {
    let veik;
    switch (veiksm) {
        case veik = "sudėtis":
            console.log(a + b);
        case veik = "daugyba":
            console.log(a * b);
    }
}
