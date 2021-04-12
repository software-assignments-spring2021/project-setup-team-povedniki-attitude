import './home.css';
import React, { useEffect, useState } from 'react';
//import axios from 'axios';
//import ReactDOM from 'react-dom';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

function Home(){
  
  // list to keep track of all ingredients entered
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    if (window.localStorage.getItem('ingredients')) {
      window.localStorage.setItem('ingredients', '');
    }
  }, [])

  const onSubmit = async e => {
    e.preventDefault();
    // get the text that the user put in the text box
    let ing = e.currentTarget.previousElementSibling.value;

    if (!ingredients.includes(ing) && ing !== '') {
      setIngredients([...ingredients, ing]);

      // to be implemented after users are created
      // axios.post('http://localhost:3000/', {
      //   ingredient: ingredients
      // })
      // .then(function (response) {
      //   console.log('saved ingredient');
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });

      console.log('submitted ingredient');
      console.log(ingredients);
      window.localStorage.setItem('ingredients', JSON.stringify(ingredients));
      //console.log(JSON.parse(window.localStorage.getItem('ingredients')));

      const tempIng = document.createElement('p');
      tempIng.textContent = ing;
      tempIng.classList.add('inputIng');

      let tempImg = document.createElement('img');
      tempImg.src = '/img/close.png';
      tempImg.classList.add('close', 'hidden');
      tempIng.appendChild(tempImg);

      document.getElementById('ingContainer').appendChild(tempIng);

      tempIng.onmouseover = (event) => {
        event.currentTarget.style.backgroundColor = 'rgb(115, 162, 222)';
        event.currentTarget.children[0].classList.toggle('hidden');
        console.log(tempIng.children);
        tempIng.children[0].onClick = (event) => {
          document.querySelector('#ingContainer').removeChild(tempIng);
          //console.log(ingredients);
        }
      }
      tempIng.onmouseout = (event) => {
        event.currentTarget.style.backgroundColor = '#1e2c3e';
        event.currentTarget.children[0].classList.toggle('hidden');
      }
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