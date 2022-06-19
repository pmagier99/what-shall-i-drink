import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from "react"

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
  const [data, setData] = useState([])
  const [status, setStatus] = useState(false);


  useEffect(() =>{
      getData();

  },[])

  async function getData(){
    setStatus(true);
    try{
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
        const actualData = await response.json()
        
        setStatus(false);
        setData(actualData.drinks);
    }catch (err){
        console.log(err);
        setStatus(false);
    }
}

  return (
      <>
        <StyledInputField list={list} placeholder={placeholder} />
        <datalist id={list}>

          {status ? <option value="Loading..." /> : data.map((element, index) => <option key={index} value={element.strIngredient1} />)}

        </datalist>
      </>
      

  )
}

export default InputField
