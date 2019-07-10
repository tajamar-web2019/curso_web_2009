const { Empresa, Direccion } = require('./23_modelos.js')

module.exports = {}

module.exports.tuata = new Empresa(
    'Ediciones Tuatalug',
    new Direccion('c/ Pez', '1', 'Madrid', 'España'),
    '625875921',
    'T-34761234',)

module.exports.boracai = new Empresa(
        'Librería Boracai',
        new Direccion ('c/ Carranza', '5', 'Cádiz', 'España'),
        '625493421',
        'F-76521743')

module.exports.pepita = new Empresa(
            'Librería Pepita',
            new Direccion ('c/ Burgo', '5', 'Estrasburgo', 'Francia'),
            '625492190',
            'F-76534127')

