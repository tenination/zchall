import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=witches+inauthor:dahl&key=AIzaSyDdFctjavaCH6UIfhKePaMjKbI1uH_XbzY')
      .then((result) => {
        console.log(result);
        const searchResults = [];
        for (let i = 0; i < result.data.items.length; i++) { 
          let searchResult = {};
          searchResult.title = result.data.items[i].volumeInfo.title;
          searchResult.author = (result.data.items[i].volumeInfo.authors && result.data.items[i].volumeInfo.authors[0]) || 'Unavailable';
          searchResult.publisher = result.data.items[i].volumeInfo.publisher || 'Unavailable';
          console.log(searchResult);
          searchResults.push(searchResult);
        }
        
        this.setState({ searchResults });
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sup Dawg!</h1>

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
       <input type='text' />
       <input type='submit' onClick={this.handleSubmit}/>

      </div>
    );
  }
}

export default App;
