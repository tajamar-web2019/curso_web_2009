// 4 formas de ejecutar un funcion
// patrone de invocación
// cambian el significado de this

function algo () {
    console.log(this)
}

// Funcion

algo() // this es global (Node) o window (Browser)

// Método
const o = { nombre: 'Pepe', edad: 23}
o.algo = algo  

o.algo() // this es el objeto al que pertenece el metodo

// Constructora

const nuevo = new algo() // this es el nuevo objeto construido

// Indirectamente (apply o call)

const otro = {
    tipo: 'perro',
    nombre: 'Rufo'
}

// algo.call()
algo.apply(otro) // this el objeto que "toma prestada" la función


console.log('------------------------------')

const persona = {nombre: 'Pepe'}
persona.saludar = function() {
    console.log(`Hola soy ${this.nombre}`)
}
persona.saludar()
setTimeout(persona.saludar, 1000)
setTimeout(persona.saludar.bind(persona), 2000)

console.log('------------------------------')

// En las funciones arrow this es consistente:
// SIEMPRE es la propia funcion

persona.saludarArrow = () => {
    console.log(`Hola soy ${this.nombre}`)
}

persona.saludarArrow()

algoArrow =  () => {
    console.log(this)
}

algoArrow()

setTimeout(persona.saludarArrow, 1000)
setTimeout(algoArrow, 2000)
