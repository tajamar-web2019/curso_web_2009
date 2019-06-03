
describe('Función esPar', () => {
    let esPar = require('../10_pares.js')

    it('should be "par" if n = 0 ', () => {
        let n = 0
        expect(esPar(n)).toEqual(true)
    })

    
    it('should be "impar" if n = 1 ', () => {
        n = 1
        expect(esPar(n)).toEqual(false)
    })

    it('should be "par" if n = 2 ', () => {
        n = 2
        expect(esPar(n)).toEqual(true)
    })

    it('should be "impar" if n = string "11" ', () => {
        n = '23'
        expect(esPar(n)).toEqual(false)
    })    

    it('should be "par" if n = string "22" ', () => {
        n = '22'
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

    it('should be -2 if n = "pepe"', () => {
        let x = 'pepe'
        expect(esPar(x)).toEqual(-2);
    })

    it('should be -1 if n = 4.3', () =>  {
        let x = 4.3
        expect(esPar(x)).toEqual(-1);
    });
    
    it('should be -1 if n = -6.7', () =>  {
        let x = -56.7
        expect(esPar(x)).toEqual(-1);
    });

})