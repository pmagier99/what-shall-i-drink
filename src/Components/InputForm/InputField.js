import React from 'react'
import styled from 'styled-components'

const StyledInputField = styled.input`
    width: 100%;
    height: 60px;
    text-align: left;
    border: 3px solid #339989;
    border-radius: 25px;
    margin: 10px 0;
    padding-left: 30px;
    font-size: 1rem;
    background-color: #fefefe;
    
`

const InputField = ({placeholder, list}) => {


  return (
      <>
        <StyledInputField placeholder={placeholder} />
      </>
      

  )
}

export default InputField
