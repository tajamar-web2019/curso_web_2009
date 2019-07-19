import { Frase } from "./frase.js";

export class App {

    constructor() {
        this.html = ''
        this.defineNodos()
        this.defineHandlers()
        console.log('Cargada app') 
    }
    
    defineNodos() {
        this.nodos = {
            btnCirculo: document.querySelector('#btn-circulo'),
            btnBorrar: document.querySelector('#btn-borrar'),
            inFrase: document.querySelector('#in-frase'),
            outResultado: document.querySelector('#out-resultado'),
            dlgResult: document.querySelector('#dlg-result')
        }
    }

    defineHandlers() {
        this.nodos.btnCirculo.addEventListener('click', this.onBtnCircle.bind(this))
        this.nodos.btnCirculo.addEventListener('dblclick', this.onBtnCircle.bind(this))
        this.nodos.btnBorrar.addEventListener('click', this.onBtnReset.bind(this))
    }

    onBtnCircle(ev) {
        switch (ev.type) {
            case 'click':
                if (this.nodos.inFrase.value) {
                    this.analizar()
                } else {
                    this.html = 'Antes del click escribe una frase'
                }
                break;
            case 'dblclick':
                this.nodos.inFrase.value = 'Un anillo para gobernarlos a todos'
                this.analizar()
                break;
        }
        this.render()
    }

    onBtnReset() {
        this.nodos.inFrase.value = ''
        this.html = ''
        this.render()
    }

    analizar() {
        this.html = 'Analizando ' + this.nodos.inFrase.value
        let data = new Frase(this.nodos.inFrase.value)
        console.log(data)
        /* aPalabras: (6) ["Un", "anillo", "para", "gobernarlos", "a", "todos"]
        frase: "Un anillo para gobernarlos a todos"
        lonWords: 4.833333333333333
        numWords: 6
        oFrecLetters: {A: 0.1724137931034483, B: 0.034482758620689655, C: 0, D: 0.034482758620689655, E: 0.034482758620689655, …}
        oNumLetters: {A: 5, B: 1, C: 0, D: 1, E: 1, …}
        totalLetters: 29 */

        let aNodos = document.querySelectorAll('dialog output')

        aNodos[0].value = data.numWords
        aNodos[1].value = data.lonWords.toFixed(2)
        aNodos[2].value = data.totalLetters
        this.nodos.dlgResult.showModal()
    }

    render() {
        this.nodos.outResultado.value = this.html
    }

 }