// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas
// de cada estudante estarão num array, conforme exemplo abaixo. Você deverá
// calcular a média da nota de cada aluno e retornar um objeto com os atributos
// nome e media, que indica o aluno que teve o melhor desempenho nas notas.

const students = {
    Amanda:   [8, 7.6, 8.9, 6],
    Bernard:  [2.75, 5, 7.8, 9.5],
    Caroline: [5, 3, 4.5, 10],
    Diana:    [10, 9, 8, 9],
    Elijah:   [4, 8.8, 3.75, 9]
}

const bestGrade = (object) => {

    let arrayAverage = []

    Object.values(object).forEach(value => {
        
        let sum = value.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        let average = sum / value.length

        arrayAverage.push(average)
    })

    let indexBiggestAverage = arrayAverage.indexOf(Math.max(...arrayAverage))
    let bestStudent = Object.keys(object)[indexBiggestAverage]
    let bestAverage = arrayAverage[indexBiggestAverage]
    
    return {
        name: bestStudent,
        average: bestAverage
    }
}

// Tests
console.log(bestGrade(students))
