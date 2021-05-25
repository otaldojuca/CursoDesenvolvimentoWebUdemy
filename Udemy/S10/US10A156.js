// Map

const tecnologias = new Map()
tecnologias.set("React", { framework: false })
tecnologias.set("Angular", { framework: true })

console.log(tecnologias.react) // não funciona
console.log(tecnologias.get("React"))
console.log(tecnologias.get("React").framework)


const chavesVariadas = new Map([
    [function () {}, "função"],
    [{}, "objeto"],
    [123, "número"]
])

chavesVariadas.forEach((key, value) => {
    console.log(key, value)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, "a")
chavesVariadas.set(123, "b")
chavesVariadas.set(456, "b")

console.log(chavesVariadas)
