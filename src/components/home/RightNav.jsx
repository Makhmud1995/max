import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
 color: #ACA592;

  li:hover{
      color:#FFAE2B;
  }
  li {
    padding: 18px 10px;
    cursor: pointer;
    color: #ACA592;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;


const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>OVERWIEV</li>
      <li>PAGES</li>
      <li>PORTFOLIO</li>
      <li>TEMPLATE</li>
      <li>CONTACT </li>
      <button>BUY TEMPLATE</button>
    </Ul>
  )
}

export default RightNav