
/**
 * @description recoore un objeto a tantos niveles como contenga
 *               y crea un string con la información
 * @param {object} obj
 * @returns {string}
 * 
 */

 function objectToString(obj = {}) {
     let cadena = ``
     for (let key in obj) {
         if (obj.hasOwnProperty(key)) {
             const value = obj[key]
            if( typeof value == 'object')
            // && !Array.isArray(value)
            {
                cadena += `
                ${key}: ${objectToString(value)}`
            } else {
                if (!isNaN(key)) {
                    key++
                }
                cadena += `
                - ${key}: ${value}` 
            }
         }
     }
     return `${cadena}
     `
 }

 let p2 = {
    nombre: 'Rosa',
    edad: 35,
    isAlumno: true
}
let cadena = objectToString(p2)
console.log(cadena)

let p1 = {
    nombre: 'Pepe',
    edad: 33,
    direccion: {
        calle: 'c/ Pez',
        numero: '24',
        ciudad: 'Cádiz',
        pais: 'España'
    }, 
    aficiones : ['pintar', 'musica', 'montañismo'],
    isAlumno: true
}

cadena = objectToString(p1)
console.log(cadena)
 