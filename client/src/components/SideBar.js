import React, { Component } from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  text-align: center;
  background: papayawhip;
  height: 100vh;
  padding: 2%;
`;

class SideBar extends Component {
  state = {};
  render() {
    return <Menu>Hi, I'm a sidebar.</Menu>;
  }
}

export default SideBar;
