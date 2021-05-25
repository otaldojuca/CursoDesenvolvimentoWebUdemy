// Set
// não aceita repetição e não é indexado

const times = new Set()
times.add("Vasco")
times.add("São Paulo").add("Palmeiras")
times.add("Vasco")

console.log(times)
console.log(times.size)
console.log(times.has("palmeiras"))
console.log(times.has("Palmeiras"))
times.delete("São Paulo")
console.log(times.has("São Paulo"))

const nomes = ["Raquel", "Theo", "Ailton", "Theo"]
const nomesSet = new Set(nomes)
console.log(nomesSet)
