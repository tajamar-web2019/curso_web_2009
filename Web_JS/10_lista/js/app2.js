import { ArrayStorage } from './storage.js'

export class App {

    constructor() {
        console.log('Cargada app') 

        // servicio que maneja localStorage
        this.store = new ArrayStorage('animales')
                
        // Nodos del DOM    
        this.inNew = document.querySelector('#in-new')
        this.outLista = document.querySelector('#out-lista')

        // Definición de manejadores de eventos
        this.inNew.addEventListener('change',
            this.onChange.bind(this))

        // Inicialización de un Set, 
        // en su caso desde localStorage
        this.setAnimales = this.store.get()
            ? new Set(this.store.get()) : new Set()
        this.render()

        console.log(this)
    }
    
    render() {
        if (!this.setAnimales.size) {
            return
        }
        let txtHtml = ''
        this.setAnimales.forEach( animal =>
            txtHtml += `<li>${animal}</li>`)
        console.log(txtHtml)    
        let nodoLista = document.createElement('ul')
        nodoLista.innerHTML = txtHtml
        this.outLista.innerHTML = ''
        this.outLista.appendChild(nodoLista)
    }

    onChange() {
        if (this.inNew) {
            this.setAnimales.add(this.inNew.value)
            this.inNew.value = ''
            this.save()
            this.render()
        }
    }

    save() {
        this.store.set(Array.from(this.setAnimales))
    }
 }