'use strict'

// Valores primitivos 
// (number, string, boolean, undefined)

let a = 2
let b = a  // aisgnación de Valor 
console.log('Al crear b', a, b)
b = b * b
a = a / 2
console.log('Valor de b', b) // 4
console.log('Valor de a', a) // 1

b = a
console.log('Valor de b', b) 


// Valores referenciados

let p1 = {nombre : 'Pepe', edad: 34}
let p2 = p1 // asignación de referencia
p1.nombre = 'Juan'
console.log(p1) //
console.log(p2)


let a1 = {nombre : 'Raquel', edad: 34, saldo : 1000}
let a2 = {nombre : 'Maria', edad: 34, saldo: 1200}
let a3 = {nombre : 'Juan', edad: 34 , saldo: 1300}


function inscribirMal() {
    a1.curso = 'JS'
}

function inscribirEnJS(alumno) {
    if (alumno) {
        alumno.curso = 'JS'
    }
}


function inscribir(alumno, curso = 'JS') {
    if (alumno) {
        alumno.curso = curso
    }
}


/* inscribirEnJS(a1) // paso por referencia
inscribirEnJS(a2)
inscribirEnJS(a3) */

inscribir(a1, 'HTML') // paso por referencia
inscribir(a2)
inscribir(a3)

console.log(a1)
console.log(a2)
console.log(a3)

function invertir(x = 0) {
    let z = Math.random()
    let rendimiento =  (x * z) / 10
    return (x + rendimiento).toFixed(2)
}

a1.saldoNew = invertir(a1.saldo) // Paso por valor
a2.saldoNew = invertir(a2.saldo) // Paso por valor
a3.saldoNew  = invertir(a3.saldo) // Paso por valor
console.log(a1)
console.log(a2)
console.log(a3)



