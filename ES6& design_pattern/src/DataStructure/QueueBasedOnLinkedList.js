/**
 * 基于链表实现的队列。
 *
 */

class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class QueueBasedOnLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    // 入队
    enqueue(value) {
        const node = new Node(value)

        if(this.head === null) { // 空队
            this.head = node
            this.tail = this.head
        } else {
            // 已存在元素
            this.tail.next = node
            this.tail = this.tail.next
        }
    }

    // 出队
    dequeue() {
        if(this.head === null) return -1

        const value = this.head.element
        this.head = this.head.next

        return value
    }
    
}
// Test
const newQueue = new QueueBasedOnLinkedList()
// 插入元素
newQueue.enqueue(1)
newQueue.enqueue(2)
newQueue.enqueue(3)
// 获取元素
let res = 0
// console.log(newQueue)
while (res !== -1) {
    res = newQueue.dequeue()
    console.log(res)
}