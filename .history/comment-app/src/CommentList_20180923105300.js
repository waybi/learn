import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    render() {
        const comments = [
            { username: 'Jerry', content: 'Hello' },
            { username: 'Tomy', content: 'World' },
            { username: 'Lucy', content: 'Good' }
        ]
        return (
            <div>{comments.map((comment, i) => {
                return (
                    <div key={i}>
                       {comments.map((comment, i) => <Comment comment={comment} key={i} />)}
                    </div>
                )
            })}</div>
        )
    }
}

export default CommentList