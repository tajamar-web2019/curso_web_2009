let {isPali, isPaliShort} = require('../08_pali')

describe('Palindromos: isPali', () => {
    it('should be true La ruta nos aporto otro paso natural', () => {
        let cadena = 'La ruta nos aporto otro paso natural'
        expect(isPali(cadena)).toBeTruthy()
    });
    it('should be falseUn anillo para gobernarlos a todos', () => {
        let cadena = 'Un anillo para gobernarlos a todosl'
        expect(isPali(cadena)).toBeFalsy()
    });
});

describe('Palindromos: isPaliShort', () => {
    it('should be true La ruta nos aporto otro paso natural', () => {
        let cadena = 'La ruta nos aporto otro paso natural'
        expect(isPaliShort(cadena)).toBeTruthy()
    });
    it('should be falseUn anillo para gobernarlos a todos', () => {
        let cadena = 'Un anillo para gobernarlos a todosl'
        expect(isPaliShort(cadena)).toBeFalsy()
    });
});



console.log(isPaliShort('La ruta nos aporto otro paso natural'))
console.log(isPaliShort('Un anillo para gobernarlos a todos'))