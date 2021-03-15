// 39)

let twist = (arrayA, arrayB) => {

    let countElementsA = 0
    let countElementsB = 0

    while (arrayA[countElementsA] !== undefined) {
        countElementsA++
    }
    while (arrayB[countElementsB] !== undefined) {
        countElementsB++
    }

    if (countElementsA != countElementsB) return `Error #001 - the arrays doesn't have the same length.`

    for (let count = 0; count < countElementsA; count++) {
        arrayA[count + countElementsA] = arrayB[count]
        arrayB[count + countElementsB] = arrayA[count]
    }

    for (let count = 0; count < countElementsA; count++) {
        arrayA.shift()
        arrayB.shift()
    }

    return `A: ${arrayA}
B: ${arrayB}.`

}

// Tests
console.log(twist( [1, 2, 3, 4, 5], 
                   ["A", "B", "C", "D", "E"] ))
console.log(twist( [1, 2, 3], 
                   ["A", "B", "C", "D", "E"] ))
console.log(twist( [1, 2, 3, 4, 5], 
                   ["D", "E"] ))
console.log(twist( [1, 2, 3], 
                   [8, 16, 24] ))
