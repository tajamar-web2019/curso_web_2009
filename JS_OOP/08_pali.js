
/** function isPali
 * @description: comprobar si in string es palindroma
 * @param {string} cadena
 * @returns {boolean}
 */

const isPali = (cadena = '') => {
    let r = false
    const cadenaSinEspacios = cadena.split(' ').join('').toLowerCase()
    //const cadenaSinEspacios = cadena.replace(/ /g,'').toLowerCase()
    const cadenaInversa = cadenaSinEspacios.split('').reverse().join('')
    if (cadenaSinEspacios === cadenaInversa) {
        r = true
    }
    return r
}

const isPaliShort = (cadena = '') => {
    sinEspacios = cadena.split(' ').join('').toLowerCase()
    return sinEspacios === sinEspacios.split('').reverse().join('') 
}

module.exports = {}
module.exports.isPali = isPali
module.exports.isPaliShort = isPaliShort

