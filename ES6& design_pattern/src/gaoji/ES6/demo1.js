class Animal {
	constructor(name) {
		this.name = name
	}
	eat() {
		console.log('name: ' + this.bark)
	}
	nimei() {
		
	}
}
class Dog extends Animal {
	constructor(name) {
		super()
		this.name = name
	}
	bark() {
		console.log('汪汪')
	}
}
let d = new Dog('二哥')
d.bark()
d.eat()
