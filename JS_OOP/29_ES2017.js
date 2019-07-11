/**
 * ES2017 (ES8): async / await
 */


const respuestas = [
    '',
    ['Esto es un mensaje', 3],
    ,
    ['construido a cachitos', 7],
    ,
    ,
    ,
    ['mediante la lectura secuencial', 8],
    ['de varios items de un array', 9 ]
]

function leerDatosAsinc(i, timer = 1000) {
    return new Promise( (resolve, reject)=>{
        setTimeout(() => {
            if (i) {
                console.log(`lectura de datos número ${i}`)
                resolve(respuestas [i]) 
            } else {
                reject(new Error('Error de lectura'))
            }
        }, timer)
    })

} 

// async function main () {


const main = async () => {
    let aDatos = []
    let i = 0
    try {
        aDatos = await leerDatosAsinc(i, 2000)
        console.log(aDatos[0])
        i = aDatos[1]
        aDatos =  await leerDatosAsinc(i, 3000)
        console.log(aDatos[0])
        i = aDatos[1]
        aDatos = await leerDatosAsinc(i, 2000)    
        console.log(aDatos[0])
        i = aDatos[1]
        aDatos = await leerDatosAsinc(i, 1000)
        console.log(aDatos[0])  
        console.log('Leyendo los datos')   
    } catch (error) {
        console.log(error.message)
    }    
}     

main()

   
