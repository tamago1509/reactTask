import React, { Component } from 'react';
import './App.css';
import BookList from './components/book-list/BookList';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state=({
      books: []
    })
  
    this.getBook = this.getBook.bind(this);
  }
  

  async getBook(e){
    e.preventDefault();
    const bookName = e.target.elements.bookName.value;
    const api_call = await fetch(`http://localhost:3000/books?q=${bookName}`);
    const data = await api_call.json();
    
    this.setState({
      books: data
    })

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Book Search</h1>
          </header>
          <Form getBook = {this.getBook}/>
          <BookList books = {this.state.books}/>
        
      </div>
    );
  }
}

export default App;