// 接受者
// 接受者
class Receiver {
	exec() {
		console.log('执行命令')
	}
}

// 命令者
class Command {
	constructor(receiver) {
		this.receiver = receiver
	}
	cmd() {
		this.receiver.exec()
	}
}

// 发布者
class Invoker {
	constructor(command) {
		this.command = command
	}
	invoke() {
		this.command.cmd()
	}
}
// 士兵
let solid = new Receiver()
let cmder = new Command(solid)
let invoker = new Invoker(cmder)
invoker.invoke()