
const respuestas = [
    '',
    ['Esto es un mensaje', 3],
    ,
    ['construido a cachitos', 7],
    ,
    ,
    ,
    ['mediante la lectura secuencial', 8],
    ['de varios items de un array', ]
]


function leerDatosAsinc(i, timer = 1000, callback) {
    setTimeout(() => {
            console.log(`lectura de datos número ${i}`)
            callback(respuestas [i])
        }, timer)
} 

let i = 1
leerDatosAsinc(i, 2000, (aDatos) => {
    console.log(aDatos[0])
    i = aDatos[1]
    leerDatosAsinc(i, 3000, (aDatos) => {
        console.log(aDatos[0])
        i = aDatos[1]
        leerDatosAsinc(i, 2000, (aDatos) => {
            console.log(aDatos[0])
            i = aDatos[1]
            leerDatosAsinc(i, 1000, (aDatos) => {
                console.log(aDatos[0])    
            })
        })
    }) 
})


console.log('Leyendo los datos')
    





