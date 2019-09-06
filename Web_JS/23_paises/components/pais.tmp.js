const url = "https://restcountries.eu/rest/v2/alpha/"

class Pais extends HTMLElement {

    static get observedAttributes() {
        return ['pcode'];
      }
    
    constructor() {    
        super()
        this.dataPais = {} // obtenido luego desde el API   
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log('Nuevo '+attrName, newVal)
        
        if(!newVal) { // Cambio de continente: no hay pais
            this.deleteInfoPais()
        } else  { // seleccionado un pais
            this.getTemplate() 
            this.getPais(newVal)  
        }
    }

    deleteInfoPais() {
        this.shadowRoot.innerHTML = ''
    }

    getTemplate() {
        //Acceso al template
        const oImport = document.querySelector('link[rel="import"]').import;
        const elem = oImport.querySelector('#pais')
        
        //Failed to execute 'attachShadow' on 'Element': 
        //Shadow root cannot be created on a host which already hosts a shadow tree.
        const shadow =  this.shadowRoot ? this.shadowRoot : 
                        this.attachShadow({mode: 'open'})
        shadow.innerHTML = elem.innerHTML
        //Nodos del DOM del template
        this.aSpans = shadow.querySelectorAll('span')
        // capital, subregion, latitud, longitud, 
        // poblacion, superficie, fronteras, 
        // codigoNumérico, codigoTelefónico, moneda, idioma,   
        this.imgFlag = shadow.querySelector('#flag')
        this.mapa = shadow.querySelector('.mapa')
    }
    
    getPais(paisCode) {
        // obtenido del API con el alpha3Code
        fetch(url + paisCode )
        .then( response => response.json())
        .then( data  => {
            this.dataPais = data
            this.setPais()
        })         
    }
    setPais() {
        this.imgFlag.src =  this.dataPais.flag
        this.aSpans[0].textContent = this.dataPais.capital
        this.aSpans[1].textContent = this.dataPais.subregion
        this.aSpans[2].textContent = this.dataPais.latlng[0]
        this.aSpans[3].textContent = this.dataPais.latlng[1]
        this.aSpans[4].textContent = this.dataPais.population.toLocaleString()
        this.aSpans[5].textContent = this.dataPais.area.toLocaleString()
        this.aSpans[6].textContent = this.dataPais.borders.join(', ')
        this.aSpans[7].textContent = this.dataPais.numericCode
        this.aSpans[8].textContent = this.dataPais.callingCodes
        this.aSpans[9].textContent = this.dataPais.currencies[0].name
        this.aSpans[10].textContent = this.dataPais.languages[0].nativeName
        
        this.setMapa()
    }

    setMapa() {
        const lat =  this.dataPais.latlng[0]
        const lon =  this.dataPais.latlng[1]
        let mapa = `
        <iframe class="iframe" 
            src="https://maps.google.com/?ll=${lat},${lon}&z=7&t=m&output=embed" 
            height="600" frameborder="0" style="border:0" allowfullscreen>
        </iframe>'
        `
        this.mapa.innerHTML = mapa

    }

}

customElements.define('app-pais', Pais)