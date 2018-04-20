import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import SearchResults from './SearchResults';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      searchResults: [],
      titleToggle : true,
      authorToggle: true,
      publisherToggle: true,
      resultsFound: true
    };
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.titleToggle = this.titleToggle.bind(this);
    this.authorToggle = this.authorToggle.bind(this);
    this.publisherToggle = this.publisherToggle.bind(this);
  }

  handleSearchQuery(e) {
    e.preventDefault();
    this.setState({ searchQuery: e.target.value })
  }

  titleToggle() {
    this.setState({titleToggle: !this.state.titleToggle});
    let ascending = this.state.titleToggle;
    function compare(a,b) {
      
      let tempA = a;
      let tempB = b;

      a = ascending && a || tempB;
      b = ascending && b || tempA;

      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
    }
    
    let searchResults = this.state.searchResults;
    searchResults.sort(compare);
    this.setState({ searchResults });
  }
  authorToggle() {
    this.setState({authorToggle: !this.state.authorToggle});
    let ascending = this.state.authorToggle;
    function compare(a,b) {
      
      let tempA = a;
      let tempB = b;

      a = ascending && a || tempB;
      b = ascending && b || tempA;

      if (a.author > b.author) {
        return 1;
      }
      if (a.author < b.author) {
        return -1;
      }
    }
    
    let searchResults = this.state.searchResults;
    searchResults.sort(compare);
    this.setState({ searchResults });
  }
  publisherToggle() {
    this.setState({publisherToggle: !this.state.publisherToggle});
    let ascending = this.state.publisherToggle;
    function compare(a,b) {
      
      let tempA = a;
      let tempB = b;

      a = ascending && a || tempB;
      b = ascending && b || tempA;

      if (a.publisher > b.publisher) {
        return 1;
      }
      if (a.publisher < b.publisher) {
        return -1;
      }
    }
    
    let searchResults = this.state.searchResults;
    searchResults.sort(compare);
    this.setState({ searchResults });
  }
  handleSubmit() {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchQuery}&key=AIzaSyDdFctjavaCH6UIfhKePaMjKbI1uH_XbzY`)
      .then((result) => {
        this.setState({
          resultsFound: result.data.totalItems !== 0
        });

        if (!this.state.resultsFound) {
          return;
        }
        const searchResults = [];
        for (let i = 0; i < result.data.items.length; i++) { 
          let searchResult = {};
          searchResult.title = result.data.items[i].volumeInfo.title;
          searchResult.author = (result.data.items[i].volumeInfo.authors && result.data.items[i].volumeInfo.authors[0]) || 'Unavailable';
          searchResult.publisher = result.data.items[i].volumeInfo.publisher || 'Unavailable';
          searchResults.push(searchResult);
        }
        
        this.setState({ searchResults });
      })
      .catch((err) => {
        console.log('error detected', err);
        this.setState({
          resultsFound: false
        });
        throw err;
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Book Search Using Google Books API</h1>

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
       <input type='text' onChange={this.handleSearchQuery} />
       <input type='submit' onClick={this.handleSubmit}/>
       <br />
       <button onClick={this.titleToggle}>Title</button>
       <button onClick={this.authorToggle}>Author</button>
       <button onClick={this.publisherToggle}>Publisher</button>
       {this.state.resultsFound && <SearchResults searchResults={this.state.searchResults}/>}
       {!this.state.resultsFound && <div>No Results Found.</div>}
      </div>
    );
  }
}

export default App;
