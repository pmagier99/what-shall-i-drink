import React from 'react'
import styled from 'styled-components'

const StyledLogo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1rem;
    margin-right: auto;
    cursor: pointer;
`

const Logo = () => {

    const fontColor = "#339989";

  return (
    <StyledLogo>
        <p>What</p>
        <p>Shall <span style={{color: fontColor}}>I</span></p>
        <p style={{color: fontColor}}>Drink?</p>
    </StyledLogo>
  )
}

export default Logo
