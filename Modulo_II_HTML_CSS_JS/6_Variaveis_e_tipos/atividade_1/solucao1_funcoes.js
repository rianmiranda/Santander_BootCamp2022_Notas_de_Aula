//SOLUÇÃO 1: UTILIZANDO BUILT-IN FUNCTIONS

function isPalindrome(string) {
    if (!string) return "Você não informou uma frase."

    let sentence = string
    
    //Converte a string da variavel sentence para letras minúsculas
    sentence = sentence.toLowerCase() 
    
    //Remove acentos e caracteres especiais listados no primeiro parametro do método replace
    sentence = sentence.replace(/[,.?!-`"(){}]/g, "")

    //Remove os espaços em branco
    sentence = sentence.replace(/\s/g, "")

    //Substitui as letras acentuadas pelas mesmas letras, porém sem acento
    sentence = sentence.normalize("NFD").replace(/[\u0300-\u036f]/g, "")


    //Divide a string da variavel sentence em um array de caracteres
    //Inverte a ordem do array
    //Junta os caracteres e retorna uma string
    //Armazena o resutado na variavel reversedSentence
    let reversedSentence = sentence.split("").reverse().join("")

    console.log(`Frase Original: ${sentence} \nFrase Invertida: ${reversedSentence}`)
    
    if (reversedSentence == sentence) {
        return "É palindromo!!!"
    } else {
        return "Não é palindromo."
    }
}

console.log(isPalindrome("Roma me tem amor."))

console.log(isPalindrome("Cadê a chave?"))