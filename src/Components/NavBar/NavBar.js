import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

const StyledNav = styled.nav`
    padding: 2vw 5vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

const StyledLinks = styled.ul`
    li{
      margin-left: 5vw;
      list-style-type: none;
      display: inline-block;
      &:hover{
        color: #339989;
        cursor: pointer;
      }
    }
    
`;

const NavBar = ({links}) => {
  return (
    <StyledNav>
        <Logo />
        <StyledLinks>
            {links.map((element, index) => 
              <li key={index}>{element}</li>
            )}
        </StyledLinks>
       
    </StyledNav> 
  )
}

export default NavBar;