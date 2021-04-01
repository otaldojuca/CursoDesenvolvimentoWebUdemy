function permutation (array) {
    
    let arrayOutput = array.map(function (e, i) {
        return e = array[array[i] - 1]
    })
    
    return arrayOutput
}


function permutationEquation (p) {
    
    let pNew = p
    
    for (let count = 0; count < p.length + 1; count++) {
        pNew = permutation(pNew)
        console.log(pNew)
    }
    
    return pNew
}