/**
 * Nome: Alan Poveda
 * Data: 19-05-2022
 * Lab: 03
 */


// Esta função, quando o botão é clicado, ele pega o valor digitado no prompt e dois executa a função para verificar o valor digitado.
function selectButton(){
    const nameUser = window.prompt("what's your name?")
    verifyInput(nameUser)
}

// Verifica se o nome foi digitado não vem vazio, se for vazio tem que começar novamente a função selectButton.
function verifyInput(name){
    if(name == '' || name == null){ 
        alert("Please enter a correct name")
        selectButton();
    }else{
        alert(`Hi ${name}, nice to meet you`)
    } 
}