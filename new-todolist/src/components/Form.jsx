import React from 'react'

function Form(props) {
    return (
        
            <form onSubmit={props.getBook}>
                <input type="text" name = "bookName"/>
                <button>Search</button>
            </form>
        
    )
}

export default Form
