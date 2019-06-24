
const f = require('../02_multiplos.js')

describe('Funcion isMultiplo', () => {
    
    it('should be true that 20 is multiple of 2)', () => {
        expect(f.isMultiplo(20,2)).toBeTruthy()
    });
    it('should be false that 21 is multiple of 2)', () => {
        expect(f.isMultiplo(21,2)).toBeFalsy()
    });
    it('should be true that -20 is multiple of 2)', () => {
        expect(f.isMultiplo(-20,2)).toBeTruthy()
    });
    it('should be false that -21 is multiple of 2)', () => {
        expect(f.isMultiplo(-21,2)).toBeFalsy()
    });
    it('should be true that 21 is multiple of 3)', () => {
        expect(f.isMultiplo(21,3)).toBeTruthy()
    });
    it('should be false that 20 is multiple of 3)', () => {
        expect(f.isMultiplo(20,3)).toBeFalsy()
    });
    it('should be true that -21 is multiple of 3)', () => {
        expect(f.isMultiplo(21,3)).toBeTruthy()
    });
    it('should be false that -20 is multiple of 3)', () => {
        expect(f.isMultiplo(20,3)).toBeFalsy()
    });
    it('should be false that 20.5 is multiple of 3)', () => {
        expect(f.isMultiplo(20.5, 3)).toBeFalsy()
    });
    it('should be true that 5 is multiple of 2.5)', () => {
        expect(f.isMultiplo(5, 2.5)).toBeTruthy()
    });
    it('should be true that 7.5 is multiple of 2.5)', () => {
        expect(f.isMultiplo(7.5, 2.5)).toBeTruthy()
    });
    it('should be error if "pepe" is multiple of 2)', () => {
        expect( () => f.isMultiplo('pepe', 2) ).toThrow()
    });
    it('should be error if 2 is multiple of "pepe")', () => {
        expect( () => f.isMultiplo(2, 'pepe') ).toThrow()
    });
});

describe('Función extraerMultiplos', () => {

    it('should be return an array', () => {
        expect( Array.isArray(f.extraerMultiplos())).toBeTruthy()
    }); 

    it('should be return an array ...', () => {
        const aDatos = [1,2,3,4,5,6,7,8,9]
        const n = 2
        expect(f.extraerMultiplos(n, aDatos)).toEqual([2,4,6,8]) 
    })  

    it('should be return an array ...', () => {
        const aDatos = [1,2,3,4,5,6,7,8,9]
        const n = 3
        expect(f.extraerMultiplos(n, aDatos)).toEqual([3,6,9]) 
    })  
})
