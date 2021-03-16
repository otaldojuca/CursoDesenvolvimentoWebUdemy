// 10)
// José Carlos Rodrigues Antonio
// 0040961923011

let stringRotated = (string, times) => {

    let arrayString = []

    arrayString = string.split("")

    for (let countAux = 0; countAux < times; countAux++) {
        arrayString.unshift(arrayString.pop())
    }

    return arrayString.join("")
}

// Tests
console.log(stringRotated("calça", 2))
console.log(stringRotated("rondônia", 4)) 
console.log(stringRotated("r", 14))
console.log(stringRotated("eu", 1)) 
