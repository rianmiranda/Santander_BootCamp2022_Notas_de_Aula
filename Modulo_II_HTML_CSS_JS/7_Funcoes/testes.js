let array = [1, 2, 3]

// Funcao autoinvocavel
console.log(
    function autoInvoked(a, b) {
    return a + b
    }(1, 2)
)

// Funcao Anonima + Spread
let func = function() {}

func = function(a, b, c) {
    return a + b + c;
}

console.log(func(...array))

// Rest
funcaoRest = function(...array) {
    sum = 0;
    for(i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum;
}

funcaoRest(1, 2, 3)

// Destructuring
const user1 = {
    id : 1,
    userName: "jdoe",
    fullName: {
        firstName: "John",
        lastName: "Doe"
    }
}

const user2 = {
    id : 2,
    userName : "rianmiranda1",
    fullName : {firstName : "Rian",
                lastName: "Miranda"
               }
}

function userId({id}) {
    return id;
}

function getFullName ({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`
}

console.log(userId(user1))

console.log(getFullName(user1))

console.log(userId(user2))

console.log(getFullName(user2))

//Arguments
function funcArgs() {
    return arguments
}

console.log(funcArgs(1, 2, 3, 4, 5, 6, 7, 8))

//For...in
// A cada passo, seleciona uma chave do objeto
function forInExemplo(obj) {
    for (key in obj) { //a variavel key poderia ter qualquer outro nome
        console.log(obj[key])
    }
}

forInExemplo(user1)

// For...of
// A cada passo, seleciona um elemento do array ou uma letra da string
//Similar ao for each do JAVA.
function forInExemple(arrayOrString) {
    for (elementOrLetter of arrayOrString) { 
        console.log(elementOrLetter)
    }
}

const string = "abacaxi"

forInExemplo(string)


// Metodo call
// servi para definirmos quem é o objeto ao qual o this se refere
// quando desejamos passá-lo por uma função declarada fora desse objeto

const pessoa = {
    name : "Miguel",
}

const animal1 = {
    name : "Bud"
}

const animal2 = {
    name : "Godi"
}

function getSomething() {
    console.log(this.name)
}

getSomething.call(pessoa)

// OBS: Também podemos passar mais argumentos dentro call
// caso a função aceite mais parametros
const myObj = {
    num1 : 2,
    num2 : 4,
}

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b)
}

soma.call(myObj, 1, 1)

// Metodo apply
// Muito parecido com o método call
// Única diferença: quando usamos parâmetros da função, 
// eles precisam estar dentro de um array

soma.apply(myObj, [2, 2])