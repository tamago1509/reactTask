import React, { Component } from 'react'

export class BookList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             error: null,
             isLoaded: false,
             books: []
        };
    }
    componentDidMount(){
        fetch('http://localhost:5000/api/books')
            .then(res =>res.json())
            .then(
                (result)=>{
                    this.setState({
                        isLoaded: true,
                        books : result
                    })
                },
                (error)=>{
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    

    render() {
        const {error, isLoaded, books} = this.state;
        if(error){
            return <div>Error : {error.message}</div>
        } else if (!isLoaded){
            return <div>Loading...</div>;
        } else{
            return (
                <div>
                   {
                       books.map(book=>(
                           <div>{book.title}</div>
                       ))
                   } 
                </div>
            )

        }
    }
}

export default BookList
