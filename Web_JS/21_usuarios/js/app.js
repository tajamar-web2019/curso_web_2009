import { USERS } from './api.js'
export function app() {
    console.log('Cargada app')
    let aUsers = []
    getDatos()

    // Nodos del DOM
    let aInputs = document.querySelectorAll('input')
    let btnAdd = document.querySelector('#btn-add')
    let tbUsuarios = document.querySelector('#tb-usuarios')
    
    // Asociación de manejadores de eventos
    btnAdd.addEventListener('click', onClickAdd)

    // Funciones manejadoras de eventos
    function onClickAdd() {
        let oUser = {
            nombre: aInputs[0].value,
            edad: aInputs[1].value
        }
        console.log(oUser)
        let cabecera = new Headers({
            'Content-Type':  'application/json'
        })
        fetch(USERS, {
            method: 'POST',
            headers: cabecera, 
            body: JSON.stringify(oUser) })
    }

    // Otras funciones

    function getDatos() {
        fetch(USERS)
        .then( response => response.json())
        .then( data => {
            aUsers = data
            renderData()
        })
    }

    function renderData() {
        let html = `
        <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Edad</th>
        </tr>`
        aUsers.forEach(item => html += `
        <tr>
            <td>${item.id}</td>
            <td>${item.nombre}</td>
            <td>${item.edad}</td>
        </tr>` );
        tbUsuarios.innerHTML = html
    } 

    function renderError(error) {
        pError.innerHTML = 'error de conexión: ' + error
    }
}