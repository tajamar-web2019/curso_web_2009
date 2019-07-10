/* 
Definir la estructura de una funció constructora 
 que crea los objetos que almacenan una factura. 

Las facturas están formadas por:
- la información de la propia empresa:
    - nombre de la empresa
    - dirección
    - teléfono
    - NIF 
- la información del cliente
    - nombre de la empresa
    - dirección
    - teléfono
    - NIF 
- una lista de elementos, cada uno de los cuales dispone de:
    - descripción
    - precio por unidad
    - cantidad 
- otra información básica de la factura
    - el número de factura
    - tipo de IVA
    - forma de pago
    - la fecha

Añadir al menos dos métodos:
- el que calcula el importe total de la factura
- el que muestra por pantalla la factura 
    o al menos el importe total de la factura.
*/


const {fechaEsp, fijarLongitudCadena} = require('./15_helpers.js')

function Factura (  empresa = {}, 
                    cliente = {},
                    items = [{}],
                    numFactura = '',
                    tipoIVA = '',
                    formaPago = '',
                    fecha = new Date()) {
    this.empresa = empresa
    this.cliente = cliente
    this.items = items
    this.numFactura = numFactura
    this.tipoIVA = tipoIVA
    this.formaPago = formaPago
    this.fecha = fecha
}

function Empresa (nombre, direccion, telefono, nif) {
        this.nombre = nombre
        this.direccion = direccion
        this.telefono = telefono
        this.nif = nif
}

function Item (descripcion, precioU) {
    this.descripcion = descripcion
    this.precioU = precioU
}

function Compra (item, cantidad = 0) {
    this.descripcion = item.descripcion
    this.precioU = item.precioU
    this.cantidad = cantidad
}

function Direccion(calle, num, poblacion, pais) {
    this.calle = calle
    this.num = num
    this.poblacion = poblacion
    this.pais = pais 
}

Direccion.prototype.toString = function () {
    return `${this.calle} ${this.num} ${this.poblacion} - ${this.pais}`
}

Factura.prototype.calcularImporte = function() {
    const importe = {} 
    importe.base = 
        this.items
        .map( libro => libro.precioU * libro.cantidad)
        .reduce( (total, item) => total + item ) 
    importe.iva = importe.base * this.tipoIVA
    importe.total = importe.base + importe.iva
    return importe    
}

Factura.prototype.listarItems = function() {
    let items = ``
    this.items.forEach(
        item => {
            let desc = fijarLongitudCadena(item.descripcion, 30)
            let pv = item.precioU
                .toLocaleString('es', {style: 'currency', currency: 'EUR'})
            let cant = item.cantidad
            items += 
`
    ${desc}     ${pv}          ${cant}
`
    })
    return items
}

Factura.prototype.prepararFactura = function() {
    const importe = this.calcularImporte()
    const factura =
`
    _______________________________________________________________

                                        ${this.empresa.nombre}
                                        ${this.empresa.direccion}
                                        ${this.empresa.telefono}
                                        ${this.empresa.nif}

    Num. Factura: ${this.numFactura}

    ${this.cliente.nombre}
    ${this.cliente.direccion}
    ${this.cliente.telefono}
    ${this.cliente.nif}

    Descripción                         Precio      Cantidad
    _______________________________     _______     ________
    ${this.listarItems()}

    Importe ....................................${importe.base
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}
    IVA ........................................${importe.iva
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}

    Importe Total ..............................${importe.total
        .toLocaleString('es', {style: 'currency', currency: 'EUR'})}

    Forma de Pago ..............................${this.formaPago}

    Madrid, ${fechaEsp(this.fecha)}
    ______________________________________________________________
`
    return factura
}

// Factura.prototype.mostrarImporte = function() {}

Factura.prototype.render = function () {
    console.log(this.prepararFactura())
}

Factura.prototype.resumir = function () {
    console.log (
`Factura: ${this.numFactura}: ${this.calcularImporte().total}`
    )
}

module.exports = {}
module.exports.Factura = Factura
module.exports.Empresa = Empresa
module.exports.Item = Item
module.exports.Compra = Compra
module.exports.Direccion = Direccion