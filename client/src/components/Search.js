import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

const loginStyle = {
  marginRight: "5%",
  marginLeft: "5%"
}

class Search extends Component {
  state = {};
  render() {
    return (
      <div>
        <TopBar>
          <h1 style={loginStyle}>PcDB</h1>

          <SearchBar>
            <form>
              <input type="text" name="search" />
            </form>
            <button>Search Podcasts</button>
          </SearchBar>

          <span style={loginStyle} className="login">Login</span>
        </TopBar>

        <Navigation>
          <Link to="/podcasts/popular">Podcasts</Link> |
          <Link to="/users">Users</Link>| <Link to="/posts">Posts</Link>
        </Navigation>
      </div>
    );
  }
}

export default Search;
