// Função criada para receber o nome e a idade do usuário!


function welcome(){
    let name = window.prompt("Digite seu nome")
    let age = window.prompt(`Olá ${name} , quantos anos você tem?`)

    alert(`Acabei de conhecer o ${name} que tem ${age} de idade`)
}