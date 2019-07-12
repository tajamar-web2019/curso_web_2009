let { factorial } = require('../01_factorial.js')

describe('El factorial de un número (factorial) ', () => {
    
    it('should be 1 if n = 0 ', () => {
        let n = 0
        expect(factorial(n)).toBe(1)
    })

    it('should be 1 if n = 1 ', () => {
        let n = 1
        expect(factorial(n)).toBe(1)
    })

    it('should be 2 if n = 2 ', () => {
        let n = 2
        expect(factorial(n)).toBe(2)
    })

    it('should be 1 if n = 5 ', () => {
        let n = 5
        expect(factorial(n)).toBe(120)
    })

    it('should throw error if n = -5', () => {
        let n = -5
        expect(factorial.bind(null, n))
            .toThrowError(/negativo/)
    });

    it('should throw error if n = 4.3', () =>  {
        let n = 4.3
        expect(factorial.bind(null, n))
            .toThrowError(/entero/);
    });

    const aErrores = ["pepe", true, false, [], {}, NaN, null, '']
     
    aErrores.forEach( (item, i) => {
        it(`should throw error with no numbers (${i}): ${item}`, () => {
            expect(factorial.bind(null, item))
            .toThrowError(/no es un número/);
        }); 
    })

})