export function validacion() {

    let userName = document.querySelector('#userName')
    // userName.addEventListener('input', onUserInput)
    userName.addEventListener('blur', onUserInput)
    console.dir(userName)

    function onUserInput(ev) {
        let nodo = ev.target
        console.dir(nodo)
        // if (!nodo.validity.valid) { 
           if( !nodo.checkValidity()) {
            nodo.nextElementSibling.innerHTML = 
                nodo.validationMessage
            nodo.nextElementSibling.hidden = false    
        }
    }
}

export function validacionFinal(nodos) {
    console.dir(nodos)
    let r = false
    nodos.some(nodo => {
        if( !nodo.checkValidity()) {
            nodo.parentNode.nextElementSibling.innerHTML = 
                nodo.validationMessage
            nodo.parentNode.nextElementSibling.hidden = false
            r = false  
            return true  
        } else {
            r = true
            nodo.parentNode.nextElementSibling.hidden = true
        }
    });

    return r
}