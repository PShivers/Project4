import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  state = {};
  render() {
    return (
      <div className="navigation ui secondary menu">
        <Link to="/podcasts/popular" className="item">
          Podcasts
        </Link>
        <Link to="/users" className="item">
          Users
        </Link>
        <Link to="/posts" className="item">
          Posts
        </Link>
        <div class="right menu">
          <div class="item">
            <div class="ui icon input">
              <input type="text" placeholder="Search..." />
              <i class="search link icon" />
            </div>
          </div>
          {/* <a class="ui item">Logout</a> */}
        </div>
      </div>
    );
  }
}

export default Navigation;
