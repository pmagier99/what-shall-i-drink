import React, { useContext } from 'react'
import styled from 'styled-components'
import { AiFillCloseCircle } from "react-icons/ai";

import {Context} from '../../Pages/Start.js'


const StyledIngredients = styled.div`
    width: clamp(340px,50vw,680px);
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    .wrapper{
      position: relative;
      svg{
        position: absolute;
        right: -10px;
        top: -10px;
        font-size: 2rem;
        color: #CA3433;
        visibility: hidden;
        opacity: 0;
      }
      img{
        width: 150px; margin: 10px;
      }

      &:hover svg{
        visibility: visible;
        opacity: 1;
      }
      &:hover{
        background-color: rgba(0,0,0,0.1)
      }
    }




`

const Ingredients = ({list}) => {

  const func = useContext(Context);

  return (
    <StyledIngredients>
      {list.map( (item, i) => <div className='wrapper' key={i} >
                                <img  alt={item} src={`https://www.thecocktaildb.com/images/ingredients/${item}-Medium.png` }/>
                                <AiFillCloseCircle onClick={() => func.removeIngredient(i)}/>
                              </div>)}
    </StyledIngredients>
  )
}

export default Ingredients
