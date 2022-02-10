//recipe table jsx here
import React, { useState, useEffect } from 'react';
import "./RecipeTable.css"
import RecipeRow from './RecipeRow/RecipeRow';
import {APIURL, EndPoints} from '../../endpoints';
import {Table, Button} from 'reactstrap';

const RecipeTable = (props) => {

const deleteRecipe = (recipe) => {
    fetch(`http://localhost:4000/recipe/${recipe.id}`, {
        method: 'DELETE',
        headers: new Headers ({
            'Content-Type': 'application/json',
            //'Authorization': props.token
        })
    })
    .then(() => props.fetchRecipes())
}


const recipeMapper = () => {
    return props.recipes.map((recipe, index) => {
        return (
            <tr key={index}>
                <td>{recipe.nameOfRecipe}</td>
                <td>{recipe.directions}</td>
                <td>{recipe.timeToCook}</td>
                <td>{recipe.servings}</td>
                <td>{recipe.category}</td>
                <td>{recipe.image}</td>
                <td>
                    <Button>Update</Button>
                    <Button onClick={() => {deleteRecipe(recipe)}}>Delete</Button>
                </td>
            </tr>
        )
    })
}


    return ( 
        <>
        <div>
        <Table striped>
            <thead>
            <tr>
                <th>Name of Recipe</th>
                <th>Directions</th>
                <th>Time to Cook</th>
                <th>Servings</th>
                <th>Category</th>
                <th>Image</th>
            </tr>
            </thead>
            <tbody>
               {recipeMapper()}
            </tbody>
        </Table>
        </div>
        </>
     );
}
 
export default RecipeTable;
