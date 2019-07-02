'use strict'
let intl = require('intl')
require('intl/locale-data/jsonp/es.js');

let version = 'ES6'

let cadena = "Esto no es buena práctica"
let otraCadena = 'Es mejor usar comillas simples'
let nuevaCadena = `Nuevo en ${version}` // Template String

console.log(cadena, otraCadena, nuevaCadena)
console.log(cadena.toUpperCase())


console.log(cadena.length)
console.log(cadena[0])

for (let i = 0; i < cadena.length; i++) {
    const item = cadena[i];
    console.log(item)   
}

let x = cadena.split(' ').join('').toUpperCase()
console.log(x)

/* cadena.slice(inicio, final)
cadena.substring(nicio, final)
cadena.substr(inicio, desplazamiento)

cadena.match()
cadena.search()
cadena.replace()

cadena.indexOf(clave)
cadena.lastIndexOf(clave)

cadena.charAt(posicion) // cadena[position]
cadena.charCodeAt(posion)

String.fromCharCode(num) */

let numero = 23.7865432
console.log(numero)
console.log(numero.toString())
console.log(numero.toFixed(2))
console.log(numero.toPrecision(4))
numero = 0.00000000000000237865432
console.log(numero.toExponential())
console.log(numero)
numero = 23.7864
console.log(numero.toLocaleString('es',  { style: 'currency', currency: 'EUR' }))


