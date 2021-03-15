// 37)

let AP = (nTerms, firstTerm, ratio) => {

    let arrayTerms = []
    let sum = 0

    for(let count = 0; count < nTerms; count++) {

        arrayTerms[count] = firstTerm + ratio * count
        sum += arrayTerms[count]
    }

    return [arrayTerms, sum]
}


let GP = (nTerms, firstTerm, ratio) => {

    let arrayTerms = []
    let sum = 0

    for(let count = 0; count < nTerms; count++) {

        arrayTerms[count] = firstTerm * (ratio ** count)
        sum += arrayTerms[count]
    }

    return [arrayTerms, sum]
}

// Tests
console.log(AP(5, 1, 2))
console.log(AP(4, 3, -4))
console.log(AP(3, -5, 0.5))
console.log()
console.log(GP(5, 1, 2))
console.log(GP(4, 10, -5))
console.log(GP(3, 25, 0.7))
