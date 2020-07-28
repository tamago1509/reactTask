import React, { Component } from 'react';
import './Search.css'

export class Search extends Component {
    constructor(props) {
        super(props)
    
        this.inputElement = React.createRef();
    }
    componentDidMount(){
        this.inputElement.current.focus();
    }
    render() {
        return (
            <div className="search-bar">
                <div className="arrow">
                    <img src="https://image.flaticon.com/icons/svg/2223/2223672.svg" alt="back"/>
                    <img src="https://image.flaticon.com/icons/svg/2223/2223684.svg" alt="back"/>
                    <img src="https://image.flaticon.com/icons/svg/2089/2089728.svg" alt="back"/>
                </div>
                <img className="mark" src="https://image.flaticon.com/icons/svg/2965/2965278.svg" alt="mark"/>
                <input className="input" type="text" ref={this.inputElement}/>
                <img className= "star" src="https://image.flaticon.com/icons/svg/929/929566.svg" alt="star"/>
                <div className="addon">
                    <img src="https://picsum.photos/64" alt="add-on"/>
                    <img src="https://picsum.photos/64" alt="add-on"/>
                    <img src="https://picsum.photos/64" alt="add-on"/>
                    <img src="https://picsum.photos/64" alt="add-on"/>
                    <img src="https://picsum.photos/64" alt="add-on"/>
                    <img src="https://picsum.photos/64" alt="add-on"/>
                </div>
                <div className="user">
                    <img  src="https://picsum.photos/50" alt="user"/>
                    <img id="dot" src="https://image.flaticon.com/icons/svg/2089/2089793.svg" alt="dot"/>
                </div>
                

                
            </div>
        )
    }
}

export default Search
