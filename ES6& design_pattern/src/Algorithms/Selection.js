// https://github.com/hustcc/JS-Sorting-Algorithm/blob/master/2.selectionSort.md
// 选择排序
// import swap from "./swap";
export default function(arr) {
    var n = arr.length
    for (let i = 0; i < n; i++) {
        // 寻找[i, n)区间里的最小值的索引
        let minIndex = i
        for (let j = i+1; j < n; j++) {
            // console.log('j>>>>',j)
            if(arr[j] < arr[minIndex]) {        // 寻找最小的数
                minIndex = j;                 // 将最小数的索引保存
            }
        }
        swap( arr , i , minIndex);
    }
}
function swap(arr, i, j) {
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}