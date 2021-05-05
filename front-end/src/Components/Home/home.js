import './home.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import ReactDOM from 'react-dom';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import Button from '@material-ui/core/Button';



function Home(){
  
  // list to keep track of all ingredients entered
  const [input, setInput] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [ingredientsArray, setIngredientsArray] = useState([]);
  
  function makeIngredientsArray(rawData) {
    let result = [];
    rawData.map((data) => {
      let arrayIngredients = [];
      for (const [key, value] of Object.entries(data)) {
        if (key.includes("strIngredient") && value !== "" && value !== null) {
          arrayIngredients.push(value);
        }
      }
      result = [...result, ...arrayIngredients];
    });
    setIngredientsArray((array) => array.concat([...new Set(result)]));
    
  }

  useEffect(() => {
    if (window.localStorage.getItem('ingredients')) {
      window.localStorage.setItem('ingredients', '');
    }
    axios('https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=')
      .then( (response) => {
        makeIngredientsArray(response.data.drinks)
        console.log(ingredientsArray)
      })
      .catch( (err) => {
        console.log(err);
      })

  }, [])

  const onSubmit = async e => {
    e.preventDefault();
    // get the text that the user put in the text box
    // let ing = e.currentTarget.previousElementSibling.value;
    

    if (!ingredients.includes(input) && input !== "" && ingredientsArray.includes(input)) {
      setIngredients([...ingredients, input]);

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
      tempIng.textContent = input;
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
          <img id='logo' src='logo.png' alt='BottomsUp'></img>
        </header>
        <main>
          <form method='POST'>
            {/* <input type='text' id="ingredientInput" name='ingredient' placeholder='Add an Ingredient'/>
            <input type='submit' id="ingredientSubmit" onClick={onSubmit} name='ingSubmit' value='Submit'/> */}
            <div id= "searchAndSubmit">
            <Autocomplete 
              // id="ingredientInput"
              id="combo-box"
              onSelect={(selectedOption) =>
                setInput(selectedOption.target.value)
              }
              options={ingredientsArray}
              getOptionLabel={(option) => option}
              style={{ width: 500 }}
              renderInput={(params) => (
                <TextField {...params} label="Search for Ingredients" variant="outlined" />
              )}
            />
            {/* <input
            
                type="submit"
                id="ingredientSubmit"
                onClick={onSubmit}
                name="ingSubmit"
                value="Submit"
                
              /> */}
              
              <Button 
              variant="outlined" 
              type="submit"
              onClick={onSubmit}
              name="ingSubmit"
              >submit</Button>
            </div>
          </form>  
          <div id="ingContainer">
          </div>
          <a href='/cocktails' id='recipeSearch'>Search for Recipes</a><br></br>
          <a href='/randomdrink' id='surpriseMe'>Surprise Me!</a>
        </main>
        <footer>
          <p>Copyright © 2021 BottomsUp</p>
        </footer>
      </div>
    </>
  )
}

export default Home;