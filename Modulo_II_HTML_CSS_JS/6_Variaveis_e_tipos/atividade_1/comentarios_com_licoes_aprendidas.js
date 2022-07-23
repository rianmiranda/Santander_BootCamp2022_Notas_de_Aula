function isPalindrome(string) {
    if (!string) return;

    //Nesse ponto do código, sentence recebe um "tipo valor" String (tipo primitivo), e, portanto, FAZ UMA CÓPIA DESSE VALOR em outro local da memória do PC.
    //Alteracoes em sentence não modificam a string original
    let sentence = string;
    sentence = sentence.replace(" ", "");
    
    console.log(string)
    console.log(sentence)
    console.log(string)

    //Nesse ponto do código (linha 22), a variavel sentence deixa de ser um "tipo valor" String (tipo primitivo) e passa a ser um "tipo referencia" Array
    //Tipos referencia apontam para um local da memória que contem um dado real armazenado.
    //A partir desse momento, todas variaveis que receberem "sentence" passarão a apontar para o mesmo local na memória apontado pela variavel "sentence"
    //Qualquer alteração realizada em qualquer dessas variaveis altera o dado real armazenado, e portanto, tambem altera o valor apresentado pelas demais variaveis no console.log
    //Se reatribuirmos um outro tipo referencia a uma dessas variáveis, então ela passará a apontar para um local diferente na memória do PC,
    //mas as demais variaveis permanecerão apontado para o mesmo local da memória que contém o dado real armazenado inicialmente.

    //referencias: https://stackoverflow.com/questions/50840293/setting-a-variable-equal-to-another-variable
    //             http://net-informations.com/faq/general/valuetype-referencetype.htm#:~:text=A%20Value%20Type%20holds%20the,are%20stored%20in%20the%20stack.
    let sentenceSplit = sentence.split("");
    console.log(sentenceSplit)

    let reversedSentence = sentenceSplit.reverse();
    console.log(sentenceSplit)
    console.log(reversedSentence)

    reversedSentence.reverse(); //essa linha já altera o real armazendado na memória --> não precisamos do simbolo de atribuição
    console.log(reversedSentence)
    console.log(sentenceSplit)



    //----------------------- RESTANTE DO CÓDIGO ----------------------------------------------

    // if (reversedSentence === string.replace(" ", "").split("")) {
    //     console.log(reversedSentence)
    //     console.log(string.replace(" ", "").split(""))
    //     console.log(sentence)

    //     return "É palindromo!!!"
    // } else {
    //     console.log(reversedSentence)
    //     console.log(string.replace(" ", "").split(""))
    //     console.log(sentence)

    //     return "Não é palindromo."
    // }
}

console.log(isPalindrome("amor verdadeiro"))

