import {log} from "./utils.js"
import { frutas, numeros, mezclas, usuarios} from "./utils.js"

const frutasA = frutas.filter(fruta => { 
    return fruta.endsWith("a")
})
console.log(frutasA)




const frutasO = frutas.filter(fruta => fruta.endsWith("o"))
console.log(frutasO)

const negativos = numeros.filter(numeros => numeros < 0)
console.log(numeros)
console.log(negativos)

const mezcla = mezclas.filter(mezcla => typeof mezcla == "string")
console.log(mezcla)


