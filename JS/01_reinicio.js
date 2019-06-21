'use strict'

/* Datos 

- Indefinidos: 
    - undefine
- Primitivos
    - number
    - string
    - boolean
- Referenciados: 
    - objects
            - Array
            - Date
            - Error
            - RegExp
            - Math
            - JSON
            - Function
*/

/* Variables

    - Tipo: débiles (implícitos al valor) y dinámicos
    - Ciclo de vida
        - declaración : inicialización : asignación
*/

let x = 34 // declaración + inicialización

//....
//....
x = 45 // asignación
x = x * 2 // asignación por expresiones

/* Ámbito
    - global
    - local 
        - al bloque => let / const
        - a la función => var
 */

let a = 31 // global
console.log('Variable global', a)
let b = 67

function prueba() {
    let a = 12 // local a la función
    console.log('Variable local a la función', a)

    console.log('z vale ', z)
    var z = 7
    if (true) {
        let a = 78 // local al bloque
        var z = 23
        console.log('Variable local al bloque', a) //
        console.log(b)
    }
    
}

prueba()

/* Constantes
    - Ciclo de vida: declaración + inicialización 
*/
const IVA = 1.26
// IVA = 1.34 // -> DA ERROR

/* Constantes referenciadas -> es constante la referencia */

const user = {nombre: 'Pepe', edad: 34}
user.nombre = 'Juan'
user.edad = 32
console.log(user)
// user = {nombre: 'Juan', edad: 32} -> Error
// user = 34 -> Error
console.log(user)

// hoisting de funciones declaradas y variables var (solo la declaración)

izar()

function izar() {
    console.log('Izado')
    console.log('z vale ', z)
    var z = 7
}

/* Lo que pasa realmente 
function izar() {
    var z
    console.log('Izado')
    console.log('z vale ', z)
    z = 7
}
*/

/** Casting 
 * Cambio de tipo temporal durante una operación
*/

// Casting a string
let n = 23
let msg = 'Juan tiene ' + n  + ' años'// 'Juan tiene 23 años'
console.log(typeof n)

// Casting a number
let indice = '34'
let incremento = indice * 0.10

// EN JS TODOS LOS DATAS HACEN CASTING A NUMBER -> NaN

let tipo = 'indefinido'
let sueldo = 23 * tipo
let datoRaro = -23 / 0

console.log('sueldo: ', sueldo)
console.log('datoRaro: ', datoRaro)


// Casting a boolean
// EN JS TODOS LOS DATAS HACEN CASTING A BOOLEAN

let w

// Falsy
w = false
w = undefined
w = null
w = 0
w = NaN
w = ''

// Truly
w = true
w = 23
w = -34
w = ' '
w = 'Pepe'
w = {}
w = []

if (w) {}


// Operadores
// Aritméticos: + - * / %

parseInt(7/3) // 2
7%3 // 1

// Operadores de asignación

let x = 45
x = 86

// Operadores de comparación

// Igualdad
(x == 67) // false
(x == 86) // true
(x == '86') // true

// Identidad
(x === '86') // false

// Otros > < >= <=

// Negación !

x = 86

// No igualdad
(x != '86') // false

// No identidad
(x !== '86') // true