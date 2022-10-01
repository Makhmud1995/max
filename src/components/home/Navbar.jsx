import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
position: sticky;
  width: 100%;
  height: 80px;
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
  background-color:#181511;
  align-items: center;

  .logo {
    display: flex;
    flex: 1;
    padding: 15px 0;
    color: #FFAE2B;
    cursor: pointer;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        MAX
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar