/**
 * 保护代理 和 虚拟代理
 * 代理对象要与本体对象有一致的接口
 * 当真正发现不方便直接访问某个对象的时候，就应该考虑使用代理模式
 */

// 一、 图片预加载、虚拟代理
// 本体
var myImage = (function() {
  var imgNode = document.createElement('img')
  document.body.appendChild(imgNode)
  return function(src) {
    imgNode.src = src
  }
})()
// 代理对象
var proxyImage = (function() {
  var img = new Image()
  img.onload = function() {
    myImage(this.src)
  }
  return function(src) {
    myImage('file:// /C:/Users/svenzeng/Desktop/loading.gif')
    img.src = src
  }
})()
proxyImage('http:// imgcache.qq.com/music// N/k/000GGDys0yA0Nk.jpg')

// 二、虚拟代理合并HTTP 请求
/**
 *  背景：先想象这样一个场景：每周我们都要写一份工作周报，周报要交给总监批阅。总监手下管理
    着150 个员工，如果我们每个人直接把周报发给总监，那总监可能要把一整周的时间都花在查看
    邮件上面。
 *  对应到程序中，批量选中文件 2秒后向服务器发起请求，而不是实时请求
 */

var synchronousFile = function(id) {
  console.log('开始同步文件，id 为: ' + id)
}
var proxySynchronousFile = (function() {
  var cache = [], // 保存一段时间内需要同步的ID
    timer // 定时器
  return function(id) {
    cache.push(id)
    if (timer) {
      // 保证不会覆盖已经启动的定时器
      return
    }
    timer = setTimeout(function() {
      synchronousFile(cache.join(',')) // 2 秒后向本体发送需要同步的ID 集合
      clearTimeout(timer) // 清空定时器
      timer = null
      cache.length = 0 // 清空ID 集合
    }, 2000)
  }
})()
var checkbox = document.getElementsByTagName('input')
for (var i = 0, c; (c = checkbox[i++]); ) {
  c.onclick = function() {
    if (this.checked === true) {
      proxySynchronousFile(this.id)
    }
  }
}

// 缓存代理
