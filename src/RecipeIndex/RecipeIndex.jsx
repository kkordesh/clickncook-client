import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'reactstrap';
import RecipeCreate from './RecipeCreate/RecipeCreate';
import RecipeTable from './RecipeTable/RecipeTable';
import RecipeEdit from './RecipeEdit/RecipeEdit';
import "./RecipeIndex.css"


const RecipeIndex = (props) => {
    const [recipes, setRecipes] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [recipeToUpdate, setRecipeToUpdate] = useState([]);
    const [myRecipes, setMyRecipes] = useState([]);
    const [allRecipes, setAllRecipes] = useState([]);
    const [isAllRecipesVisible, setIsAllRecipesVisible] = useState(true);
    console.log(props.token)


function handleToggle () {
    setIsAllRecipesVisible(!isAllRecipesVisible)
}

const FetchRecipes = () => {
    fetch('http://localhost:4000/recipe', {
        method: 'GET',
        headers: new Headers ({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }) .then ((res) => res.json())
    .then((recipeData) => {
        setAllRecipes(recipeData)
        //console.log(recipeData)
    })

    

}



const FetchMyRecipes = () => {
    
    fetch("http://localhost:4000/recipe/0" , {
        method: 'GET',
        headers: new Headers ({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }) .then ((res) => res.json())
    .then((recipeData) => {
        setMyRecipes(recipeData)
        console.log(recipeData)
    })

    

}

    const editUpdateRecipe = (recipe) => {
        setRecipeToUpdate(recipe);
        console.log(recipe);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }
   

    useEffect(() => {
       FetchMyRecipes();
    FetchRecipes();
    }, []);




    return ( 
        
        <div id='recipeindex'>
          
            <Col md="2">
                <RecipeCreate fetchMyRecipes={FetchMyRecipes}
                 token={props.token}/>
                 <button className='tog' onClick={handleToggle}>Toggle My Recipes/All Recipes</button>
            </Col>

            {isAllRecipesVisible === true ? (
            <Col md="12">
                 { <RecipeTable title="All Recipes" recipes={allRecipes} FetchRecipes={FetchRecipes} FetchMyRecipes={FetchMyRecipes} 
                 editUpdateRecipe={editUpdateRecipe} updateOn={updateOn} updateOff={updateOff} token={props.token}/> }
            </Col> ) : (
                
                
                <Col md="12">
                 { <RecipeTable title="My Recipes" recipes={myRecipes} FetchRecipes={FetchMyRecipes} FetchMyRecipes={FetchMyRecipes} 
                 editUpdateRecipe={editUpdateRecipe} updateOn={updateOn} updateOff={updateOff} token={props.token}/> }
                 {updateActive ? <RecipeEdit recipes={myRecipes} recipeToUpdate={recipeToUpdate} updateOff={updateOff} token={props.token} 
                  FetchMyRecipes={FetchMyRecipes}/> : <></>}
                  
            </Col> )}
        </div>
     );
}
 
export default RecipeIndex;