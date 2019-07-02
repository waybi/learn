// 跟链表结构相关，结点是必须要实现的
class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
} 

// 使用链表实现栈，记住 先进后出， 后进先出 原则
export class StackBasedLinkedList {
    constructor() {
        this.top = null; // 相当于一个指针永远指向栈顶
    }

    // 入栈
    push(value) {
        const node = new Node(value);

        // 如果是空栈
        if(this.top === null){
            this.top = node
        } else {
            node.next = this.top;
            this.top = node
        }
    }

    // 出栈，永远只有一个出口栈顶
    pop() {
        // 如果是空栈
        if(this.top === null) {
            return -1
        }

        const value = this.top.data
        this.top = this.top.next

        return value;
    }

    // 清空栈
    clear() {
        this.top = null
    }

    display() {
        if (this.top !== null) {
            let temp = this.top
            while (temp !== null) {
                console.log(temp.data)
                temp = temp.next
            }
        }
    }
}

// Test
// const newStack = new StackBasedLinkedList()
// newStack.push(1)
// newStack.push(2)
// newStack.push(3)
// // 获取元素
// let res = 0
// console.log('-------获取pop元素------')
// // console.log(newStack.clear());
// newStack.display()

// while (res !== -1) {
//     res = newStack.pop()
//     console.log(res)
// }
