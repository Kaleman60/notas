// //variables y constantes

// let x = 10;// la variable puede cambiar su valor
// const y = 2; //la contante no puede cambiar su valor



// //Dato primitivos

// //String
// let string = "hola";


// //Number
// let entero = 30;


// //Boolean
// let esAdulto = true;


// //Float
// let altura = 1.75;

// //console.log(typeof(entero), typeof(altura))

// // Estructuras de datos

// let array = [12, 1.32, "hola", true ]; //arreglo o array
// //console.log(array[4])

// const user = {
//     nombre: "Juan",
//     edad: 34,
//     peliculasFavoritas: ["The matrix", "toy story"],
//     direccion: {
//         calle: "Calle Falsa 123",
//         numero: 123

//     }
// }

// console.log(user.peliculasFavoritas[0])
// console.log(user.direccion.calle)


// //operadores
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y); //modulo

// control de flujo

// if (true) {
//     console.log("es verdadero");
// }
// else {
//     console.log("es falso");
// }




// for (let i = 0; i < 5; i++) {
//     console.log("El valor de i es: " + i);
// }

// let start = 0;
// let end = array.length;

// while (true) {
//     console.log(array[start]);
//     start++;
//     if (start == end) {
//         break;
//     }
// }

// array.forEach((element) => {
//     console.log(element);
// });

function suma(a, b) {
    const resultado = a + b;
    return resultado;
}

console.log(suma(1, 1));

function saludar(nombre) {
    return "hola " + nombre;

}
console.log(saludar("Juan"));
