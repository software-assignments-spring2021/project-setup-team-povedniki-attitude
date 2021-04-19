import './complete_drink_list.css';
import React, { useState, useEffect } from 'react';
import Cocktail_Item from './Cocktail_Item'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import axios from 'axios';


// let lodash = require('lodash');    

// var countries = [
//     {"key": "DE", "name": "Deutschland", "active": false},
//     {"key": "ZA", "name": "South Africa", "active": true}
// ];

// var filteredByFunction = lodash.filter(countries, function (country) {
//     return country.key === "DE";
// });
// // => [{"key": "DE", "name": "Deutschland"}];

// var filteredByObjectProperties = lodash.filter(countries, { "key": "DE" });
// // => [{"key": "DE", "name": "Deutschland"}];

// var filteredByProperties = lodash.filter(countries, ["key", "ZA"]);
// // => [{"key": "ZA", "name": "South Africa"}];

// var filteredByProperty = lodash.filter(countries, "active");
// // => [{"key": "ZA", "name": "South Africa"}];


// <div
// style={{
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
// }}>
// <p id="dirName"><u>Drink Directory</u></p>
// </div>



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




////////////////////////////////////////////////////////////////////////





  function filterDrinks(c){
    var x, i;
    x = document.getElementById("SearchContainer");
    if (c == "Show All") c = " ";
    for (i = 0; i < x.length; i++){
      removeClass(x[i], "Show");
      if (x[i].className.indexOf(c) > -1) addClass(x[i], "Show");
    }
  }
  
  function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.id.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.id += " " + arr2[i];
      }
    }
  }

  function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.id.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i] > -1)) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.id = arr1.join(" ");
    }





  ////////////////////////////////////////////////////////////////////////







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

      <div id="buttons">
        <button class="btn">Show All</button>
        <button class="btn">Alphabetically</button>
        <button class="btn">Fruity</button>
        <button class="btn">Other</button>
        <button class="btn">Etc.</button>

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