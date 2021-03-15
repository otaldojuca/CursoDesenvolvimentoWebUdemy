// 32)

function average (array) {

    let sum = 0
    let countElements = 0

    array.forEach(element => {
        sum += element
        countElements++
    })

    let average = sum / countElements

    return `The average of these numbers is ${average}.`
}

// Tests
console.log(average([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(average([3, 14, 15, 92, 6]))
console.log(average([1]))
console.log(average([2, 2, 2, 2, 2]))
