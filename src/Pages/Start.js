import React, {createContext, useState} from 'react'
import Header from '../Components/Header/Header'
import InputForm from '../Components/InputForm/InputForm'
import Button from '../Components/Button/Button'
import Ingredients from '../Components/Ingredients/Ingredients'


export const Context = createContext();

const Start = () => {

  //String used in subheading
  const subheading = "Simply type what ingredients you have!"

  //Ingredients list
  const [ingredientsList, setIngredientsList] = useState([]);
  
  //Function for adding a new ingredient to the above list
  const onClick = () => {
    setIngredientsList(ingredientsList => [...ingredientsList, document.querySelector("input").value]);
  }

  return (
    <>
      <Header subheading={subheading} />

      <Context.Provider value={onClick}>  
        <InputForm onClick={onClick}/>
      </Context.Provider>

      <Button value="Search"/>

      {ingredientsList.length > 0 ? <Ingredients list={ingredientsList}/> : <p>No ingredients added yet!</p>}
    </>
  )
}

export default Start
