const xInput = document.getElementById("x");
const yInput = document.getElementById("y");
const btn = document.getElementById("btn");
const rez = document.getElementById("rez");

const skaiciuoti = () => {
    const x = xInput.valueAsNumber;
    const y = yInput.valueAsNumber;
    const sum = (x / (y * 0.01) ** 2).toFixed(2);
    rez.innerHTML = `KMI yra lygi: ${sum}`;
}

btn.onclick = skaiciuoti;

