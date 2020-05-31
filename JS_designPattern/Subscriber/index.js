// 简单版
var salesOffices = {}
salesOffices.clientList = {}

salesOffices.listen = function(key, fn) {
  if (!this.clientList[key]) {
    // 如果还没有订阅过此类消息，给该类消息创建一个缓存列表
    this.clientList[key] = []
  }
  this.clientList[key].push(fn) // 订阅的消息添加进消息缓存列表
}
salesOffices.trigger = function() {
  // 发布消息
  var key = Array.prototype.shift.call(arguments), // 取出消息类型
    fns = this.clientList[key] // 取出该消息对应的回调函数集合
  if (!fns || fns.length === 0) {
    // 如果没有订阅该消息，则返回
    return false
  }
  for (var i = 0, fn; (fn = fns[i++]); ) {
    console.log('arguments>>>', arguments)

    fn.apply(this, arguments) // (2) // arguments 是发布消息时附送的参数
  }
}
// salesOffices.listen('squareMeter88', function(price) {
//   // 小明订阅88 平方米房子的消息
//   console.log('价格= ' + price) // 输出： 2000000
// })
// salesOffices.listen('squareMeter110', function(price) {
//   // 小红订阅110 平方米房子的消息
//   console.log('价格= ' + price) // 输出： 3000000
// })

// salesOffices.trigger('squareMeter88', 2000000) // 发布88 平方米房子的价格
// salesOffices.trigger('squareMeter110', 3000000) // 发布110 平方米房子的价格

// 通用版
var event = {
  clientList: [],
  listen: function(key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = []
    }
    this.clientList[key].push(fn) // 订阅的消息添加进缓存列表
  },
  trigger: function() {
    var key = Array.prototype.shift.call(arguments), // (1);
      fns = this.clientList[key]
    if (!fns || fns.length === 0) {
      // 如果没有绑定对应的消息
      return false
    }
    for (var i = 0, fn; (fn = fns[i++]); ) {
      fn.apply(this, arguments) // (2) // arguments 是trigger 时带上的参数
    }
  },
  remove: function(key, fn) {
    var fns = this.clientList[key]
    if (!fns) {
      // 如果key 对应的消息没有被人订阅，则直接返回
      return false
    }
    if (!fn) {
      // 如果没有传入具体的回调函数，表示需要取消key 对应消息的所有订阅
      fns && (fns.length = 0)
    } else {
      for (var l = fns.length - 1; l >= 0; l--) {
        // 反向遍历订阅的回调函数列表
        var _fn = fns[l]

        if (_fn === fn) {
          fns.splice(l, 1) // 删除订阅者的回调函数
        }
      }
    }
  }
}

var installEvent = function(obj) {
  for (var i in event) {
    obj[i] = event[i]
  }
}

var salesOffices = {}
installEvent(salesOffices)

salesOffices.listen(
  'squareMeter88',
  (fn1 = function(price) {
    // 小明订阅消息
    console.log('价格= ' + price)
  })
)
salesOffices.listen(
  'squareMeter88',
  (fn2 = function(price) {
    // 小红订阅消息
    console.log('价格= ' + price)
  })
)
salesOffices.listen('打架', function(price) {
  // 小红订阅消息
  console.log('来干架！' + price)
})
salesOffices.remove('squareMeter88', fn1) // 输出：3000000
salesOffices.trigger('squareMeter88', 3000000) // 输出：3000000
salesOffices.trigger('打架', '一起上') // 输出：3000000

// 网站登录
// 1. 强耦合
login.succ(function(data) {
  header.setAvatar(data.avatar) // 设置header 模块的头像
  nav.setAvatar(data.avatar) // 设置导航模块的头像
  message.refresh() // 刷新消息列表
  cart.refresh() // 刷新购物车列表
})

// 2. 通过发布订阅 改造
$.ajax('http:// xxx.com?login', function(data) {
  // 登录成功
  login.trigger('loginSucc', data) // 发布登录成功的消息
})

// 各模块监听登录成功的消息：
var header = (function() {
  // header 模块
  login.listen('loginSucc', function(data) {
    header.setAvatar(data.avatar)
  })
  return {
    setAvatar: function(data) {
      console.log('设置header 模块的头像')
    }
  }
})()
var nav = (function() {
  // nav 模块
  login.listen('loginSucc', function(data) {
    nav.setAvatar(data.avatar)
  })
  return {
    setAvatar: function(avatar) {
      console.log('设置nav 模块的头像')
    }
  }
})()

// 全局的发布－订阅对象
/**
 * 同样在程序中，发布—订阅模式可以用一个全局的Event 对象来实现，订阅者不需要了解消
息来自哪个发布者，发布者也不知道消息会推送给哪些订阅者，Event 作为一个类似“中介者”
的角色，把订阅者和发布者联系起来

坏处: 如果用了太多的全局发布—订阅模式来通信，那么模块与模块之间的联系就被隐藏到了背后。
我们最终会搞不清楚消息来自哪个模块，或者消息
会流向哪些模块，这又会给我们的维护带来一些麻烦，也许某个模块的作用就是暴露一些接口给
其他模块调用
 */

var Event = (function() {
  var clientList = {},
    listen,
    trigger,
    remove

  listen = function(key, fn) {
    if (!clientList[key]) {
      clientList[key] = []
    }
    clientList[key].push(fn)
  }
  trigger = function() {
    var key = Array.prototype.shift.call(arguments),
      fns = clientList[key]
    if (!fns || fns.length === 0) {
      return false
    }
    for (var i = 0, fn; (fn = fns[i++]); ) {
      fn.apply(this, arguments)
    }
  }
  remove = function(key, fn) {
    var fns = clientList[key]
    if (!fns) {
      return false
    }
    if (!fn) {
      fns && (fns.length = 0)
    } else {
      for (var l = fns.length - 1; l >= 0; l--) {
        var _fn = fns[l]
        if (_fn === fn) {
          fns.splice(l, 1)
        }
      }
    }
  }
  return {
    listen: listen,
    trigger: trigger,
    remove: remove
  }
})()
Event.listen('squareMeter88', function(price) {
  // 小红订阅消息
  console.log('价格= ' + price) // 输出：'价格=2000000'
})
Event.trigger('squareMeter88', 2000000) // 售楼处发布消息

// 全局事件的命名冲突
/**
 * 全局的发布—订阅对象里只有一个clinetList 来存放消息名和回调函数，大家都通过它来订
阅和发布各种消息，久而久之，难免会出现事件名冲突的情况，所以我们还可以给Event 对象提
供创建命名空间的功能。
 */

/************** 先发布后订阅 ********************/
Event.trigger('click', 1)
Event.listen('click', function(a) {
  console.log(a) // 输出：1
})
/************** 使用命名空间 ********************/
Event.create('namespace1').listen('click', function(a) {
  console.log(a) // 输出：1
})
Event.create('namespace1').trigger('click', 1)
Event.create('namespace2').listen('click', function(a) {
  console.log(a) // 输出：2
})
Event.create('namespace2').trigger('click', 2)

var Event = (function() {
  var global = this,
    Event,
    _default = 'default'
  Event = (function() {
    var _listen,
      _trigger,
      _remove,
      _slice = Array.prototype.slice,
      _shift = Array.prototype.shift,
      _unshift = Array.prototype.unshift,
      namespaceCache = {},
      _create,
      find,
      each = function(ary, fn) {
        var ret
        for (var i = 0, l = ary.length; i < l; i++) {
          var n = ary[i]
          ret = fn.call(n, i, n)
        }
        return ret
      }
    _listen = function(key, fn, cache) {
      if (!cache[key]) {
        cache[key] = []
      }
      cache[key].push(fn)
    }
    _remove = function(key, cache, fn) {
      if (cache[key]) {
        if (fn) {
          for (var i = cache[key].length; i >= 0; i--) {
            if (cache[key][i] === fn) {
              cache[key].splice(i, 1)
            }
          }
        } else {
          cache[key] = []
        }
      }
    }
    _trigger = function() {
      var cache = _shift.call(arguments),
        key = _shift.call(arguments),
        args = arguments,
        _self = this,
        ret,
        stack = cache[key]
      if (!stack || !stack.length) {
        return
      }
      return each(stack, function() {
        return this.apply(_self, args)
      })
    }
    _create = function(namespace) {
      var namespace = namespace || _default
      var cache = {},
        offlineStack = [], // 离线事件
        ret = {
          listen: function(key, fn, last) {
            _listen(key, fn, cache)
            if (offlineStack === null) {
              return
            }
            if (last === 'last') {
              offlineStack.length && offlineStack.pop()()
            } else {
              each(offlineStack, function() {
                this()
              })
            }
            offlineStack = null
          },
          one: function(key, fn, last) {
            _remove(key, cache)
            this.listen(key, fn, last)
          },
          remove: function(key, fn) {
            _remove(key, cache, fn)
          },
          trigger: function() {
            var fn,
              args,
              _self = this
            _unshift.call(arguments, cache)
            args = arguments
            fn = function() {
              return _trigger.apply(_self, args)
            }
            if (offlineStack) {
              return offlineStack.push(fn)
            }
            return fn()
          }
        }
      return namespace
        ? namespaceCache[namespace]
          ? namespaceCache[namespace]
          : (namespaceCache[namespace] = ret)
        : ret
    }
    return {
      create: _create,
      one: function(key, fn, last) {
        var event = this.create()
        event.one(key, fn, last)
      },
      remove: function(key, fn) {
        var event = this.create()
        event.remove(key, fn)
      },
      listen: function(key, fn, last) {
        var event = this.create()
        event.listen(key, fn, last)
      },
      trigger: function() {
        var event = this.create()
        event.trigger.apply(this, arguments)
      }
    }
  })()
  return Event
})()
