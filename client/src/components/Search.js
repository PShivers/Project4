import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: papayawhip;
  width: 100vw;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: papayawhip;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: skyblue;
  width: 100vw;
`;

class Search extends Component {
  state = {};
  render() {
    return (
      <div>
        <TopBar>
          <h1>PcDB</h1>

          <SearchBar>
            <form>
              <input type="text" name="search" />
            </form>
            <button>Search Podcasts</button>
          </SearchBar>

          <span className="login">Login</span>
        </TopBar>

        <Navigation>
          <Link to="/podcasts/popular">Podcasts</Link> | <a href="/users">Users</a>{' '}
          | <a href="/posts">Posts</a>
        </Navigation>
      </div>
    );
  }
}

export default Search;
