// A função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar
let lines;
let N;

while (true) {
  // print("Selecione um valor N menor que 10000: ")
  lines = gets().split('\n');
  N = parseInt(lines.shift());
  
  if (N < 10000) break
}

for ( let i = 1; i < 10000; i++) {

//TODO: Complete os espaços em branco com uma possível solução para o desafio

	if (i % N == 2) print( i );
}