import React, { Component } from 'react'

export default(WrappedComponent, name) => {
    class LocalStorageActions extends Component {
        constructor () {
            super()
            this.state = { data: null }
        }
        componentWillMount() {
            let data = localStorage.getItem(name)
            try {
                // 尝试把它解析成 JSON 对象
                this.setState({ data: JSON.parse(data) })
            }catch(e) {
                // 如果出错了就当普通字符串读取
                this.setState({ data })
            }
        }
    }

    return LocalStorageActions
}