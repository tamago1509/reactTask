import React, { Component } from 'react';
import './Traficlight.css';
import classNames from 'classnames';

const RED = 0;
const ORANGE = 1;
const BLUE = 2;


export class Traficlight extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            currentColor: RED
             
        }
    
        setInterval(()=>{
            this.setState({
                currentColor: this.nextColor(this.state.currentColor)
            })
        }, 2000);
    }
        nextColor(color) {
            switch(color){
                case ORANGE:
                    return BLUE;
                    break;
                case BLUE:
                    return RED;
                    break;
                default:
                    return ORANGE;
                    break;
            }
        }
    
    
    
    render() {
        const {currentColor} = this.state;
        return (
            <div>
                <div className={classNames('bulb','red', {'active': currentColor=== RED})}></div>
                <div className={classNames('bulb','orange', {'active': currentColor=== ORANGE})}></div>
                <div className={classNames('bulb','blue', {'active': currentColor=== BLUE})}></div>
            </div>
        )
    }

}




export default Traficlight
