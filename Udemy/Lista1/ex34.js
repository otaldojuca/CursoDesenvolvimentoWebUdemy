// 34)

function caracString (string1, string2) {

    string1 = string1.toLowerCase()
    string2 = string2.toLowerCase()

    let countString1 = 0
    let countString2 = 0

    while (string1.charAt(countString1) != "") {
        countString1++
    }

    while (string2.charAt(countString2) != "") {
        countString2++
    }

    for (let countAux1 = 0; countAux1 <= countString1; countAux1++) {
        for (let countAux2 = 0; countAux2 <= countString1; countAux2++) {
            if (string1.substring(countAux1, countAux2) == string2) return true
        }
    }

    for (let countAux1 = 0; countAux1 <= countString2; countAux1++) {
        for (let countAux2 = 0; countAux2 <= countString2; countAux2++) {
            if (string2.substring(countAux1, countAux2) == string1) return true
        }
    }

    return false
}

// Tests
console.log(caracString("macaco", "caco"))
console.log(caracString("caco", "macaco"))
console.log(caracString("baco", "macaco"))
console.log()
console.log(caracString("friendship", "end"))
console.log(caracString("carro", "rou"))
console.log(caracString("sus", "SUS"))
console.log(caracString("sus", "jesus"))
