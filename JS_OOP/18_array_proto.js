const aDatos = ['luis', 'juan', 'rosa', 'maria']
// aDatos = new Array()

console.log(aDatos.__proto__)
console.log(Array.prototype)

Array.prototype.saludar = function (nombre) {
    console.log(`Hola ${nombre}, soy un array`)
}

Array.prototype.push = function (nombre) {
    console.log('Hola, ' + nombre)
}


aDatos.push('Ernesto')
aDatos.saludar('Pepe')

console.log(aDatos)

const aOtros = []
aOtros.push('gato')
console.log(aOtros)
aOtros.saludar('perro')