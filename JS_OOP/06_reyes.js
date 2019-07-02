{
    const aReyes = [
            'Fernando', 'Isabel', 'Juana', 'Carlos', 'Felipe', 'Luis',
            'Jose', "Amadeo", 'Alfonso', 'Juan Carlos' ]

    function isNombreRey(nombre) {
        for (let i = 0; i < aReyes.length; i++) {
            const item = aReyes[i];
            if ( nombre.toUpperCase() == item.toUpperCase()) {
                return [true, i]
            }
        } 
        return [false]
    }

    function mostrarIsRey(nombre) {

        let [isRey, position] = isNombreRey(nombre)

        const mensajes = [
            `El nombre ${nombre.toUpperCase() }, no ha sido usado por ningun rey de España`,
            `El nombre ${nombre.toUpperCase() }, ha sido usado por algun rey de España
            y es el número ${++position} de la lista`
        ]
        console.log( mensajes[+isRey]) 
    }

    //mostrarIsRey('fernando')
    //mostrarIsRey('Federico')

    console.log(aReyes.indexOf('Fernando'.toUpperCase()))
    console.log(aReyes.indexOf('Amadeo'))
    console.log(aReyes.indexOf('Federico'))

    // ES 2016 (ES7)

    console.log(aReyes.includes('Fernando'))
    console.log(aReyes.includes('Ramon'))
    
}