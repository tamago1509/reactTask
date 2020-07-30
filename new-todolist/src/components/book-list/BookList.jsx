import React, { Component } from 'react'

export class BookList extends Component {
    constructor(props) {
        super(props)
    
       
    }
    
    

    render() {
        return (
            <div className="container">
                <div  className="row">
                {
                    this.props.books.map(book=>(
                            <div key={book.title} className="col-md-3">
                                <img src={book.cover} alt={book.title}/>
                                <h5>{book.title.length < 20 ? book.title:`${book.title.substring(0,22)}...`}</h5>
                                <p>Author: <span>{book.author}</span></p>
                            </div>
                    ))
                }
                </div>
            </div>
        )
    }
}

export default BookList
