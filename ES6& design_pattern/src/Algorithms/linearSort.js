import QuickSort from './QuickSort'

const bucketSort = (arr, num) => {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    const buckets = {}
    const bucketsSize = Math.floor((max - min) / num) + 1  // 每个桶的区间范围, 加1后可以少一个桶 

    for (let i = 0; i < arr.length; i++) {
        const index = Math.floor(arr[i] / bucketsSize) // 要放到哪个桶
        !buckets[index] && (buckets[index] = [])
        buckets[index].push(arr[i])
    }

    let wrapBuckets = []

    // 取出桶的数据
    for (let i in buckets) {
        // 可以在此使用快排进行优化
        QuickSort(buckets[i], buckets[i].length)

        buckets[i] && (wrapBuckets = wrapBuckets.concat(buckets[i]))
    }
    return wrapBuckets
}
// 来源于维基百科
const bucketSort1 = (arr, num) => {
    function swap(arr, i, j) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    const max = Math.max(...arr)
    const min = Math.min(...arr)
    const buckets = {} // 存放桶的对象
    const bucketsSize = Math.floor((max - min) / num) + 1  // 每个桶的区间范围, 加1后可以少一个桶 

    for (let i = 0; i < arr.length; i++) {
        const index = Math.floor(arr[i] / bucketsSize) // 要放到哪个桶
        !buckets[index] && (buckets[index] = [])
        buckets[index].push(arr[i])

        // 只有一个元素时不比较
        let l = buckets[index].length
        while (l > 1) {
            buckets[index][l - 1] < buckets[index][l - 2] && swap(buckets[index], l - 1, l - 2)
            l--
        }
    }
    let wrapBuckets = []

    // 取出桶的数据
    for (let i in buckets) {
        buckets[i] && (wrapBuckets = wrapBuckets.concat(buckets[i]))
    }
    return wrapBuckets
}

// 计数排序
const countSort = (arr) => {
    let len = arr.length;
    if (len <= 1) return;

    const max = Math.max(...arr)
    const c = new Array(max + 1);
    c.fill(0)

    let i
    // 统计元素个数
    for (i = 0; i < len; i++) {
        c[arr[i]]++;
    }

    // 顺序求和
    for (i = 1; i <= max; i++) {
        c[i] = c[i - 1] + c[i]
    }

    let r = []
    //
    for (let i = len - 1; i >= 0; i--) {
        const index = c[arr[i]] - 1;
        r[index] = arr[i]
        c[arr[i]]--
    }

    return r;
}

// 基数排序
const radixSort = (arr) => {

    const l = arr.length;
    const buckets = {}
    const max = Math.max(...arr);  // 找到最大数
    const bits = String(max).length; // 确定位数

    let i, j, index, str;
    for (i = 0; i < bits; i++) { // 从最低位开始遍历
        for (j = 0; j < l; j++) { // 排序放进对应的桶
            str = String(arr[j])
            if (str.length >= i + 1) {
                index = str[str.length - i - 1]
                !buckets[index] && (buckets[index] = [])
                buckets[index].push(arr[j])
            } else { // 最高位是0
                !buckets[0] && (buckets[0] = [])
                buckets[0].push(arr[j])
            }
        }

        arr.splice(0, l) // 清空数组


        // 遍历所有桶, 并把元素放入数组
        Object.keys(buckets).forEach((key) => {
            arr = arr.concat(buckets[key])

            buckets[key] = []
        })
    }

    return arr
}

export {
    bucketSort,
    bucketSort1,
    countSort,
    radixSort
}