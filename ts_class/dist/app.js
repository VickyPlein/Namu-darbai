"use strict";
/*
1. Sukurkite klasę Darbuotojas, kurioje būtų saugomas jo vardas, pavardė, atlyginimas.
2. Sukurkite konstruktorių, get'erius ir set'erius.
3. Klasėje sukurkite tris metodus:
gpm - grąžina gyventojo pajamų mokestį (paprastumo dėlei imkime 20% nuo pajamų)
psd - grąžina privalomąjį sveikatos draudimą (6,98%)
vsd - grąžina valstybinį socialinį draudimą (12.52%)
4. Klasė turi būti atskirame faile nei vykdomasis programinis kodas. Sukurkite masyvą, kuriame patalpintumėte bent tris Darbuotojas klasės
objektus ir atspausdinkite visus sukurtus žmones.
5. Padarykite tinklapį kuriame būtų atvaizduojami darbuotojai ir jų atlyginimai (gpm, psd, vsd).
6. Padarykite tinklapyje galimybę į tą masyvą įdėti darbuotojus. Juos turėtų rodyti bendrame sąraše.
    */
const vardasDOM = document.getElementById("vardas");
const pavardeDOM = document.getElementById("pavarde");
const atlyginimasDOM = document.getElementById("atlyginimas");
const workersDOM = document.getElementById("workerlist");
const addBtn = document.getElementById("add");
const rezultatasDiv = document.getElementById("rezultatas");
class Darbuotojas {
    constructor(vardas, pavarde, atlyginimas) {
        this.vardas = vardas;
        this.pavarde = pavarde;
        this.atlyginimas = atlyginimas;
    }
    set _vardas(v) {
        this.vardas = v;
    }
    set _pavarde(p) {
        this.pavarde = p;
    }
    set _atlyginimas(a) {
        this.atlyginimas = a;
    }
    get _vardas() {
        return this.vardas;
    }
    get _pavarde() {
        return this.pavarde;
    }
    get _atlyginimas() {
        return this.atlyginimas;
    }
    gpm() {
        return `gyventojo pajamų mokestis(GPM): ${(this.atlyginimas * 0.20).toFixed(2)}`;
    }
    psd() {
        return `privalomusis sveikatos draudimas(PSD): ${(this.atlyginimas * 0.0698).toFixed(2)}`;
    }
    vsd() {
        return `valstybinis socialinis draudimas(VSD): ${(this.atlyginimas * 0.1252).toFixed(2)}`;
    }
}
const DarbuotojasMas = [];
const showlist = () => {
    const vardas = vardasDOM.value;
    const pavarde = pavardeDOM.value;
    const atlyginimas = atlyginimasDOM.valueAsNumber;
    DarbuotojasMas.push(new Darbuotojas(vardas, pavarde, atlyginimas));
    console.log(DarbuotojasMas);
    workersDOM.innerHTML = '';
    DarbuotojasMas.forEach((w, i) => {
        const li = document.createElement('li');
        li.textContent = `${w.vardas} ${w.pavarde} - Atlyginimas: ${w.atlyginimas}€, GPM: ${w.gpm()}€, PSD: ${w.psd()}€, VSD: ${w.vsd()}€`;
        workersDOM.appendChild(li);
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Ištrinti";
        // deleteBtn.className = "btn btn-primary float-end btn-sm";
        deleteBtn.onclick = () => {
            DarbuotojasMas.splice(i, 1);
            showlist();
        };
        workersDOM.appendChild(deleteBtn);
    });
};
addBtn.onclick = showlist;
