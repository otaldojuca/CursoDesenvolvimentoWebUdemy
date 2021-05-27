// For of

for (let letra of "Cod3r") {
    console.log(letra)
}


const assuntosAVer = ["Map", "Set", "Promise"]

for (let i in assuntosAVer) {
    console.log(i)
}

for (let assunto of assuntosAVer) {
    console.log(assunto)
}


const assuntosMap = new Map ([
    ["Map", { abordado: true }],
    ["Set", { abordado: true }],
    ["Promise", { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let keys of assuntosMap.keys()) {
    console.log(keys)
}

for (let values of assuntosMap.values()) {
    console.log(values)
}

for (let [k, v] of assuntosMap.entries()) {
    console.log(k, v)
}


const s = new Set(["A", "B", "C"])
for (let letra of s) {
    console.log(letra)
}
