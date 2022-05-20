// Colocando parênteses e colocando chaves
function calcidade() {
    let agora = new Date
    let ano = agora.getFullYear()

    // E troquei para ano
    let nasc = Number(window.prompt('Em que ano você nasceu?'))
    let idade = ano - nasc

    let saida = document.getElementById('saida')
    saida.innerHTML = `<p>Quem nasceu em ${nasc} vai completar <strong>${idade}</strong> anos em ${ano}.</p>`
}