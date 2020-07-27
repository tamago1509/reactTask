import React, { Component } from 'react';
import './Todolist.css';
import empty from './img/empty.svg'


export class Todolist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isShow: false,
             Todolist:[],
            inputValue: ''
        }
        this.makeModal = this.makeModal.bind(this);
        this.addTask = this.addTask.bind(this);
        this.onInput = this.onInput.bind(this);
        this.checkTask = this.checkTask.bind(this);
    }
    /*
    b1. click + 
    b2. setState isShow de show modal
    b3khi user nhap vao o input
    b4. setState de cos gia tri
    b5. khi click them
    b6. them, 1 item vafo todolist sau do setState
    b7. chuyeen data todolist len localStorage 
    */
   onInput(e){
       this.setState({
           inputValue: e.target.value
       })

   }
    makeModal(){
        this.setState({
            isShow: !this.state.isShow
        })
    }
    addTask(){

        let text ={
            stt:`0${this.state.Todolist.length+1}.`,
            title: this.state.inputValue,
            isComplete:false
        };
        
        let Todolists = this.state.Todolist;
        Todolists.push(text);
        
        localStorage.setItem('Todolist', JSON.stringify(Todolists))
        let data = JSON.parse(localStorage.getItem('Todolist')) 
        this.setState({
            Todolist:data,
            isShow: !this.state.isShow 
            })
        
    }
    checkTask(task){
        
        return (e) => {
            
            const isComplete= task.isComplete;
            let Lists = this.state.Todolist;
            
            
            for (var i = 0; i < Lists.length; i++) {
                if(task.title === Lists[i].title){
                    Lists[i].isComplete = !isComplete  
                    this.setState({
                        Todolist: Lists
                    })
                    break;
                }
            }
             localStorage.setItem("Todolist", JSON.stringify(Lists));

        }
        

    }
    
    render() {
        const {Todolist, isShow} = this.state;
        let data = JSON.parse(localStorage.getItem('Todolist'))
        return (
            <div className="cover">
                <div className="content">
                    <div className="header">
                        <img src="https://image.flaticon.com/icons/svg/633/633684.svg"/>
                        <img src="https://image.flaticon.com/icons/svg/902/902808.svg"/>
                        <span className="time">12:15 pm</span>
                        <img className = "last" src="https://image.flaticon.com/icons/svg/3103/3103292.svg" />
                    </div>
                    <h3>DAILIST</h3>
                    {
                        !data?( 
                            <div>
                                <img className="empty" src={empty}/>
                                <h4>There is no task in the list!!!</h4>
                            </div>
                            ) :(
                                <div>
                                    <div className="title">
                                        <p>Upcomming</p>
                                    </div>
                                    {
                                        data.map((task,index)=>
                                            !task.isComplete &&(
                                            <div className="taskShow" onClick={this.checkTask(task)} key={index}>
                                            <p><strong>{task.stt} {task.title}</strong></p>
                                            </div>)
                                            
                                            )
                                    }
                                     <div className="title footer">
                                        <p>Finish</p>
                                    </div>
                                    {
                                        data.map((task,index) =>
                                            task.isComplete && (
                                            <div className="taskShow done" onClick={this.checkTask(task)} key={index}>
                                            <p><strong>{task.stt} {task.title}</strong></p>
                                            </div>)
                                            
                                            )
                                    }
                                </div>
                            )
                        
                        
                        

                    }
                <button className="btn" onClick={this.makeModal}>
                    <img className = "plus" src="https://image.flaticon.com/icons/svg/1828/1828817.svg" />
                </button>
                </div>
                {
                    isShow && (
                    <div className="overlay">
                        
                            <div className="input">
                                <p>Create your task</p>
                                <button className="x" onClick={this.makeModal}>
                                    <span>&times;</span>
                                </button>
                                <input type="text" name="add" placeholder="Add new task" onChange={this.onInput}/>
                                <button className="add-btn" onClick= {this.addTask}>
                                    <img className = "plus" src="https://image.flaticon.com/icons/svg/1828/1828817.svg" />
                                </button>
                            </div>

                    </div>
                    )
                }
                
            </div>
        )
    }
}

export default Todolist
