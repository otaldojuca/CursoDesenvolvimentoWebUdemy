// 31)

function findNegatives (array) {

    let countNegatives = 0

    array.forEach(element => {
        
        if (element < 0) countNegatives++

    })

    return `There are ${countNegatives} negative numbers in the array.`
}

// Tests
console.log(findNegatives([0, -1, 2, -3, -4, 5, 6, -7, 8, -9]))
console.log(findNegatives([3, -14, 15, 92, -6]))
console.log(findNegatives([1]))
console.log(findNegatives([2, -2, 2, 2, -2]))
