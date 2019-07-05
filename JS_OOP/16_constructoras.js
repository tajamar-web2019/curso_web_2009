
// Objeto JSON o literal 

const p1 = {
    nombre: 'Luis',
    edad: 23,
    altura: 178,
    pais: 'España'
}

function Persona(nombre, edad, altura, pais ) {
    this.nombre = nombre 
    this.edad = edad
    this.altura = altura
    this.pais = pais
    this.profesion = ''
}
Persona.prototype.cerebro = true
Persona.prototype.saludar = function (otro = 'amig@') {
        let msg = `Hola ${otro}, soy ${this.nombre}`
        console.log(msg)
    }
Persona.prototype.serContratado = function(puesto) {
        this.profesion = puesto
    }


const p2 = new Persona('Pepe', 23, 180, 'Bulgaria')
const p3 = new Persona('Pepa', 27, 179, 'Italia')
/* delete p2.cerebro
p2.ia = true */

p2.serContratado('medico')
p3.serContratado('CEO') 
p2.cerebro = false

console.log(p1)
console.log(p2)
console.log(p3) 

p2.saludar(p3.nombre)
p3.saludar(p2.nombre)

for (const key in p3) {
    if (!p3.hasOwnProperty(key)) {
        const element = p3[key];
        console.log(key, element)
    }
}

console.log('p1', p1 instanceof Persona )
console.log('p2', p2 instanceof Persona )
console.log('p3', p3 instanceof Persona )
console.log('p1', p1 instanceof Object )
console.log('p2', p2 instanceof Object )
console.log('p3', p3 instanceof Object )