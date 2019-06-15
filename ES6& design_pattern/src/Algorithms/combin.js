/**
 * 获得指定数组的所有组合
 */
export function arrayCombine(targetArr, k) {
	if(!targetArr || !targetArr.length) {
		return [];
	}
 
	var len = targetArr.length;
	var resultArrs = [];
 
	// 10选5组合
    var flagArrs = getFlagArrs(len, k);
    
    while(flagArrs.length) {
        var flagArr = flagArrs.shift();
        var combArr = [];
        for(var i = 0; i < len; i++) {
            flagArr[i] && combArr.push(targetArr[i]);
        }
        resultArrs.push(combArr);
    }
    
    console.log(resultArrs)
 
	return resultArrs;
}

 
/**
 * 获得从m中取n的所有组合
 */
export function getFlagArrs(m, n) {
	if(!n || n < 1) {
		return [];
	}
 
	var resultArrs = [],
		flagArr = [],
		isEnd = false,
		i, j, leftCnt;
 
	for (i = 0; i < m; i++) {
		flagArr[i] = i < n ? 1 : 0;
	}
 
    resultArrs.push(flagArr.concat());
    resultArrs.push(reverseArr(flagArr.concat()));
 
	while (!isEnd) {
        leftCnt = 0;
		for (i = 0; i < m - 1; i++) {
			if (flagArr[i] == 1 && flagArr[i+1] == 0) {
				for(j = 0; j < i; j++) {
					flagArr[j] = j < leftCnt ? 1 : 0;
				}
				flagArr[i] = 0;
				flagArr[i+1] = 1;
                var aTmp = flagArr.concat();
                
                // 只取首元素为1的组合
                if(aTmp[0] == 1){
                    resultArrs.push(aTmp);
                    resultArrs.push(reverseArr(aTmp));
                }

                // -n是指倒数第n个到数组末尾，当n个“1”全部移动到最右端时，结果为-1
				if(aTmp.slice(-n).join("").indexOf('0') == -1) {
					isEnd = true;
                }
                
				break;
            }
            flagArr[i] == 1 && leftCnt++;
		}
    }
    
	return resultArrs;
} 

// 对数组每个元素取反
function reverseArr(arr) {
    let n = arr.length;
    let reverseArr = [];

    for(let i = 0; i < n; i++) {
        reverseArr.push(Number(!arr[i]));
    }

    return reverseArr
}