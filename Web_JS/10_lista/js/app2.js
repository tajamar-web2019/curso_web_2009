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
            this.onChangeInput.bind(this))

        // Inicialización de un Set, 
        // en su caso desde localStorage
        this.setAnimales = this.store.get()
            ? new Set(this.store.get()) : new Set()
        this.render()

        console.log(this)
    }
    
    renderOld() {
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

    render() {
        let html = '' 
        html += '<ul>'
        this.setAnimales.forEach(item => html += 
            `<li>
                <span class="texto" data-id="${item}">${item}</span>
                <span class="btn btn-editar" data-id="${item}">️✍️</span>  
                <span class="btn btn-borrar" data-id="${item}">🗑️</span>
            </li>`)
        html += '</ul>'
        this.outLista.innerHTML = html

        this.aBtnBorrar = document.querySelectorAll('.btn-borrar')
        this.aBtnEditar = document.querySelectorAll('.btn-editar')
        this.aTextos = document.querySelectorAll('.texto')

        this.aBtnBorrar.forEach(btn => btn.addEventListener('click', 
            this.onBorrar.bind(this)))
        this.aBtnEditar.forEach(btn => btn.addEventListener('click', 
            this.onEditar.bind(this)))
        this.aTextos.forEach(txt => txt.addEventListener('blur', 
            this.onChange.bind(this)))
    }

    save() {
            this.store.set(Array.from(this.setAnimales))
        }

    onChangeInput() {
        if (this.inNew) {
            this.setAnimales.add(this.inNew.value)
            this.inNew.value = ''
            this.save()
            this.render()
        }
    }

    onBorrar(ev) {
        this.setAnimales.delete(ev.target.dataset.id)
        this.save()
        this.render()
    }

    onEditar(ev) {
        ev.target.previousElementSibling.contentEditable = true
    }

   onChange(ev) {
    ev.target.contentEditable = false
    let a = [...this.setAnimales]
    a[a.indexOf(ev.target.dataset.id)] = ev.target.textContent
    this.setAnimales = new Set(a)
    this.save()
    this.render()
   }
   
 }