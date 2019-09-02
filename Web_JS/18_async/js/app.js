export function app() {
    console.log('Cargada app')
    
    const usersURL = 'https://jsonplaceholder.typicode.com/users'
    const http = new XMLHttpRequest()

    // Nodos del DOM
    let btnBuscar = document.querySelector('#btn-buscar')
    let btnBorrar = document.querySelector('#btn-borrar')
    let inId = document.querySelector('#in-id')
    let spanSaludo = document.querySelector('#span-saludo')
 
    // Asociación de manejadores de eventos
    //btnGuardar.onclick = onClickGuardar
    btnBuscar.addEventListener('click', onClickBuscar)
    btnBorrar.addEventListener('click', onClickBorrar)

    // Funciones manejadoras de eventos
    function onClickBorrar(ev) {
        inId.value = '' 
        spanSaludo.innerHTML = inNombre.value
    } 

    function onClickBuscar(ev) {

        if(inId.value < 0 || inId.value > 10) {
            return
        }
        let url = usersURL + '/' + inId.value
        
        http.addEventListener('readystatechange', leerDatos)
        http.open('GET', url)
        http.send()  
    }


    function leerDatos(ev) {
        if (http.readyState == 4 && http.status == 200) {
            let data = JSON.parse(http.responseText) 
            console.log(data) 
            spanSaludo.innerHTML =  data.username
        } 
    }
}