const RecipeRow = (props) => {
    return ( 
        <tr>
            <td>{props.recipe.nameOfRecipe}</td>
            <td>{props.recipe.directions}</td>
            <td>{props.recipe.timeToCook}</td>
            <td>{props.recipe.servings}</td>
            <td>{props.recipe.category}</td>
            <td>{props.recipe.image}</td>
        </tr>
     );
}
 
export default RecipeRow;