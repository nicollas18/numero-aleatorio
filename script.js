function aleatorio() {
    let inputMin = document.getElementById('min');
    let inputMax = document.getElementById('max');

    let min = inputMin.value;
    let max = inputMax.value;

    if (min > max) {
        window.alert("min precisa ser menor que max");
        inputMin.value = "";
        inputMax.value = "";
        return;
    } 

    let numero = getRandomNumber(min, max);
    let campo = document.getElementById('resultado');

    campo.innerHTML = numero;
     
}

function getRandomNumber(min, max) {
    let Min = Number(min);
    let Max = Number(max);

    return Math.floor(Math.random() * (Max - Min + 1)) + Min;
    
}