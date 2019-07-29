export function app() {
    console.log('Cargada app') 

    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', calcularOffset )
    
    let header = document.querySelector('body>header')
    let divTop = document.querySelector('div.top')
    let aSections = document.querySelectorAll('section')
    let isSticky = false;
    let aOffsets = []

    let aEnlaces = document.querySelectorAll('nav a')
    aEnlaces.forEach((enlace, i) => enlace.addEventListener(
        'click', (ev) => {onClickMenu(ev, i) }
    ))

    function calcularOffset () {
        aOffsets = []
        aSections.forEach( 
            item => aOffsets.push(item.offsetTop)
        )
        console.dir(aOffsets)    
    }


    function onScroll(ev) {
        // console.log(ev)
        let y = ev.target.scrollingElement.scrollTop
        //console.log(y)
        if (y >= 40 && !isSticky) {
            header.classList.add('sticky')
            divTop.classList.add('top-sticky')
            isSticky = !isSticky
            calcularOffset()
        } else if (y < 40 && isSticky ) {
            header.classList.remove('sticky')
            divTop.classList.remove('top-sticky')
            calcularOffset()
            isSticky = !isSticky
        }
        spyScroll(y)
    }

    function spyScroll(scrollElement) {
        setActive(aOffsets.length-1)
        for (let i = 1; i < aOffsets.length; i++) {
            if (scrollElement < aOffsets[i] - 90) {
                setActive(i-1) 
                break
            }
        } 
        /* aOffsets.some( (item, i) => {
            if (scrollElement < item - 90) {
                setActive(i-1) 
                return true
            }
        }) */
    }
    
    function spyScrollBad (scrollElement) {
        console.log(scrollElement)
        if (scrollElement < aOffsets[1] - 90) {
            setActive(0) 
        } else if (scrollElement < aOffsets[2] -90 ) {
            setActive(1)
        } else if (scrollElement < aOffsets[3] -90 ){
            setActive(2)
        } else if (scrollElement < aOffsets[4] -90 ){ 
            setActive(3)
         } else {
            setActive(4)
        }
    }

    function onClickMenu(ev, i) {
        ev.preventDefault()
        calcularOffset()
        console.log(aOffsets[i])
        window.scrollTo(0,aOffsets[i]-90)
        setActive(i)
    }

    function setActive(i) {
        aEnlaces.forEach(enlace => 
            enlace.classList.remove('active')
        )
        aEnlaces[i].classList.add('active')
    }
 }