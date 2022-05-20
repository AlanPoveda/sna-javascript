let resTag = document.getElementById("result");
// Função que escreve o valor final no html ou retorna um erro
function measurements() {
    let cash = window.prompt("Quantos R$ você tem na carteira?");
    let dollarQuote = window.prompt("Antes de mais nada. Quanto está a cotação do dólar agora?");
    if(verifyInput(cash) || verifyInput(dollarQuote)){
        alert("Error. Digite um ano válido");
        return
    }    

    const dollar = dollarConvert(cash, dollarQuote)


    resTag.innerHTML = `<h2> R$: ${cash} corresponde a...</h2>`
    resTag.innerHTML += `<h2> US$: ${dollar}</h2>`


}
// Converte real para dollar 
const dollarConvert = (real, quote) => {
   let dollar = real/quote
   return dollar.toFixed(2)
}

// Verifica se o valor digitado é válido 
function verifyInput(number) {
    if (isNaN(number) || number == "" || number < 0) {
        return true;
    }
    return false
}