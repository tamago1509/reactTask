import React from 'react'

function Form(props) {
    return (
        
            <form className="mb-5" onSubmit={props.getBook}>
                <input className="form__input" type="text" name = "bookName"/>
                <button className="form__button btn btn-primary">Search</button>
            </form>
        
    )
}

export default Form
