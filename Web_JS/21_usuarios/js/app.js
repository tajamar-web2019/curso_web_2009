import { USERS } from './api.js'
import dialogPolyfill from '../node_modules/dialog-polyfill/index.js';

export function app() {
    console.log('Cargada app')
    let aUsers = []
    let userActual = {} 
    let cabecera = new Headers({
        'Content-Type': 'application/json'
    })
    getDatosAwait()

    // Nodos del DOM
    let aInputs = document.querySelectorAll('input')
    let btnAdd = document.querySelector('#btn-add')
    let tbUsuarios = document.querySelector('#tb-usuarios')
    let aBtnEditar = [] // Toman valor tras renderizar la tabla
    let aBtnBorrar = [] // Toman valor tras renderizar la tabla
    let dlgBorrar = document.querySelector('#dlg-borrar')
    dialogPolyfill.registerDialog(dlgBorrar); 
    let dlgEditar = document.querySelector('#dlg-editar')
    dialogPolyfill.registerDialog(dlgEditar);  

    let nodosBorrar = {
        nombre: document.querySelector('#out-nombre-editar'),
        edad: document.querySelector('#out-edad-editar'),
        confirmar: document.querySelector('#btn-borrar'),
        cancelar:document.querySelector('#btn-cancel-borrar')
    }
    let nodosEditar = {
        nombre: document.querySelector('#in-nombre-editar'),
        edad: document.querySelector('#in-edad-editar'),
        confirmar: document.querySelector('#btn-update'),
        cancelar:document.querySelector('#btn-cancel-update')
    }

    // Asociación de manejadores de eventos
    btnAdd.addEventListener('click', onClickAdd)
    nodosBorrar.confirmar.addEventListener('click', onDlgBorrar)
    nodosBorrar.cancelar.addEventListener('click', onDlgBorrar)
    nodosEditar.confirmar.addEventListener('click', onDlgEditar)
    nodosEditar.cancelar.addEventListener('click', onDlgEditar)

    // Funciones manejadoras de eventos
    function onClickAdd() {
        let oUser = {
            nombre: aInputs[0].value,
            edad: aInputs[1].value
        }
        console.log(oUser)
        fetch(USERS, {
            method: 'POST',
            headers: cabecera, 
            body: JSON.stringify(oUser) })
        .then (response => response.json())
        .then (data => {
            if(data.id > 0) {
                getDatos()
            }
        })
    }

    function openModal(ev) {
        let id
        if (ev.target.tagName == 'TD') {
            id = ev.target.dataset.id
        } else { // ev.target.tagName == 'I'
            id = ev.target.parentElement.dataset.id
        }
        userActual = aUsers.find(item => item.id == id)
        console.log(userActual)
        if (ev.target.classList.contains('btn-editar') || 
            ev.target.parentElement.classList.contains('btn-editar') ) {
            setEditarModal()
        } else {
            setBorrarModal()
        }
    }

    function setEditarModal() {
        nodosEditar.nombre.value = userActual.nombre
        nodosEditar.edad.value = userActual.edad
        dlgEditar.showModal()
    }

    function setBorrarModal() {
        nodosBorrar.nombre.value = userActual.nombre
        nodosBorrar.edad.value = userActual.edad
        dlgBorrar.showModal()
    }

    function onDlgBorrar(ev) {
        if(ev.target.id == 'btn-borrar') {
            let url = USERS + '/' + userActual.id
            fetch(url, {method: 'DELETE'})
            .then( response => response.json() )
            .then ( () => getDatosAwait() )
        }
        dlgBorrar.close()
    }

    function onDlgEditar(ev) {
        if(ev.target.id == 'btn-update') {
            // Actualizar PUT / PATCH
            let oUser = {
                nombre: nodosEditar.nombre.value,
                edad: nodosEditar.edad.value
            }
            let url = USERS + '/' + userActual.id
            fetch(url, {
                method: 'PUT',
                headers: cabecera, 
                body: JSON.stringify(oUser) })
            .then( response => response.json())
            .then( data => {
                console.log(data)
                getDatosAwait()
            })
            
        }
        dlgEditar.close()
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
    
    async function getDatosAwait() {
        let response = await fetch(USERS)
        aUsers = await response.json()
        renderData()
    }

    function renderData() {
        let html = `
        <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th></th>
            <th></th>
        </tr>`
        aUsers.forEach(item => html += `
        <tr>
            <td>${item.id}</td>
            <td>${item.nombre}</td>
            <td>${item.edad}</td>
            <td class='boton btn-editar' data-id="${item.id}">
                <i class="fas fa-edit"></i></td>
            <td class='boton btn-borrar' data-id="${item.id}">
                <i class="fas fa-trash-alt"></i></td>
        </tr>` );
        tbUsuarios.innerHTML = html
        actualizarBotones()
    } 

    function actualizarBotones () {
        // Nodos del DOM
        aBtnEditar = document.querySelectorAll('.btn-editar')
        aBtnBorrar = document.querySelectorAll('.btn-borrar')
        // Asociación de manejadores de eventos
        aBtnBorrar.forEach(item => 
            item.addEventListener('click', openModal))
        aBtnEditar.forEach(item => 
                item.addEventListener('click', openModal))
    }

    function renderError(error) {
        pError.innerHTML = 'error de conexión: ' + error
    }
}