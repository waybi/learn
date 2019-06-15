// 车辆
class Car{
	constructor(number){
		this.number = number
	}
}

// 摄像头
class Camera{
	shot(car){
		return {
			num:car.number,
			inTime:Date.now()
		}
	}
}

// 出口显示屏
class Screen{
	show(car,inTime){
		console.log('车牌号',car.number)
		console.log('停车时间',Date.now() - inTime)
	}
}

// 停车场
class Park{
	constructor(floors){
		this.floors = floors || []
		this.camera = new Camera()
		this.screen = new Screen()
		this.carList = {} // 存储摄像头拍摄返回的车辆信息
	}
	in(car){
		// 通过摄像头获取信息
		const info = this.camera.shot(car)
		// 停到某个车位
		const i = parseInt(Math.random() * 100 % 100)
		// 停到第一层的某个车位
		const place = this.floors[0].places[i]
		place.in()
		info.place = place
		// 记录信息
		this.carList[car.number] = info
	}
	out(car){
		// 获取信息
		const info = this.carList[car.number]
		// 将停车位清空
		const place = info.place
		place.out()
		// 显示时间
		this.screen.show(car,info.inTime)
		// 清空记录
		delete this.carList[car.number]
	}
	emptyNum(){
		return this.floors.map(floor => {
			return `${floor.index}层还有 ${floor.emptyPlaceNumber()}车位`
		}).join('\n')
	}
}

// 层
class Floor{
	constructor(index,places){
		this.index = index
		this.places = places || []
	}
	emptyPlaceNumber(){
		let num = 0
		this.places.forEach(p=>{
			if (p.empty) {
				num += 1
			}
		})

		return num
	}
}

class Place{
	constructor(){
		this.empty = true
	}
	in(){
		this.empty = false
	}
	out(){
		this.empty = true
	}
}

// 测试 ----------
const floors = []
for (let i = 0; i < 3; i++) {
	const places = []
	for (let j = 0; j < 100; j++) {
		places[j] = new Place()
	}
	floors[i] = new Floor(i+1,places)
}

const park = new Park(floors)

// 初始化车辆
const car1 = new Car(100)
const car2 = new Car(200)
const car3 = new Car(300)
const car4 = new Car(400)

console.log('第一辆车进入')
console.log(park.emptyNum())
park.in(car1)

console.log('第二辆车进入')
console.log(park.emptyNum())
park.in(car2)

console.log('第三辆车进入')
console.log(park.emptyNum())
park.in(car3)

console.log('第一辆车离开')
park.out(car1)

console.log('第四辆车进入')
console.log(park.emptyNum())
park.in(car4)


