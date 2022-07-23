function compareNumbers(num1, num2) {
    if (num1 == null || num2 == null) return "Defina os dois números!"
    
    var areEqualNumbers
    areEqualNumbers = (num1 == num2) ? "sao iguais" : "não são iguais"
    
    sumNumbers = num1 + num2

    var comparison1
    var comparison2
    
    if (sumNumbers < 10 ) {
        comparison1 = "menor"
        comparison2 = "menor"
    } else if (sumNumbers == 10) {
        comparison1 = "igual"
        comparison2 = "menor"
    } else if (sumNumbers > 10 && sumNumbers < 20) {
        comparison1 = "maior"
        comparison2 = "menor"
    } else if (sumNumbers == 20) {
        comparison1 = "maior"
        comparison2 = "igual"
    } else {
        comparison1 = "maior"
        comparison2 = "maior"
    }

    return ("Os números " + num1 + " e " + num2 + " " 
            + areEqualNumbers + ". Sua soma é " + sumNumbers 
            + ", que é " + comparison1 + " que 10 e " + comparison2 
            + " que 20.")
}

console.log(compareNumbers(0, ))