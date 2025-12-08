// variables y constantes
let x = 10; // la variable puede cambiar su valor
const y = 2; // la constante no puede cambiar su valor

// Tipos primitivos
let saludo = "hola"; // String
let entero = 30; // Number
let esAdulto = true; // Boolean
let altura = 1.75; // Float

// Estructuras de datos
let array = [12, 1.32, "hola", true]; // arreglo o array

const user = {
    nombre: "Juan",
    edad: 34,
    peliculasFavoritas: ["The matrix", "Toy Story"],
    direccion: {
        calle: "Calle Falsa 123",
        numero: 123
    }
};

console.log(user.peliculasFavoritas[0]);
console.log(user.direccion.calle);

// ---------------------------------------
// Funciones
// ---------------------------------------

// Función tradicional
function sumar(a, b) {
    return a + b;
}

// Función flecha
const multiplicar = (a, b) => a * b;

console.log("2 + 3 =", sumar(2, 3));
console.log("2 * 3 =", multiplicar(2, 3));

// Función que muestra saludo (ejemplo)
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}
console.log(saludar("María"));

// ---------------------------------------
// Eventos DOM (interacción con HTML)
// ---------------------------------------

// Espera a que el DOM esté cargado antes de buscar elementos
document.addEventListener('DOMContentLoaded', () => {
    const btnEnviar = document.getElementById('btnEnviar');
    const inputNombre = document.getElementById('nombre');
    const inputEmail = document.getElementById('email');

    if (btnEnviar) {
        // Evento click en el botón
        btnEnviar.addEventListener('click', () => {
            const nombre = inputNombre ? inputNombre.value : '';
            const email = inputEmail ? inputEmail.value : '';
            // Muestra los valores en la consola y en una alerta como ejemplo
            console.log('Botón Enviar pulsado. Nombre:', nombre, 'Email:', email);
            alert(`Enviar:\nNombre: ${nombre}\nEmail: ${email}`);
        });
    }

    if (inputNombre) {
        // Evento de entrada en el campo nombre
        inputNombre.addEventListener('input', () => {
            console.log('Nombre cambió a:', inputNombre.value);
        });
    }

    if (inputEmail) {
        // Evento blur (cuando el campo pierde foco)
        inputEmail.addEventListener('blur', () => {
            console.log('Email ingresado:', inputEmail.value);
        });
    }
});

