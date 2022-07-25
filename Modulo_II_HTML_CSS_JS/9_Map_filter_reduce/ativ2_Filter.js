const array = [1, 2, 3, 4, 5, 20, 21, 22, 23, 24, 25]

const newArray = array.filter(
                        function isEven(item) {
                            console.log(item % 2 === 0)
                            return item % 2 === 0
                        }
)

console.log(newArray)