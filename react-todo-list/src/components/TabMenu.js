import React, { Component } from 'react';
import './tabmenu.css';

class TabMenu extends Component{
    
    render(){
        return (
            <nav className ="navbar">
                {
                   this.props.items.map(item => 
                    (
                        <div className = "tabMenu">
                            <a href="#" >
                                <img src={item.src}/>
                                <br />
                                {item.title}
                            </a>
                        </div>
                    )
                    )
                }
            </nav> 
        )
    }   
}
export default TabMenu;