// https://github.com/hustcc/JS-Sorting-Algorithm/blob/master/2.selectionSort.md
// 冒泡排序

export default function(arr) {
    var len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i; j++) {
            if(arr[j] > arr[j+1]){
                swap(arr,j, j+1);
            }
        }
    }
}
function swap(arr, i, j) {
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}