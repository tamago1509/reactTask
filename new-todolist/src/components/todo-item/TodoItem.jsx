import React, { Component } from 'react'
import './style.css'
export class TodoItem extends Component {
    render() {
        let { id , title, isComplete } = this.props
        let className = isComplete ? "done" : "ready"
        return (
            <div className = {`todo-item ${className}`}>
                <p>{`${id}. ${title}`}</p>
            </div>
        )
    }
}

export default TodoItem
