// 33)

function concatenate (arrayInt, arrayString, arrayDouble) {

    if (arrayInt.length    != 4 || 
        arrayString.length != 4 || 
        arrayDouble.length != 4)
        return `Error #001 - one of the given arrays has more or less than 4 elements.`

    for (let count = 0; count < 4; count ++) {

        if (typeof arrayInt[count] !== "number") return `Error #002 - one or more elements of the array isn't a number.`
        else arrayInt[count] = arrayInt[count].toFixed(0)

        if (typeof arrayString[count] !== "string") return `Error #003 - one or more elements of the array isn't a string.`
        
        if (typeof arrayDouble[count] !== "number") return `Error #002 - one or more elements of the array isn't a number.`
    }

    let arrayConcat = arrayInt.concat(arrayString, arrayDouble)
    arrayConcat = arrayConcat.toString().replace(/,/g, ", ")

    let arrayConcat2 = []
    
    for (let count = 0; count < 4; count++) {

        arrayConcat2[count] = arrayInt[count].toString()
                              .concat(arrayString[count], 
                              arrayDouble[count].toString())
    }
    arrayConcat2 = arrayConcat2.toString().replace(/,/g, ", ")
    
    return `First concatenated array: ${arrayConcat}; 
second concatenated array: ${arrayConcat2};
    `
}


// Tests 
console.log(concatenate( [1, 2, 3, 4], 
                         ["A", "B", "C", "D"], 
                         [0.1, 0.2, 0.3, 0.4] ))

console.log(concatenate( [1, 2, 3], 
                         ["A", "B", "C", "D"], 
                         [0.1, 0.2, 0.3, 0.4] ))

console.log(concatenate( [1, 2, 3, 4], 
                         ["A", "B", "C", "D"], 
                         [0.1, 0.2, 0.3, 0.4, 0.5] ))

console.log(concatenate( ["Um", 2, 3, 4], // String instead of integer
                         ["A", "B", "C", "D"], 
                         [0.1, 0.2, 0.3, 0.4] ))

console.log(concatenate( [1, 2, 3, 4],
                         ["A", "B", "C", 4], // Integer instead of string
                         [0.1, 0.2, 0.3, 0.4] ))                         

console.log(concatenate( [1, 2, 3, 4], 
                         ["A", "B", "C", "D"], 
                         [0.1, 0.2, 0.3, "point Four"] )) // String instead of double
