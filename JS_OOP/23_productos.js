const {Item} = require('./23_modelos.js')

module.exports = {}

module.exports.libros = [
    new Item('Angular 8.0', 30),
    new Item('JS para torpes', 32),
    new Item('Typescrip Avanzado', 45),
    new Item('Introducción a las aplicaciones Web', 37),
]

module.exports.revistas = [
    new Item('L1', 40), 
    new Item('L2', 50), 
    new Item('L3', 56)    
]