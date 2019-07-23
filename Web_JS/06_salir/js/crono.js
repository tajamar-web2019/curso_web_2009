export class Crono {
    constructor (id = 0, nodo) {
        this.id = id
        this.isOn = false
        this.time = 0
        this.handle = 0
        this.crearCrono(nodo)
        this.aBotones  = document.querySelectorAll(`#crono-${this.id} button`)
        this.btnToggle = document.querySelector(`#btn-toggle-${this.id}`)
        this.output = document.querySelector(`#crono-${this.id} output`)
        console.log(this)
        this.aBotones.forEach(btn => btn.addEventListener(
            'click', this.onClickBnt.bind(this)   
        ))    
    }

    crearCrono(nodo) {
        let el = document.createElement('div')
        el.className = 'cronos'
        el.setAttribute('id', `crono-${this.id}`) 
        el.innerHTML = `Crono ${this.id}
            <output>0 : 0 : 0</output>
            <button id="btn-toggle-${this.id}">Play</button>
            <button id="btn-reset-${this.id}">Reset</button>`
        console.log(el)
        nodo.appendChild(el)
    }

    /**
        Preserves existing references to DOM elements when appending elements
        When you append to (or otherwise modify) innerHTML, 
        all the DOM nodes inside that element have to be 
        re-parsed and recreated. If you saved any references to nodes, they will be essentially useless, because they aren't the ones that show up anymore.

        Preserves event handlers attached to any DOM elements
        This is really just a special case (although common) of the last one. Setting innerHTML will not automatically reattach event handlers to the new elements it creates, so you would have to keep track of them yourself and add them manually. 
        Event delegation can eliminate this problem in some cases.
     */

    onClickBnt(ev) {
        switch (ev.target.id) {
            case `btn-toggle-${this.id}`:
                if (this.isOn) {
                    this.pause()
                    this.aBotones[0].textContent = 'Play'
                } else {
                    this.play()
                    this.aBotones[0].textContent = 'Pause'
                }
                this.isOn = !this.isOn
                break;
            default: // btn-reset
                this.reset()
                break;
        }
    }

    play() {
        this.handle = setInterval( () => {
            this.time += 10
            this.render()
        }, 10)
        // The intervals (in milliseconds) on how often to execute the code. 
        // If the value is less than 10, the value 10 is used
    }

    pause() {
        clearInterval (this.handle)
    }

    reset() {
        this.time = 0
        this.render()
    }

    render() {
        let minutos =  parseInt(this.time / (1000 * 60))
        let milesimasRestantes = this.time % (1000 * 60)
        let segundos = parseInt(milesimasRestantes / 1000) 
        milesimasRestantes = milesimasRestantes % 1000
        let centesimas = parseInt (milesimasRestantes / 10)
        this.output.value = 
          ` ${minutos} : ${segundos} : ${centesimas}`
        
    }
}