const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const yearInput = document.getElementById("year");
const maleInput = document.getElementById('male');
const femaleInput = document.getElementById('female');
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const addRegistrationButton = document.getElementById("addRegistration");
const loadDataButton = document.getElementById("loadData");
const dataTableBody = document.getElementById("dataTableBody");
const dataTable = document.getElementById("dataTable");
const editForm = document.getElementById("editForm");
let registrationData;
addRegistrationButton.onclick = () => {
    const genderInp = maleInput.checked ? 'male' : femaleInput.checked ? 'female' : 'unknown';
    const reg = {
        name: nameInput.value,
        surname: surnameInput.value,
        year: yearInput.valueAsNumber,
        gender: genderInp,
        phone: phoneInput.value,
        email: emailInput.value
    };
    fetch("https://registracija-82697-default-rtdb.europe-west1.firebasedatabase.app/registracija.json", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reg)
    })
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        console.log("Įrašas pridėtas");
        console.log(data);
    });
};
const showData = () => {
    dataTableBody.innerHTML = "";
    registrationData.forEach((reg) => {
        const tr = document.createElement("tr");
        const tdName = document.createElement("td");
        tdName.innerHTML = reg.name;
        const tdSurname = document.createElement("td");
        tdSurname.innerHTML = reg.surname;
        const tdYear = document.createElement("td");
        tdYear.innerHTML = reg.year.toString();
        const tdGender = document.createElement("td");
        tdGender.innerHTML = reg.gender;
        const tdEmail = document.createElement("td");
        tdEmail.innerHTML = reg.email;
        const tdPhone = document.createElement("td");
        tdPhone.innerHTML = reg.phone;
        const tdV = document.createElement("td");
        tr.appendChild(tdName);
        tr.appendChild(tdSurname);
        tr.appendChild(tdYear);
        tr.appendChild(tdGender);
        tr.appendChild(tdEmail);
        tr.appendChild(tdPhone);
        dataTableBody.appendChild(tr);
        tr.onclick = () => {
            dataTable.style.display = "none";
            editForm.style.display = "block";
            document.getElementById("nameEdit").value = reg.name;
            document.getElementById("surnameEdit").value = reg.surname;
            document.getElementById("yearEdit").value = reg.year.toString();
            if (reg.gender === 'male') {
                document.getElementById('maleEdit').checked = true;
            }
            else if (reg.gender === 'female') {
                document.getElementById('femaleEdit').checked = true;
            }
            else {
                document.getElementById('maleEdit').checked = false;
                document.getElementById('femaleEdit').checked = false;
            }
            document.getElementById("emailEdit").value = reg.email;
            document.getElementById("phoneEdit").value = reg.phone;
            document.getElementById("updateRegistration").onclick = () => {
                const genderEdit = document.getElementById('maleEdit').checked ? 'male' : document.getElementById('femaleEdit').checked ? 'female' : 'unknown';
                const upReg = {
                    name: document.getElementById("nameEdit").value,
                    surname: document.getElementById("surnameEdit").value,
                    year: document.getElementById("yearEdit").valueAsNumber,
                    gender: genderEdit,
                    email: document.getElementById("emailEdit").value,
                    phone: document.getElementById("phoneEdit").value,
                };
                fetch(`https://registracija-82697-default-rtdb.europe-west1.firebasedatabase.app/registracija/${reg.id}.json`, {
                    method: "PUT",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(upReg)
                })
                    .then((response) => {
                    return response.json();
                })
                    .then((data) => {
                    console.log("Įrašas atnaujintas");
                    console.log(data);
                    dataTable.style.display = "block";
                    editForm.style.display = "none";
                    loadData();
                });
            };
        };
    });
};
const loadData = () => {
    fetch("https://registracija-82697-default-rtdb.europe-west1.firebasedatabase.app/registracija.json", {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        registrationData = [];
        Object.keys(data).forEach((k) => {
            registrationData.push(Object.assign({ id: k }, data[k]));
        });
        showData();
        console.log(registrationData);
    });
};
loadDataButton.onclick = loadData;
export {};
