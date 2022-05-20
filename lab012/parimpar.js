
function teste() {
    let num = Number(window.prompt('Digite um número: '))
    let tipo
    if (num % 2 == 1) {
        tipo = '<strong>PAR</strong>'
    } else {
        tipo = '<strong>ÍMPAR</strong>'
    }

    let res = querySelector('section#result')
    res.innerHTML = `<p>O número ${num} que foi digitado é ${tipo}!</p>`
}