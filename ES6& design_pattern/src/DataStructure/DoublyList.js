// 创建节点 
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.tail = null;
    }
}

// 单链表
class DoublyList {
    constructor() {
        this.head = new Node('head') // 带头链表 同时也是一个哨兵值, 在插入和删除操作时不需要特殊处理
    }


    // 向链表末尾追加节点
    append(name) {
        let newEle = new Node(name);
        let currentNode = this.head;
        while (currentNode.tail) {
            currentNode = currentNode.tail;
        }
        currentNode.tail = newEle;
        newEle.prev = currentNode
    }

    // 遍历显示所有节点
    display() {
        let currentNode = this.head; // 理论上不应该遍历哨兵结点，此处为了演示
        while (currentNode !== null) {
            console.log(currentNode.data)
            currentNode = currentNode.tail
        }
    }

}

// TEST
const LList = new DoublyList()
LList.append('chen')
LList.append('curry')
LList.append('sang')
LList.append('zhao')
LList.display()





