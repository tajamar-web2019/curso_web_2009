'use strict'

/** function comprobarCaso()
 * @description: comprobar si la cadena tiene:
 *  solo mayúsculas (0)
 *  solo minúsculas (1)
 *  mayusculas y minusculas (2)
 * @param {string} cadena
 * @returns {number}
 */

 function comprobarCaso(cadena = '') {
     let r = 2
     if (cadena === cadena.toUpperCase() ) { // eres solo mayúsculas 
        r = 0
     } else if (cadena === cadena.toLowerCase() ) { //eres solo minúsculas
        r = 1
     }
     return r
 }

 function mostrarComprobacionCaso (cadena = '') {
     const msg = [
        'solo mayúsculas', 
        'solo minúsculas',
        'mayusculas y minusculas'
     ]
     console.log(msg[comprobarCaso(cadena)])
 }

 module.exports = {}
 module.exports.comprobarCaso = comprobarCaso
 module.exports.mostrarComprobacionCaso =  mostrarComprobacionCaso
