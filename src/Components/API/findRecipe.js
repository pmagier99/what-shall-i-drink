//Main object storing information about the recipes, such as ID, name and compareScore
let RECIPES = {};

//This function build up the RECIPES object by GETting data from API based on user's ingredients. Then it compares recipes' ingredients with user's ingredients
export async function findRecipe(ingredients) {
    for(var recipe in RECIPES) delete RECIPES[recipe];
    let results = [];

    try{

        //Loop that adds the recipes ID to the RECIPES object
        for(let i = 0; i < ingredients.length; i++) {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredients[i]}`)
            const actualData = await response.json()

            actualData.drinks.forEach(element => RECIPES[element.idDrink] = {compareScore: 0, name: element.strDrink, img: element.strDrinkThumb})
        }

        //Loop that compares recipes' ingredients with user's ingredients
        for(const recipe in RECIPES){
            await compareIngredients(recipe, ingredients);
        }

        //Select and put the recipes compareScore into results array which then will be sorted ascending and reversed
        for(const recipe in RECIPES){
            results.push([recipe, RECIPES[recipe].img, RECIPES[recipe].name, RECIPES[recipe].compareScore]);
        }

        //Sorting array
        results.sort(function(a,b){
            return a[3] - b[3]
        })
        
        return results.reverse()
        
    //Consoles any error if comes up
    }catch (err){
        console.log(err);
    }
}

//Function that compare ingredients
async function compareIngredients(id, ingredients) {

    //Temp array for storing given recipe's ingredients
    let recipeIngredients = [];

    try{
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        const actualData = await response.json()

        //Add any ingredients to the recipeIngredients array
        if(actualData.drinks[0].strIngredient1){recipeIngredients.push(actualData.drinks[0].strIngredient1)}
        if(actualData.drinks[0].strIngredient2){recipeIngredients.push(actualData.drinks[0].strIngredient2)}
        if(actualData.drinks[0].strIngredient3){recipeIngredients.push(actualData.drinks[0].strIngredient3)}
        if(actualData.drinks[0].strIngredient4){recipeIngredients.push(actualData.drinks[0].strIngredient4)}
        if(actualData.drinks[0].strIngredient5){recipeIngredients.push(actualData.drinks[0].strIngredient5)}
        if(actualData.drinks[0].strIngredient6){recipeIngredients.push(actualData.drinks[0].strIngredient6)}
        if(actualData.drinks[0].strIngredient7){recipeIngredients.push(actualData.drinks[0].strIngredient7)}
        if(actualData.drinks[0].strIngredient8){recipeIngredients.push(actualData.drinks[0].strIngredient8)}
        if(actualData.drinks[0].strIngredient9){recipeIngredients.push(actualData.drinks[0].strIngredient9)}
        if(actualData.drinks[0].strIngredient10){recipeIngredients.push(actualData.drinks[0].strIngredient10)}
        if(actualData.drinks[0].strIngredient11){recipeIngredients.push(actualData.drinks[0].strIngredient11)}
        if(actualData.drinks[0].strIngredient12){recipeIngredients.push(actualData.drinks[0].strIngredient12)}
        if(actualData.drinks[0].strIngredient13){recipeIngredients.push(actualData.drinks[0].strIngredient13)}
        if(actualData.drinks[0].strIngredient14){recipeIngredients.push(actualData.drinks[0].strIngredient14)}
        if(actualData.drinks[0].strIngredient15){recipeIngredients.push(actualData.drinks[0].strIngredient15)}        

        //Comparing ingredients
        for(let i = 0; i < ingredients.length; i++){
            for(let j=0; j < recipeIngredients.length; j++){

                //Adding +1 to the compareScore
                if(ingredients[i].toUpperCase() === recipeIngredients[j].toUpperCase()){
                    RECIPES[id].compareScore += 1;
                }

            }
        }

    //Consoles any error if comes up
    }catch (err){
        console.log(err)
    }
}