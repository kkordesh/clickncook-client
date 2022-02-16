import React, { useState, useEffect } from 'react';
import {Table, Button, Modal, ModalHeader, Form, ModalBody, ModalFooter, Label, Input} from 'reactstrap';

const RecipeRow = (props) => {
    const [modal, setModal] = useState(false);
    const togglePopup = () => setModal(!modal);
    return ( 
        <tr key={props.index}>
        <td>{props.recipe.nameOfRecipe}</td>
        <td>


<button color="danger" onClick={togglePopup}>Click for directions</button>

<Modal isOpen={modal} toggle={togglePopup}>
<ModalHeader toggle={togglePopup}>Directions</ModalHeader>
<ModalBody>
 {props.recipe.directions}
</ModalBody>
<ModalFooter>

  <button color="secondary" onClick={togglePopup}>Close</button>
</ModalFooter>
</Modal>

        </td>
        <td>{props.recipe.timeToCook}</td>
        <td>{props.recipe.servings}</td>
        <td>{props.recipe.category}</td>
        <td><img src={props.recipe.image} style={{width: "100px"}}/></td>
        <td>{props.title=== "My Recipes" ? <>
            <Button className='edit' onClick={()=> {props.editUpdateRecipe(props.recipe); props.updateOn()}}>Update</Button>
            <Button className='edit' onClick={() => {props.deleteRecipe(props.recipe)}}>Delete</Button></> : null }
        </td>
    </tr>
     );
}
 
export default RecipeRow;