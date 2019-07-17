export function app() {
    console.log('Cargada app')
    console.log(document)
    console.dir(document)

    // Nodos del DOM
    const btnNormal = document.querySelector('#btn-normal')
    const btnSuper = document.querySelector('#btn-super')
    const inNombre = document.querySelector('#in-nombre')
    const outSaludo = document.querySelector('#out-saludo')

    const inNombre2 = document.querySelector('#in-nombre2')
    const outSaludo2 = document.querySelector('#out-saludo2')


    /* Otra opción seria
    const nodos = {
        btnNormal : document.querySelector('#btn-normal'),
        btnSuper : document.querySelector('#btn-super'),
        inNombre : document.querySelector('#in-nombre'),
        outSaludo : document.querySelector('#out-saludo')    
    } */

    // Manejadores de eventos
    btnNormal.addEventListener('click', saludar)
    btnSuper.addEventListener('click', protestar)

    inNombre2.addEventListener('input', escribirContinuo)

    function saludar() {
        outSaludo.textContent =
            `Hola ${inNombre.value}`
    }

    function protestar() {
        outSaludo.value = 
            'Te he dicho que no tocaras'
    }

    function escribirContinuo() {
        outSaludo2.value = inNombre2.value
    }
}
