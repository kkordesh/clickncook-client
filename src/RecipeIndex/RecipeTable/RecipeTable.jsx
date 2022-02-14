//recipe table jsx here
import React, { useState, useEffect } from 'react';
import "./RecipeTable.css"
import RecipeRow from './RecipeRow/RecipeRow';
import {APIURL, EndPoints} from '../../endpoints';
import {Table, Button, Modal, ModalHeader, Form, ModalBody, ModalFooter, Label, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const RecipeTable = (props) => {

    
    const [modal, setModal] = useState(false);
    const [category, setCategory] = useState('all');
    const [recipeData, setRecipeData] = useState([]);

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


// async function fetchCategory(){

//     const requestOptions = {
//         method: "GET",
//         mode:"no-cors",
//         headers: new Headers ({
//             "Content-Type": "application/json",
//             "Authorization": props.token,
            
//         })
//     }
//         try { 
//             const response = await fetch(APIURL+EndPoints.recipe.getDessert, requestOptions)

//             const data = await response.json()

//             console.log(data)
//             setCategory(data);
//         } catch (error) {
//             console.log(error)
//         }
//     }





const FetchCategory = (category) => {
fetch (`http://localhost:4000/recipe/category/${category}`,
    //  fetch( "http://localhost:4000/recipe/dessert", 
    {
        method: 'GET',
        headers: new Headers ({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }) .then ((res) => res.json())
    .then((recipeData) => {
        setRecipeData(recipeData)
        console.log(recipeData)
    })
    //.then(() => props.FetchRecipes())
    .catch ((err) => console.log(err) )
}



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

const newRecipeMapper = () => {
    return recipeData.map((recipe, index) => {
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

const categorySearch = (e) => {
    e.preventDefault();
    FetchCategory(category);
}





    return (
        <>
        {/* <button onClick={categorySearch}>fetch category</button> */}
        <h2>{props.title}</h2>
        {props.title=== "All Recipes" ? <>
       < Form onSubmit={categorySearch} >
        <Label htmlFor='category'/>
        <Input type="select" placeholder='search by category' value={category} onChange={(e) => setCategory(e.target.value)} >
            <option value="all">All</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
        </Input>
        <Button type="submit">Search</Button>
        </Form></> : null }
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
               {recipeData.length > 0 || category != "all"  ? newRecipeMapper() : recipeMapper()}
              
            </tbody>
        </Table>
        </div>
        </>
     );
}

export default RecipeTable;
