/** calcularFbncci
 * @param {number} limite
 * @returns {array}
 */
 function calcularFbncci(limite) {
     if (limite < 1) {
         throw new Error('Límite no válido')
     }
     let i = 0
     let j = 1
     let aFibo = [i, j]
     do {
        aFibo.push(i+j)
        i = j
        j = aFibo[aFibo.length-1]
     } while ( (i+j) <= limite )
     return aFibo     
 }


let limite = 0
try {
    console.log(calcularFbncci(limite))
} catch (error) {
    console.log(error.message)
}
