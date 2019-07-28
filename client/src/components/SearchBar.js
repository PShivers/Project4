import React, { Component } from 'react';

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <div className="search-bar ui segment search" style={{ display: 'flex' }}>
        <form className="ui form">
          <input type="text" name="search" />
        </form>
        <button className="ui button small">Search Podcasts</button>
      </div>
    );
  }
}

export default SearchBar;
