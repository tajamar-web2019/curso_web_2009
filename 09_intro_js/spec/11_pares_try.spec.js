
describe('Función esPar', () => {
    let esPar = require('../11_pares_try.js')

    it('should be "par" if n = 0 ', () => {
        let n = 0
        expect(esPar(n)).toEqual(true)
    })

    it('should be "impar" if n = 1 ', () => {
        let n = 1
        expect(esPar(n)).toEqual(false)
    })

    it('should be "par" if n = 2 ', () => {
        let n = 2
        expect(esPar(n)).toEqual(true)
    })

    it('should be "impar" if n = string "11" ', () => {
        let n = '23'
        expect(esPar(n)).toEqual(false)
    })    

    it('should be "par" if n = string "22" ', () => {
        let n = '22'
        expect(esPar(n)).toEqual(true)
    })

    it('should be "impar" if n = -5 ', () => {
        let n = -5
        expect(esPar(n)).toEqual(false)
    })    

    it('should be "par" if n = -4 ', () => {
        let n = -4
        expect(esPar(n)).toEqual(true)
    })

    it('should throw error if n = "pepe"', () => {
        let x = 'pepe'
        expect(esPar.bind(x)).toThrowError(/no es un número/);
    });

    it('should throw error if n = 4.3', () =>  {
        let x = 4.3
        expect(esPar.bind(x)).toThrow();
    });
    
    // x = -56.7

})