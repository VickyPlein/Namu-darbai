const hex = document.querySelector(".hexCode");
const btn = document.querySelector(".generate");
const body = document.querySelector("body");

const generateHexColor = () => {
    const randomColor = Math.random().toString(16).substring(2, 8);
    body.style.backgroundColor = "#" + randomColor;
    hex.innerHTML = "#" + randomColor;
}

btn.addEventListener("click", generateHexColor);
body.addEventListener("mousewheel", generateHexColor);





// toString = sesioliktaini skaiciu