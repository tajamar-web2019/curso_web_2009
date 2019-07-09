function Triangulo (lados, ...rest ) {
    this._lados = (Array.isArray(lados) && lados.length === 3) 
        ? lados : [lados].concat(rest)
    if ( this._lados.length !== 3) { 
        throw new Error('Número de lados inválido')
    }  
}

// Triangulo.prototype.tipos = ['Equilátero', 'Isosceles', 'Escaleno']
Triangulo.tipos = ['Equilátero', 'Isosceles', 'Escaleno']
Triangulo.definir = function () {
    console.log('Polígono de tres lados')
}
Triangulo.prototype.getLados = function () {
    console.log(this, 'Perimetro: ' + this.getPerimetro(), this.getTipo())
}
Triangulo.prototype.getPerimetro = function () {
    return this._lados.reduce( (a,b) => a + b)
}
Triangulo.prototype.getTipo = function () {
    let tipo = 1
    if (this._lados[0] === this._lados[1] && 
        this._lados[0] === this._lados[2] ) { 
            tipo = 0
    } else if (this._lados[0] !== this._lados[1] && 
                this._lados[0] !== this._lados[2] &&
                this._lados[1] !== this._lados[2]) { 
                    tipo = 2
    }
    // return this.tipos[tipo]
    return Triangulo.tipos[tipo]
}

try {
    new Triangulo(3, 3, 3).getLados()
    new Triangulo(2, 4, 7).getLados()
    new Triangulo([3, 3, 6]).getLados()
    new Triangulo([3, 3]).getLados()    
} catch (error) {
    console.log(error.message)
}


let t = new Triangulo([3, 3, 7])
console.log(t)
console.log(t.getPerimetro())
console.log(t.getTipo())
console.log(Triangulo.definir())



















