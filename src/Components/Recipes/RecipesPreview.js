import React from 'react'
import styled from 'styled-components'

const StyledRecipesPreview = styled.div`
  width: clamp(250px, 60vw, 1000px);
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  
  .recipe{
    display: flex;
    flex-flow: column nowrap;
    img{
      width: 250px;
      margin: 10px;
    }
  }
`

const RecipesPreview = ({imgs}) => {
    return(
        <StyledRecipesPreview>
            {imgs.map((element, key) =>
                <div className={"recipe"}>
                    <img key={key} src={element[1]} />
                    <p>{element[2]}</p>
                </div>

            )}

        </StyledRecipesPreview>
    )
}

export default RecipesPreview