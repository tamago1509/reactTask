import React, { Component } from 'react'
import './style.css'


class TodoList extends Component {
   
    render() {
        let { type } = this.props
        return (
            <div className = {type}>
                <h6>{type}</h6>
                {
                  this.props.children
                }
            </div>
        )
    }
}

export default TodoList
