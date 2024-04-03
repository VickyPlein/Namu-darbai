/* 1. Užduotis
Sukurkime WEB aplikaciją kuri būtų skirta išsisaugoti pirkinių sąrašą
(tokį kokį susidarome prieš išeidami į parduotuvę).Įvedimo formoje turėtų būti įvedimo laukai: prekė, kiekis ir mygtukas pridėti.
Kiekviena prekė turėtų būti pridedama į masyvą, o masyvas atvaizduojamas puslapyje.
Patobulinkime aplikaciją taip, kad prekių sąrašas būtų išsaugomas į localstorage, 
o užsikraunant aplikacijai išsaugotas(jei toks egzistuoja) sąrašas būtų užkraunamas iš localstorage.
Aplikacijoje padarykite mygtuką visų prekių ištrynimui,
 taip pat padarykite prie kiekvienos prekės mygtuką "ištrinti" kurį paspaudus būtų panaikinama tik ta prekė.
*/

//Pasiimam elementus iš HTML
const nameInp = document.getElementById("name");
const quantityInp = document.getElementById("quantity");
const addBtn = document.getElementById("add");
const resultList = document.getElementById("result");
const clearBtn = document.getElementById("clear");

let products = [];

const saveProducts = () => {
    localStorage.setItem("products", JSON.stringify(products));
}

const loadProducts = () => {
    const lsProducts = localStorage.getItem("products");
    if (lsProducts != null) {
        products = JSON.parse(lsProducts);
        showProducts();
    }
}

const showProducts = () => {
    resultList.innerHTML = "";
    products.forEach((p, i) => {
        const productLi = document.createElement("li");
        productLi.className = "list-group-item";
        productLi.textContent = `${p.name} (${p.quantity})`;
        resultList.appendChild(productLi);

    })
}

const addProduct = () => {
    //Paimame reiksmes is laukeliu
    const name = nameInp.value;
    const quantity = quantityInp.value;
    nameInp.value = "";
    quantityInp.value = "";
    products.push({
        name: name,
        quantity: quantity
    });
    showProducts();
    saveProducts();
}

const clear = () => {
    products = [];
    saveProducts();
    showProducts();
}

addBtn.onclick = addProduct;
clearBtn.onclick = clear;

loadProducts();

//Pasiimame HTML elemtus iš DOM pagal ID

/*
const addBtn = document.getElementById("add_task");      //<button>
const list = document.getElementById("tasks_list");      // <ul> - elementas
const taskName = document.getElementById("task_name");   // <input>
const taskNum = document.getElementById("task_num");
const clearPrekes = document.getElementById("clear_prekes"); // <button> - išvalyti visą sąrašą

// Kintamasis kuriame saugomos užduotys

let prekes = [];

const showPrekes = () => {
    list.innerHTML = "";
    prekes.forEach((p) => {
        const newTask = document.createElement("li");
        newTask.className = "list-group-item";
        newTask.textContent = `${p.pavadinimas}${p.kiekis}`;
        list.appendChild(newTask);
    })
}

const addTask = () => {
    const text = taskName.value;
    const quantity = taskNum.value;

    taskName.value = "";
    taskNum.value = "";

    prekes.push({
        pavadinimas: text,
        kiekis: quantity
    });


    taskName.value = "";

    showPrekes();


    localStorage.setItem("prekes", JSON.stringify(prekes));
}


const clearList = () => {
    prekes = [];
    localStorage.removeItem("prekes");
    showPrekes();
}

addBtn.onclick = addTask;
clearPrekes.onclick = clearList;

const lsPrekes = localStorage.getItem('prekes');

if (lsPrekes != null) {
    prekes = JSON.parse(lsPrekes);
    showPrekes();
}

*/