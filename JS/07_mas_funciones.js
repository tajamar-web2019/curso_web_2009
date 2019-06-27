'use strict'

/* Declaración de funciones */

/** sumaRaices
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function sumaRaices(a = 0, b = 0) {
    let r = Math.sqrt(a) + Math.sqrt(b)
    return r
}

/* Asignación de funciones */

let x = {}
let user = {user: 'Pepe', edad: 33}
let restaRaices = function (a=0, b=0) {
    return Math.sqrt(a) - Math.sqrt(b)
}

console.log(sumaRaices(6, 7))
console.log(restaRaices(6, 7))

/* ES6: Asignación de funciones ARROW o lambda */

/* let productoRaices = function (a=0, b=0) {
    return Math.sqrt(a) * Math.sqrt(b)
} */

/* let productoRaices = (a=0, b=0) => {
    return Math.sqrt(a) * Math.sqrt(b)
}
 */
let productoRaices = (a=0, b=0) => Math.sqrt(a) * Math.sqrt(b)

let mediaRaiz = a => Math.sqrt(a)/2