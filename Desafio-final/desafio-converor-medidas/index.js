let resTag = document.getElementById("result");
// Essa fução escreve todas as conversões ou retorna um erro
function measurements() {
    let meters = window.prompt("Quantos R$ você tem na carteira?");
    if(verifyInput(meters)){
        alert("Error. Digite um ano válido");
        return
    }    
    const data = {
        km: kilometers(meters),
        hm: hectometers(meters),
        dam: decameters(meters),
        dm: decimeters(meters),
        cm: centimeters(meters),
        mm: millimeter(meters)
    }
    resTag.innerHTML = `<h2>A distância de ${meters} metros, corresponde a...</h2>`
    resTag.innerHTML += `<p> ${data.km} quilômetros (Km) </p>`
    resTag.innerHTML += `<p> ${data.hm} hectômetros (Hm) </p>`
    resTag.innerHTML += `<p> ${data.dam} decâmetros (Dam) </p>`
    resTag.innerHTML += `<p> ${data.dm} decímetros (dm) </p>`
    resTag.innerHTML += `<p> ${data.cm} centímetros (cm) </p>`
    resTag.innerHTML += `<p> ${data.mm} milímetros (mm) </p>`
}

// Converte Metros em kilometros
const kilometers = m => m/1000
// Converte Metros em hectometros
const hectometers = m => m/100
// Converte Metros em decametros
const decameters = m => m/10
// Converte Metros em decimetros
const decimeters = m => m * 10
// Converte Metros em centimetros
const centimeters = m => m * 100
// Converte Metros em milimetros
const millimeter = m => m * 1000


// Verifica o valor inserido é um número
function verifyInput(number) {
    if (isNaN(number) || number == "" || number < 0) {
        return true;
    }
    return false
}