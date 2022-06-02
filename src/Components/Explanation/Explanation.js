import React from 'react'
import styled from 'styled-components'

const StyledExplanation = styled.div`
    width: clamp(300px, 60vw, 1000px);
    margin: clamp(30px,5vw,80px) auto;
    *{
        margin: 20px 0;
    }
    h3{font-size: clamp(1rem, 2vw, 2rem);}
    li{
      list-style-type: none;
      font-size: clamp(0.8rem, 1vw, 1.5rem);
    }
`

const Explanation = ({explanation}) => {
  return (
    <StyledExplanation id="howitworks">
        <h3>How it works?</h3>
        <ul>
            {explanation.map((element, index) => <li key={index}>{element}</li>)}
        </ul>
    </StyledExplanation>
  )
}

export default Explanation
