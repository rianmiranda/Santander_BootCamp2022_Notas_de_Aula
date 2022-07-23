function replaceEvenNumbersByZero (array){
    if (!Array.isArray(array)) return "Você não passou um array."

    if (!array.length) {
        console.log("Você passou um array vazio.")
        return -1
    }

    for (i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            console.log(`Impossivel substituir o elemento não numérico "${array[i]}" por 0.`)
        } else if (array[i] % 2 === 0 && array[i] !== 0) {
            console.log(`O elemento ${array[i]}, posicionado no índice ${i}, será substituído por 0.` )
            array[i] = 0
        }
    }
    return array
}

console.log(replaceEvenNumbersByZero([0, "abacate", 1, 2, 3, 4, 5]))