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
        inAnimal.value = ''
        save()
        render()
    }

    function save() {
        localStorage.setItem('zoo', JSON.stringify(animales))
    }
    
    function render() {
        let html = '' 
        html += '<ul>'
        animales.forEach((item, i) => html += 
            `<li>
                <span class="texto" data-id="${i}">${item}</span>
                <span class="btn btn-editar" data-id="${i}">️✍️</span>  
                <span class="btn btn-borrar" data-id="${i}">🗑️</span>
            </li>`)
        html += '</ul>'
        outAnimal.innerHTML = html

        let aBtnBorrar = document.querySelectorAll('.btn-borrar')
        let aBtnEditar = document.querySelectorAll('.btn-editar')
        let aTextos = document.querySelectorAll('.texto')

        aBtnBorrar.forEach(btn => btn.addEventListener('click', onBorrar))
        aBtnEditar.forEach(btn => btn.addEventListener('click', onEditar))
        aTextos.forEach(txt => txt.addEventListener('blur', onChange))
    }

    function onBorrar(ev) {
        console.log(ev.target.dataset.id)
        animales.splice(ev.target.dataset.id, 1)
        save()
        render()
   }

   function onEditar(ev) {
    console.log(ev.target.dataset.id)
    ev.target.previousElementSibling.contentEditable = true
    console.dir(ev.target.parentNode)
   }

   function onChange(ev) {
    ev.target.contentEditable = false
    animales.splice(
        ev.target.dataset.id, 1, ev.target.textContent)
    save()
    render()
   }
}



