// 09)
// José Carlos Rodrigues Antonio
// 0040961923011

function sum (string) { 

    let sum = 0
    let count = 0

    while (string.charAt(count) != "") {
        
        if (!(Number.isNaN(Number(string.charAt(count))))) sum += Number(string.charAt(count))
        count++
    }

    return `Sum of all the digits of the string "${string}": ${sum}`
}

// Tests
console.log(sum("027"))
console.log(sum("54310"))
console.log(sum("cinco43210"))
