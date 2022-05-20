let resTag = document.getElementById("result");
// Função que escreve o valor final no html ou retorna um erro
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
// Converte real para dollar 
const dollarConvert = r => {
   let dollar = r/5.20
   return dollar.toFixed(2)
}

// Verifica se o valor digitado é válido 
function verifyInput(number) {
    if (isNaN(number) || number == "" || number < 0) {
        return true;
    }
    return false
}