/**
 * JSDoc
 * @description Programa que calcula y muestra 
 *              si un número es par o impar
 */

/**
 * @description Función que comprueba si una expresión 
 *      es convertible a un número valido
 *      rechazando objects, arrays, booleans, null 
 *      undefined, '' y string no numéricos
 * @param {any} n 
 * @returns {boolean}
 */ 
function isValidNumber(n) {
    let r = true
    if ( isNaN(n) || typeof n == 'boolean' 
    || Array.isArray(n) || n === ''  || n === null) {
        r = false
    }
    return r
}

/**
 * 
 * @param {number} n 
 * @returns {boolean}
 */
function isEntero( n = 0) {
     return (parseInt(n) === parseFloat(n))
}

 /**
  * @description Función que calcula si un número es par
  *     Puede devolver: -2, -1, true, false
  * @param {number}: n
  * @returns {boolean}
  * 
  */
  function esPar(n) {
    let r = true 
    if (!isValidNumber(n)) {
        // Excepción: n no es un número
        //throw 1 // antes -2
        throw new Error(`${n} no es un número`)
    } else if (!isEntero(n)) {
        // Excepción: n no es entero
        // throw 0 // antes -1
        throw new Error(`El número ${n} no es entero`)
    } else if (n%2)  {
        r = false
    }
    return r
  }


  /**
   * @description Función que muestra si un número es par o impar
   * @param {number}: n
   * @returns {void}
   */
   function mostrar(n) {
       let output = ''
       let mensajes = [
           `El número ${n} es impar`,
           `El número ${n} es par`,
       ]
       let excepciones = [
            `El número ${n} no es entero`,
           `${n} no es un número`
       ]
       try {
           let i = Number(esPar(n))   //i: 0, 1
           output = mensajes[i]
       } catch (error) { // error: -2 -1
            // i = -error + 1 // -1 -> 2 // -2 -> 3
            // output = excepciones[error]
            output = error
       }
       console.log(output)
   }

  /*   
    Gestión de errores
    const x = 67
    let z = 45
    try {
        x = 51 // => un throw
        // throw 'Probando un error'
        z = z + x
        console.log('z vale', z)
    } catch (e) {
        console.log('Disculpa, se ha producido un error')
        if(e.name) {
            console.log(e.name, e.message)
        } else {
            console.log(e)
        }
    }
    console.log('x vale',x)
 */
   

/*     esPar('pepe')
    mostrar('pepe') */
    

module.exports = esPar;