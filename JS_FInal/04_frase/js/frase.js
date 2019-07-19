


const LETRAS = {
    A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0, J: 0, K: 0, L: 0, M: 0, 
    N: 0, Ñ: 0, O: 0, P: 0, Q: 0, R: 0, S: 0, T: 0, U: 0, V: 0, W: 0, X: 0, T: 0, Z: 0
}

// module.exports =

export class Frase {

    constructor (frase = '') {

        this.frase = frase
        this._makeArray()
        this.numWords = this._numWords()  // número de palabras
        this.lonWords = this._lonWords() // longitud media de las palabras
        this.totalLetters = this._totalLetters() // número total de letras
        this.oNumLetters = this._numLetters()// veces cada letra
        this.oFrecLetters = this._fLetters() // frecuencia cada letra
    }

    _makeArray() {
        this.aPalabras = this.frase.split(' ')
    }

    _numWords()  { // número de palabras
        return this.aPalabras.length
    } 

    _lonWords() { // longitud media de las palabras
        return this.aPalabras.map(item => item.length).reduce( (a,b) => a+b ) / this.aPalabras.length
    } 

    _totalLetters()  {
        return this.aPalabras.join('').length
    }

    _numLetters() {// veces cada letra
        let oLetras = Object.assign({}, LETRAS)
        let cadenaLetras = this.aPalabras.join('').toUpperCase().split('')
        cadenaLetras.forEach( letra => {
            for (const key in oLetras) {
                if ( key === letra) {
                    oLetras[key]++
                    break
                }
            } 
        });
        return oLetras
    }

    _fLetters() {// frecuencia cada letra
        let oLetras = Object.assign({}, this.oNumLetters)
        for (const key in oLetras) {
            if (oLetras[key]) {
                oLetras[key] /=  this.totalLetters
            }
        }
        return oLetras
    }
}
