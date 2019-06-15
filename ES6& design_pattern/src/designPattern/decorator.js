// class Circle{
// 	draw(){
// 		console.log('画个狗')
// 	}
// }

// class Decorator{
// 	constructor(){
// 		this.circle = new Circle()
// 	}
// 	draw(){
// 		this.circle.draw()
// 		this.myFunc()
// 	}
// 	myFunc(circle){
// 		console.log('巴拉巴拉...')
// 	}
// }
// let circle = new Circle()
// circle.draw()
// console.log('------分割线------')
// let dec = new Decorator()
// dec.draw()

// @testDec
// class Demo{
// }
// function testDec(target){
// 	target.func = function(){
// 		alert('哈哈哈 你好嘢')
// 	}
// }
// Demo.func()

// @testDec('你大爷')
// class Demo{

// }
// function testDec(str){
// 	return function(target){
// 		target.speek = str
// 	}
// }
// alert(Demo.speek)

function mixins(...list){
	return function (target) {
		Object.assign(target.prototype,...list)
	}
}
const Foo = {
	foo(){
		alert('foo')
	}
}
const Hoo = {
	hoo(){
		alert('hoo')
	}
}

@mixins(Foo)
@mixins(Hoo)
class Myclass {
	// 还是会保留原型
	// console.log(Myclass.prototype)
}

let obj = new Myclass()
// obj.foo()
// obj.hoo()

function readonly (target,name,descriptor) {
	descriptor.writable = false
	return descriptor
}

class Person {
	constructor() {
		this.first = 'A'
		this.last = 'B'
	}

	@readonly
	speek() {
		return `${this.first}  ${this.last}`
	}
}

let p = new Person()
// p.speek = function () {} 会报错

function log(target,name,descriptor) {
	let oldValue = descriptor.value
	descriptor.value = function() {
		console.log(`calling ${name} with`,arguments)
		return oldValue.apply(this,arguments)
	}
	return descriptor
}
class Math {
	@log
	add(a,b){
		console.log(a+b)
		// return a + b
	}
}

let m = new Math()
m.add(1,2)

