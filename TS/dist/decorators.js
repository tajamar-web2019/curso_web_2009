var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function course(target) {
    /* Object.defineProperty(
        target.prototype,
        'course',
        {value: "Angular 2"}
    ) */
    target.prototype.course = "Angular 2";
}
let Person = class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
};
Person = __decorate([
    course,
    __metadata("design:paramtypes", [Object, Object])
], Person);
let oPersona = new Person("Pepe", "Pérez");
console.log(oPersona);
console.log(oPersona['course']); // Angular 2
console.log('---------------------------------');
function Student(config) {
    return function (target) {
        /* Object.defineProperty(
            target.prototype,
            'course',
            {value: config.course}
        ) */
        target.prototype.course = config.course;
    };
}
// {value: () => config.course} 
// añadiria la propiedad como un acceso
// oEstudiante['course']()
let Persona = class Persona {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
};
Persona = __decorate([
    Student({
        course: "Angular 8"
    }),
    __metadata("design:paramtypes", [Object, Object])
], Persona);
let oEstudiante = new Persona("Pepe", "Pérez");
console.log(oEstudiante);
console.log(oEstudiante['course']); // Angular 2
//# sourceMappingURL=decorators.js.map