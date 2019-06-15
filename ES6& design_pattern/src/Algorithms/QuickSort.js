// 快速排序

// import swap from './swap'

function swap(arr, i, j) {
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}


function _partition(arr, l, r) {
    var pivotVal = arr[r]
    var leftIdx = l;

    for (let i = l; i < r; i++) {
        if(arr[i] < pivotVal){
            swap(arr, i, leftIdx)
            leftIdx++
        }
    }
    swap(arr,leftIdx,r)

    return leftIdx 
}


function _quickSort(arr, l, r) {
    if(l >= r) return

    let p = _partition(arr, l, r)

    _quickSort(arr, l, p-1)
    _quickSort(arr, p+1, r)
    
}

export default function(arr,n) {
    _quickSort(arr, 0, n-1)
}
