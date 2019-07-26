export function app() {
    console.log('Cargada app') 

    function samples() {
        let h2 = document.querySelector('h2')
        h2.id = "h2-01"
        h2.name = "h2-01"
        h2.setAttribute('title', 'Esto es una tonta')
        console.log(h2.name)
        console.log(h2.getAttribute('title'))
        // h2.className += 'cl4'
        h2.classList.add('cl4')
        h2.classList.remove('cl2')
        h2.classList.toggle('cl3')
        h2.classList.toggle('cl3')        
    }
    
    let aBtn = document.querySelectorAll('#art1 .boton')
    let texto = document.querySelector('#texto')

    aBtn.forEach (btn => 
        btn.addEventListener('click', onClickBoton))
    

    function onClickBoton() {
        texto.classList.toggle('oculto')
        aBtn.forEach(btn => btn.classList.toggle('oculto'))
    }

    /** Segundo article */

    let aOpcionales = document.querySelectorAll('#art2 .opcional')
    let aBotones = document.querySelectorAll('#art2 .btn')
    
    aBotones.forEach(btn => btn.addEventListener('click', 
        onClick))

    function onClick() {
        aOpcionales.forEach(item => 
            item.classList.toggle('oculto')
        );
    }

    /** Seccion Preguntas */
    
    let aPreguntas = document.querySelectorAll('.q')
    let aRespuestas = document.querySelectorAll('.respuesta')

    aPreguntas.forEach(btn => btn.addEventListener('click', 
    onClickQ))

    function onClickQ(ev) {
        aRespuestas.forEach(res => res.classList.add('oculto'))
        ev.target.nextElementSibling.classList.toggle('oculto')
    }
    

    /** Seccion boton */

    let superBoton = document.querySelector('.super-boton')
    superBoton.addEventListener('mouseover', onMouse)
    superBoton.addEventListener('mouseout', onMouse)

    function onMouse() {
        superBoton.classList.toggle('hover-boton')
    }
 }