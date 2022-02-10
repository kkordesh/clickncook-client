import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'reactstrap';
import RecipeCreate from './RecipeCreate/RecipeCreate';
import RecipeTable from './RecipeTable/RecipeTable';

const RecipeIndex = (props) => {
    const [recipes, setRecipes] = useState([]);
    const [refreshRecipeTable, setrefreshRecipeTable] = useState();

const FetchRecipes = () => {
    fetch('http://localhost:4000/recipe', {
        method: 'GET',
        headers: new Headers ({
            'Content-Type': 'application/json',
            //'Authorization': props.token
        })
    }) .then ((res) => res.json())
    .then((recipeData) => {
        setRecipes(recipeData)
    })

    useEffect(() => {
        FetchRecipes()
    }, []);

} 

    return ( 
        
        <div>
          
            <Col md="2">
                <RecipeCreate fetchRecipes={FetchRecipes}
                 /*token={props.token}*//>
            </Col>
            <Col md="12">
                <RecipeTable recipes={recipes} fetchRecipes={FetchRecipes} />
            </Col>
        </div>
     );
}
 
export default RecipeIndex;