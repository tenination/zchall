import React from 'react';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return (
      <div // eslint-disable-line
        style={{
          backgroundColor: 'red', display: 'flex', flexDirection: 'row', width: '100%', minHeight: '64px', maxHeight: '64px',
        }}
        
      >
       
        <div style={{
          width: '47.8%', maxWidth: '47.8%', minWidth: '47.8%', borderRadius: '0px', fontSize: '15px', textAlign: 'center', padding: '1em 1em', color: 'white', backgroundColor: 'purple', wordWrap: 'break-word'
        }}
        >{this.props.title}
        </div>
        <div style={{
          width: '20%', maxWidth: '20%', minWidth: '20%', borderRadius: '0px', fontSize: '15px', textAlign: 'center', padding: '1em 1em', color: 'white', backgroundColor: 'green', wordWrap: 'break-word'
         }}
        >{this.props.author}
        </div>
        <div style={{
          width: '20%', maxWidth: '20%', minWidth: '20%', borderRadius: '0px', fontSize: '12px', textAlign: 'center', padding: '1em 1em', color: 'white', backgroundColor: 'blue', wordWrap: 'break-word'
           }}
        >{this.props.publisher}
        </div>
      </div>
    );
  }
}

export default SearchResult;
