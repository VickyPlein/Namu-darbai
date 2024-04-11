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

const vardasDOM=<HTMLInputElement>document.getElementById("vardas");
const pavardeDOM=<HTMLInputElement>document.getElementById("pavarde");
const atlyginimasDOM=<HTMLInputElement>document.getElementById("atlyginimas");
const workersDOM=<HTMLUListElement>document.getElementById("workerlist")
const addBtn=document.getElementById("add")!;
const rezultatasDiv=document.getElementById("rezultatas")!;

class Darbuotojas {
    constructor(
        public vardas:string,  public pavarde:string,  public atlyginimas:number) {
    }

    set _vardas(v:string) {
        this.vardas = v;
    }
    set _pavarde(p:string) {
        this.pavarde = p;
    }
    set _atlyginimas(a:number) {
        this.atlyginimas = a;
    }

    get _vardas():string {
        return this.vardas;
    }
    get _pavarde():string {
        return this.pavarde;
    }
    get _atlyginimas():number {
        return this.atlyginimas;
    }

    public gpm() {
        return `gyventojo pajamų mokestis(GPM): ${(this.atlyginimas * 0.20).toFixed(2)}`;
    }
    public psd() {
        return `privalomusis sveikatos draudimas(PSD): ${(this.atlyginimas * 0.0698).toFixed(2)}`;
    }
    public vsd() {
        return `valstybinis socialinis draudimas(VSD): ${(this.atlyginimas * 0.1252).toFixed(2)}`;
    }
}

const DarbuotojasMas:Darbuotojas[]=[];
 
const showlist=()=>{
    const vardas=vardasDOM.value;
    const pavarde=pavardeDOM.value;
    const atlyginimas=atlyginimasDOM.valueAsNumber;
    DarbuotojasMas.push(new Darbuotojas(vardas,pavarde, atlyginimas));
    console.log(DarbuotojasMas);

    workersDOM.innerHTML='';
      DarbuotojasMas.forEach((w, i)=>{
        const li = document.createElement('li');
        li.textContent = `${w.vardas} ${w.pavarde} - Atlyginimas: ${w.atlyginimas}€, GPM: ${w.gpm()}€, PSD: ${w.psd()}€, VSD: ${w.vsd()}€`;
        workersDOM.appendChild(li);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Ištrinti";
        // deleteBtn.className = "btn btn-primary float-end btn-sm";

        deleteBtn.onclick = () => {
        DarbuotojasMas.splice(i, 1);
        showlist()
      };
      workersDOM.appendChild(deleteBtn);
    });
}


addBtn.onclick = showlist;