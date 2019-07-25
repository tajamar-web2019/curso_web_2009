import { ArrayStorage } from './storage.js'

export class App {

    constructor() {
        console.log('Cargada app') 
        this.setAnimales = new Set()

        this.store = new ArrayStorage('animales')

        this.inNew = document.querySelector('#in-new')
        this.outLista = document.querySelector('#out-lista')

        this.inNew.addEventListener('change',
            this.onChange.bind(this))

    }
    
    render() {
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
            this.save()
            this.inNew.value = ''
            this.render()
        }
    }

    save() {
        this.store.set(this.setAnimales)
    }
 }