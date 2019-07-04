// Serializacion
// JSON.stringify()
// JSON.parse()

const oDatos = {
    user: 'Pepe',
    edad: 23,
    curso: 'Front',
    direccion : {
        calle: 'Pez, 1',
        ciudad: 'Cádiz'
    },
    nacim: new Date(1998, 1, 14)
}

let cadena = JSON.stringify(oDatos)
console.log(cadena)
console.log(typeof cadena)
console.log(oDatos)
let oNuevosDatos = JSON.parse(cadena)
console.log(oNuevosDatos)
console.log(typeof oNuevosDatos)

// clonado deep
const clon = JSON.parse(JSON.stringify(oDatos))
clon.nacim = new Date(clon.nacim)
oDatos.direccion.ciudad = 'Huelva'
clon.direccion.ciudad = 'Malaga'
console.log(oDatos)
console.log(clon)

console.clear()

const oAlumno1 = {
    user: 'Carlos',
    edad: 23,
    curso: 'Front',
    direccion : {
        calle: 'Pez, 1',
        ciudad: 'Cádiz'
    },
    nacim: new Date(1998, 1, 14)
}

// clonado no deep

const oAlumno2 = Object.assign({}, oAlumno1)
oAlumno2.direccion = Object.assign({}, oAlumno1.direccion)
oAlumno2.user = 'Ernesto'
oAlumno2.direccion.ciudad = 'Cuenca'
console.log(oAlumno1)
console.log(oAlumno2)

const a = [1, 3, [4, 6, 7], 5, 6]
const b = JSON.parse(JSON.stringify(a))
const d = a.slice()
const c = Object.assign([], a)
c[2].push(123)

console.log(a)
console.log(b)
console.log(c)
console.log(d)



