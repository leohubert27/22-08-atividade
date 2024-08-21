const prompt = require('prompt-sync')()

let valorTabuada = prompt("Informe qual tabuada deseja ver: ")
let valorMultiplicador = prompt("Informe até onde deseja ver a tabuada: ")

for (let i = 1; i <= valorMultiplicador; i++) {
    tabuada = valorTabuada * i
    console.log(valorTabuada, ' X ', i, '= ', tabuada)
}