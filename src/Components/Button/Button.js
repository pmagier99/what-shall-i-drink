import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    margin: clamp(30px,5vw,100px) 0;
    width: clamp(250px,50vw,400px);
    height: ${props => props.styles==="start" ? "125px" : "60px"};

    font-size: ${props => props.styles==="start" ? "2rem" : "1.7rem"};

    background-color: #339989;
    color: #eee;
    border: 0px solid transparent;
    border-radius: 25px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    font-weight: 800;
    &:hover{
      background-color: #117767;
    }

`

const Button = ({styles, value, onClick}) => {
  return (
    <StyledButton styles={styles} onClick={onClick}>{value}</StyledButton>
  )
}

export default Button
