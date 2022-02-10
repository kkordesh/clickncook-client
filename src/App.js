import logo from './logo.svg';
import './App.css';
import Navbar from './Home/Navbar';
import RecipeIndex from './RecipeIndex/RecipeIndex';

function App() {

  //Code below is for having the recipes only able to display when the user is succesfully logged in

  /*const protectedViews = () => {
    return (token === localStorage.getItem ('token') ? <RecipeIndex token={token}/>
    : <Auth updateToken={updateToken}/>)
  } */


  return (
    <div>
      {/* <Navbar clearToken={clearToken}/>
      {protectedViews()} */}
      <RecipeIndex />
     
    </div>
  );
}

export default App;
