// https://github.com/hustcc/JS-Sorting-Algorithm/blob/master/2.selectionSort.md
// 插入排序
import swap from "./swap";
export default function(arr,n) {
    // 默认第一个有序
    console.log(arr)
    for (let i = 1; i < n; i++) {
        let e = arr[i]
        let j // 保存元素e应该要插入的位置
        // 将扫描到的每个元素插入有序序列的适当位置
        for (j = i; j > 0 && arr[j-1] > e; j--) {
            arr[j] = arr[j-1]
        }
        arr[j] = e
        
    }
}