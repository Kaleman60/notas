//funcion con nombre

function suma(a, b){
    return a + b
}

function saludo(nombre){
    return `Hola ${nombre}`
}

console.log(suma(1, 2))
console.log(saludo("Pepito"));

//IIFE-
(function(){
    console.log("no tengo nombre")
})(); 

(()=> console.log("yo tampoco tengo nombre"))()

function mostrarEnMayus(string){
    console.log(string.toUpperCase())
}

const frutas = ["mango", "platano", "manzana"];

/*rutas.forEach(mostrarEnMayus)
frutas.forEach((frutas)=>{
    console.log(frutas.toUpperCase())
})*/


function iterar(array, fn){
    for (let i = 0; i<array.length; i++){
        fn(array[i], i)
    }
}

iterar(frutas, mostrarEnMayus)

iterar(frutas, (fruta, indice) => {
    console.log(fruta, indice)
})