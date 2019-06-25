'use strict'

// Ejemplo de iteración y condición

let limite = 10
let acumulador = 0
let maximo = 100
let contador = 0
for (let i = 0; i < limite; i++) {
    contador = i
    console.log(i)
    if ( acumulador + (i*i) > maximo) {
        break
    }
    acumulador += (i*i)
    // acumulador = acumulador + (i*i)
}
console.log(acumulador, contador)
{
/** JSDoc
 * Saber si un numero es múltiplo de tres,
 * seleccionar en un array los que lo sean, guardandolos en otro array y
 * mostrarlo por pantalla
 *  
 */    
}

/** function isMultiplo 
 * @description devuelve true si un numero m es múltiplo de n
 * @param {number} m
 * @param {number} n
 * @returns {boolean} 
 */
function isMultiplo(m = 0, n = 0) {
    if(isNaN(m) || isNaN(n)) {
        throw new Error('Parametros no numericos')
    }
    let r = true
    if(m%n) { //  m%n != 0)
        r = false
    }
    return r
 }

/** function extraerMultiplos
 * @description extraer de un array los multiplos de n
 * @param {number} n
 * @param {array} aDatos 
 * @returns {array}
 */
function extraerMultiplos(n = 0, aDatos = []) {
    let r = []
    for (let i = 0; i < aDatos.length; i++) {
        const item = aDatos[i];
        if (isMultiplo(item, n)) {
            // r[r.length] = item
            r.push(item)
        }
    }    
    return r
}

/** funcion mostrarMultiplos
 * @description Muestra un array con los multiplos de n
 * @param {number} n 
 * @param {Array} aDatos 
 * @returns {void}
 */
function mostrarMultiplos(n, aDatos) {
    console.clear()
    console.log(`Los multiplos de ${n}`)
    console.log(`en el array ${aDatos} son:`)
    console.log(extraerMultiplos(n, aDatos))
}


module.exports = {};
module.exports.isMultiplo = isMultiplo
module.exports.extraerMultiplos = extraerMultiplos

{
    let misDatos = [1,2,3,4,5,6,7,8,9]
    mostrarMultiplos(2, misDatos)
}


