let mSkaicius = +prompt("Įveskite mėnesio skaičių"); 
grazintiMenesioPavadinima(mSkaicius);

function grazintiMenesioPavadinima(menesioSkaicius) {  
let menesioPavadinimas;    
    switch (menesioSkaicius) {
        case 1:
            menesioPavadinimas = "Sausis";
            console.log(menesioPavadinimas);
            break;
        case 2:
            menesioPavadinimas = "Vasaris";
            console.log(menesioPavadinimas);
            break;
        case 3:
            menesioPavadinimas = "Kovas";
            console.log(menesioPavadinimas);
            break;
        case 4:
            menesioPavadinimas = "Balandis";
            console.log(menesioPavadinimas);
            break;
        case 5:
            menesioPavadinimas = "Geguze";
            console.log(menesioPavadinimas);
            break;
        case 6:
            menesioPavadinimas = "Birzelis";
            break;
        case 7:
            menesioPavadinimas = "Liepa";
            console.log(menesioPavadinimas);
            break;
        case 8:
            menesioPavadinimas = "Rugpjutis";
            console.log(menesioPavadinimas);
            break;
        case 9:
            menesioPavadinimas = "Rugsejis";
            console.log(menesioPavadinimas);
            break;
        case 10:
            menesioPavadinimas = "Spalis";
            console.log(menesioPavadinimas);
            break;
        case 11:
            menesioPavadinimas = "Lapkritis";
            console.log(menesioPavadinimas);
            break;
        case 12:
            menesioPavadinimas = "Gruodis";
            console.log(menesioPavadinimas);
            break;
        default:
            menesioPavadinimas = "netinkamas menesio skaičius";
            console.log(menesioPavadinimas);
            break;
    }
    return menesioPavadinimas;
}