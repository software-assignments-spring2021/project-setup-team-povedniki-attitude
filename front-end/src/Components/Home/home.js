
import './home.css';
import React from 'react';
import ReactDOM from 'react-dom';

function Home(){
    return(
        <>
        <header className="App-header">
        <h1>BottomsUp</h1>
        </header>
      <main>
        <form>
          <input type='text' id="ingredient" name='ingredient' placeholder='Search Ingredients'/>
          <input type='submit' name='ingSubmit' value='Submit'/>
        </form>
        <div id="ingContainer">
        </div>
        <a href='/search' id='recipeSearch'>Search for Recipes</a>
      </main>
      </>
    )
}

export default Home;