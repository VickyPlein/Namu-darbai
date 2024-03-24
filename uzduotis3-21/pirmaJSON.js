/*Faile studentai.json pateikiamas JSON formatu studentų sąrašas(masyvas), 
jų duomenys ir pažymiai.Nuskaitykite duomenis iš masyvo, suskaičiuokite ir išveskite:
1. Studentų kiekį
2. Studentų amžiaus vidurkį
3. Studentų pažangumo vidurkį(visų pažymių vidurkį)
4. Išveskite studentų sąrašą ir kiekvieno studento vidurkį, pvz.:
Jonas Jonaitis 5.5
Petras Petraitis 9.3
*/

const fs = require("fs");
let str = fs.readFileSync("studentai.json").toString();

const stud = JSON.parse(str);

console.log(`Studentu kiekis : ${stud.length}`);

console.log(`----------------------------------------`);

let averageAge = 0;
let totalMarks = [];
let marksAvg = 0;

stud.forEach((student) => {
    averageAge += student.amzius / stud.length;
    student.pazymiai.forEach((marks) => {
        totalMarks.push(marks);
        marksAvg += marks;
    });
});

console.log(`Studentų amžiaus vidurkis: ${averageAge}`)
console.log(`----------------------------------------`);
console.log(`Studentų pažangumo vidurkis: ${(marksAvg / totalMarks.length).toFixed(1)}`)

console.log('------------------------');

console.log('------------------------');
for (const st of stud) {
    let studMarksAvg = 0;
    for (const marks of st.pazymiai) {
        studMarksAvg += marks;
    }
    console.log(`${st.vardas} ${st.pavarde} ${(studMarksAvg / st.pazymiai.length).toFixed(1)}`);
}