// import trip from './designPattern/util1'
// import util2 from './designPattern/util2'
// import factory from './designPattern/factory'
// import single from './designPattern/single'
// import adapter from './designPattern/adapter'
// import decorator from './designPattern/decorator'
// import proxy from './designPattern/proxy.js'
// import observer from './designPattern/observer'
// import array from './designPattern/array'
// import iterator from './designPattern/iterator'
// import state from './designPattern/state'
// import state_promise from './designPattern/state_promise.js'
// import dutyChain from './designPattern/dutyChain'
// import command from './designPattern/command'
// import memento from './designPattern/memento'
// import mediator from './designPattern/mediator'
// --------------------------- 23 种设计模式 end! --------------------


// _------------------------- 实例 ---------------------
// import App from './demo/App'
// let app = new App('app')
// app.init()

// _------------------------- parse.js AST 语法树---------------------
// import App from './demo/App'
// let app = new App('app')
// app.init()

// _------------------------- 重学前端 ---------------------
// import './ReFrontEnd'


// _------------------------- 数据结构 ---------------------
// import './DataStructure/SinglyLinkedList'
// import './DataStructure/DoublyList'
// import './DataStructure/StackBasedLinkedList'
// import './DataStructure/SampleStackBrowser'
// import './DataStructure/QueueBasedOnLinkedList'
// import './DataStructure/CircularQueue'


// _------------------------- test ---------------------
import './ES6/a'



// _------------------------- 算法 ---------------------
import SortTestHelper from './Algorithms/SortTestHelper'
import selection from './Algorithms/Selection'
import insert from './Algorithms/insert'
import merge from './Algorithms/merge'
import QuickSort from './Algorithms/QuickSort'
import BubbleSort from './Algorithms/BubbleSort'
import {
    bucketSort, bucketSort1,
    countSort,
    radixSort
} from './Algorithms/linearSort'
import { arrayCombine, getFlagArrs } from './Algorithms/combin'

const n = 100000
const max = 120
const size = 10
var arr = SortTestHelper.generateRandomArray(n, 0, 120)
// const arr = [11, 9, 6, 8, 1, 3, 5, 1, 1, 0, 100]

// console.log('未排序的数组', arr)

// 非线性排序
// SortTestHelper.testSort('Bucket srot',bucketSort,bucketSort(arr, size),size)
// // SortTestHelper.testSort('Bucket1 srot>>',bucketSort1,bucketSort1(arr, size),size)
// SortTestHelper.testSort('quick srot',QuickSort,arr,n)
// SortTestHelper.testSort('insert srot',insert,arr,n)
// SortTestHelper.testSort('selection srot',selection,arr,n)
// SortTestHelper.testSort('merge srot',merge,merge(arr),n)
// SortTestHelper.testSort('BubbleSort',BubbleSort,arr,n)

// 线性排序
// console.log(countSort(arr));
// SortTestHelper.testSort('countSort',countSort,countSort(arr),n)


// 彩票10选5
// arrayCombine([1,2,3,4,5,6,7,8,9,10],5)
