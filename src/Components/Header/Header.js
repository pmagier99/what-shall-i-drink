import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
    margin: clamp(30px,5vw,100px) 0; 
    h1{
        font-size: clamp(3rem, 6vw, 6rem);
        span{color: #339989}
    }
    h3{
      font-size: clamp(1rem, 2vw, 2rem);
      padding: 0 5vw;
    }
    
`

const Header = ({subheading}) => {
  return (
    <>
      <StyledHeader>
          <h1>What Shall <span>I Drink?</span></h1>
          <h3>{subheading}</h3>
      </StyledHeader>
    </>
  )
}

export default Header
