
    const aDatos = ['perro', 'gato']
    aDatos.length

    // Implementadas como inmutables
    console.log(aDatos.concat(['leon', 'tigre']))
    console.log(aDatos)

    // Implementadas com mutables
    aDatos.sort()
    console.log(aDatos)

    const aNumbers = [32, 3, 2, 21, 56, 5, 9]
    // creamos un clon del array
    const aNumerosOriginal = aNumbers.slice()

    aNumbers.sort( (a,b) => a-b )
    console.log(aNumbers)
    console.log(aNumerosOriginal.reverse())
    console.log(aNumerosOriginal)

    let nombres = ['luis', 'ramon', 'juan', 'rosa', 'julia', 'maria']
    
    // fraccionar arrays : inmutable
    let seleccion = nombres.slice(1, 3)
    console.log(seleccion)
    console.log(nombres)

    // CLONAR
    let clon = nombres.slice()
    
    // fraccionar arrays : mutable

    let eliminados = nombres.splice(1, 3, 'pedro', 'ernesto')
    console.log(eliminados)
    console.log(nombres)

    // splice para añadir

    let paises = ['francia', 'italia', 'hungría', 'holanda']
    console.log(paises.splice(2, 0, 'españa' ))
    console.log(paises)

    // Pilas y colas

    // PILA -> stack FiLO

    console.log(paises.push('portugal', 'alemania'))
    paises.pop()
    console.log(paises)

    // COLAS -> heap FIFO

    paises.unshift('croacia')
    console.log(paises)
    paises.shift()
    console.log(paises)
    
