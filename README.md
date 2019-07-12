# curso_web_2009
Curso Web Tajamar 2019

## JS ##

### Intro ###

'use strict'

#### Datos ##### 

- Indefinidos: 
    - undefine
- Primitivos
    - number
    - string
    - boolean
- Referenciados: 
    - objects
            - Array
            - Date
            - Error
            - RegExp
            - Math
            - JSON
            - Function

#### Variables y constantes ####

Tipo: débiles (implícitos al valor) y dinámicos

Variables
    - Ciclo de vida: 
        declaración & inicialización : asignación

Ámbito
    - global
    - local 
        - al bloque => let / const (ES6)
        - a la función => var

Constantes
    - Ciclo de vida: declaración + inicialización 

Constantes referenciadas -> es constante la referencia

```JS
let x = {}
let y
y = x // Dos referencias la mismo objeto
```
El paso de parametros referenciads 
solo pas a la referencia

```JS
function algo(obj) { obj.nombre = 'Pepe'}
algo(x)
```

Hoisting de funciones declaradas y variables var (solo la declaración)

#### Casting #### 
 
Cambio de tipo temporal durante una operación

Casting a string

```JS 
let n = 23
let msg = 'Juan tiene ' + n // 'Juan tiene 23'
console.log(typeof n)
```

Casting a number

```JS 
let indice = '34'
let incremento = indice * 0.10
```

Casting a boolean

Falsy: 

    - false
    - undefined
    - null
    - 0
    - NaN
    - ''

Truly
    - true
    - 23
    - -34
    - ' '
    - 'Pepe'
    - {}
    - []

Operadores

Asignación: =, +=, ...
Aritméticos: + - * / % **
    Unarios: +, -, ++, --
De bits: ^(XOR)
Relacionales: == , !=, ===, !==, >, <, <=, >=
Operadores lógicos: && (y) || (o)

#### Ejercicios ####

- Funciones aritmeticas básicas / función de renderizacion
- Casting (07_casting.js) - control básico de entrada de "operables" 
- Comprobar edad (08_booleans.js - 09_errores.js)
    - Control de entrada de "operables" y control de errores
- Comprobar paridad (10_pares.js - 11_pares_try.js)
    - Testing con jasmine

### JS Core - continuación ###

Estructuras de control

- if
    switch / case

- for
    for (const key in array / object)
    for (const iterator of array /string) 
    do / while
    while

#### Ejercicios ####

- Multiplos (02_multiplos.js)
- Funciones aritmeticas básicas con gestión de errores (03_calculos.js)
- Suma de cuadrados (04_funciones.js)
- Recorres objetos recursivo (06_recorrer_objetos)


