import { Crono } from "./crono.js";

export function app() {
    console.log('Cargada app') 
    
    let btnSalir = document.querySelector('#btn-salir')
    let dlgCancelar = document.querySelector('#dlg-cancelar')
    let btnCancelar = document.querySelector('#btn-cancelar')
    let dlgTime = document.querySelector("#dlg-time")
    let wrapperCronos = document.querySelector(".wrapper-cronos")
    let inPlayer = document.querySelector('#in-player')
    let btnInscribir = document.querySelector('#btn-inscribir')
    let handlerSalir
    let handlerInterval

    btnSalir.addEventListener('click', onClick)
    btnCancelar.addEventListener('click', onCancel)
    btnInscribir.addEventListener('click', onInscribir)

    let aCronos =  []
    if (localStorage.getItem('players')) {
        aCronos = JSON.parse(localStorage.getItem('players'))
    }
    checkArray()

    function checkArray() {
        wrapperCronos.innerHTML = ''
        aCronos.forEach( idCrono => { 
            new Crono(idCrono, wrapperCronos)
        })
        // wrapperCronos.innerHTML += `<p>Creados los cronómetros</p>`    
    }

    function onClick() {
        let url = 'https://www.google.com/'
        handlerSalir = setTimeout(() => location.assign(url),
                    4800)
        dlgCancelar.showModal()
        dlgTime.value = 5
        handlerInterval = setInterval( () => {
            dlgTime.value -= 1
        }, 1000)
    }

    function onCancel() {
        clearTimeout(handlerSalir)
        clearInterval(handlerInterval)
        dlgCancelar.close()
    }

    function onInscribir() {
        let player = inPlayer.value
        if (player) {
            aCronos.push(player)
            localStorage.setItem('players', JSON.stringify(aCronos))
            inPlayer.value = ''
            console.log(aCronos)
        }

        checkArray()
    }
 }