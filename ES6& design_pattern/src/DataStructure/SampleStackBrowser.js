import {StackBasedLinkedList as stack} from './StackBasedLinkedList'

/**
 * 使用前后栈实现浏览器的前进后退。
 * 
 */
class SampleStackBrowser {
    constructor() {
        // 实现两个栈
        this.normalStack = new stack()
        this.backStack = new stack();
    }

    // 正常浏览网页时
    visit(name) {
        this.normalStack.push(name)
    }

    // 后退
    back() {
        const value = this.normalStack.pop()
        if(value === -1) {
            console.log('最后一页')
            return
        }

        this.backStack.push(value)
    }

    // 前进
    go() {
        const value = this.backStack.pop()
        if(value === -1) {
            console.log('无法再前进');
        }

        this.normalStack.push(value)
    }

    // 打印栈内数据
    print() {
        console.log('---后退页面---')
        this.backStack.display()

        console.log('---浏览页面---')
        this.normalStack.display()
    }

}

// Test
const browser = new SampleStackBrowser()
browser.visit('www.google.com')
browser.visit('www.baidu.com')
browser.visit('www.github.com')

// browser.displayAllStack()

// 后退
browser.back()
browser.back()
browser.go()
browser.visit('www.new.com')

browser.print()
