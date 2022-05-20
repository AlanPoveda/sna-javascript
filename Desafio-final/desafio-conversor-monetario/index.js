let resTag = document.getElementById("result");
// Esta função calcula se o ano é bissexto ou não
function measurements() {
    let cash = window.prompt("Quantos R$ você tem na carteira?");
    if(verifyInput(cash)){
        alert("Error. Digite um ano válido");
        return
    }    

    const dollar = dollarConvert(cash)


    resTag.innerHTML = `<h2> R$: ${cash} corresponde a...</h2>`
    resTag.innerHTML += `<h2> US$: ${dollar}</h2>`


}

const dollarConvert = r => {
   let dollar = r/5.20
   return dollar.toFixed(2)
}


function verifyInput(number) {
    if (isNaN(number) || number == "" || number < 0) {
        return true;
    }
    return false
}