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
            datosPais: document.querySelector('.datosPais')
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
    }

    onSelectPaises() {
        let pais = this.nodos.paises.value
        if (pais) {
            this.renderPais(pais)
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
        fetch(URLRegion+continente)
        .then(response => response.json())
        .then(data => {
            this.paises = data
            console.log(this.paises)
            data = data.map( item => {
                return {code: item.alpha3Code, nombre: item.name}
                })
            this.setSelect(this.nodos.paises, data)
        })
    }

    renderPais(pais) {
        console.log(pais)
        let dataPais = this.paises.find( item => item.alpha3Code == pais)
        console.log(dataPais)
        const html = `
            <div class="flag-wrapper">
                <img src="${dataPais.flag}" alt="bandera">
            </div>
            <div class="data">        
                <ul>
                    <li>Capital: ${dataPais.capital}</li>
                    <li>Subregion: ${dataPais.subregion}</li>
                    <li>Latitud: ${dataPais.latlng[0]}</li>
                    <li>Longitud: ${dataPais.latlng[1]}</li>
                    <li>Poblacion: ${dataPais.population}</li>
                    <li>Superficie: ${dataPais.area}</li>
                    <li>Fronteras: ${dataPais.borders}</li>
                    <li>Código numérico: ${dataPais.numericCode}</li>
                    <li>Código telefónico: ${dataPais.callingCodes}</li>
                    <li>Moneda: ${dataPais.currencies[0].name}</li>
                    <li>Idioma: ${dataPais.languages[0].nativeName}</li>
                <ul>
            </div>
        `
        this.nodos.datosPais.innerHTML = html
    }
   









 }