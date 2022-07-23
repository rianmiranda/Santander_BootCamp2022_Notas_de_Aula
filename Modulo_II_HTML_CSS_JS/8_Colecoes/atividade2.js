const array = [30, 30, 40, 5, 223, 2049, 3034, 5]

const setValues = new Set(array)

function setToArray(set) {

    return [...set]
}

console.log(setToArray(setValues))

console.log(Array.from(setValues))