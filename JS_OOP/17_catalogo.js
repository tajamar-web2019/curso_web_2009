/* Crear un objeto usado para representar 
un artículo de una tienda. 
- una descripción, 
- un código 
- un precio
Métodos
- permitir el cálculo de su correspondiente IVA 
- mostrar los datos por pantalla. 
 */

/** Function (Class) Libro
 * @property {string} descripcion 
 * @property {string} codigo 
 * @property {number} precio 
 * @property {number} iva
 * @method {object} cacularIVA
 * @method {void} mostrar
 */

function Libro(x = '', codigo = '', precio = 0) {
    this.descripcion = x
    this.codigo = codigo
    this.precio = precio
}

Libro.prototype.iva = 0.04
Libro.prototype.calcularIVA = function (descuento = 0) {
    const precio = this.precio - (this.precio * descuento)
    return { 
        iva: precio * this.iva,
        total: precio + (precio * this.iva)
    }
}


Libro.prototype.mostrar = function (descuento) {
    const { total, iva } = this.calcularIVA(descuento)
    const cadena = `
    Descrpción: ${this.descripcion}
    Código: ${this.codigo}
    Precio: ${this.precio.toFixed(2)}
    IVA: ${iva.toFixed(2)}
    Precio Total: ${total.toFixed(2)}
    `
    console.log(cadena)
} 


const l1 = new Libro('Las ranas', '00345Y4', 21.15)
l1.mostrar(0.1)
console.log(l1)
const l2 = new Libro('Los sapos', '00345Z7', 21.15)
l2.mostrar()
console.log(l2)
const l3 = new Libro('Promo Empresa', '00545Z7', 10)
l3.iva = 0.12
l3.mostrar()
console.log(l3)