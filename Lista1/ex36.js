// 36)

let multiply = (array, multiplier) => {

    for (let count = 0; count < array.length; count++) {

        if (typeof array[count] !== "number") return `Error #001 - one or more of the elements in the array isn't a number.`
        else array[count] *= multiplier
    }

    return array
}


let multiply5 = function (array, multiplier) {

    for (let count = 0; count < array.length; count++) {

        if (typeof array[count] !== "number") return `Error #002 - one or more of the elements in the array isn't a number.`
        else if (array[count] > 5) array[count] *= multiplier
    }

    return array
}

// Tests
console.log(multiply( [1, 2, 3, 4, 5, 6], 3) )
console.log(multiply5( [1, 2, 3, 4, 5, 6], 3) )
console.log(multiply( [0.5, 5, 10, 1.15], 3) )
console.log()
console.log(multiply( [1, "2", 3, 4], 0.5) )
console.log(multiply5( [1, 7, 3, 8, 5, "nine"], 3) )
