
const obj = new Object()

const pulga = 123
let garrapata

const animal1 = {
    nombre: 'Rufo',
    edad: 3,
    raza : 'perro',
    parasitos: [pulga, garrapata]
}
const animal2 = {}

const persona1 = {
    nonbre: 'Pepe',
    edad: 23,
    mascotas : [animal1, animal2]
}

animal1.peso = 12


console.log(animal1)
console.log(animal1.nombre)
let propiedad = 'raza'
console.log(animal1['raza']) // Nunca se usa
console.log(animal1[propiedad])