// 创建节点 
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// 单链表
class SinglyLinkedList {
    constructor() {
        this.head = new Node('head') // 带头链表 同时也是一个哨兵值, 在插入和删除操作时不需要特殊处理
        // this.head = null   不带头链表
    }

    // 根据值查找
    findByValue(value) {
        let currentNode = this.head.next;

        // 遍历链表
        while (currentNode !== null && currentNode.data !== value) {
            currentNode = currentNode.next;
        }

        return currentNode ? currentNode : -1
    }

    // 根据index查找,从0开始查找
    findByIndex(index) {
        let currentNode = this.head.next; // 忽略head结点
        let pos = 0;
        while (currentNode !== null && pos !== index) {
            currentNode = currentNode.next;
            pos++;
        }

        return currentNode ? currentNode : -1
    }

    // 向链表末尾追加节点
    append(name) {
        let newEle = new Node(name);
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newEle;
    }

    // 指定元素向后插入
    insert(newEle, target) {
        let newNode = new Node(newEle);
        let currentNode = this.findByValue(target);

        if (currentNode === -1) {
            console.log('未能找到该元素')
            return
        }

        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    // 查找前一个
    findPrev(item) {
        let currentNode = this.head;

        while (currentNode.next !== null && currentNode.next.data !== item) {
            currentNode = currentNode.next;
        }

        // currentNode.next === null 说明这是链表的最后一个结点，证明整个链表不存在item这个结点
        return currentNode.next ? currentNode : -1
    }

    // 根据值删除
    remove(item) {
        let prevNode = this.findPrev(item); // 找到上一个节点

        if (prevNode === -1) {
            console.log('没有该结点')
            return;
        }

        prevNode.next = prevNode.next.next;
    }

    // 遍历显示所有节点
    display() {
        if(this.checkCircle()) {
            console.log('这是一个环!!')
            return false
        }

        let currentNode = this.head;  //理论上不应该遍历哨兵结点，此处为了演示
        while (currentNode !== null) {
            console.log(currentNode.data)
            currentNode = currentNode.next
        }
    }

    // 尾插法 反转单链表
    reverseList() {
        const head = new Node('head'); // 相当与媒介，每次循环保存currentNode
        let currentNode = this.head.next;
        while(currentNode !== null) {
            const next = currentNode.next;
            currentNode.next = head.next; // 反转
            head.next = currentNode;
            currentNode = next;
        }
        this.head = head; // 头指针
    }

    // 环验证
    checkCircle() {
        let fast = this.head.next;
        let slow = this.head;
        while(fast !== null && fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;

            if(fast === slow) return true;
        }

        return false;
    }

    // 把单链表变成一个环
    makeCircle() {
        let node = this.head;
        while(node.next !== null) {
            node = node.next
        }

        node.next = this.findByIndex(0)
    }
}

//TEST
const LList = new SinglyLinkedList()
LList.append('chen')
LList.append('curry')
LList.append('sang')
LList.append('zhao')
LList.display()
console.log('-------------insert item------------')
LList.insert('qian', 'chen') // 首元素后插入
LList.insert('zhou', 'zhao') // 尾元素后插入
LList.display() 
console.log('-------------remove curry------------')
LList.remove('curry')
LList.display()
console.log('-------------find by chen------------')
console.log(LList.findByValue('chen'))
console.log('-------------find by 2------------')
console.log(LList.findByIndex(2))
console.log('-------------与头结点同值元素测试------------')
LList.insert('head', 'sang')
LList.display() // chen -> qian -> sang -> head -> zhao -> zhou
console.log('-------------findPrev head------------')
console.log(LList.findPrev('head')) // sang
console.log('-------------remove head------------')
LList.remove('head')
LList.display()

console.log('-------------反转单链表------------')
LList.reverseList()
// LList.makeCircle()




