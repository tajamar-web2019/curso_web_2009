const Factorial = require("./01_factorial.js")

/**
 * 1 - Funcion booleana que comprueba 
 *      que un valor puede ser tratado como número
 * 
 * 2 - Función que comprueba que es un número válido
 *      para poder calcular un factorial
 * 
 * 3 - Función que calcula el factorial de un número
 *      En caso de valores no válido, gemera un error    
 * 
 * 4 - Función que muestra (renderiza) los resultados por pantalla
 * 
 * Al menos para las 3 primeras, realizar tests unitarios
 *  
 */

const f_1 = new Factorial(1)

const n = 21
const f_21 = new Factorial(n)   
f_21.renderizar()

try {
    const e = 'Pepe'
    const f_Pepe = new Factorial(e) 
    f_Pepe.renderizar()     
} catch (error) {
    console.log(error.message) 
}
 
new Factorial(70).renderizar()  
new Factorial(170).renderizar()  

try {
    new Factorial(171).renderizar() 
} catch (error) {
    console.log(error.message) 
}





