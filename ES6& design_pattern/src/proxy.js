// class RealImg {
// 	constructor(fileName){
// 		this.fileName = fileName
// 		this._loadFromDisk() 
// 	}
// 	display() {
// 		console.log('显示的文件是:' + this.fileName)
// 	}
// 	_loadFromDisk() {
// 		console.log('loading...' + this.fileName)
// 	}
// }
// class Proxy {
// 	constructor(fileName) {
// 		this.realImg = new  RealImg(fileName)
// 	}
// 	display() {
// 		this.realImg.display()
// 	}
// } 
// let proxy = new Proxy('text.txt')
// proxy.display()

const star = {
	name:'卢德华',
	age:25,
	phone:'star : 1387733333'
}
let agent = new Proxy(star,{
	get:function(target,key) {
		if(key === 'phone'){
			// 返回经纪人的电话
			return '经纪人电话: 10086'
		}
		if(key === 'price'){
			//经纪人的报价
			return 120000
		}
		return target[key]
	},
	set:function(target,key,val) {
		if(key === 'myPrice'){
			if(val < 100000){
				throw new Error('报价太低')
			}
			else{
				target[key] = val
				return true
			}
		}
	}
})
console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
// 自己的报价
agent.myPrice = 888888
console.log(agent.myPrice)
