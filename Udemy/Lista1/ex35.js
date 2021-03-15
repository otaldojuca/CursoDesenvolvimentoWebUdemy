// 35)

function addToArray (arrayStack, arrayToAdd) {

    Array.prototype.push.apply(arrayStack, arrayToAdd)

    return arrayStack
}

// Tests
console.log(addToArray( [1, 2, 3, 4, 5], 
                        [6, 7, 8, 9, 10] ))

console.log(addToArray( ["Bom", " dia,", " senhor!"], 
                        [12] ))

console.log(addToArray( [], 
                        [99] ))

console.log(addToArray( [55], 
                        [] ))
