const array = [1, 2, 3, 4, 5]

// Passando apenas a callback function
const newArrayNoThisArg = array.map((element) => element * 3)

console.log("Map sem thisArg: ", newArrayNoThisArg )

// Passando a callback function + o argumento thisArg
const duplicates = {
    value : 2
}

const triplicates = {
    value : 3
}

const quadruplicates = {
    value : 4
}

const quintuplicates = {
    value : 5
}

function MapComThis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg);
}

console.log("Map com thisArg:", MapComThis(array, duplicates))

console.log("Array Original: ", array)

