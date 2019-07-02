/**
 *  使用数组实现的循环队列
 *  1. 利用count计数，记录队是否满了
 *  2. 公式(tail+1) % len, 注意：队满时 head 和 tail 都等于 0
 *  3. tail - 1 才是队尾元素，当tail等于0时且非空队，代表队满。此时要想正确取到元素，tail = len -1，代表取最后一个元素
 */
class CircularQueue {

    constructor(size) {
        this.arr = []
        this.len = size;
        this.count = 0; // 统计元素
        this.tail = 0;
        this.head = 0;
    }

    enQueue(value) {
        if(this.isFull()) {
            return -1
        }

        this.arr[this.tail] = value // 或者push,直接使用JS数组的API
        this.count++;
        this.tail = (this.tail+1)%this.len

        return true
    }

    dequeue() {

        if(this.isEmpty()){
            return -1;
        }

        // 队头索引增1
        this.head = (this.head + 1) % this.len;
        this.count--;
        
        // this.arr.shift();

        return true
    }

    isFull() {
        if(this.count === this.len){
            return true
        }

        return false
    }

    // 取队头元素
    front() {

        if(this.isEmpty()) {
            return -1
        }

        return this.arr[this.head]
    }

    // 取队尾元素
    rear(){
        if(this.isEmpty()) {
            return -1
        }

        const tail = this.tail === 0 ? (this.len -1) : (this.tail - 1)
        
        return this.arr[tail]
    }

    isEmpty() {
        if(this.count === 0){
            return true
        }

        return false
    }

}

const queue = new CircularQueue(4);

// queue.enQueue(1)
// queue.enQueue(2)
queue.enQueue(3)
queue.enQueue(4)
// queue.enQueue(5)

// queue.dequeue()
// queue.dequeue()
// queue.dequeue()
// queue.dequeue()
console.log(queue);
// console.log(queue.front());
// console.log(queue.rear());
