import React from 'react'
import InputField from './InputField'
import AddButton from './AddButton'
import styled from 'styled-components'

const StyledForm = styled.form`
    width: clamp(250px,50vw,364px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

const InputForm = () => {
  return (
    <StyledForm>
      <InputField placeholder={"Type any ingredients you have..."} list={"alcohol"}/>
      <AddButton/>
    </StyledForm>
  )
}

export default InputForm
