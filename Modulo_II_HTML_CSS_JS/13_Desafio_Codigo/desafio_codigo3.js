let lines, soma
let isNumberInRange = []

while(true) {
  lines = gets().split(" ");
  lines = lines.map(item => parseInt(item))

  if (lines.length == 4) {

    for (item of lines) {
      isNumberInRange.push(typeof(item) == "number" && (item > 1 && item < 7))
    } 

    if (isNumberInRange.every(item => item === true)) break
  }
  isNumberInRange = []
}

soma = 0

for(i=0; i < lines.length ; i++){
  let transfor = lines[i]
  soma += transfor
}
print(soma - 3)