import StateMachine from 'javascript-state-machine'

let fsm = new StateMachine({
	init:'pending', // 初始化状态
	transitions:[
		{
			name:'resolve', // 事件名称
			from:'pending',
			to:'fullfilled'
		},
		{
			name:'reject', // 事件名称
			from:'pending',
			to:'rejected'
		}
	],
	methods:{
		// 监听resolve
		onResolve: function(state,data) {
			console.log(data.successList)
			// state - 当前状态机的实例; data - fsm.resolve(xxx)传递的参数
			data.successList.forEach(fn=>fn())
		},
		onReject: function() {
			// state - 当前状态机的实例; data - fsm.reject(xxx)传递的参数 
			data.failList.forEach(fn=>fn())
		}
	}
}) 

class MyPromise {
	constructor(fn) {
		this.successList = []
		this.failList = []
		fn(() => {
			// resolve 函数
			fsm.resolve(this)
		},() => {
			// reject 函数
			fsm.reject(this)
		})
	}
	then(successFn,failFn) {
		this.successList.push(successFn)
		this.failList.push(failFn)
	}
}

function loadImg(src) {
	const promise = new MyPromise(function(resolve,reject) {
		let img = document.createElement('img')
		img.onload = function() {
			resolve()
		}
		img.onerror = function() {
			reject()
		}
		img.src = src
	})
	return promise
}

let src = 'https://img.pc841.com/2018/0320/20180320094942914.jpg'
let result = loadImg(src)
result.then(function() {
	console.log('ok1')
},function() {
	console.log('fail1')
})

result.then(function() {
	console.log('ok2')
},function() {
	console.log('fail2')
})










