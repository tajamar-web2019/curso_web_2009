const { isValidNumber, isEntero } = require('../01_helper.js')


describe('Es operable como número', () => {

    const aNumerables = [0, 1, 2, -2, 1.1, -1.1, '1', '1.1', '-1.1']
    const aErrores = ["pepe", true, false, [], {}, NaN, null, '']
    
    aNumerables.forEach( item => {
        it(`should be true with numbers: ${item}`, () => {
            expect(isValidNumber(item)).toBe(true)
        }); 
    })
    
    aErrores.forEach( (item, i) => {
        it(`should be false with no numbers (${i}): ${item}`, () => {
            //expect(() => isValidNumber(item)).toBeFalsy()
            expect(isValidNumber(item)).toBe(false)
        }); 
    })
});

describe('Es entero (isEntero)', () => {
    
    const aEnteros = [2, -2, 0, '2', '-2']
    const aDecimales = [2.2, -2.2, "2.2", "-2.2"]

    aEnteros.forEach( item => {
        it(`should be true with int numbers: ${item}`, () => {
            expect(isEntero(item)).toBe(true)
        }); 
    })
    
    aDecimales.forEach( (item, i) => {
        it(`should be false with no int numbers (${i}): ${item}`, () => {
            expect(isEntero(item)).toBe(false)
        }); 
    })
});