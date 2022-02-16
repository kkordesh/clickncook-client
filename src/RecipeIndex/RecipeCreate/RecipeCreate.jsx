import React, { useState, useEffect } from 'react';
import {Button, Form, FormGroup, Label, Input, ModalFooter, Container, Modal, ModalHeader, ModalBody} from 'reactstrap';
import { APIURL } from '../../endpoints';
import { EndPoints } from '../../endpoints';
import RecipeIndex from '../RecipeIndex';

import 'bootstrap/dist/css/bootstrap.min.css';

const RecipeCreate = (props) => {
    

    const [nameOfRecipe, setNameOfRecipe] = useState('');
    const [directions, setDirections] = useState('');
    const [timeToCook, setTimeToCook] = useState('');
    const [servings, setServings] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const togglePopup = () => setModal(!modal);
    
        const UploadImage = async (e) => {
            const files = e.target.files;
            const data = new FormData();
            data.append("file", files[0]);
            data.append("upload_preset", "clickncook");
            setLoading(true);
            const res = await fetch (
                "https://api.cloudinary.com/v1_1/dw451lydk/image/upload",
                {
                    method: "POST",
                    body: data, 
                }
            )
            const File = await res.json();
    
            console.log(File.secure_url)
            setImage(File.secure_url)
            setLoading(false)
        }
        

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/recipe', {
            method: 'POST',
            body: JSON.stringify({nameOfRecipe: nameOfRecipe, directions: directions, timeToCook: timeToCook, servings:Number(servings),
            category: category, image: image}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((recipeData) => {
            console.log(recipeData);
            setNameOfRecipe("");
            setDirections("");
            setTimeToCook("");
            setServings("");
            setCategory("");
            setImage("");
            props.FetchMyRecipes();
        })
    }
    

    return ( 
        <div>
            <button className='create'onClick={togglePopup}>Create New Recipe</button>
            <Modal isOpen={modal} toggle={togglePopup}>
         <ModalHeader toggle={togglePopup}>Create New Recipe</ModalHeader>
         <ModalBody>
          <Form onSubmit={handleSubmit}>
          <FormGroup>
              <Label htmlFor='nameOfRecipe'/>
              <input name="nameOfRecipe" placeholder='name of recipe' value={nameOfRecipe} onChange={(e) => setNameOfRecipe(e.target.value)} />
          </FormGroup>
          <FormGroup>
              <Label htmlFor='directions'/>
              <input name="directions" placeholder='directions (ingredients, temperature times, etc.)'  value={directions} onChange={(e) => setDirections(e.target.value)} />
          </FormGroup>
          <FormGroup>
              <Label htmlFor='timeToCook'/>
              <input name="timeToCook" placeholder='time to cook' value={timeToCook} onChange={(e) => setTimeToCook(e.target.value)} />
          </FormGroup>
          <FormGroup>
              <Label htmlFor='servings'/>
              <input name="servings" placeholder='servings' value={servings} onChange={(e) => setServings(e.target.value)} />
          </FormGroup>
          <FormGroup>
              <Label htmlFor='category'/>
              <Input type="select" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Dessert">Dessert</option>
              </Input>
          </FormGroup>
              <Container>
              <h5>upload an image</h5>
          <FormGroup>
                    <Input type="file" name='file' placeholder='Upload image Here' onChange={UploadImage} />
                    <br />
                    {loading ? (<h3>Loading...</h3>) : <img src={image} style={{width: "300px"}}/>}
                </FormGroup>
                </Container>
                <ModalFooter>
            <Button type="submit">Click to Submit</Button>
            <Button onClick={togglePopup}>Cancel</Button>
            </ModalFooter>
        </Form>
        </ModalBody>
        </Modal>
      
        </div>
     );
}
 
export default RecipeCreate;