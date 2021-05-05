import './cocktail_search_page.css';
import React, { useState, useEffect } from 'react';
import Cocktail_Item from './Cocktail_Item'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import axios from 'axios';
import { TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';



function Cocktail_Search_Page(){
  let TrendingTitle = "Trending Recipes...";
  const [title, setTitle] = useState(TrendingTitle);
  const [cocktailItems, setCocktails] = useState([]);

  function filterIngredients(rawData){
    rawData.map((data)=>{
      let ingredients =[]
      for (const[key,value] of Object.entries(data)){
        if(key.includes("strIngredient") &&value!== ""&& value!==null){
          ingredients.push(value)
        }
      }
      data["ingredients"]= ingredients;
    })
  }


  function filterIngredientsMeasure(rawData){
    rawData.map((data)=>{
      let ingredients =[]
      for (const[key,value] of Object.entries(data)){
        if(key.includes("strIngredient") &&value!== ""&& value!==null){
          ingredients.push(value)
        }
      }
      data["ingredients"]= ingredients;


      let measures =[]
      for (const[key,value] of Object.entries(data)){
        if(key.includes("strMeasure") &&value!== ""&& value!==null){
          measures.push(value)
        }
      }
      let ingredientsMeasure = []
      for (let i = 0; i < ingredients.length; i++){
        ingredientsMeasure.push(`${measures[i]} of ${ingredients[i]}`)
      }
      data["ingredientsMeasure"]= ingredientsMeasure;
    })
  }

  useEffect(() => {
    axios('https://www.thecocktaildb.com/api/json/v2/9973533/latest.php')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        filterIngredientsMeasure(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
      
  }, [])
  const onSubmit = e => {
    e.preventDefault();
    // setTitle("")
    setTitle("");
    
    let inputDrink = e.currentTarget.previousElementSibling.value;
    axios.get(`http://174.138.46.165/searchpage?search=${inputDrink}`)
    .then(function (response) {
      //in here put response.data.drinks into the coctailItmes list
      
      filterIngredients(response.data)
      filterIngredientsMeasure(response.data)
      setCocktails(response.data);
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  return(

    <>
      <HamburgerMenu></HamburgerMenu>
      <header className="App-header">
        <img id='logo' src='logo.png'></img>
      </header>
      <main>
        <form>
          <input type='text' id="ingredientInput" name='ingredient' placeholder='Search For Cocktail'/> 
          <input type='submit' id="ingredientSubmit" onClick={onSubmit} name='ingSubmit' value='Submit'/>
          {/* {< TextField  label="Search for Cocktails" variant="outlined" name='ingredient' style={{ width: 500 }}/> }
          <Button 
              variant="outlined" 
              type="submit"
              onClick={onSubmit}
              name="ingSubmit"
              >submit</Button> */}
        </form>
        <div id="SearchContainer">
          <div id = "Suggestion"> {title} </div>
          {
            cocktailItems !== null?
            cocktailItems.map((item, index)=> {
             return(
               <>
               <Cocktail_Item key ={index} 
               name={item.strDrink}
               image= {item.strDrinkThumb}
               instructions = {item.strInstructions}
               ingredients={item.ingredients}
               ingredientsMeasure={item.ingredientsMeasure}
               glass= {item.strGlass}/>
               {console.log(item)}
               </>
             ) 
            })
            : <div id = "noResults">No results found!</div>

          }
        </div>
        
      </main>
      <footer>
        <p>Copyright © 2021 BottomsUp</p>
      </footer>
    </>
  )

    
}

export default Cocktail_Search_Page;
  
  