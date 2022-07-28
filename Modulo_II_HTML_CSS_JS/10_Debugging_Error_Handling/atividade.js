function guessArrayLength(array, guess) {
    try {
        // Checa a existencia de referenceErrors
        // Fonte: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
        if (arguments.length === 0) {
            const reference = new ReferenceError("You didn't pass any argument.")
            throw reference
        } else if (arguments.length < 2 || arguments.length > 2) {
            const reference = new ReferenceError("You must pass 2 arguments to run this function.")
            throw reference
        }

        // Checa a existencia de typeErrors no array
        if (typeof(array) != "object") {
            const type = new TypeError("The array you passed is not an object.")
            throw type
        }

        // Checa a existencia de TypeErrors no parametro guess
        if (typeof(guess) != "number") {
            const type = new TypeError("The argument 'guess' you passed is not a number.")
            throw type
        }

        // Checa se o tamanho do array e igual ao parametro guess
        if (array.length != guess) {
            const range = new RangeError("Array length is not equal to the parameter 'guess'.")
            throw range
        }

        console.log(array)
    } 
    catch (error) {
        if (error instanceof ReferenceError) {
            console.log("A reference error just happened!")
            console.log(error.message)
        } else if (error instanceof TypeError) {
            console.log("A type error just happened!")
            console.log(error.message)
        } else if (error instanceof RangeError) {
            console.log("A range error just happened!")
            console.log(error.message)
        } else {
            console.log(`An unexpected error just happened: ${error}`)
        }
    }
}

array = [0, 1, 2, 3, 4]

guessArrayLength(array, "")