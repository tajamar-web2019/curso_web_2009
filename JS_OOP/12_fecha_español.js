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

const fechaEspShort = (fecha = new Date() ) => {
    fecha = (typeof fecha === 'string') ? new Date(fecha) : fecha
    return aDias[fecha.getDay()] + ', ' 
        + fecha.getDate() + ' de ' 
        + aMeses[fecha.getMonth()] + ' del ' 
        + fecha.getFullYear() }

let f = new Date(1965,7,31)
f = '1965-8-31'
console.log(fechaEsp(f))
console.log(fechaEspShort(f))

