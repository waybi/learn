function loadImg(src) {
	var promise = new Promise(function(resolve,reject){
		var img = document.createElement('img')
		img.onload = function() {
			resolve(img)
		}
		img.onerror = function() {
			reject('图片加载失败')
		}
		img.src = src
	})
	return promise
}
// debugger
var src = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536126162264&di=8f09ba6ca9c30a97c29d06171b42df3e&imgtype=0&src=http%3A%2F%2Fwww.showself.com%2Fyule%2Fuploadfile%2F2017%2F0310%2F20170310045159177.jpg'
var result = loadImg(src)
result.then(function(img){
	console.log(img)
},function() {
	console.log('error1')
}).then(function(img){
	console.log(img)
},function() {
	console.log('error2')
})