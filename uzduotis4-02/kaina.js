/* Užduotys savarankiškam darbui
Atgal į: Įvykiai, valida...
Sukurkite skaičiuoklę kuri būtų skirta suskaičiuoti prekės pabrangimą arba atpigimą tam tikru procentu.Jūsų skaičiuoklėje turėtų būti įvedami tokie duomenys:
1. pradinė kaina(įvedimo laukas)
2. kainos pokytis(pasirinkimo laukas: brangsta, pinga)
3. procentai

Jūsų sukurtas puslapis turėtų pateikti apskaičiuotą kainą pritaikius kainos pokytį procentais.

Keletas reikalavimų Jūsų puslapiui:
1. Prieš įvedant duomenis visi laukeliai turi būti bespalviai
2. Įvedant duomenis turi tikrinti ar įvesti duomenys teisingi, įvedus neteisingus duomenis tas laukelis turėtų nusidažyti raudonai įvedus duomenis teisingai - laukelis turėtų nusidažyti žaliai
3. Jei duomenys yra neįvesti arba įvesti neteisingai skaičiavimo mygtukas turi būti išjungtas
4. Procentų skaičius turi būti įvedamas ne didesnis nei 100 ir ne mažesnis už 0
5. Turi būti išvedami pranešimai(tekstiniai apie klaidas)
*/

//Kintamajam prisiskiriam HTML objekta
//const skaiciuotiBtn=document.getElementById("skaiciuoti");

//Paimti vieną elementą HTML objektą, mygtuką 
const skaiciuotiBtn = document.querySelector("#skaiciuoti");

//Prisiskiriame ivedimo lauka
const kainaInp = document.querySelector("#kaina");

//Prisiskiriame isvedimo div
const rezultatasDiv = document.querySelector("#rez");

const kitimasSelect = document.querySelector("#kitimas");

const nuolaidaInp = document.querySelector("#kiek");

const error = document.querySelector("#error");

//Paimti visus elemtus, grazinamas masyvas
//const skaiciuotiBtn=document.querySelectorAll(".btn-success");

/*
skaiciuotiBtn.forEach((b)=>{
    console.log( b.innerHTML);
})
*/

// Išjungiame mygtuką
skaiciuotiBtn.disabled = true;
error.style.visibility = "hidden";

function skaiciuoti() {
    if (kitimasSelect.value === 'up') {
        rezultatasDiv.innerHTML = (kainaInp.value * (1 + parseFloat(nuolaidaInp.value) / 100)).toFixed(2);
    } else if (kitimasSelect.value === 'down') {
        rezultatasDiv.innerHTML = (kainaInp.value / (1 + parseFloat(nuolaidaInp.value) / 100)).toFixed(2);
    }
    kainaInp.value = '';
    skaiciuotiBtn.disabled = true;
}



//Įjungiame mygtuką
ijungtiMygtuka = () => {
    console.log(kainaInp.value);
    if (kainaInp.value == '' || isNaN(kainaInp.value) || nuolaidaInp.value === '' || isNaN(nuolaidaInp.value) || nuolaidaInp.value < 0 || nuolaidaInp.value > 100) {
        skaiciuotiBtn.disabled = true;
        error.innerHTML = "Patikrinkite kainą (Sveikieji skaičiai) ir nuolaidą (nuo 0 iki 100)"
        error.style.visibility = "visible";
        kainaInp.className = "form-control is-invalid";
    } else {
        skaiciuotiBtn.disabled = false;
        //error.innerHTML=""
        error.style.visibility = "hidden";
        kainaInp.className = "form-control is-valid";
    }

}




skaiciuotiBtn.onclick = skaiciuoti;
// Kai kažkoks elementas paspaudžiamas
//kainaInp.onclick=ijungtiMygtuka;

//kainaInp.onblur=ijungtiMygtuka;
/*
kainaInp.onfocus=()=>{
    console.log("focus");
}
*/
kainaInp.onkeyup = ijungtiMygtuka;
nuolaidaInp.onkeyup = ijungtiMygtuka;

//onclick -paspausta
//ononfocuse, onblur - aktyvuojamas deaktivuojamas
//onkeypress, onkeyup, onkeydown - mygtuku paspaudimai
//onchange (įvyksta kai elementa nužymimas ir pakeičiama reikšmė), oninput (kai pasikeičia reikšmė) - reiksmes pasikeitimas
