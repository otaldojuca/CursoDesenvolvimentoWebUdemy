// 08)
// José Carlos Rodrigues Antonio
// 0040961923011

let isInside = (arrayInside, arrayContainer) => {

    let biggest = arrayContainer[0]
    let smallest = arrayContainer[0]
    let status = true

    arrayContainer.forEach(element => {

        if (element > biggest) biggest = element
        if (element < smallest) smallest = element
    })

    arrayInside.forEach(element => (element >= biggest || element <= smallest) ? status = false : status = true)

    return status
}

// Tests
console.log(isInside([1, 2, 3, 4], [0, 6]))
console.log(isInside([3, 1], [4, 0]))
console.log(isInside([9, 9, 8], [8, 9]))
console.log(isInside([1, 2, 3, 4], [2, 3]))
