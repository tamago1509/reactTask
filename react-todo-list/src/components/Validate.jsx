import React, { Component } from 'react'
import './InputLimit.css';




export class Validate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isFocus: false,
             inputValue : ""

        }
        this.changeFocus = this.changeFocus.bind(this)
        this.changeBlur = this.changeBlur.bind(this)
        this.getInputValue = this.getInputValue.bind(this)

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
    getInputValue(e){
        this.setState({
            inputValue: e.target.value

        })
        
        
       
    }
    render() {
        const {inputValue} = this.state;
        const regex = new RegExp(/^090[0-9]{7}/);
        const result = regex.test(inputValue);
        
        return (
            <div className="search-bar">
                <input 
                    onFocus = {this.changeFocus} 
                    onBlur = {this.changeBlur}
                    onChange={this.getInputValue}
                    type="text" placeholder="Type something to search... "
                    className={
                        !result?"turnRed":""
                    }
                />
                {
                    !this.state.isFocus && <img src="https://image.flaticon.com/icons/svg/622/622669.svg"/> 
                }
                
            </div>
        )
    }
}

export default Validate
