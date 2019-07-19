const Frase = require('../04_frase/js/frase.js')

fdescribe('Analisis Frases', () => {

    let oFrase
    let frase = 'Un anillo para gobernarlos a todos'
    beforeEach( () => {
        oFrase = new Frase(frase)
    }) 

    it('frase should be instantiate', () => {
       expect(oFrase).toBeTruthy();
       expect(oFrase.frase).toEqual(frase); 
    });

    it('número de palabras should be 6', () => {
        oFrase._numWords()
        expect(oFrase.numWords).toBe(6); 
    });

    it('longitud media de las palabras should be close to 4.83', () => {
        oFrase._lonWords()
        // console.log()
        expect(oFrase.lonWords).toBeCloseTo(4.83, 2);
    });

    it('veces total de letras should be 29', () => {
        oFrase._totalLetters()
        expect(oFrase.totalLetters).toBe(29);
    });


    it('veces cada letra should behave...', () => {
        oFrase._numLetters()
        expect(oFrase.oNumLetters.A).toBe(5);
    });
    
    it('frecuencia cada letra should behave...', () => {
        oFrase._fLetters()
        expect(oFrase.oFrecLetters.A * 100).toBeCloseTo(17.24, 2);
    });
    
});