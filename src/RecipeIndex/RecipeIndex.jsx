import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'reactstrap';
import RecipeCreate from './RecipeCreate/RecipeCreate';
import RecipeTable from './RecipeTable/RecipeTable';
import RecipeEdit from './RecipeEdit/RecipeEdit';

const RecipeIndex = (props) => {
    const [recipes, setRecipes] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [recipeToUpdate, setRecipeToUpdate] = useState([]);

    console.log(props.token)

const FetchRecipes = () => {
    fetch('http://localhost:4000/recipe', {
        method: 'GET',
        headers: new Headers ({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }) .then ((res) => res.json())
    .then((recipeData) => {
        setRecipes(recipeData)
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
        setRecipes(recipeData)
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
    }, []);




    return ( 
        
        <div>
          
            <Col md="2">
                <RecipeCreate fetchRecipes={FetchRecipes}
                 token={props.token}/>
            </Col>
            <Col md="12">
                 { <RecipeTable recipes={recipes} FetchRecipes={FetchRecipes} FetchMyRecipes={FetchMyRecipes} 
                 editUpdateRecipe={editUpdateRecipe} updateOn={updateOn} updateOff={updateOff} token={props.token}/> }
            </Col>
            {updateActive ? <RecipeEdit recipeToUpdate={recipeToUpdate} updateOff={updateOff} token={props.token} 
            FetchMyRecipes={FetchMyRecipes}/> : <></>}
        </div>
     );
}
 
export default RecipeIndex;