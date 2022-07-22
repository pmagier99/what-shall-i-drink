import React, {createContext, useEffect, useState} from 'react'
import Header from '../Components/Header/Header'
import InputForm from '../Components/InputForm/InputForm'
import Button from '../Components/Button/Button'
import Ingredients from '../Components/Ingredients/Ingredients'
import {findRecipe} from '../Components/API/findRecipe'
import RecipesPreview from "../Components/Recipes/RecipesPreview";

export const Context = createContext();

const Start = () => {

    //String used in subheading
    const subheading = "Simply type what ingredients you have!"
    const subheadingResult = "Choose a recipe that interest you the most!"
    const subheadingResultLoading = "Loading..."

    //Ingredients list
    const [ingredientsList, setIngredientsList] = useState([])
    const [results, setResults] = useState([])
    const [resultsStatus, setResultsStatus] = useState(false)
    const [resultsStatusLoading, setResultsStatusLoading] = useState(false)

    //Used for display right subheading after searching
    useEffect(() => {
        if (results.length > 0) {
            setResultsStatus(true)
            console.log(results)
        }
    }, [results])

    //Function for adding a new ingredient to the above list
    const onClick = () => {
        setIngredientsList(ingredientsList => [...ingredientsList, document.querySelector("input").value]);
    }

    //Function for removing an ingredient
    const removeIngredient = (index) => {
        setIngredientsList(ingredientsList.filter(ingredient => ingredientsList.indexOf(ingredient) !== index))
    }

    //Object with function used with Context to pass them to other components
    const data = {
        onClick: onClick,
        removeIngredient: removeIngredient
    }

    return (
        <>
            {!resultsStatusLoading ?
                <Context.Provider value={data}>
                    <Header subheading={subheading}/>
                    <InputForm/>

                    <Button value="Search" onClick={async () => {
                        setResultsStatusLoading(true);
                        const recipes = await findRecipe(ingredientsList);
                        setResults(recipes.slice(0, 3));
                    }}/>

                    {ingredientsList.length > 0 ? <Ingredients list={ingredientsList}/> :
                        <p>No ingredients added yet!</p>}

                </Context.Provider>
                :
                <>
                    <Header subheading={!resultsStatus ? subheadingResultLoading : subheadingResult}/>
                    <RecipesPreview imgs={results} />


                </>
            }
        </>
    )
}

export default Start
