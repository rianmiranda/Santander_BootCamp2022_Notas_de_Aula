// Testes de Mesa
let lines, soma
let isNumberInRange = []

while(true) {
  lines = prompt().split(" ");
  lines = lines.map(item => parseInt(item))
  console.log(lines)
  console.log(lines.length)
  if (lines.length == 4) {
    console.log(lines.length == 4)
    for (item of lines) {
      isNumberInRange.push(typeof(item) == "number" && (item > 1 && item < 7)) //typeof retorna string
      console.log(typeof(item))
    } 
    console.log(isNumberInRange)
    if (isNumberInRange.every(value => value === true)) break
  }
  isNumberInRange = []
}

soma = 0

//TODO: Complete os espaços em branco com uma possível solução para o desafio

for(i=0; i < lines.length ; i++){
  let transfor = parseInt(lines.shift().split(' '))
  soma += transfor
}
print(soma - 3)

// let lines = gets().split("\n");

// let line = lines.shift().split(' ');
// let soma = 0

// //TODO: Complete os espaços em branco com uma possível solução para o desafio

// for(i=0;i<     ;i++){
//   let transfor = parseInt(line[   ])
//   soma = soma +
// }
// print(soma-3)