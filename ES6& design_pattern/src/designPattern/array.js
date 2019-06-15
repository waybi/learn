// 相同的陣列
var people = [
  {
    name: 'Casper',
    like: '鍋燒意麵',
    age: 18
  },
  {
    name: 'Wang',
    like: '炒麵',
    age: 24
  },
  {
    name: 'Bobo',
    like: '蘿蔔泥',
    age: 1
  },
  {
    name: '滷蛋',
    like: '蘿蔔泥',
    age: 3
  }
];
var array = people

//Array.prototype.filter()
// filter() 會回傳一個陣列，其條件是 return 後方為 true 的物件，很適合用在搜尋符合條件的資料。
// var filterEmpty = people.filter(function(item,index,array){
//   return index % 2 === 1
// })
// console.log(filterEmpty)

// Array.prototype.find()
// find() 與 filter() 很像，但 find() 只會回傳一次值，且是第一次為 true 的值。
// var filter = people.find(function(item,index,array){
//   return item.like === '蘿蔔泥'
// })
// console.log(filter)

// Array.prototype.forEach()
// forEach 是這幾個陣列函式最單純的一個，不會額外回傳值，只單純執行每個陣列內的物件或值。
var forEachIt = people.forEach(function(item,index,array){
  return item;     
})
console.log(forEachIt);
// var forEachIt = people.forEach(function(item,index,array){
  // return item.age = item.age + 1;     
// })
// console.log(forEachIt);

// Array.prototype.map()
// 使用 map() 時他需要回傳一個值，他會透過函式內所回傳的值組合成一個陣列。
// 如果不回傳則是 undefined
// 回傳數量等於原始陣列的長度
// 這很適合將原始的變數運算後重新組合一個新的陣列。

// var mapEmpty = people.map(function(item, index, array){
//   if(item.like !== '蘿蔔泥' ){
//     return `${item.like} 好吃`
//   }
//   else{
//     return `${item.like} 不好吃`
//   }
// });
// console.log(mapEmpty);

// Array.prototype.every()
// every() 可以檢查所有的陣列是否符合條件，這僅會回傳一個值 true or false，可以用來檢查陣列中的內容是否符合特定條件。
// var ans = array.every(function(item,index,array){
  // return item.age  > 0
// })
// console.log(ans)

// Array.prototype.some()
// some() 與 every() 非常接近，都是回傳 true or false，差異僅在 every() 需完全符合，some() 僅需要部分符合。
// var some = array.some(function(item,index,array){
  // return item.age === 30
// })
// console.log(some)

// var reducePlus = people.reduce(function(accumulator, currentValue, currentIndex, array){
//   // 分別為前一個回傳值, 目前值, 當前索引值
//   console.log(`accumulator: ${accumulator}`, currentValue, `currentIndex:${currentIndex}`);
//   return accumulator + currentValue.age;  // 與前一個值相加
// }, 0);                                    // 傳入初始化值為 0
// console.log(reducePlus); 

// var reducePlus = people.reduce(function(accumulator, currentValue, currentIndex, array){
//   console.log('reduce', accumulator, currentValue, currentIndex)
//   return Math.max( accumulator, currentValue.age ); // 與前一個值比較哪個大
// },0);
// console.log(reducePlus);





