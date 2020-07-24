import React, { Component } from 'react'
import './Search.css';


export class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isFocus: false
        }
        this.changeFocus = this.changeFocus.bind(this)
        this.changeBlur = this.changeBlur.bind(this)

    }
    changeFocus(){
        this.setState({
            isFocus: !this.state.isFocus
            
        })
        
    }
    changeBlur(){
        this.setState({
            isFocus: !this.state.isFocus
        })
    }
    render() {
        return (
            <div className="search-bar">
                <input onFocus = {this.changeFocus}  onBlur = {this.changeBlur} type="text" placeholder="Type something to search... "/>
                {
                    !this.state.isFocus && <img src="https://image.flaticon.com/icons/svg/622/622669.svg"/> 
                }
                
            </div>
        )
    }
}

export default Search
