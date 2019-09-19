import { render } from "./helper.js";

export class App {
    constructor() {

        this.aButons = document.querySelectorAll('.btn')
        this.aOutputs = document.querySelectorAll('.out')
        this.inNombre = document.querySelector('#nombre')

        this.aButons.forEach(item => {
            item.addEventListener('click', this.onClick.bind(this))
        });

    }

    onClick() {
        let msg = 'Hola usnado un fichero de configuracion'
        if (this.inNombre.value) {
            msg = `Hola ${this.inNombre.value}!!`
            this.inNombre.value = ''
        }
        render(this.aOutputs[0],msg)
    }
}
