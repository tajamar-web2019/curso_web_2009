
const aDatos = [2, 3, 7, 4, 9, 5]

/* 
aDatos.map( (item, i, array) => {} )
aDatos.filter( (item, i, array) => {} )
aDatos.some( (item, i, array) => {} )
aDatos.every( (item, i, array) => {} )
aDatos.forEach( (item, i, array) => {} )
aDatos.reduce( (item, i, array) => {} )
aDatos.reduceRight( (item, i, array) => {} ) 
*/

// Recorrido o procesado del array

aDatos.forEach(
    item => { console.log(` - ${item}`)}
)

/*
    Equivale al for in de ES6
    for (const item of aDatos) {
        console.log(` - ${item}`)
    }
*/

// Proyectar o mapear un array 

function cuadrados(aDatos = []) { 
    return aDatos.map( item => item * item)
}

// const cuadrados = aDatos => aDatos.map( item => item * item)


console.log(cuadrados(aDatos))

let aUsuarios = ['rosa', 'raquel', 'elena', 'renata', 'maria', 'roberto', 'ramon']
console.log(aUsuarios.map( item => item.toUpperCase()))

// Filtros de Array

function pares(aDatos = []) {
    return aDatos.filter( item => !(item%2) )
}

// const pares = aDatos => aDatos.filter( item => !(item%2) )

function inpares(aDatos = []) {
    return aDatos.filter( item => (item%2) )
}

console.log(pares(aDatos))

// Reducciones 

function sumaTotal(aDatos = []) {
   return aDatos.reduce( (acumulado, item) => {return acumulado + item} )  
}

function media(aDatos = []) {
    let i = 0
   /*  let sumaTotal = aDatos.reduce( (acumulado, item, index) => {
        i = index
        return acumulado + item
    }) 
    // i = i + 1
    return  sumaTotal / ++i */

    return aDatos.reduce( (acumulado, item, index) => {
        i = index
        return acumulado + item
    })  / ++i
 }

console.log('SumaTotal: ', sumaTotal(aDatos))
console.log('Media: ', media(aDatos))

const aReyes = [
    'Fernando', 'Isabel', 'Juana', 'Carlos', 'Felipe', 'Luis',
    'Jose', "Amadeo", 'Alfonso', 'Juan Carlos' ]

/* function isNombreRey(nombre) {
for (let i = 0; i < aReyes.length; i++) {
    const item = aReyes[i];
    if ( nombre.toUpperCase() == item.toUpperCase()) {
        return [true, i]
    }
} 
return [false]
} */

function isNombreRey(nombre) {
    return aReyes.some( item => nombre.toUpperCase() === item.toUpperCase())
}
 
console.log(isNombreRey('fernando'))
console.log(isNombreRey('Federico'))