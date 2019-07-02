// 当没有 cb 时，返回一个 Promise 对象
export default function sleep(time, cb) {  
    if (cb) {
        setTimeout(cb, time);
    } else {
        return new Promise(resolve => {
            setTimeout(resolve, time);
        });
    }
};

