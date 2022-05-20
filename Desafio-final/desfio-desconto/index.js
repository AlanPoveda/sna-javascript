let resTag = document.getElementById("result");
// Calculando o desconto, mostrando o valor no html
function discount() {
    let product = window.prompt("Qual o produto que você esta comprando?")
    let price = window.prompt(`Qual é o preço do ${product}?`)
    
    if(verifyInput(price)){
        alert("Error. Digite um ano válido")
        return
    }    

    const discountPrice = discountValue(price)
    const finalPrice = calDiscount(price, discountPrice)

    resTag.innerHTML = `<h2> Calculando desconto de 10% para ${product}</h2>`
    resTag.innerHTML += `<p> Você acaba de ganhar R$: ${discountPrice} de desconto (-10%).</p>`
    resTag.innerHTML += `<p> No final você vai ganhar R$: ${finalPrice} no produto ${product}</p>`


}
// Calulando o desconto, retorna o valor total
const calDiscount = (price, discount) => {
    return price - discount
}
// Calcula o 10% de desconto sobre o produto
const discountValue = price => {
   let discount = price * 0.1
   return discount.toFixed(2)
}

// Verifica se o input do preço é valido
function verifyInput(number) {
    if (isNaN(number) || number == "" || number < 0) {
        return true;
    }
    return false
}