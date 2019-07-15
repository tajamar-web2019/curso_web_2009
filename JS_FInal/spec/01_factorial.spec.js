const Factorial = require('../01_factorial.js')

describe('El factorial de un número (factorial) ', () => {

    describe('Instancias del objeto factorial', () => {
        let fa 
        beforeEach( () => {
             fa = new Factorial(0)
        })

        it('should be created object factorial', () => {
            expect(fa).toBeTruthy()
        });

        it('should be run method renderizar', () => {
            spyOn(fa, 'renderizar')
            fa.renderizar()
            expect(fa.renderizar).toHaveBeenCalled()
        });

        it('should be run private methos by constructor', () => {
            spyOn(Factorial.prototype, '_preparar')
            spyOn(Factorial.prototype, '_calcular')
            let f = new Factorial(0)
            f = new Factorial()
            expect(f._preparar).toHaveBeenCalledTimes(2)
            expect(f._calcular).toHaveBeenCalledTimes(2)
        });        
        it('should be run own methods', () => {
            spyOnAllFunctions(fa)
            fa._preparar()
            fa.prueba()
            expect(fa.prueba).toHaveBeenCalled()
            // expect(fa._preparar).toHaveBeenCalled()
        }); 
        it('should be use properties...', () => {
            let o = {
                nombre: 'Pepe',
                get algo () {return 'Sr. '+ this.algo},
                set algo(p) { this.algo = p.toUpperCase()},
                saludar: function() {}
            }
            const algoGet = spyOnProperty(o, 'algo', 'get')
            const algoSet = spyOnProperty(o, 'algo', 'set')
            o.nombre = 'Jose'
            o.algo = 'cosa'
            console.log(o.algo)
            o.saludar()
            expect(algoGet).toHaveBeenCalled()
            expect(algoSet).toHaveBeenCalled()
        });
    });

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

    describe('Errores en el cálculo del factorial', () => {
        it('should throw error if n = 4.3', () =>  {
            let n = 4.3
            expect( () => new Factorial(n))
                .toThrowError(/entero/);
        });

        it('should throw error if n = -5', () => {
            let f = new Factorial(1)
            f.n = -5
            expect( () => f._preparar().bind(f))
                .toThrowError(/negativo/)
        });

        const aErrores = ["pepe", true, false, [], {}, NaN, null, '']
        
        aErrores.forEach( (item, i) => {
            it(`should throw error with no numbers (${i}): ${item}`, () => {
                expect( () => new Factorial(item))
                .toThrowError(/no es un número/);
            }); 
        })        
    });

})

describe("Renderizado en console", function () {
    it("", () => {
        spyOn(console, 'log')
        let f = new Factorial(0)
        f.renderizar()
        expect(console.log)
            .toHaveBeenCalledWith(f.mensaje)
    })
})

fdescribe('Mock Function', () => {
    let mockFn = jasmine.createSpy()
    it('Porbar iteracion', () => {
        let aDatos = [1,2,3,4,5]
        aDatos.forEach( item => { mockFn() })
        expect(mockFn.calls.count()).toBe(aDatos.length)
    });
    
});