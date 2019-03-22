// 快速排序

// import swap from './swap'

function swap(arr, left, right) {
    var t = arr[left];
    arr[left] = arr[right];
    arr[right] = t;
}

/**
 * 快速排序的过程
 * 返回索引值p,使得 arr[l...p-1] < arr[p] < arr[p+1...r]
 * @param {*} arr 
 * @param {*} l 
 * @param {*} r 
 */
function _partition(arr, l, r) {
    var v = arr[l]
    var j = l;

    // arr[l+1...j] < v ;   arr[j+1...r] > v
    for (let i = l+1; i <= r; i++) {
        if(arr[i] < v){
            swap(arr,j+1,i)
            j++
        }
    }
    swap(arr,l,j)

    return j // j 就是 p
}

/**
 * 对 arr[l...r]的范围进行快速排序
 * @param {*} arr 
 * @param {*} l 
 * @param {*} r 
 */
function _quickSort(arr, l, r) {
    if(l >= r){
        return
    }

    debugger
    let p =  _partition(arr,l,r);

    _quickSort(arr, l, p-1)
    _quickSort(arr, p+1, r)
}

export default function(arr,n) {
    _quickSort(arr, 0, n-1)
}