class State {
	constructor(color){
		this.color = color
	}
	handle(context) {
		console.log(`切换到 ${this.color} `)
		context.setState(this)
	}
}

class Context {
	constructor() {
		this.state = null
	}
	getState() {
		return this.state
	}
	setState(state) {
		this.state = state
	}
}

let context = new Context()
let green = new State('绿灯')
let yellow = new State('黄灯')
let red = new State('红灯')
// 绿灯亮了
green.handle(context)
console.log(context.getState())
// 黄灯亮了
yellow.handle(context)
console.log(context.getState())
// 红灯亮了
red.handle(context)
console.log(context.getState())





