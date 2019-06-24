const f = require('../03_calculos.js')

fdescribe('Funcion suma', () => {

    const aErrores = [
       "pepe", true, [], {}, NaN, null
    ]

    it('should be 5 with sumar 2 + 3', () => {
        expect(f.sumar(2,3)).toEqual(5);
    });

    it('should be 2 with sumar 2', () => {
        expect(f.sumar(2)).toEqual(2);
    });

    it('should be 0 with sumar without arguments', () => {
        expect(f.sumar()).toEqual(0);
    });

    it('should be 5 with sumar -2 + 7', () => {
        expect(f.sumar(-2,7)).toEqual(5);
    });

    it('should be 5.4 with sumar 2.1 + 3.3', () => {
        expect(f.sumar(2.1, 3.3)).toEqual(5.4);
    });

    it('should be 5 with sumar 2 + "3"', () => {
        expect(f.sumar(2,'3')).toEqual(5);
    });

    for (let i = 0; i < aErrores.length; i++) {
        const item = aErrores[i];
        it(`should be error with sumar 2 + no numbers: ${item}`, () => {
            expect(() => f.sumar(2,item)).toThrow()
        });    
    }
});
