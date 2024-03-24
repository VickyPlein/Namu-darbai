/*
Panaudodami Frankfurter.app API sukurkite JS programą kuri atliktų valiutos kurso keitimą.
API aprašas pateikiamas čia: https://www.frankfurter.app/docs/ . 
Iškviečiant Jūsų aplikaciją turime nurodyti į kokią valiutą norime konvertuoti ir kokią sumą
(konvertavimas visą laiką bus vykdomas iš EUR į kažką). 
Jūsų aplikacija turi išvesti valiutos kursą (kiek kainuoja iškeisti vieną EUR į tą valiutą) 
ir kiek gausime nurodytos valiutos už pateiktą sumą. Pavyzdžiui jei programą iškviestumėme taip:

node currency.js NOK 150
Programa turėtų išvesti:
NOK kursas: 11.5
150 EUR => 1725 NOK
*/

async function loadCurrency(cur, amount) {
    const data = await fetch("https://api.frankfurter.app/latest?from=Eur&to=" + cur + "");
    const curr = await data.json();
    const kursas = curr.rates;
    console.log(`${cur} kursas: ${(kursas[cur]).toFixed(1)}`);
    console.log(`${amount} Eur => ${(kursas[cur] * amount).toFixed(0)} ${cur}`);
};

loadCurrency(process.argv[2], process.argv[3]);
