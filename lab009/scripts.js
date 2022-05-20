
let contador = 0 
let res = document.querySelector('section#result')
// As variáveis declaradas aqui fora são consideradas GLOBAIS e funcionam dentro do programa inteiro

// Contador ++ para somar
function contar() {
    contador ++ // É a mesma coisa que contador = contador + 1
    res.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques.</p>`
}

// Contador = 0 e html o mesmo de cima
function zerar() {
    contador = 0
    res.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques.</p>`
}