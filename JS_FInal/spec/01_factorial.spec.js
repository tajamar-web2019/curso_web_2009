const Factorial = require('../01_factorial.js')

describe('El factorial de un número (factorial) ', () => {
    
    it('0! should be 1', () => {
        let f = new Factorial(0) 
        expect( f.factorial ).toBe(1)
    })

    it('1! should be 1', () => {
        let f = new Factorial(1)
        expect( f.factorial ).toBe(1)
    })

    it('2! should be 2', () => {
        let f = new Factorial(2)
        expect( f.factorial).toBe(2)
    })

    it('5! should be 120', () => {
        let f = new Factorial(5)
        expect( f.factorial ).toBe(120)
    })

    it('should throw error if n = 4.3', () =>  {
        let n = 4.3
        expect( (() => {
            new Factorial().bind(null, n)
        })()
        ).toThrowError(/entero/);
    });

    it('should throw error if n = -5', () => {
        let f = new Factorial(1)
        f.n = -5
        expect(f._preparar().bind(null, -5))
            .toThrowError(/negativo/)
    });

/* 
    const aErrores = ["pepe", true, false, [], {}, NaN, null, '']
     
    aErrores.forEach( (item, i) => {
        it(`should throw error with no numbers (${i}): ${item}`, () => {
            expect(factorial.bind(null, item))
            .toThrowError(/no es un número/);
        }); 
    })
 */
})