/*
Užduotis „Trupmenos“
Sukurkime klasę Trupmena, ją turėtų sudaryti trys atributai: sveikojiDalis, skaitiklis, daliklis
Sukurkime klasei setter‘ius ir getter‘ius
Klasei Trupmena sukurkime metodą toString kuris gražintų trupmeną tokiu formatu: sveikojiDalis skaitiklis / daliklis(pvz.: 1 2 / 5)
Ištestuokime programinį kodą sukurdami objektą, suteikime kintamiesiems reikšmes ir išveskime rezultatą.
Sukurkime metodą: pridetiInt(sveikasisSkaicius) kuris pridėtų sveikąjį skaičių prie trupmenos, ištestuokime pakoreguotą kodą.
Sukurkite dar vieną papildomą metodą: prideti(sveikasisSkaicius, skaitiklis, vardiklis).Nepamirškite jog pridedant skaičių reikia subendravardiklinti).
Sukurkime metodą pridetiTrupmena(x), šis metodas turės prie esamos trupmenos pridėti paduotą trupmeną.Nepamirškite jog taip pat po šio veiksmo reikės suprastinti trupmeną.
Sukurkime metodą toDouble() kuris grąžintų esamą trupmenos reikšmę realiuoju skaičiumi(per kablelį).
*/

//Sukurkime klasę Trupmena, ją turėtų sudaryti trys atributai: sveikojiDalis, skaitiklis, daliklis

class Trupmena {
    #sveikojiDalis = 0;
    #skaitiklis = 0;
    #daliklis = 0;

    constructor(sveikojiDalis, skaitiklis, daliklis) {
        this.#sveikojiDalis = sveikojiDalis;
        this.#skaitiklis = skaitiklis;
        this.#daliklis = daliklis;
    }
}

// 2. Sukurkime klasei setter‘ius ir getter‘ius

    set sveikojiDalis(sveikojiDalis) {
    this.#sveikojiDalis = sveikojiDalis;
}

    set skaitiklis(skaitiklis) {
    this.#skaitiklis = skaitiklis;
}

    set daliklis(daliklis) {
    this.#daliklis = daliklis;
}

    get sveikojiDalis() {
    return this.#sveikojiDalis;
}

    get skaitiklis() {
    return this.#skaitiklis;
}

    get daliklis() {
    return this.#daliklis;
}

// 3. Klasei Trupmena sukurkime metodą toString kuris gražintų trupmeną tokiu formatu: 
//sveikojiDalis skaitiklis / daliklis(pvz.: 1 2 / 5)

toString() {
    return `${this.#sveikojiDalis} ${this.#skaitiklis} / ${this.#daliklis}`;
}

//Ištestuokime programinį kodą sukurdami objektą, suteikime kintamiesiems reikšmes ir išveskime rezultatą.

pridetiInt(sveikasisSkaicius) {
    return this.sveikojiDalis += sveikasisSkaicius;
}