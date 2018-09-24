var obj = {}
var name = 'zhangsan'
Object.defineProperty(obj,'name',{
	get: function() {
		console.log('get',name)
		return name
	},
	set: function(newVal) {
		console.log('set',newVal)
		name = newVal
	}
})
obj.name = 'lisi'
obj.name