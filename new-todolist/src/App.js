import React, { Component } from 'react'


import './App.css';
import TodoList from './components/todo-list/TodoList'
import TodoItem from './components/todo-item/TodoItem'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       list : []
    }
  }
  
  componentDidMount() {
    let list = JSON.parse(localStorage.getItem("Todolist")) || []
    this.setState({
      list
    })
  }
  


  render() {
    return (
      <div className="App">
        <h3>Dailist</h3>
        <TodoList type="upcoming">
          {
            this.state.list.map((item, index) => {
              if(!item.isComplete){
                return (
                  <TodoItem  
                    id={index}
                    title={item.title}
                    isComplete={item.isComplete}
                  />
                )
              }
            })
          }
        </TodoList>

        {/* finish */}
        <TodoList type="finish">
          {
            this.state.list.map((item, index) => {
              if(item.isComplete){
                return (
                  <TodoItem  
                    id={index}
                    title={item.title}
                    isComplete={item.isComplete}
                  />
                )
              }
            })
          }
        </TodoList>
        <button>+</button>
      </div>
    )
  }
}




export default App;
