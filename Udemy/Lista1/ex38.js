// 38)

let findOdd = (low = 0, high = 100) => {

    low = low.toFixed(0)
    high = high.toFixed(0)
    let arrayExit = []

    if (low > high) {
        let aux = low
        low = high
        high = aux
    }

    for (let count = low; count <= high; count++) {
        if (count % 2 != 0) arrayExit.push(count)
    }
 
    return arrayExit
}

// Tests
console.log(findOdd())
console.log(findOdd(25, 25))
console.log(findOdd(152))
console.log(findOdd(-5.7, 75))
console.log(findOdd(37, 1))
console.log(findOdd(75, 62))
