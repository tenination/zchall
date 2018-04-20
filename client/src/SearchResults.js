import React from 'react';
import SearchResult from './SearchResult';

class SearchResults extends React.Component { // eslint-disable-line
  render() {
    return (
      <div>
        <table style={{width: '50%', border: '1px solid black', margin: 'auto'}}>
          <tr>
            <th style={{border: '1px solid black', padding: '5px', textAlign: 'left', color:'white', background:'black'}}>Title
            </th>
            <th style={{border: '1px solid black', padding: '5px', textAlign: 'left', color:'white', background:'black'}}>Author
            </th> 
            <th style={{border: '1px solid black', padding: '5px', textAlign: 'left', color:'white', background:'black'}}>Publisher
            </th>
          </tr>
        {this.props.searchResults.map(result => (
          <SearchResult
            title={result.title}
            author={result.author}
            publisher={result.publisher}
          />))}
        </table>
      </div>
    );
  }
}

export default SearchResults;
