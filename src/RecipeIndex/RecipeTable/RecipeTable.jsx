//recipe table jsx here
import React, { useState, useEffect, useMemo } from 'react';
import "./RecipeTable.css"
import RecipeRow from './RecipeRow/RecipeRow';
import {APIURL, EndPoints} from '../../endpoints';
import {Table, Button, Modal, ModalHeader, Form, ModalBody, ModalFooter, Label, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RecipeTable.css'
import APIURL from '../../helpers/environment';

const RecipeTable = (props) => {
    

    // console.log(props.title)
    
    const [modal, setModal] = useState(false);
    const [category, setCategory] = useState('all');
    const [recipeData, setRecipeData] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [modalTwo, setModalTwo] = useState(false);

    const togglePopup = () => setModal(!modal);
    const togglePopupTwo = () => setModalTwo(!modalTwo);

const deleteRecipe = (recipe) => {
    fetch(`${APIURL}/recipe/${recipe.id}`, {
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





const FetchCategory = () => {
    // console.log(category)
    // console.log(`http://localhost:4000/recipe/category/${category}`)
fetch (`${APIURL}/recipe/category/${category}`,
    //  fetch( "http://localhost:4000/recipe/dessert", 
    {
        method: 'GET',
        headers: new Headers ({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    }) .then ((res) => res.json())
    .then((data) => {
        console.log(data)
        setRecipeData(data)
    })
    //.then(() => props.FetchRecipes())
    .catch ((err) => console.log(err) )
}



const recipeMapper = () => {
    
    return props?.recipes?.map((recipe, index) => {
        return (
    //         <tr key={index}>
    //             <td>{recipe.nameOfRecipe}</td>
    //             <td>


    //   <button color="danger" onClick={togglePopup}>Click for directions</button>

    //   <Modal isOpen={modal} toggle={togglePopup}>
    //     <ModalHeader toggle={togglePopup}>Directions</ModalHeader>
    //     <ModalBody>
    //      {recipe.directions}
    //     </ModalBody>
    //     <ModalFooter>

    //       <button color="secondary" onClick={togglePopup}>Close</button>
    //     </ModalFooter>
    //   </Modal>

    //             </td>
    //             <td>{recipe.timeToCook}</td>
    //             <td>{recipe.servings}</td>
    //             <td>{recipe.category}</td>
    //             <td><img src={recipe.image} style={{width: "100px"}}/></td>
    //             <td>{props.title=== "My Recipes" ? <>
    //                 <Button className='edit' onClick={()=> {props.editUpdateRecipe(recipe); props.updateOn()}}>Update</Button>
    //                 <Button className='edit' onClick={() => {deleteRecipe(recipe)}}>Delete</Button></> : null }
    //             </td>
    //         </tr>
    <RecipeRow index={index} title={props.title} recipe={recipe} editUpdateRecipe={props.editUpdateRecipe} updateOn={props.updateOn} deleteRecipe={deleteRecipe}  />
        )
    })
}

const newRecipeMapper = () => {
    // console.log(props.recipes)
    return recipeData.map((recipe, index) => {
        return (
            <tr key={index}>
                <td>{recipe.nameOfRecipe}</td>
                <td>


      <button color="danger" onClick={togglePopupTwo}>Click for directions</button>

      <Modal isOpen={modalTwo} toggle={togglePopupTwo}>
        <ModalHeader toggle={togglePopupTwo}>directions</ModalHeader>
        <ModalBody>
         {recipe.directions}
        </ModalBody>
        <ModalFooter>

          <button color="secondary" onClick={togglePopupTwo}>Close</button>
        </ModalFooter>
      </Modal>

                </td>
               
                <td>{recipe.timeToCook}</td>
                <td>{recipe.servings}</td>
                <td>{recipe.category}</td>
                <td><img src={recipe.image} style={{width: "100px"}}/></td>
                <td>{props.title=== "My Recipes" ? <>
                    <Button className='edit' onClick={()=> {props.editUpdateRecipe(recipe); props.updateOn()}}>Update</Button>
                    <Button className='edit' onClick={() => {deleteRecipe(recipe)}}>Delete</Button></> : null }
                </td>
            </tr>
        )
    })
}

const categorySearch = (e) => {
    e.preventDefault();
    FetchCategory();
}



    return (
        <>
        {/* <button onClick={categorySearch}>fetch category</button> */}
        <div id='div1'>
        {props.title=== "All Recipes" ? <>
        <h2 id='alltitle'>{props.title}</h2>
        
       < Form onSubmit={categorySearch} className="categorysearch" >
        <h4 id='cattitle'>Search By Category</h4>
        <Label htmlFor='category'/>
        <Input type="select"  value={category} onChange={(e) => setCategory(e.target.value)} >
            <option value="all">All</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
        </Input>
        <Button type="submit">Search</Button>
        </Form></> : null }
        </div>
        
        {props.title=== "All Recipes" ? 
        <div className='container'>
        <Table striped className=' table-fixed'  >
            <thead id='tablehead'>
            <tr>
                <th>Name of Recipe</th>
                <th>Directions</th>
                <th>Time to Cook</th>
                <th>Servings</th>
                <th>Category</th>
                <th>Image</th>
            </tr>
            </thead>
            
            <tbody >
      
               {recipeData.length > 0 || category != "all"  ? newRecipeMapper() : recipeMapper()}
              
            </tbody>
        </Table>

        
        {/* <button onClick={(e) => props.changePageNumber(e, 'down')}>Previous 10</button>
            <button onClick={(e) => props.changePageNumber(e, 'up')}>Next 10</button> */}
        </div> :


<div className='myrecipes'>
            <h2 id='mytitle'>My Recipes</h2>
        <Table striped id='mytable' className=' table-fixed'  >
            <thead id='tablehead'>
            <tr>
                <th>Name of Recipe</th>
                <th>Directions</th>
                <th>Time to Cook</th>
                <th>Servings</th>
                <th>Category</th>
                <th>Image</th>
            </tr>
            </thead>
            
            <tbody >
              
            {recipeData.length > 0 || category != "all"  ? newRecipeMapper() : recipeMapper()}
            </tbody>
        </Table>
        </div> }

        </>
     );
}



export default RecipeTable;
