import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import {Link} from "react-router-dom";

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
        <Link to="/" style={{marginRight: "auto"}}> <Logo /> </Link>
        <StyledLinks>
            {links.map((element, index) => 
              <Link to={element}>
                <li key={index}>{element}</li>
              </Link>
            )}
        </StyledLinks>
       
    </StyledNav> 
  )
}

export default NavBar;