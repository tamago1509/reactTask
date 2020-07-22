import React, { Component } from 'react';
import './tabmenu.css';

class TabMenu extends Component{
    
    render(){
        return (
            
                <div className = "tabMenu">
                    <a href="#" >
                        <img src={this.props.src}/>
                    <br />
                    {this.props.title}
                    </a>

                </div>  
         
            
        )
    }
    
        
    
}
export default TabMenu;