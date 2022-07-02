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

  //Function for removeing an ingredient
  const removeIngredient = (index) => {
    setIngredientsList(ingredientsList.filter(ingredient => ingredientsList.indexOf(ingredient) !== index ))
  }

  //Object with function used with Context to pass them to other components
  const data = {
    onClick: onClick,
    removeIngredient: removeIngredient
  }


  return (
    <>
      <Context.Provider value={data}>

        <Header subheading={subheading} />
        
        <InputForm/>

        <Button value="Search"/>

        {ingredientsList.length > 0 ? <Ingredients list={ingredientsList}/> : <p>No ingredients added yet!</p>}

      </Context.Provider>
    </>
  )
}

export default Start
