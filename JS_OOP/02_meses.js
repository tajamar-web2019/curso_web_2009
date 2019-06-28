
function prepararMeses () {

    const m = require('./02_data.js')
    console.log(m.)

    let oMeses = {}

    if (m.aMeses.length !== m.aMesesRusos.length) {
        throw new Error('Error de entrada de datos')
    }

    for (let i = 0; i < m.aMeses.length; i++) {
        const item = m.aMeses[i];
        oMeses[item] = m. aMesesRusos[i]
    }

    return oMeses
} 


console.log(prepararMeses())