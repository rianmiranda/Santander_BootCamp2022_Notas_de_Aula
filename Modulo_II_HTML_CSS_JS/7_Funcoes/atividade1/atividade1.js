let arrayStudents = [

    student1 = {
        name : "Eu",
        finalScore : 10
    },

    student2 = {
        name : "Mato Grosso",
        finalScore : 7
    },

    student3 = {
        name : "O Joca",
        finalScore : 6
    }


]

let arrayApprovedStudents = []

function fillsArrayApproved(arrayStudents, scoreApprovation) {

    arrayApprovedStudents = []

    for (let i = 0; i < arrayStudents.length; i++) {
        
        const {name, finalScore} = arrayStudents[i]
        
        if (finalScore >= scoreApprovation) {
            arrayApprovedStudents.push(name)
        }
    }
}

fillsArrayApproved(arrayStudents, 7)

console.log(arrayApprovedStudents)

//Joca fez um trabalho extra para melhorar sua média final
//Ganhou mais 2.0pts na média
function changesScore(points) {
    this.finalScore += points
}

changesScore.call(arrayStudents[2], 2)

console.log(arrayStudents[2])

console.log(arrayApprovedStudents)

fillsArrayApproved(arrayStudents, 7)

console.log(arrayApprovedStudents)