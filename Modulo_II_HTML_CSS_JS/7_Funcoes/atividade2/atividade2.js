function calculatesAge(years) {
	return `Daqui a ${years} anos, ${this.name} terá ${
		this.age + years
	} anos de idade.`;
}

let pessoa1 = {
    name : "Rian",
    age : 29
}

// Utilizando o método call
// console.log(calculatesAge.call(pessoa1, 4))

// Utilizando o método apply
console.log(calculatesAge.apply(pessoa1, [4]))