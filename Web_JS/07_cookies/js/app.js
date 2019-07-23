import { setCookie, getCookie } from "./cookies.js";

export function app() {
    console.log('Cargada app') 

    // Nodos
    let aBotones = document.querySelectorAll('button')
    let output = document.querySelector('output')

    // Manejadores 
    aBotones.forEach(btn => {
        btn.addEventListener('click', onClick)
    });

    let numVisitas  = getCookie('visitas');
    console.log(numVisitas)
    if (numVisitas !== '') {
        setCookie("visitas", ++numVisitas, 5);
    }
    
    // Funciones manejadoras

    function onClick(ev) {
        switch (ev.target.textContent) {
            case 'Iniciar': 
                setCookie('visitas', 0, 5)
                location.reload()
                break;
            case 'Eliminar':
                setCookie('visitas', 0, -2)
                location.reload()
                break;
            case 'Mostrar':
                output.value = numVisitas
                break;
            case 'Recargar':
                location.reload()
                break;
        }
    }
 }