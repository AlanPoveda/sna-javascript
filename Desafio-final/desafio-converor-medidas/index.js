let resTag = document.getElementById("result");
// Esta função calcula se o ano é bissexto ou não
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
const kilometers = m => m/1000
const hectometers = m => m/100
const decameters = m => m/10
const decimeters = m => m * 10
const centimeters = m => m * 100
const millimeter = m => m * 1000
function verifyInput(number) {
    if (isNaN(number) || number == "" || number < 0) {
        return true;
    }
    return false
}