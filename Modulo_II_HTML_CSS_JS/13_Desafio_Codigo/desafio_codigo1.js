// a função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar
let N;
let lines;

while (true) {
    // print("Selecione um valor N entre 5 e 2000 (Não incluindo 5 nem 2000): ")
    lines = gets().split('\n');
    N = parseInt(lines.shift());

    if (N > 5 && N < 2000) break
} 

for (let i = 1; i < N + 1; i++) {

//TODO: Complete os espaços em branco com uma possível solução para o desafio

	if (i % 2 ===  0) 
          print(`${i}^2 = ${i**2}`);
}