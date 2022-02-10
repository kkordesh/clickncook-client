import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'reactstrap';
import RecipeCreate from './RecipeCreate/RecipeCreate';

const RecipeIndex = (props) => {
    const [recipes, setRecipes] = useState([]);

const FetchRecipes  = () => {
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
            <Col md="3">
                <RecipeCreate fetchRecipes={FetchRecipes} /*token={props.token}*//>
            </Col>
            <Col md="9">
                <h2>Create a recipe to see a table</h2>
            </Col>
        </div>
     );
}
 
export default RecipeIndex;