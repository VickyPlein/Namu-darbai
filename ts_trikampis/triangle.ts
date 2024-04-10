/*Panaudodami TypeScript sukurkite klasę Triangle kuri būtų skirta darbui su trikampiais. Klasė turi turėti:
1. konstruktorių su trimis parametrais, kraštinėmis A, B, C
2. set'erius ir get'erius
3. privačią funkciją kuri patikrintų ar iš paduotų kraštinių įmanoma sudaryti trikampį (dviejų kraštinių suma didesnė už trečiąją)
4. bandant pakeisti kraštinės reikšmę per set'erius turi būti iškviečiamas patikrinimo metodas ir turėtų neleisti pakeisti reikšmių
5. Sukurkite metodą toString() kuris gražintų trikampį string formatu (atspausdinimui)
5. Sukurkite metodą getPerimeter() kuri suskaičiuotų ir grąžintų trikampio perimetrą
6. Sukurkite metodą getArea() kuri suskaičiuotų ir grąžintų trikampio plotą
7. Sukurkite metodą largerTriangle(t:Triangle):boolean kuris palygintų du trikampius ir grąžintų true jei kviečiamasis trikampis yra mažesnis arba lygus (plotu) ir true jei paduotas trikampis į funkciją yra didesnis
8. Sukurkite masyvą su trimis trikampiais ir parašykite programinį kodą kuris suskaičiuotų visų šių trikampių plotų sumą

Papildomas iššūkis
Sukurkite metodą getType() kuris grąžintų kokio tipo yra trikampis: lygiakraštis, lygiašonis, statusis ar įprastinis
*/


/*SENASIS BUDAS
class Triangle {
    public krastineA: number;
    public krastineB: number;
    public krastineC: number;

    constructor(a: number, b: number, c: number) {
        this.krastineA = a;
        this.krastineB = b;
        this.krastineC = c;
        }
            public toString(){
        return this.krastineA+" "+this.krastineB+" "+this.krastineC;
    }
}
*/
// Sutrumpintas konstruktoriaus parašymo būdas

class Triange{
    constructor (   public a:number, 
                    public b:number, 
                    public c:number){
        
    }
}
