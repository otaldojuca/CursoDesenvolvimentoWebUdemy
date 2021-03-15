// 30)

function findBiggestSmallest (array) {

    let big = array[0]
    let small = array[0]

    array.forEach(element => {
        
        if (element > big) big = element
        if (element < small) small = element

    })

    return `Biggest: ${big}; smallest: ${small}`
}

// Tests
console.log(findBiggestSmallest([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(findBiggestSmallest([3, 14, 15, 92, 6]))
console.log(findBiggestSmallest([1]))
console.log(findBiggestSmallest([2, 2, 2, 2, 2]))
