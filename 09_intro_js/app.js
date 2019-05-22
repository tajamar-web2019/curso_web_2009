console.log('Hola amigos')

// DATOS

// Tipos primitivos

undefined // Tipo undefined
20 // Tipo number
'Alejandro' // Tipo string
true // Tipo boolean

// Tipos complejos o referenciados

// {nombre: 'Pepe', edad: 27} Tipo objeto

// Los lenguajes pueden ser 
// Tipado fuerte o débil
// Tipado estático o dinámico


/* // En Java o C# el tipado es fuerte y estático
a: int // Tipo int, sin valor
a = 3
a = 'Pepe' // Error de tipos */


// JS es de tipado débil y dinámico

let a 
console.log(a)
console.log(typeof a) // undefined
a = 2
console.log(a)
console.log(typeof a) // number
a = 25
console.log(a)
console.log(typeof a)
a = 'Pepe' // "Pepe"
console.log(a)
console.log(typeof a)
a = false
console.log(a)
console.log(typeof a)
a =  {nombre: 'Pepe', edad: 27} 
console.log(a)
console.log(typeof a)
a = [1 , 2, 3]
console.log(a)
console.log(typeof a)
a = [
    {nombre: 'Pepe', edad: 27},
    {nombre: 'Juan', edad: 26},
    {nombre: 'Elena', edad: 25}  
]
console.log(a)
console.log(typeof a)

// Uso normal de datos y variables
let precio = 45.60
let producto = 'Gafas'

let precioPrevio = precio
precio = precio * 1.06
console.log(precioPrevio, precio)

let person = {
    nombreCompleto : {
        nombre: 'Pepe',
        apellido1: 'Pérez',
        apellido2: 'López'
    }
}
