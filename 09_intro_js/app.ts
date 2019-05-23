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


// En TypeScript el tipado puede ser fuerte y estático
let b: number // Tipo number, sin valor
b = 3
/* b = 'Pepe' Error de tipos */


let precio = 45.60
let producto = 'Gafas'
// precio = producto error de tipos

function suma(a: number, b: number) : string { 
    let c = a + b
    return 'El resultado es ' + c
}

suma(12, 56)
// suma(12, 'Pepe') // Daría un error de tipos