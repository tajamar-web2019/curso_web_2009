function algoAsync() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            let n = Math.random()
            if ( n < 0.8) {
                // OK
                resolve(n)
            } else {
                // error
                reject(n)
            }
        }, 1000)
    })
}


/* algoAsync()
.then( datos => console.log('Acierto: ' + datos))
.catch( error => console.log('Error: ' + error)) */

// ES2017 

async function main () {
    try {
        let datos = await algoAsync()
        console.log('Acierto: ' + datos)    
    } catch (error) {
        console.log('Error: ' + error)
    }
}

main()