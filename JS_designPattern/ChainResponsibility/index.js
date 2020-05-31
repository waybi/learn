var order500 = function(orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    console.log('500 元定金预购，得到100 优惠券')
  } else {
    return 'nextSuccessor' // 我不知道下一个节点是谁，反正把请求往后面传递
  }
}
var order200 = function(orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    console.log('200 元定金预购，得到50 优惠券')
  } else {
    return 'nextSuccessor' // 我不知道下一个节点是谁，反正把请求往后面传递
  }
}
var orderNormal = function(orderType, pay, stock) {
  if (stock > 0) {
    console.log('普通购买，无优惠券')
  } else {
    console.log('手机库存不足')
  }
}

var Chain = function(fn) {
  this.fn = fn
  this.successor = null
}
Chain.prototype.setNextSuccessor = function(successor) {
  return (this.successor = successor)
}
Chain.prototype.passRequest = function() {
  var ret = this.fn.apply(this, arguments)
  if (ret === 'nextSuccessor') {
    return (
      this.successor &&
      this.successor.passRequest.apply(this.successor, arguments)
    )
  }
  return ret
}
Chain.prototype.next = function() {
  return (
    this.successor &&
    this.successor.passRequest.apply(this.successor, arguments)
  )
}

var chainOrder500 = new Chain(order500)
var chainOrder200 = new Chain(order200)
var chainOrderNormal = new Chain(orderNormal)

// chainOrder500.setNextSuccessor(chainOrder200)
// chainOrder200.setNextSuccessor(chainOrderNormal)

// chainOrderNormal.passRequest(4, true, 500)

// var fn1 = new Chain(function() {
//   console.log(1)
//   return 'nextSuccessor'
// })
// var fn2 = new Chain(function() {
//   console.log(2)
//   var self = this
//   setTimeout(function() {
//     self.next()
//   }, 1000)
// })
// var fn3 = new Chain(function() {
//   console.log(3)
// })
// fn1.setNextSuccessor(fn2).setNextSuccessor(fn3)
// fn1.passRequest()

// 使用AOP编程
Function.prototype.after = function(fn) {
  var self = this
  return function() {
    var ret = self.apply(this, arguments)
    if (ret === 'nextSuccessor') {
      return fn.apply(this, arguments)
    }
    return ret
  }
}
var order = order500.after(order200).after(orderNormal)

order(1, true, 500) // 输出：500 元定金预购，得到100 优惠券
order(2, true, 500) // 输出：200 元定金预购，得到50 优惠券
order(1, false, 500) // 输出：普通购买，无优惠券
