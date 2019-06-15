// https://github.com/hustcc/JS-Sorting-Algorithm
// 归并排序


function _merge(l, r) {
    let temp = [] 
    let leftIndex = 0;
    let rightIndex = 0;
    
    // 判断2个数组中元素大小，依次插入数组
    while(l.length > leftIndex && r.length > rightIndex) {
        if(l[leftIndex] <= r[rightIndex]){
            temp.push(l[leftIndex])
            leftIndex++;
        }else{
            temp.push(r[rightIndex])
            rightIndex++;
        }
    }

    // 合并剩余数组
    return temp.concat(l.slice(leftIndex).concat(r.slice(rightIndex)))
}


function _mergeSort(arr) {
    // 当任意数组分解到只有一个时返回。
    if (arr.length <= 1) return arr

    const middle = Math.floor(arr.length / 2) // 找到中间值

    const left = _mergeSort(arr.slice(0, middle)) // 分割数组
    const right = _mergeSort(arr.slice(middle))

    // 合并
    return _merge(left, right)
}

export default function(arr) {
    const res = _mergeSort(arr)

    return res
}