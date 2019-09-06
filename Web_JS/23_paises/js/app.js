const URLRegion = 'https://restcountries.eu/rest/v2/region/' 
export class App {
    constructor() {
        console.log('Cargada app')
        this.continentes = [
            {code: 'Africa', nombre: 'Africa'}, 
            {code: 'Americas', nombre: 'America'}, 
            {code: 'Asia', nombre: 'Asia'},
            {code: 'Europe', nombre: 'Europa'},
            {code: 'Oceania', nombre: 'Oceania'}]
        this.paises = []
        // Definición de nodos
        this.nodos = {
            continentes: document.querySelector('#continentes'),
            paises: document.querySelector('#paises'),
            datosPais: document.querySelector('app-pais')
        }
        // Asignación de manejadores
        this.nodos.continentes.addEventListener('change', 
                this.onSelectContinents.bind(this))
        this.nodos.paises.addEventListener('change', 
                this.onSelectPaises.bind(this))
    
        
        // Renderización inicial de los controles
        this.setSelect(this.nodos.continentes, this.continentes)
    }

    // Métodos manejadores de eventos
    onSelectContinents() {
        let continente = this.nodos.continentes.value
        if (continente) {
            this.getPaises(continente)   
        } else {
            this.nodos.paises.parentElement.setAttribute('hidden', true)
        }
        console.log('Limpiar pais')
        this.nodos.datosPais.removeAttribute('pcode')
        //this.nodos.datosPais.setAttribute('pcode', '')
    }

    onSelectPaises() {
        let pais = this.nodos.paises.value
        if (pais) {
            console.log(pais)
            this.nodos.datosPais.setAttribute('pcode', pais)
            // Actualiza código del componente
        } 
    }

    // Otros métodos
    setSelect(selectNodo, aDatos) {
        selectNodo.parentElement.removeAttribute('hidden')
        let html = '<option value=""></option>'
        aDatos.forEach( item => {
            html += `<option value="${item.code}">
                        ${item.nombre}
                    </option>`
        });
        selectNodo.innerHTML = html
    }

    getPaises(continente) {
        fetch(URLRegion + continente + '?fields=name;alpha3Code;')
        .then(response => response.json())
        .then(data => {
            this.paises = data
            data = data.map( item => {
                return {code: item.alpha3Code, nombre: item.name}
                })
            this.setSelect(this.nodos.paises, data)
        })
    }   
}