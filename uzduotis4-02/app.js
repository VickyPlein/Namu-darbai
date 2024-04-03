const kainaInput = document.querySelector('#kaina');
const procentaiInput = document.querySelector('#procentai');
const selector = document.querySelector('#selector');
const resultSpan = document.querySelector('#result');
const calcBtn = document.querySelector('#calcBtn');
const errorSpan = document.querySelector('#error');

calcBtn.disabled = true;
calcBtn.style.background = '#8DCB88';

const skaiciuokle = () => {

    const getKaina = Number(kainaInput.value);
    const getProcentai = Number(procentaiInput.value);
    const getSelect = selector.value;

    let result = 0;

    if (getSelect === 'brangsta') {
        result = getKaina + (getKaina * (getProcentai / 100));
    }
    if (getSelect === 'pinga') {
        result = getKaina - (getKaina * (getProcentai / 100));
    }

    if (getProcentai < 0 || getProcentai > 100) {
        resultSpan.innerHTML = '';
        errorSpan.innerHTML = `Procentas negali buti mažesnis už 0 ar didesnis už 100`
    }
    else {
        resultSpan.innerHTML = `${Math.round(result)}€`;
        errorSpan.innerHTML = '';
    }
}

const enableBtn = () => {
    const kainaValue = kainaInput.value
    const procentaiValue = procentaiInput.value

    if (kainaValue === '' || isNaN(kainaValue)) {
        calcBtn.disabled = true;
        calcBtn.style.background = '#8DCB88';
        kainaInput.style.border = '2px solid red';
    }
    else {
        kainaInput.style.border = '2px solid green';
    }

    if (procentaiValue === '' || isNaN(procentaiValue)) {
        calcBtn.disabled = true;
        calcBtn.style.background = '#8DCB88';
        procentaiInput.style.border = '2px solid red';
    }
    else {
        procentaiInput.style.border = '2px solid green';
    }

    if (kainaValue !== '' && !isNaN(kainaValue) && procentaiValue !== '' && !isNaN(procentaiValue)) {
        calcBtn.disabled = false;
        calcBtn.style.background = 'green';
    }
}

calcBtn.onclick = skaiciuokle;
kainaInput.oninput = enableBtn;
procentaiInput.oninput = enableBtn;


/*
    if (kainaValue === '' || isNaN(kainaValue) || procentaiValue === '' || isNaN(procentaiValue)) {
        calcBtn.disabled = true;
        kainaInput.style.border = '2px solid red';
        procentaiInput.style.border = '2px solid red';
    } else {
        calcBtn.disabled = false;
        kainaInput.style.border = '2px solid green';
        procentaiInput.style.border = '2px solid green';
    }
    */