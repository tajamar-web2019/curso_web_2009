/**
 * @description: devuelve un array eliminando los nombres 
 * que empiecen por una letra determinada del array que recibe
 * @param: {string}: letra 
 * @param: {array}: aNombres
 * @returns {array} 
 */
 function limpiarArray(letra = '', aNombres = []) {
    const datos = aNombres.slice()
    for (let i = 0; i < datos.length; i++) {
        const item = datos[i];
        if (item[0].toLowerCase() === letra.toLowerCase()) {
            datos.splice(i, 1)
            i--
        }   
    }
    return datos
 }

 let l = 'r'
 let aUsuarios = ['rosa', 'raquel', 'elena', 'renata', 'maria', 'roberto', 'ramon']
 
 console.log(limpiarArray(l, aUsuarios))
 console.log(aUsuarios)

// PARÁMETROS y ELEMENTALES

function algo(h) {
    h = h * h
    return h // 16
}

let z = 4
algo(z)
console.log(z)

// PARAMETROS y REFERNCIAS

function cuadraros(a) {
    for (let i = 0; i < a.length; i++) {
        a[i] =  a[i] * a[i]
    }
    return a // [1, 4, 9]
}

let x = [1, 2, 3]
cuadraros(x)
console.log(x)



