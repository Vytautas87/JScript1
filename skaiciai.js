veiksmas = prompt("Įveskite: sudėtis, daugyba, dalyba arba atimtis");
skaicius1 = +prompt("Įveskite pirmą skaičių");
skaicius2 = +prompt("Įveskite antrą skaičių");
veiksmai(veiksmas, skaicius1, skaicius2);

function veiksmai(veiksm, a, b) {
    switch (veiksm) {
        case "sudėtis":
            console.log(a + b);
        case "daugyba":
            console.log(a * b);
        case "dalyba":
            console.log(a / b);
        case "atimtis":
            console.log(a - b);
        }
}