// 工厂模式

class Product{
	constructor(name){
		this.name = name
	}
	init(){
		console.log('init')
	}
	fn(){
		console.log('fn!!!!')
	}
}
class Creator{
	create(name){
		return new Product(name)
	}
}

let creator = new Creator()
let p = creator.create('waybe')
p.init()
p.fn()