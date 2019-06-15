// class Iterator{
// 	constructor(container){
// 		this.list = container.list
// 		this.index = 0
// 	}
// 	next(){
// 		if(this.hasNext()){
// 			return this.list[this.index++]
// 		}
// 		return null
// 	}
// 	hasNext(){
// 		if(this.index >= this.list.length){
// 			return false
// 		}
// 		return true
// 	}

// }

// class Container{
// 	constructor(list){
// 		this.list = list
// 	}
// 	getIterator(){
// 		return new Iterator(this)
// 	}
// }

// let arr = [1,2,3,4,5,6]
// let container = new Container(arr)
// let iterator = container.getIterator()
// while(iterator.hasNext()){
// 	console.log(iterator.next())
// }

function each(data) {
	let iterator = data[Symbol.iterator]()
	// console.log(iterator.next())
	let item = {done:false}
	while(!item.done) {
		item = iterator.next()
		if(!item.done){
			console.log(item)
		}
	}
}
function forEach(data) {
	// data[Symbol.iteator] 要具有遍历器对象
	// 对象不具有Symbol.iteator 此属性
	for(let item of data){
		console.log(item)
	}
}

let obj = {0:'abc',1:'ggh',2:'yyu'}
let arr = [1,2,3,4]
let nodeList = document.getElementsByTagName('h2')
let m = new Map()
m.set('a',100)
m.set('b',200)
// each(obj)
forEach(obj)
// each(nodeList)
// each(m)




