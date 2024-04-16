import { Registration } from "./registration";

const nameInput=<HTMLInputElement>document.getElementById("name");
const surnameInput=<HTMLInputElement>document.getElementById("surname");
const yearInput=<HTMLInputElement>document.getElementById("year");
const maleInput=(<HTMLInputElement | null>document.getElementById('male'))!;
const femaleInput=(<HTMLInputElement | null>document.getElementById('female'))!;
const phoneInput=<HTMLInputElement>document.getElementById("phone");
const emailInput=<HTMLInputElement>document.getElementById("email");
const addRegistrationButton=<HTMLButtonElement>document.getElementById("addRegistration");

const loadDataButton=<HTMLButtonElement>document.getElementById("loadData");
const dataTableBody=<HTMLElement>document.getElementById("dataTableBody");

const dataTable=<HTMLElement>document.getElementById("dataTable");
const editForm=<HTMLElement>document.getElementById("editForm");

let registrationData:Registration[];

addRegistrationButton.onclick=()=>{
    const genderInp: string = maleInput.checked ? 'male' : femaleInput.checked ? 'female' : 'unknown';

    const reg:Registration={
        name:nameInput.value,
        surname:surnameInput.value,
        year:yearInput.valueAsNumber,
        gender:genderInp,
        phone:phoneInput.value,
        email:emailInput.value
    }

    fetch("https://registracija-82697-default-rtdb.europe-west1.firebasedatabase.app/registracija.json",{
        method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(reg)
    })
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log("Įrašas pridėtas");
        console.log(data);
    })

};


const showData=()=>{
    dataTableBody.innerHTML="";
    registrationData.forEach((reg)=>{
        
        const tr=document.createElement("tr");
        
        const tdName=document.createElement("td");
        tdName.innerHTML=reg.name;
        
        const tdSurname=document.createElement("td");
        tdSurname.innerHTML=reg.surname;
        
        const tdYear=document.createElement("td");
        tdYear.innerHTML=reg.year.toString();

        const tdGender=document.createElement("td");
        tdGender.innerHTML=reg.gender;

        const tdEmail=document.createElement("td");
        tdEmail.innerHTML=reg.email;

        const tdPhone=document.createElement("td");
        tdPhone.innerHTML=reg.phone;

        const tdV=document.createElement("td");
       
        tr.appendChild(tdName);
        tr.appendChild(tdSurname);
        tr.appendChild(tdYear);
        tr.appendChild(tdGender);
        tr.appendChild(tdEmail);
        tr.appendChild(tdPhone);

        dataTableBody.appendChild(tr);

        tr.onclick=()=>{
            dataTable.style.display="none";
            editForm.style.display="block";
            (<HTMLInputElement>document.getElementById("nameEdit")).value=reg.name;
            (<HTMLInputElement>document.getElementById("surnameEdit")).value=reg.surname;
            (<HTMLInputElement>document.getElementById("yearEdit")).value=reg.year.toString();
             if (reg.gender === 'male') {
                (<HTMLInputElement>document.getElementById('maleEdit')).checked = true;
            } else if (reg.gender === 'female') {
                (<HTMLInputElement>document.getElementById('femaleEdit')).checked = true;
            } else {
                (<HTMLInputElement>document.getElementById('maleEdit')).checked = false;
                (<HTMLInputElement>document.getElementById('femaleEdit')).checked = false;
            }
            (<HTMLInputElement>document.getElementById("emailEdit")).value=reg.email;
            (<HTMLInputElement>document.getElementById("phoneEdit")).value=reg.phone;

            (<HTMLButtonElement>document.getElementById("updateRegistration")).onclick=()=>{

                 const genderEdit = (<HTMLInputElement>document.getElementById('maleEdit')).checked ? 'male' : (<HTMLInputElement>document.getElementById('femaleEdit')).checked ? 'female' : 'unknown';
        
                const upReg:Registration={
                    name:(<HTMLInputElement>document.getElementById("nameEdit")).value,
                    surname:(<HTMLInputElement>document.getElementById("surnameEdit")).value,
                    year:(<HTMLInputElement>document.getElementById("yearEdit")).valueAsNumber,
                    gender: genderEdit,
                    email:(<HTMLInputElement>document.getElementById("emailEdit")).value,
                    phone:(<HTMLInputElement>document.getElementById("phoneEdit")).value,
                }
                fetch(`https://registracija-82697-default-rtdb.europe-west1.firebasedatabase.app/registracija/${reg.id}.json`,{
                    method:"PUT",
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(upReg)
                })
                .then((response)=>{
                    return response.json();
                })
                .then((data)=>{
                    console.log("Įrašas atnaujintas");
                    console.log(data);
                    dataTable.style.display="block";
                    editForm.style.display="none";
                    loadData();
                })

            }
        }
        
    })

}

const loadData=()=>{
    fetch("https://registracija-82697-default-rtdb.europe-west1.firebasedatabase.app/registracija.json",{
        method:"GET",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    })
    .then((response)=>{
        return response.json();
    })
    .then((data: {[key:string]:Registration})=>{
          registrationData=[];

        Object.keys(data).forEach((k)=>{
           registrationData.push({id:k,...data[k]});
        })

        showData();
        console.log(registrationData);
    });
}

loadDataButton.onclick=loadData;
