// 自己实现一个事件绑定
var eventUtil = {
	addEvent:function(ele,type,handler) {
		if(ele.addEventListener){
			ele.addEventListener(type,handler,false)
		}
		else if(ele.attachEvent) {
			ele.attachEvent('on' + type,handler)
		}
		else{
			ele['on'+type] = handler
		}
	},
	removeEvent:function(ele,type,handler) {
		if(ele.removeEventListener){
			ele.removeEventListener(type,handler,false)
		}
		else if(ele.detachEvent) {
			ele.detachEvent('on' + type,handler)
		}
		else{
			ele['on'+type] = null
		}
	}        
}
