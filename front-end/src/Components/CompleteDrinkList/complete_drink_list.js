import './complete_drink_list.css';
import React, { useState, useEffect } from 'react';
import Cocktail_Item from './Cocktail_Item'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import axios from 'axios';



function Cocktail_Search_Page(){
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
  const onSubmit = e => {
    e.preventDefault();
    
    let inputDrink = e.currentTarget.previousElementSibling.value;
    axios.get(`http://localhost:3000/searchpage?search=${inputDrink}`)
    .then(function (response) {
      filterIngredients(response.data)
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
      <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <p id="dirName"><u>Drink Directory</u></p>
        </div>
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
  
  