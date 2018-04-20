import React from 'react';
import SearchResult from './SearchResult';

class SearchResults extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        id="search-results"
        style={{
        backgroundColor: '#575159', display: 'flex', flexDirection: 'column', width: '50%', height: '100%', flexGrow: '1',
        }}
      >
        <div
          id="searchresult1"
          style={{
          backgroundColor: 'black', display: 'flex', flexDirection: 'row', width: '100%', minHeight: '43.32px', maxHeight: '43.32px',
          }}
        >
          <div
            id="track-header"
            style={{
            width: '60%', maxWidth: '60%', minWidth: '60%', height: '100%', borderRadius: '0px', fontSize: '20px', textAlign: 'center', color: 'white', backgroundColor: 'black', padding: '.5em .5em',
          }}
          >Title
          </div>
          <div
            id="artist-header"
            style={{
              width: '20%', maxWidth: '20%', minWidth: '20%', height: '100%', borderRadius: '0px', fontSize: '20px', textAlign: 'center', color: 'white', backgroundColor: 'black', padding: '.5em .5em',
              }}
          >Author
          </div>
          <div
            id="album-header"
            style={{
            width: '20%', maxWidth: '20%', minWidth: '20%', height: '100%', borderRadius: '0px', fontSize: '20px', textAlign: 'center', color: 'white', backgroundColor: 'black', padding: '.5em .5em',
            }}
          >Publisher
          </div>
        </div>
        {this.props.searchResults.map(result => (
          <SearchResult
            title={result.title}
            author={result.author}
            publisher={result.publisher}
          />))}
      </div>
    );
  }
}

export default SearchResults;