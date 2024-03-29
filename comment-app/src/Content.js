import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Index extends Component {
    static childContextTypes = {
        themeColor: PropTypes.string
    }
    constructor() {
        super()
        this.state = { themeColor: 'red' }
    }
    getChildContext() {
        return {
            themeColor: this.state.themeColor
        }
    }
    componentWillMount() {
        setTimeout(() => {
            this.setState({ themeColor: 'green' })
        }, 2000);
    }
    static contextTypes = {
        name: PropTypes.string
    }
    render() {
        console.log(this.context)
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}

class Header extends Component {
    static childContextTypes = {
        name: PropTypes.string
    }
    getChildContext() {
        return {
            name: 'waybe'
        }
    }
    render() {
        return (
            <div>
                <h2>This is header</h2>
                <Title />
            </div>
        )
    }
}

class Main extends Component {
    render() {
        return (
            <div>
                <h2>This is main</h2>
                <Content />
            </div>
        )
    }
}

class Title extends Component {
    static contextTypes = {
        themeColor: PropTypes.string,
        name: PropTypes.string
    }
    render() {
        return (
            <h1
                style={{
                    color: this.context.themeColor
                }}
            >React.js 小书标题</h1>
        )
    }
}

class Content extends Component {
    render() {
        return (
            <div>
                <h2>React.js 小书内容</h2>
            </div>
        )
    }
}

export default Index
