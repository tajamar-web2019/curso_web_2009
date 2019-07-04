const o = {
    id: 123,
    nombre: 'Pepe',
    edad: 34,
    conocidos: ['Juan', 'Raul', 'Elena', 'Lola'], 
    mostrarID: function () {
        console.log(this.id)
    },
    saludar: function (otro = 'amigo') {
        if (this._isConocido(otro)) {
            console.log(`Hola ${otro}, ¿como estás?`)    
        } else {
            console.log(`Hola ${otro}, soy ${this.nombre}`)
        }
    },
    _isConocido: function (otro) {
        return this.conocidos.some( 
            item => item.toLowerCase() === otro.toLowerCase() )      
    }
}

o.mostrarID()
o.saludar('Juan')
o.saludar()
o.saludar('Pepi')
console.log(o._isConocido('Julio'))