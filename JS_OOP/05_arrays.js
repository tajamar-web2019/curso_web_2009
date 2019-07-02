let ob = {} // new Object()
let aDatos = [2, 8, 9, 76] // new Array()
aDatos[aDatos.length] = 87
aDatos[aDatos.length] = 56

aDatos[100] = 9
// console.log(aDatos[78])

/** function randomArray
 * @description: funcion que devuelve un array de n números aleatorio 
 *                      enteros y positivos menores o iguales a 100
 * @params { number } n
 * @return { array }
 */

 function randomArray(n = 0) {
     const r = []
        for (let i = 0; i < n; i++) {
            r[i] = parseInt(Math.random() * 100) 
        }     
     return r
 }

console.log(String(randomArray(65)))

/** función formatoDNI
 * @description: dar formato número al DNI
 * @param: {number | string} dni
 * @returns { number }
 */
function formatoDNI(dni) {
    if(typeof dni === 'number') {
        return dni
    }
    let cadenaDNI = ''
    for (let i = 0; i < dni.length; i++) {
        const caracter = dni[i];
            if(caracter != ' ' && !isNaN(caracter)) {
                cadenaDNI += caracter
            }
    }
    return Number(cadenaDNI)
}


/** función letraDNI
 * @description: calcular letra DNI
 * @param: {number | string} dni
 * @returns {string}
 */

 function letraDNI(dni) {
     const aLetras =  ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
     return aLetras[formatoDNI(dni)%23]
 }

