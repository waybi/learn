class SortTestHelper {}
SortTestHelper.generateRandomArray = function(n, rangeL, rangeR) {
    if(rangeL > rangeR){
        throw '传参有误!'
    }
    var arr = new Array(n)
    var i = 0
    for (i; i < n; i++) {
        arr[i] = parseInt(Math.random() * (rangeR - rangeL + 1) + rangeL)
    }
        
    return arr;
}
SortTestHelper.printArray = function(arr) {

    for (var i = 0; i < arr.length; i++){
        console.log( arr[i] );
        console.log( ' ' );
    }

}

/**
 * 测试需要完成一个算法需要多少时间
 * @param {*} name 
 * @param {*} fn 
 * @param {*} arr 
 * @param {*} n 
 */
SortTestHelper.testSort = function(name, fn, arr, n) {
    var startTime = new Date()
    fn && fn(arr,n)
    var endTime = new Date()

    if(!this.isSort(arr,n)){
        throw '排序有问题,并非是有序数组'
    }
    var total = (endTime - startTime) / 1000   + 's'

    console.log(total)
}

/**
 * 数组是否有序
 * @param {} arr 
 * @param {*} n 
 */
SortTestHelper.isSort = function( arr, n) {
    // console.log('排序后的数组',arr)
    for(let i = 0; i < n - 1; i++) {
        if(arr[i] > arr[i+1]) {
            return false
        }
    }

    return true
}

export default SortTestHelper