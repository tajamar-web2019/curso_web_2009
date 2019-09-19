import { render } from "./helper.js";

export class App {
    constructor() {

        this.aButons = document.querySelectorAll('.btn')
        this.aOutputs = document.querySelectorAll('.out')

        this.aButons.forEach(item => {
            item.addEventListener('click', this.onClick.bind(this))
        });

    }

    onClick() {
        render(this.aOutputs[0],"Hola amigos")
    }
}
