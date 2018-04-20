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
      resultsFound: true,
      initial: true
    };
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.titleToggle = this.titleToggle.bind(this);
    this.authorToggle = this.authorToggle.bind(this);
    this.publisherToggle = this.publisherToggle.bind(this);
  }

  handleSearchQuery(e) {
    e.preventDefault();
    this.setState({ searchQuery: e.target.value });
  }

  titleToggle() {
    this.setState({titleToggle: !this.state.titleToggle});
    let ascending = this.state.titleToggle;
    function compare(a,b) {
      
      let tempA = a;
      let tempB = b;

      a = ascending && a || tempB;
      b = ascending && b || tempA;

      const titleA = a.title.toUpperCase(); // ignore upper and lowercase
      const titleB = b.title.toUpperCase(); // ignore upper and lowercase

      if (titleA > titleB) {
        return 1;
      }
      if (titleA < titleB) {
        return -1;
      }
    }
    
    let searchResults = this.state.searchResults;
    searchResults.sort(compare);
    this.setState({ searchResults });
  }
  authorToggle() {
    this.setState({ authorToggle: !this.state.authorToggle });
    let ascending = this.state.authorToggle;
    function compare(a,b) {
      
      let tempA = a;
      let tempB = b;

      a = ascending && a || tempB;
      b = ascending && b || tempA;

      const authorA = a.author.toUpperCase(); // ignore upper and lowercase
      const authorB = b.author.toUpperCase(); // ignore upper and lowercase

      if (authorA > authorB) {
        return 1;
      }
      if (authorA < authorB) {
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

      const publisherA = a.publisher.toUpperCase(); // ignore upper and lowercase
      const publisherB = b.publisher.toUpperCase(); // ignore upper and lowercase

      if (publisherA > publisherB) {
        return 1;
      }
      if (publisherA < publisherB) {
        return -1;
      }
    }
    
    let searchResults = this.state.searchResults;
    searchResults.sort(compare);
    this.setState({ searchResults });
  }
  handleSubmit() {
    this.setState({ initial:false });
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
          searchResult.author = (result.data.items[i].volumeInfo.authors && result.data.items[i].volumeInfo.authors[0]) || 'N/A';
          searchResult.publisher = result.data.items[i].volumeInfo.publisher || 'N/A';
          searchResults.push(searchResult);
        }
        
        this.setState({ searchResults });
      })
      .catch((err) => {
        this.setState({
          resultsFound: false
        });
        throw err;
      });
  }
  render() {
    return (
      <div className="App">
       <h1 className="App-title">Book Search Using Google Books API</h1>
       <input type='text' placeholder='Search for books' onChange={this.handleSearchQuery} />
       <input type='submit' onClick={this.handleSubmit}/>
       <br />

       <button onClick={this.titleToggle}>Sort by title</button>
       <button onClick={this.authorToggle}>Sort by author</button>
       <button onClick={this.publisherToggle}>Sort by publisher</button>
       <br />
       <br />

       {!this.state.resultsFound && <div>No Results Found.</div>}
       {this.state.resultsFound && !this.state.initial && <SearchResults searchResults={this.state.searchResults}/>}
      </div>
    );
  }
}

export default App;
