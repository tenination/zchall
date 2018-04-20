import React from 'react';

class SearchResult extends React.Component {
  render() {
    return (
      <tr>
        <th style={{border: '1px solid black', padding: '5px', textAlign: 'left'}}>{this.props.title}</th>
        <th style={{border: '1px solid black', padding: '5px', textAlign: 'left'}}>{this.props.author}</th> 
        <th style={{border: '1px solid black', padding: '5px', textAlign: 'left'}}>{this.props.publisher}</th>
      </tr>
    );
  }
}

export default SearchResult;
