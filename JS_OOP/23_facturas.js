const {Compra, Factura} = require('./23_modelos.js')
const {tuata, boracai, pepita} = require('./23_empresas.js')
const {libros, revistas} = require('./23_productos.js')

const items1 =  [[0, 12], [1, 12], [2, 8], [3, 11]] 
    .map(a => new Compra(libros[a[0]], a[1]))

const factura_12 = new Factura(

    tuata, boracai, items1, '000000012',
    0.04, 'Contado', new Date()
)

factura_12.render()

const items2 = [[0, 20], [2, 12], [3, 21]]
.map(a => new Compra(libros[a[0]], a[1]))


const factura_13 = new Factura(
    tuata, pepita, items2, '000000013',
    0.04, 'Transferencia', new Date()
)

factura_13.render()

new Factura (
    tuata, pepita,
    [new Compra(revistas[0], 12), new Compra(revistas[1], 6), 
    new Compra(revistas[2], 17)], '000000014', 0.04, 
    'Efectivo', new Date()
).render()
