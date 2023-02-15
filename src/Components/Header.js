import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';

const Header = () => {
  return (
<MainHeader>
<NavLink to='/home'> 
    <img src='./images/logo.jpg' alt='' className='imglogo' />
  
</NavLink>
<Navbar/>
</MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4rem;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 2rem;
  }
  .imglogo{
    height:60px;
    width:70px;

  }

`;
export default Header;