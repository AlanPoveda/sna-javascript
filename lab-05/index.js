/**
 * Calculando a metade e o dobro do valor executado
 * Nome: Alan Poveda
 * Data: 19-05-2022
 * Lab: 05
 */

let res = document.getElementById("res");

//Função para iniciar o fluxo
const init = () => {
    const number = window.prompt("Digit a number");
    isValidNumber(number);
};


// Verifica se o número é valido e se não é vazio. Se for ele manda uma mensagem de erro, se não ele começa a execução da resposta
function isValidNumber(number) {
    const globalRegex = new RegExp(/[^0-9]/g, "");
    if (globalRegex.test(number) || number == '') {
        alert("Digit a valid number"); 
        init()
    }else{
        responseHtml(number) 
    }
}

// Calcula o dobro do número
const doubleNumber = (number) => {
    return number * 2;
};

// Calcula a metáde do número
const halfNumber = (number) => {
    return number / 2;
};

//Pega os valores das funções anteriores e ainda mostra para o usuário a resposta
const responseHtml = (number) => {
    const double = doubleNumber(number);
    const half = halfNumber(number);
    res.innerHTML = `<p>Double ${number} is ${double} is half is ${half}</p>`;
};
