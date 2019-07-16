console.log('Cargada app')

function saludar() {
    console.log('Hola, desde una función')
}

console.log(document)
console.dir(document)

document.querySelector('#btn-super').onclick = saludar