//SOLUÇÃO 2: UTILIZANDO FOR LOOP
function isPalindromeLoop (string){
    if (!string) return "Você não digitou uma frase.";

    sentence = string;

    sentence = sentence.toLowerCase();

    sentence = sentence.replace(/[,.?!-`"(){}]/g, "")

    sentence = sentence.replace(/\s/g, "");

    sentence = sentence.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    for (i = 0; i < (sentence.length - 1) / 2; i++) {
        if (sentence[i] != sentence[sentence.length - 1 - i]) return "Não é palindromo."
    }

    return "É palindromo!"
}

console.log(isPalindromeLoop("Roma me tem amora"))

// console.log(isPalindromeLoop("ABC"))