import './complete_drink_list.css';
import React, { useState, useEffect } from 'react';
import Cocktail_Item from './Cocktail_Item'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import axios from 'axios';


function Complete_Drink_List(){
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



  useEffect(() => {
    axios('https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
      
  }, [])


  function filterDrinks() {
    axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=ordinary_drink')
    .then( (response) => {
      filterIngredients(response.data.drinks)
      setCocktails(response.data.drinks);
    })
    .catch( (err) => {
      console.log(err);
    })
    
  }



  return(
    <>
      <HamburgerMenu></HamburgerMenu>
      <header className="App-header">
        <img id='logo' src='logo.png'></img>
      </header>

      <div id="buttons">
        {/* <button class="btn" onclick={arrayCreation()}>Show All</button> */}
        <button class="btn" onClick={temp}>Alphabetically</button>
        <button class="btn">Fruity</button>
        <button class="btn">Holiday</button>
        <button class="btn">Etc.</button>
        
      </div>
      {/* <p>{document.getElementById("SearchContainer").innerHTML = objArray[0].key}</p> */}
      <p>{objArray[0]}</p>
      <main>
        <div id="SearchContainer">
          {
            cocktailItems !== null?
            cocktailItems.map((item, index)=> {
             return(
               <>
               <Cocktail_Item key ={index} 
               name={item.strDrink}
               image= {item.strDrinkThumb}
               ingredients={item.ingredients}/>
               {/* {console.log(item)} */}
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

export default Complete_Drink_List;