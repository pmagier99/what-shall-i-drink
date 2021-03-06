import React, { useContext } from 'react'
import styled from 'styled-components'
import {FaPlus} from 'react-icons/fa'

import {Context} from '../../Pages/Start.js'

const StyledAddButton = styled.div`
    height: 66px; width: 66px;
    background-color: #339989;
    border: 0 solid transparent;
    border-radius: 25px;
    margin: 10px 0;
    color: #eee;
    display: grid;
    place-content: center;
    position: absolute;
    right: -104px; //3px(border), 15px(padding), 20px(margin), 66px(width)
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
const AddButton = () => {

  const func = useContext(Context);

  return (
    <StyledAddButton onClick={func.onClick}>
        <FaPlus/>
    </StyledAddButton>
  )
}

export default AddButton
