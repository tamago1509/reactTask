import React, { Component } from 'react';
import './Modal.css';


class Modal extends Component {
    constructor(props) {
        super(props)
    
        this.state= {
          show: false
        }
      this.openModal = this.openModal.bind(this)
    
      }
      openModal(){
        this.setState({
          show: !this.state.show
        })
    
      }

    render() {
        const {show} = this.state

        return (
            <div>
                <div className="ground1">
                    <h2>Click the button to open Modal</h2>
                    <button className="open" onClick={this.openModal}>Open</button>
                </div>
                {
                show && (
                <div className= 'cover' onClick={this.openModal}>
                    <div className="modal" >
                        <div className="title">
                            <h2>This is a modal</h2>
                        </div>
                        <div className="content">
                            <button className="x" onClick={this.openModal}>
                            <span >&times;</span>
                            </button>
                            <p>{this.props.children}
                            </p>
                        </div>
                        <div className="gr-btn">
                            <button className="btn ok" onClick={this.openModal}>Accept</button>
                            <button className="btn no" onClick={this.openModal}>Decline</button>
                        </div>
                    </div>
                </div>
                )
            }
            </div>
    
    )}
        }
export default Modal
