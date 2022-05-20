// Adicionou os números e arrumou as estações, além de a linha 24 colocou o innerHTML

function estação() { 
    let mês = prompt('Digite o mês em extenso ou número (ex: Setembro. ex: 2)')
    let saída = document.querySelector('section#saida')
    let estação
    switch (mês.toUpperCase()) { // O método toUpperCase() transforma todas as letras de uma string para maiúsculas
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO': case '1': case '2': case '3': // Podemos testar múltiplos casos em uma mesma linha, desse jeito
            estação = 'VERÃO'
            break // Nunca se esqueça do break!!!
        case 'ABRIL': case 'MAIO': case 'JUNHO': case '4': case '5': case '6':
            estação = 'OUTONO'
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO': case '7': case '8': case '9':
            estação = 'INVERNO'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO': case '10': case '11': case '12':
            estação = 'PRIMAVEIRA'
            break
        default:
            estação = 'INDEFINIDA'
            break
    }
    saída.innerHTML = `<p>No mês de <mark>${mês}</mark>, estamos na estação <mark><strong>${estação}</strong></mark>.</p>`
}

// Sugestão de melhoria: refaça esse programa para que ele aceite tanto o mês por extenso quanto o número do mês.