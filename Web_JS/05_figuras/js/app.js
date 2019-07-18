import {Triangulo, Circulo, Cuadrado } from "./modelos.js";

export function app() {
    console.log('Cargada app') 

    // Nodos del DOM
    const aBotones = document.querySelectorAll('.btn')
    const aInputs = document.querySelectorAll('input')
    const aOutputs = document.querySelectorAll('output')

    // Asignación de los manejadores

    aBotones.forEach(btn =>btn.addEventListener(
        'click', onBtnClick));

    // Manejadores y otros métodos

    function onBtnClick (ev) {
        switch (ev.target.id) {
            case 'triangulo':
                new Triangulo(aInputs[0].value, aInputs[1].value)
                .render(aOutputs[0].value)
                break;
            case 'cuadrado':
                new Cuadrado(aInputs[2].value).render(aOutputs[1].value)
                break;
            case 'circulo':
                new Circulo(aInputs[3].value).render(aOutputs[2].value)
                break;
        }
    }
 }