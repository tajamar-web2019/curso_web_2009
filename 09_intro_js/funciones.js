'use strict'

// undefined
// boolean
// number (int, float)
// string
// object

// Declaración de la función
function sample() {
    // ES6
    /* let saludo  // declarar variable => tipo undefined
    saludo = 'Hola' // inicializar la variable */
    let saludo = 'Hola' // declarar + inicializar

    // MALA PRACTICA
    // curso = 'JavaScript' // inicializar la variable

    console.log(saludo)
}

// let saludo = 'Hello'

function saludar(nombre = 'amigo') {
    let saludo = 'Hola '
    console.log(saludo + nombre)
}
 
// Invocación, ejecución uso de una función
saludar('Pepe')
saludar('Elena')
saludar()

//console.log(saludo)

//////////////////////////////
//////////////////////////////

/*  Separación de responsabilidades o intereses
    (separation of concerns - Edsger W. Dijkstra ) 
 */

 /**
  * JSDOc
  */

/** Función sumar
 * @description recibe dos parámetros y devuelve la suma de ambos
 * @param {number}
 * @param {number}
 * @returns {number}
 * 
 */

 function sumar (a = 0, b = 0) {
     /* let c = a + b 
     return c */
     return a + b
 }

/** Función restar
 * @description recibe dos parámetros y devuelve la restar de ambos
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

 function restar (a = 0, b = 0) {
    return a - b
}

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function multiplicar (a = 0, b = 1)  {
    return a * b
}

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
 function dividir (a = 0, b = 1)  {
     return a / b
 }

 /** Función Mostrar
  * @description Recibe un texto y lo saca por pantalla
  * @param {string}
  * @returns {void}
  * 
  */
 function mostrar(cadena = '') {
     console.log(cadena)
 }

 function probar() {
    let x = 2
    let y = 3 
    mostrar(sumar(x, y))
    mostrar(sumar(x))
    mostrar(sumar(undefined, y))
    mostrar(sumar())
    mostrar()
    mostrar(restar(x, y))
    mostrar(multiplicar(x,y))
    mostrar(multiplicar(x,'Pepe'))
    x = 4
    y = 2
    mostrar(dividir(x,y))
    mostrar(dividir(x))
    mostrar(dividir(undefined,2))    
 }

probar()