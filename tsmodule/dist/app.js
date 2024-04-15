/*
Panaudodami TypeScript ir API https://nationalize.io/documentation sukurkite puslapy kuris išvestų informaciją  pateiktą vardą.
Reikalavimai projektui:
Turi būti vienas įvedimo laukas (vardui pateikti)
Turi būti mygtukas "Gauti informaciją,kurį paspaudus būtų pateikta informacija apie vardą
Visas puslapis turi būti padarytas panaudojant modulius
*/
// Iš DOM pasiimame HTML elementus
const nameInput = document.getElementById("name");
const getInfo = document.getElementById("getInfo");
const resultList = document.getElementById("resultList");
const nameResult = document.getElementById("nameResult");
// Kai paspaudžia mygtuką gauti informacijai
getInfo.onclick = () => {
    //Paimame įvestą vardą
    const vardas = nameInput.value;
    //Parsiunčiame duomenis
    fetch(`https://api.nationalize.io/?name=${vardas}`)
        .then((response) => {
        // response - nėra gauti duomenys, o yra rezulto stream'as
        //console.log(response);
        // iškviečiame response metodą json kuris iš gauto stream'o konvertuos duomenis į objektą
        return response.json();
    })
        .then((data) => {
        nameResult.innerHTML = data.name;
        resultList.innerHTML = "";
        data.country.forEach((c) => {
            const li = document.createElement('li');
            li.innerHTML = `${c.country_id} = ${(c.probability * 100).toFixed(2)}%`;
            li.className = 'list-group-item';
            //Kiekvieną įrašą pridedame į ul sąrašą
            resultList.appendChild(li);
        });
    });
};
export {};
