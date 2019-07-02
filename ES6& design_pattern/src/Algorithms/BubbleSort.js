// https://github.com/hustcc/JS-Sorting-Algorithm/blob/master/2.selectionSort.md
// 冒泡排序

export default function (arr) {
    if (arr.length <= 1) return;

    let len = arr.length;

    for (let i = 0; i < len; ++i) {
        let flag = false;

        for (let j = 0; j < len - i - 1; ++j) { // 冒泡
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                flag = true;
            }

        }

        if (!flag) break;
    }
}

function swap(arr, i, j) {
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}