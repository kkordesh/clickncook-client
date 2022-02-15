//recipe table jsx here
import React, { useState, useEffect } from 'react';
import "./RecipeTable.css"
import RecipeRow from './RecipeRow/RecipeRow';
import {APIURL, EndPoints} from '../../endpoints';
import {Table, Button, Modal, ModalHeader, Form, ModalBody, ModalFooter, Label, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const RecipeTable = (props) => {

    //const [category, setCategory] = useState('');
    const [modal, setModal] = useState(false);
    const togglePopup = () => setModal(!modal);

const deleteRecipe = (recipe) => {
    fetch(`http://localhost:4000/recipe/${recipe.id}`, {
        method: 'DELETE',
        headers: new Headers ({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    })
    .then(() => props.FetchMyRecipes())
}

// const FetchCategory = (recipe) => {

//     fetch(`http://localhost:4000/recipe/category/${recipe.category}`, {
//         method: 'GET',
//         headers: new Headers ({
//             'Content-Type': 'application/json',
//             'Authorization': props.token
//         })
//     }) .then ((res) => res.json())
//     .then((recipeData) => {
//         props.setAllRecipes(recipeData)
//     //     //console.log(recipeData)
//     })
//     .then(() => props.FetchRecipes())

// }
// console.log(FetchCategory)


const recipeMapper = () => {
    return props?.recipes?.map((recipe, index) => {
        return (
            <tr key={index}>
                <td>{recipe.nameOfRecipe}</td>
                <td>


      <button color="danger" onClick={togglePopup}>Click for directions</button>

      <Modal isOpen={modal} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>{recipe.nameOfRecipe} directions</ModalHeader>
        <ModalBody>
         {recipe.directions}
        </ModalBody>
        <ModalFooter>

          <button color="secondary" onClick={togglePopup}>Close</button>
        </ModalFooter>
      </Modal>

                </td>
                <td>{recipe.timeToCook}</td>
                <td>{recipe.servings}</td>
                <td>{recipe.category}</td>
                <td><img src={recipe.image} style={{width: "100px"}}/></td>
                <td>{props.title=== "My Recipes" ? <>
                    <Button onClick={()=> {props.editUpdateRecipe(recipe); props.updateOn()}}>Update</Button>
                    <Button onClick={() => {deleteRecipe(recipe)}}>Delete</Button></> : null }
                </td>
            </tr>
        )
    })
}

// const categorysearch = (e) => {
//     e.preventDefault();
//     FetchCategory();
// }





    return (
        <>
        <h2>{props.title}</h2>
{/*         
       < Form onChange={categorysearch} >
        <Label htmlFor='category'/>
        <Input type="select" placeholder='search by category' value={category}>
            <option value="All">All</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
        </Input>
        <Button type="search">Search</Button>
        </Form> */}
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
