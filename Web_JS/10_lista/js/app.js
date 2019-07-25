export function app() {

    // Existe un input #in-new
    // Existe un elemento #out-lista
      
    // Nodos
    let inAnimal = document.querySelector('#in-new')
    let outAnimal = document.querySelector('#out-lista')

    // Asignar manejador de eventos
    inAnimal.addEventListener('change', addAnimal)

    // Crear e inicializar el array
    let animales = [] 
    // ¿Existe storage?
    if(localStorage.getItem('zoo')) {
        animales = JSON.parse(localStorage.getItem('zoo'))
        render()
    }
    
    // let animales = (localStorage.getItem(animales)) ?
    //        localStorage.getItem(animales) : [] 

    // Funciones
    function addAnimal() {
        animales.push(inAnimal.value)
        localStorage.setItem('zoo', JSON.stringify(animales))
        console.log(JSON.stringify(animales))
        inAnimal.value = ''
        render()
    }
    
    function render() {
        let html = '' 
        html += '<ul>'
        animales.forEach(item => html += `<li>${item}</li>`)
        html += '</ul>'
        outAnimal.innerHTML = html
    }
}



