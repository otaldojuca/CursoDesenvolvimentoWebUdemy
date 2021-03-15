// 27)

function compararAltura (altura1, taxa1, altura2, taxa2) {

    if (altura1 == altura2) return `Erro #001 - As duas crianças possuem a mesma altura.`

    altura1 = Math.abs(altura1)
    altura1 = altura1.toFixed(0)

    altura2 = Math.abs(altura2)
    altura2 = altura2.toFixed(0)

    let anosPassados = 0

    if (altura1 > altura2 && taxa2 > taxa1) {

        while (altura1 > altura2) {

            altura1 = altura1 * (1 + taxa1 / 100)
            altura2 = altura2 * (1 + taxa2 / 100)
            anosPassados++
        }
        return `A criança menor ultrapassará a maior em ${anosPassados} anos.`

    } else if (altura2 > altura1 && taxa1 > taxa2) {

        while (altura2 > altura1) {

            altura1 = altura1 * (1 + taxa1 / 100)
            altura2 = altura2 * (1 + taxa2 / 100)
            anosPassados++
        }
        return `A criança menor ultrapassará a maior em ${anosPassados} anos.`

    } else return `A criança menor permanecerá sendo a menor entre as duas ao longo de sua vida.`

}

// Testes
console.log(compararAltura(100, 5, 110, 1))
console.log(compararAltura(100, 5, 110, 4))
console.log(compararAltura(100, 5, 110, 5))
console.log(compararAltura(120, 2, 120, 2))
console.log(compararAltura(120, 2, 105, 1))
