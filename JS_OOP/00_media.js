/**
 * @description: función que calcula la media de n números independientes
 * @param {[]number} aDatos
 * @returns {number}
 * 
 */

 function media(...aDatos) {
     let r = 0
     for (let i = 0; i < aDatos.length; i++) {
        const item = aDatos[i];
        r += item
    }
    return r / aDatos.length
 }

 console.log(media(2, 4, 7, 2, 4, 4))

function mediaArray(aDatos = []) {
    let r = 0
    for (let i = 0; i < aDatos.length; i++) {
        const item = aDatos[i];
        r += item
    }
    return r / aDatos.length
}

console.log(mediaArray([2, 4, 7, 2, 4, 4]))



function mediaTotal(...aDatos) { // rest operator 
    let r = 0
    let n = 0
    r += sumaTotal(...aDatos)// spread operator
    console.log(n)
    return r / n 
    
    function sumaTotal(...aDatos)  { // rest operator 
        let s = 0
        for (let i = 0; i < aDatos.length; i++) {
            const item = aDatos[i];
            if( Array.isArray(item)) {
                s += sumaTotal(...item) // spread operator
            } else {
                s += item
                n++ 
            }
        }
        return s
    }
}


console.clear()
console.log(media(2, 4, 7, 2, 4, 7, 2, 4, 4, 2, 4, 4))
console.log(mediaTotal([2, 4], 7, 2, 4, [7, 2, 4, 4], 2, 4, 4))
console.log(mediaTotal([2, 4], 7, 2, 4, [7, [2, 4], 4], 2, 4, 4))