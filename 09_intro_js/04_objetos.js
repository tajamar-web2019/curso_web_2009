'use strict'

function ejemplo () {
    let v = 160
    let a = 4
    let modelo = 'RAV'
    let marca = 'Toyota'
    
    let coche = {
        v: 160,
        a : 4,
        modelo : 'RAV',
        marca : 'Toyota',
        usuarios : ['Pepe', 'Elena', 'Rosa']       
    }

    // Array, lista, arreglo
    let aDatos = [2, 4, 6, 7, 37]

    console.log(coche) 
    console.log(coche.marca) 
}

ejemplo()

// Objeto JSON o literal

let persona = {
    fullNombre : {
        nombre : 'Pepe',
        apellidos : 'Pérez'
    },
    edad : {
        valor: 20,
        unidad: ' años'
    },
    altura : 178,
    isMujer: false,
    formacion : 'Ingeniero',
    aficiones : ['leer', 'bailar', 'programar']
}


  console.log(persona)