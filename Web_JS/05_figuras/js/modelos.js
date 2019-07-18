class Figura {
    constructor(nombre = '') {
        this.area = 0
        this.nombre = nombre
    }
    calcularArea() {}

    render(output = '') {
        output = 
        `El area del ${this.nombre} es ${this.area.toFixed(2)}`
    }
}

export class Triangulo extends Figura {
    constructor(base = 0, altura = 0) {
        super('triángulo')
        this.base = base
        this.altura = altura
        this.calcularArea()
    }
    calcularArea() {
        this.area = (this.base * this.altura)/2
    }
}

export class Cuadrado extends Figura {
    constructor(lado = 0) {
        super('cuadrado')
        this.lado = lado
        this.calcularArea()        
    }
    calcularArea() {
        this.area = this.lado * this.lado
    }
}

export class Circulo extends Figura {
    constructor(radio = 0) {
        super('circulo')
        this.radio = radio
        this.calcularArea()
    }
    calcularArea() {
        this.area = Math.PI * this.radio**2
    }
}