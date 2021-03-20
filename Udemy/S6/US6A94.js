// Notação literal

const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } // antes
const obj2 = { a, b, c } // depois
console.log(obj1, obj2)


const nomeAtributo = "nota"
const valorAtributo = 7.55

// antes
const obj3 = {}
obj3[nomeAtributo] = valorAtributo
console.log(obj3)

// depois
const obj4 = { [nomeAtributo]: valorAtributo }
console.log(obj4)


// antes
const obj5 = {
    funcao1: function() {
        // ...
    }
}

// depois
const obj6 = {
    funcao2() {
        // ...
    }
}

console.log(obj5, obj6)
