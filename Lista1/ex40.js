// 40)

let score = (arrayGrades) => {

    let arrayOutput = []

    for (let count = 0; count < arrayGrades.length; count++) {

        if (typeof arrayGrades[count] !== "number") return "Error #001 - one or more elements of the array isn't a number."
        else {

            if (arrayGrades[count] >= 0 && arrayGrades[count] < 5) arrayOutput[count] = "D"
            else if (arrayGrades[count] >= 5 && arrayGrades[count] < 7) arrayOutput[count] = "C"
            else if (arrayGrades[count] >= 7 && arrayGrades[count] < 9) arrayOutput[count] = "B"
            else if (arrayGrades[count] >= 9 && arrayGrades[count] <= 10) arrayOutput[count] = "A"
            else arrayOutput[count] = "ERRO!"
        
        }
        
    }
    return arrayOutput
}

// Testes
console.log(score([0, 5.2, 8.5, 9.75]))
console.log(score([4.97]))
console.log(score([-6.6, 12.12]))
console.log(score(["8.7", "5.1", 2]))
