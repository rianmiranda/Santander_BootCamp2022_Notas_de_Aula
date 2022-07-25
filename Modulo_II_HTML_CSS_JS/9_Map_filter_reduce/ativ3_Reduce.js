// Exercicio a): soma os valores de um array

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const callBackFn = function(accumulator = 0, currentValue) {
    return accumulator += currentValue
}  

sum = array.reduce(callBackFn)

console.log(sum)

// Exercicio b): Calcula o saldo disponivel apos uma compra

const listProducts = [
    {
        product : "Towel",
        price : 10
    },

    {
        product : "2kg Tenderloin",
        price : 100
    },

    {
        product : "Saucepan",
        price : 90
    }
]
let myCurrentBalance = 1000

function updatesBalance(listProducts, initialBalance) {
    return listProducts.reduce(calculatesBalance, initialBalance)    
}

function calculatesBalance(balance, currentProduct, index) {
    console.log(`${index + 1}. ${currentProduct.product} -----> Price: $${currentProduct.price}`)
    return balance -= currentProduct.price
}

function myBankAppScreen() {
    console.log("============================================")
    console.log("                My Bank App                 ")
    console.log("============================================")
    console.log(`Your initial Balance: $${myCurrentBalance}`)
    console.log("\nLast purchases: ")
    myCurrentBalance = updatesBalance(listProducts, myCurrentBalance)
    console.log(`\nFinal Balance: $${myCurrentBalance}`)
    
    return "\nIt's so easy to keep track of your finances with our app, isn't?"
}

console.log(myBankAppScreen())
