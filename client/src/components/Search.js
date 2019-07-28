import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SearchBar from './SearchBar';
import Navigation from './Navigation';

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: papayawhip;
  width: 100vw;
`;

// const Navigation = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
//   background: rgba(0, 0, 0, 0.5);
//   border: 2px red;
//   width: 100vw;
// `;

const loginStyle = {
  marginRight: '5%',
  marginLeft: '5%'
};

class Search extends Component {
  state = {};
  render() {
    return (
      <div>
        <div
          className="navigation ui menu"
          style={{ backgroundColor: 'tomato' }}
        >
          <div className="header item">Pcdb</div>
          <Link to="/podcasts/popular" className="item">
            Podcasts
          </Link>
          <Link to="/users" className="item">
            Users
          </Link>
          <Link to="/posts" className="item">
            Posts
          </Link>
          <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <input type="text" placeholder="Search..." />
                <i className="search link icon" />
              </div>
            </div>
            <Link to="/login" className="ui item">
              Login
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
