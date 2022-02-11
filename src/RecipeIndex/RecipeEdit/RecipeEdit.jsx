//recipe edit jsx here
import React, { useState } from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, Container, ModalFooter} from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

const RecipeEdit = (props) => {
    const [editName, setEditName] = useState(props.recipeToUpdate.nameOfRecipe);
    const [editDir, setEditDir] = useState(props.recipeToUpdate.directions);
    const [editTime, setEditTime] = useState(props.recipeToUpdate.timeToCook);
    const [editServings, setEditServings] = useState(props.recipeToUpdate.servings);
    const [editCategory, setEditCategory] = useState(props.recipeToUpdate.category);
    const [editImage, setEditImage] = useState(props.recipeToUpdate.image);
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const togglePopup = () => setModal(!modal);

    const recipeUpdate = (e, recipe) => {
        e.preventDefault();
        fetch(`http://localhost:4000/recipe/${props.recipeToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({nameOfRecipe: editName, directions: editDir, timeToCook: editTime, 
            servings: editServings, category:editCategory, image: editImage}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then ((res) => {
            console.log(res)
            props.updateOff();
            props.FetchMyRecipes();
        })
    }


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
        setEditImage(File.secure_url)
        setLoading(false)
    }


    return ( 
        <div>
        <Modal isOpen={true}>
            <ModalHeader>Edit Recipe</ModalHeader>
            <ModalBody>
                <Form onSubmit={recipeUpdate}>
                <FormGroup>
              <Label htmlFor='nameOfRecipe'/>
              <input name="nameOfRecipe" placeholder='name of recipe' value={editName} onChange={(e) => setEditName(e.target.value)} />
          </FormGroup>
          <FormGroup>
              <Label htmlFor='directions'/>
              <input name="directions" placeholder='directions (ingredients, temperature times, etc.)' value={editDir} onChange={(e) => setEditDir(e.target.value)} />
          </FormGroup>
          <FormGroup>
              <Label htmlFor='timeToCook'/>
              <input name="timeToCook" placeholder='time to cook' value={editTime} onChange={(e) => setEditTime(e.target.value)} />
          </FormGroup>
          <FormGroup>
              <Label htmlFor='servings'/>
              <input name="servings" placeholder='servings' value={editServings} onChange={(e) => setEditServings(e.target.value)} />
          </FormGroup>
          <FormGroup>
              <Label htmlFor='category'/>
              <Input type="select" name="category" value={editCategory} onChange={(e) => setEditCategory(e.target.value)}>
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
                    {loading ? (<h3>Loading...</h3>) : <img src={editImage} style={{width: "300px"}}/>}
                </FormGroup>
                </Container>
                <ModalFooter>
            <Button type="submit">Click to Submit</Button>
            
                    </ModalFooter>
                </Form>
            </ModalBody>
        </Modal>
        </div>
     );
}
 
export default RecipeEdit;