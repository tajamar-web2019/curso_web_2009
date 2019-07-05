const { aDias, aMeses} = require('./12_datos.js')

const capitalize = (cadena = '') => 
        cadena[0].toUpperCase() + cadena.slice(1)

/** function fechaEsp()
 * @description: devuelve la fecha como
 * “Día de la semana, día de Mes del Año” 
 * @author Alejandro Cerezo
 * @param { date | string } fecha 
 * si es string, debe respetar el estandar ISO
 * @external aDias, aMeses
 * @returns { string }
 */
const fechaEsp = (fecha = new Date() ) => {
    if (typeof fecha === 'string') {
        fecha = new Date(fecha)
    }
    const nombreDia = capitalize(aDias[fecha.getDay()])
    const dia = fecha.getDate()
    const mes = capitalize(aMeses[fecha.getMonth()])
    const año = fecha.getFullYear()
    return `${nombreDia}, ${dia} de ${mes} del ${año}`
}

function fijarLongitudCadena (cadena = '', lon = 0) {
    if (cadena.length < lon) {
        // añadir espacio
        const espacios = lon - cadena.length
        for (let i = 0; i < espacios; i++) {
            cadena += ' ';
        }
    } else if (cadena.length > lon) {
        // truncar
        cadena = cadena.slice(0, lon-3) + '...'
    }
    return cadena
}


module.exports = {}
module.exports.fechaEsp = fechaEsp
module.exports.fijarLongitudCadena = fijarLongitudCadena