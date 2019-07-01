let {comprobarCaso, mostrarComprobacionCaso} = require('../04_caso.js')

describe('funcion comprobarCaso', () => {
    it('should be 0 if all MAY', () => {
        const cadena = 'HOLA PEPE'
        expect(comprobarCaso(cadena)).toEqual(0);
        
    });

    it('should be 1 if all min', () => {
        const cadena = 'hola amigo'
        expect(comprobarCaso(cadena)).toEqual(1);
    });

    it('should be 2 if MAY & min', () => {
        const cadena = 'Hola Pepe'
        expect(comprobarCaso(cadena)).toEqual(2);
    });

});

describe('funcion mostrarComprobacionCaso', () => {
    it('should be - solo mayúsculas- if all MAY', () => {
        const cadena = 'HOLA PEPE'
        console.log = jasmine.createSpy("log")
        mostrarComprobacionCaso(cadena)
        expect(console.log).toHaveBeenCalledWith('solo mayúsculas')
    });

    it('should be - solo minúsculas - if all min', () => {
        const cadena = 'hola amigo'
        console.log = jasmine.createSpy("log")
        mostrarComprobacionCaso(cadena)
        expect(console.log).toHaveBeenCalledWith('solo minúsculas')
    });

    it('should be - mayusculas y minusculas - if MAY & min', () => {
        const cadena = 'Hola Pepe'
        console.log = jasmine.createSpy("log")
        mostrarComprobacionCaso(cadena)
        expect(console.log).toHaveBeenCalledWith('mayusculas y minusculas')
    });

});