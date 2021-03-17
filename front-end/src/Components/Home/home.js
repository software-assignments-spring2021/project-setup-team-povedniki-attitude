
import './home.css';
import React, { useState } from 'react';
//import ReactDOM from 'react-dom';

function Home(){
  
  // list to keep track of all ingredients entered
  const [ingredients, setIngredients] = useState([]);

  const onSubmit = async e => {
    e.preventDefault();
    // get the text that the user put in the text box
    const ing = e.currentTarget.previousElementSibling.value;

    if (!ingredients.includes(ing)) {
      setIngredients([...ingredients, ing]);
      console.log('submitted ingredient');
      console.log(ingredients);

      const tempIng = document.createElement('p');
      tempIng.innerHTML = ing;
      tempIng.classList.add('inputIng');
      document.getElementById('ingContainer').appendChild(tempIng);
    }
  };

  return(
    <>
      <header className="App-header">
      <h1>BottomsUp</h1>
      </header>
      <main>
        <form>
          <input type='text' id="ingredientInput" name='ingredient' placeholder='Search Ingredients'/>
          <input type='submit' onClick={onSubmit} name='ingSubmit' value='Submit'/>
        </form>  
        <div id="ingContainer">
        </div>
        <a href='/search' id='recipeSearch'>Search for Recipes</a>
      </main>
      <footer>
        <p>Copyright © 2021 BottomsUp</p>
      </footer>
    </>
  )
}

export default Home;