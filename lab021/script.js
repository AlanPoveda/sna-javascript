
let cont = 1
saida.innerHTML = `<h2>Contando de 1 até 10</h2>`

//Tirei o if e ainda deixei algumas variáveis globais
function contar() {

    let saida = document.getElementById('saida')

    while (cont <= 10) {
        saida.innerHTML += ` ${cont} &#x1F449;`
        cont ++ // Corresponde a cont = cont + 1
    }
    saida.innerHTML += ` &#x1F3C1;`
}