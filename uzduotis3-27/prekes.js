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