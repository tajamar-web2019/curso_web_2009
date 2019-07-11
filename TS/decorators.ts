function course(target) {
	/* Object.defineProperty(
		target.prototype, 
		'course', 
		{value: "Angular 2"}
    ) */
    target.prototype.course = "Angular 2"
}

@course
class Person {
	firstName;
	lastName;
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

let oPersona = new Person("Pepe", "Pérez");
console.log(oPersona)
console.log(oPersona['course']); // Angular 2
console.log('---------------------------------')

function Student(config) { 
	return function (target) {
		/* Object.defineProperty(
			target.prototype,
			'course',
			{value: config.course} 
        ) */
        target.prototype.course = config.course
	}
}
// {value: () => config.course} 
// añadiria la propiedad como un acceso
// oEstudiante['course']()

@Student({
	course: "Angular 8"
})
class Persona {
	firstName;
	lastName;
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

let oEstudiante = new Persona("Pepe", "Pérez");
console.log(oEstudiante)
console.log(oEstudiante['course']); // Angular 2