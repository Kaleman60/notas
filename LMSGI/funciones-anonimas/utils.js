export function log(fn){
    console.log("----------------")
    console.log("has ejecutado: ") 
    console.log(fn.toString())
    console.log("Resultado:")
    console.log(fn())
}

export const frutas = ["mango", "platano", "manzana", "pera"]
export const numeros = [1, 20, 32, -10, ,20, 1.23]
export const mezclas = [undefined, null, 10, 1.23, "Hola mundo"]
export const usuarios = [
    {nombre: "Diego", edad: 35, genero: "M", saldo: 100},
    {nombre: "Cecilia", edad: 25, genero: "F", saldo: 200},
    {nombre: "Manolo", edad: 28, genero: "M", saldo: 150},
    {nombre: "Maria", edad: 45, genero: "F", saldo: 800}
]

