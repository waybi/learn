// import trip from './util1'
// import util2 from './util2'
// import factory from './factory'
// import single from './single'
// import adapter from './adapter'
// import decorator from './decorator'
// import proxy from './proxy.js'
// import observer from './observer'
// import array from './array'
// import iterator from './iterator'
// import state from './state'
// import state_promise from './state_promise.js'
// import dutyChain from './dutyChain'
// import command from './command'
// import memento from './memento'
// import mediator from './mediator'
// --------------------------- 23 种设计模式 end! --------------------


// _------------------------- 实例 ---------------------
// import App from './demo/App'
// let app = new App('app')
// app.init()


// _------------------------- 高级面试题 ---------------------
// import demo1 from './gaoji/ES6/demo1'
// import promise from './gaoji/ES6/promise.js'
// import snabbdom from './gaoji/snabbdom'
// import defineProperty from './gaoji/mvvm/defineProperty.js'


// _------------------------- 算法 ---------------------
import SortTestHelper from './Algorithms/SortTestHelper'
import selection from './Algorithms/Selection'
import insert from './Algorithms/insert'
import merge from './Algorithms/merge'
import QuickSort from './Algorithms/QuickSort'
import BubbleSort from './Algorithms/BubbleSort'

const n = 8
// var arr = SortTestHelper.generateRandomArray(n,0,n)
var arr = [4,3,2,1,5,6,7,8]
console.log('未排序的数组',arr)
// SortTestHelper.testSort('quick srot',QuickSort,arr,n)
SortTestHelper.testSort('insert srot',insert,arr,n)
// SortTestHelper.testSort('selection srot',selection,arr,n)
// SortTestHelper.testSort('merge srot',merge,arr,n)
// SortTestHelper.testSort('BubbleSort',BubbleSort,arr,n)