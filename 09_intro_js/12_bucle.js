let limite = 10

let suma = 0
for (let i = 0; i < limite; i++) {
   let cuad = i*i
    console.log(i, cuad )
    suma = suma + cuad
}

console.log(suma)


const aDatos = [
    'Perro',
    'Gato',
    'Caballo',
    'Ornitorrinco'
]

for (let i = 0; i < aDatos.length; i++) {
    let item = aDatos[i];
    if (i > 0) {
        item = item + 's'
    }
    console.log(`Tengo ${i+1} ${item}`)
    
}