class Car{
	constructor(number,name){
		this.number = number
		this.name = name
	}
}

class Kuaiche extends Car{
	constructor(number,name){
		super(number,name)
		this.price = 1
	}
}

class Zhuanche extends Car{
	constructor(number,name){
		super(number,name)
		this.price = 2
	}
}

class Trip{
	constructor(car,kilo){
		this.car = car
		this.kilo = kilo
	}

	start(){
		console.log(this.car.name,this.car.number)
	}

	end(){
		console.log(`花费 ${this.car.price * this.kilo} 元`)
	}
}

let car = new Kuaiche(10086,'飞度')
let trip = new Trip(car,5);

trip.start()
trip.end()
export default trip

