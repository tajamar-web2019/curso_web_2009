export class Crono {
    constructor () {
        this.isOn = false
        this.time = 0
        this.handle = 0
        this.aBotones  = document.querySelectorAll('.cronos button')
        this.output = document.querySelector('.cronos output')
        this.aBotones.forEach(btn => btn.addEventListener(
            'click', this.onClickBnt.bind(this)
        ))
    }

    onClickBnt(ev) {
        switch (ev.target.id) {
            case 'btn-toggle':
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
            this.time += 1
            this.render()
        }, 1000)
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
        let segundos = parseInt( (this.time % (1000 * 60)) / 1000) 
        let centesimas = parseInt ( ((this.time % (1000 * 60)) % 1000) / 10 )
        this.output.value = this.time
        //  ` ${minutos} : ${segundos} : ${centesimas}`
        
    }
}