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
 * @param {number}: m
 * @param {number}: n
 * @returns {boolean} 
 */

function isMultiplo(m = 0, n = 0) {
    let r = true
    if(n%m) { //  n%m != 0)
        r = false
    }
    return r
 }

// Espectativas
console.log('isMultiplo(2,20) debe dar true')
// Prueba
console.log(isMultiplo(2,20))
// Espectativas
console.log('isMultiplo(2,21) debe dar false')
// Prueba
console.log(isMultiplo(2,21))
// Espectativas
console.log('isMultiplo(2,-20) debe dar true')
// Prueba
console.log(isMultiplo(2,-20))
// Espectativas
console.log('isMultiplo(2,-21) debe dar false')
// Prueba
console.log(isMultiplo(2,-21))
// Espectativas
console.log('isMultiplo(3,20) debe dar false')
// Prueba
console.log(isMultiplo(3,20))
// Espectativas
console.log('isMultiplo(3,21) debe dar true')
// Prueba
console.log(isMultiplo(3,21))


/** function extraerMultiplos
 * @description extraer de un array los multiplos de n
 * @param {number}: n
 * @param {array}: aDatos 
 * @returns {array}
 */

function extraerMultiplos(n, aDatos) {
    let r = []
    return r
}

{
/* 
    let aDatos = [1,2,3,4,5,6,7,8,9]

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
    }

    n%3 == 0  
*/    
}

