import './home.css';
import React, { useState } from 'react';
import axios from 'axios';
//import ReactDOM from 'react-dom';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

function Home(){
  
  // list to keep track of all ingredients entered
  const [ingredients, setIngredients] = useState([]);

  

  const onSubmit = async e => {
    e.preventDefault();
    // get the text that the user put in the text box
    let ing = e.currentTarget.previousElementSibling.value;

    if (!ingredients.includes(ing) && ing !== '') {
      setIngredients([...ingredients, ing]);

      axios.post('/', {
        ingredient: ingredients
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      // axios({
      //   method: 'post',
      //   url: '/',
      //   data: {
      //     ingredientsList:ingredients
      //   }
      // }).then( res => {
      //   console.log(res.data);
      // })

      console.log('submitted ingredient');
      console.log(ingredients);

      const tempIng = document.createElement('p');
      tempIng.innerHTML = ing;
      tempIng.classList.add('inputIng');
      document.getElementById('ingContainer').appendChild(tempIng);
    }
    e.currentTarget.previousElementSibling.value = '';
  };

  return(
    <>
      <div id='pageContainer'>
        <HamburgerMenu></HamburgerMenu>
        <header className="App-header">
          <img id='logo' src='logo.png'></img>
        </header>
        <main>
          <form method='POST'>
            <input type='text' id="ingredientInput" name='ingredient' placeholder='Add an Ingredient'/>
            <input type='submit' id="ingredientSubmit" onClick={onSubmit} name='ingSubmit' value='Submit'/>
          </form>  
          <div id="ingContainer">
          </div>
          <a href='/cocktails' id='recipeSearch'>Search for Recipes</a>
        </main>
        <footer>
          <p>Copyright © 2021 BottomsUp</p>
        </footer>
      </div>
    </>
  )
}

export default Home;