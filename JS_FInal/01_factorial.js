const { isEntero, isValidNumber }  = require('./01_helper.js')

module.exports = class Factorial {

    constructor(n) {
        this.n = n
        this.factorial = 1
        this.mensaje = ''
        this.prueba = function() {}
        this._preparar()
        this._calcular()
    }

    _preparar() {
        if (!isValidNumber(this.n)) {
            throw new Error('El parametro no es un número')
        } else if ( !isEntero(this.n) ){
            throw new Error('El parámetro no es un entero')
        } else if (this.n < 0) {
            throw new Error('El párámetro es negativo')
        } else if (this.n > 170) {
            throw new Error('Potencia de cálculo sobrepasada')
        }
    }

    _calcular() {
        
        if (this.n > 1) {
            for (let i = 2; i <= this.n; i++) {
                this.factorial *= i
            }
        }     
    }

    _calcularAtras() {
        if (this.n > 1) {
            for (let i = n; i >= 2; i--) {
                this.factorial *= i
            }
        }   
    }

    renderizar() {
        let cadenaF = (this.factorial < 1e20)
            ? this.factorial.toLocaleString()
            : this.factorial.toExponential()
        this.mensaje = 
`   El factorial de ${this.n}
    es ${cadenaF}` 
        console.log(this.mensaje)
    }
}