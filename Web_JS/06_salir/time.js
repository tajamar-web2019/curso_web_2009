

let handler = setTimeout( () => {
    console.log('Hola')
}, 2500 )

setTimeout( () => {
    clearTimeout(handler)
}, 2000)

let i = 0
setInterval( () => {
    console.log(++i)
}, 100)