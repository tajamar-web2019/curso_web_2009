export function app() {
    console.log('Cargada app') 

    const aCursosFront = [
        {code: "HTML-01", titulo: 'HTML5'},
        {code: "CSS-02", titulo: 'CSS3'},
        {code: "JS-03", titulo: 'JavaScript'}
    ]

    const aCursosBack = [
        {code: "Node-04", titulo: 'Node JS'},
        {code: "PHP-05", titulo: 'PHP'}
    ]

    const aSelects = document.querySelectorAll('select')
    aSelects[0].addEventListener('change', onSelectTech)
    aSelects[1].addEventListener('change', onSelectCurso)


    function onSelectTech(ev) {
        let aCursos
        switch (ev.target.value) {
            case 'F':
                aCursos = aCursosFront
                break;
            case 'B':
                aCursos = aCursosBack
                break;
        }
        let html = '<option value="">Elige un curso</option>'
        aCursos.forEach(item => {
            html += `
            <option value="${item.code}">${item.titulo}
            </option>
            `
        })
        aSelects[1].innerHTML = html
        aSelects[1].disabled = false 
    }


    function onSelectCurso(ev) {
        console.log('Elegido el curso', ev.target.value )

    }
 }