import React, { Component } from 'react';
import './App.css';
import BookList from './components/book-list/BookList';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.getBook = this.getBook.bind(this);
  }
  

  async getBook(e){
    e.preventDefault();
    const bookName = e.target.elements.bookName.value;
    const api_call = await fetch('http://localhost:3000/books');
    const data = await api_call.json();
    console.log(data);

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Book Search</h1>
          <Form getBook = {this.getBook}/>
        </header>
      </div>
    );
  }
}

export default App;