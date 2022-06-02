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
      <InputField placeholder={"Type alcohol..."} list={"alcohol"} />
      <InputField placeholder={"Type any other ingredients..."}/>
      <AddButton/>
    </StyledForm>
  )
}

export default InputForm
