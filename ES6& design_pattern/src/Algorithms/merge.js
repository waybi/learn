// https://github.com/hustcc/JS-Sorting-Algorithm
// 归并排序


/**
 * 进行merge操作
 * @param {*} arr 
 * @param {*} l 
 * @param {*} mid 
 * @param {*} r 
 */
function _merge(arr, l, mid, r) {
    // console.log('归并')
    let aux = []
    for(let i = l; i <= r; i++) {
        aux[i-l] = arr[i]
    }

    let i = l, j = mid + 1;
    for (let k = l; k <= r ; k++) {
        // 先判断数组是否越界，小于最小的索引和大于最大的索引
        if( i > mid){
            arr[k] = aux[j-l]
            j++
        }
        else if( j > r ) {
            arr[k] = aux[i-l]
            i++
        }
        else if( aux[i-l] < aux[j-l] ){
            arr[k] = aux[i-l]
            i++
        }
        else {
            arr[k] = aux[j-l]
            j++
        }
        
    }

}

/**
 * 递归使用归并排序 对 arr[l...r]的范围进行排序
 * @param {*} arr 
 * @param {*} l 
 * @param {*} r 
 */
function _mergeSort(arr, l, r) {
    if(l >= r){
        return
    }
    debugger
    let mid =  Math.floor(parseInt(l+r)/2) //中间值
    // console.log('递归',mid)
    _mergeSort(arr, l, mid)
    _mergeSort(arr, mid+1, r)

    // 进行merge操作
    _merge(arr, l, mid, r)

}

export default function(arr,n) {
    _mergeSort(arr, 0, n-1)
}