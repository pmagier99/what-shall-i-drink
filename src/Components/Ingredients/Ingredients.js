import React from 'react'
import styled from 'styled-components'


const StyledIngredients = styled.div`
    width: clamp(340px,50vw,680px);
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    img{width: 150px; margin: 10px;}
`

const Ingredients = ({list}) => {
  return (
    <StyledIngredients>
      {list.map( (item, i) => <img key={i} alt={item} src={`https://www.thecocktaildb.com/images/ingredients/${item}-Medium.png` }/>)}
    </StyledIngredients>
  )
}

export default Ingredients
