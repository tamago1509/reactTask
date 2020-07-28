import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className="nav">
            <div className="tab">

                <span>Thẻ mới</span>
                <button className="x">
                    <span >&times;</span>
                </button>
            </div>
            <span className = "more"><strong>+</strong></span>
            <div className="gr-btn">
                <div className="nut">
                    <img src="https://image.flaticon.com/icons/svg/157/157941.svg" alt="min"/>
                </div>
                <div className="nut">
                    <img src="https://image.flaticon.com/icons/svg/1949/1949009.svg" alt="max"/>
                </div>
                <div className="nut">
                    <img src="https://image.flaticon.com/icons/svg/748/748122.svg" alt="close"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
