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
    //filter by drink type
    if (document.getElementById("ordinary_drink")){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=ordinary_drink')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById("cocktail")) {
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=cocktail')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('milk_float_shake')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Milk%20/%20Float%20/%20Shake')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('shot')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=shot')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('cocoa')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=cocoa')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('other_unknown')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Other/Unknown')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('coffee_tea')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Coffee / Tea')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('homade_liqueur')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Homemade Liqueur')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('punch_party_drink')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Punch / Party Drink')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('beer')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Beer')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('soft_drink_soda')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=Soft Drink / Soda')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }








    //filter by glass
    if (document.getElementById('highball_glass')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Highball glass')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('cocktail_glass')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Cocktail glass')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('old_fashioned_glass')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Old-fashioned glass')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('whiskey_glass')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Whiskey Glass')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('collins_glass')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Collins glass')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('pousse_cafe_glass')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Pousse cafe glass')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('champagne_flute')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Champagne flute')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('whiskey_sour_glass')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Whiskey sour glass')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('cordial_glass')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Cordial glass')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('brandy_snifter')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Brandy snifter')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('white_wine_glass')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=White wine glass')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('nick_and_nora_glass')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Nick and Nora Glass')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('hurricane_glass')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Hurricane glass')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('coffee_mug')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Coffee mug')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('shot_glass')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Shot glass')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('jar')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Jar')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('irish_coffee_cup')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Irish coffee cup')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('punch_bowl')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Punch bowl')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('pitcher')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Pitcher')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('pint_glass')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Pint glass')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('copper_mug')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Copper Mug')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('wine_glass')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Wine Glass')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('beer_mug')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Beer mug')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('margarita_coupette_glass')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Margarita/Coupette glass')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('beer_pilsner')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Beer pilsner')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('beer_glass')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Beer Glass')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('parfait_glass')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Parfait glass')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('mason_jar')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Mason jar')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('margarita_glass')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Margarita glass')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('martini_glass')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Martini Glass')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('balloon_glass')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Balloon Glass')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('coupe_glass')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?g=Coupe Glass')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }















    //filter by alcohol content
    if (document.getElementById('alcoholic')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Alcoholic')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('non_alcoholic')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Non alcoholic')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('optional_alcohol')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=Optional alcohol')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }


    
  }






  return(
    <>
      <HamburgerMenu></HamburgerMenu>
      <header className="App-header">
        <img id='logo' src='logo.png'></img>
      </header>


      <div class="dropdown">
        <button class="dropbtn">Categories</button>
        <div class="dropdown-content">
          <a href="#1" id="ordinary_drink" onClick={filterDrinks}>Ordinary Drink</a>
          <a href="#2" id="cocktail"  onClick={filterDrinks}>Cocktail</a>
          <a href="#3" id="milk_float_shake"  onClick={filterDrinks}>Milk / Float / Shake</a>
          <a href="#4" id="shot"  onClick={filterDrinks}>Shot</a>
          <a href="#5" id="cocoa"  onClick={filterDrinks}>Cocoa</a>
          <a href="#6" id="other_unknown"  onClick={filterDrinks}>Other/Unknown</a>
          <a href="#7" id="coffee_tea"  onClick={filterDrinks}>Coffee / Tea</a>
          <a href="#8" id="homade_liqueur"  onClick={filterDrinks}>Homemade Liqueur</a>
          <a href="#9" id="punch_party_drink"  onClick={filterDrinks}>Punch / Party Drink</a>
          <a href="#10" id="beer"  onClick={filterDrinks}>Beer</a>
          <a href="#11" id="soft_drink_soda"  onClick={filterDrinks}>Soft Drink / Soda</a>
        </div>
      </div>
      
      <div class="dropdown">
        <button class="dropbtn">Glasses</button>
        <div class="dropdown-content">
          <a href="#1" id="highball_glass" onClick={filterDrinks}>Highball Glass</a>
          <a href="#2" id="cocktail_glass"  onClick={filterDrinks}>Cocktail glass</a>
          <a href="#2" id="oldfashioned_glass"  onClick={filterDrinks}>Old-fashioned glass</a>
          <a href="#2" id="whiskey_glass"  onClick={filterDrinks}>Whiskey Glass</a>
          <a href="#2" id="collins_glass"  onClick={filterDrinks}>Collins Glass</a>
          <a href="#2" id="pousse_cafe_glass"  onClick={filterDrinks}>Pousse Cafe Glass</a>
          <a href="#2" id="champagne_flute"  onClick={filterDrinks}>Champagne Flute</a>
          <a href="#2" id="whiskey_sour_glass"  onClick={filterDrinks}>Whiskey Sour Glass</a>
          <a href="#2" id="cordial_glass"  onClick={filterDrinks}>Cordial Glass</a>
          <a href="#2" id="brandy_snifter"  onClick={filterDrinks}>Brandy Snifter</a>
          <a href="#2" id="white_wine_glass"  onClick={filterDrinks}>White Wine Glass</a>
          <a href="#2" id="nick_and_nora_glass"  onClick={filterDrinks}>Nick and Nora Glass</a>
          <a href="#2" id="hurricane_glass"  onClick={filterDrinks}>Hurricane Glass</a>
          <a href="#2" id="coffee_mug"  onClick={filterDrinks}>Coffee Mug</a>
          <a href="#2" id="shot_glass"  onClick={filterDrinks}>Shot Glass</a>
          <a href="#2" id="jar"  onClick={filterDrinks}>Jar</a>
          <a href="#2" id="irish_coffee_cup"  onClick={filterDrinks}>Irish Coffee Cup</a>
          <a href="#2" id="punch_bowl"  onClick={filterDrinks}>Punch Bowl</a>
          <a href="#2" id="pitcher"  onClick={filterDrinks}>Pitcher</a>
          <a href="#2" id="pint_glass"  onClick={filterDrinks}>Pint Glass</a>
          <a href="#2" id="copper_mug"  onClick={filterDrinks}>Copper Mug</a>
          <a href="#2" id="wine_glass"  onClick={filterDrinks}>Wine Glass</a>
          <a href="#2" id="beer_mug"  onClick={filterDrinks}>Beer Mug</a>
          <a href="#2" id="margarita_coupette_glass"  onClick={filterDrinks}>Margarita/Coupette Glass</a>
          <a href="#2" id="beer_pilsner"  onClick={filterDrinks}>Beer Pilsner</a>
          <a href="#2" id="beer_glass"  onClick={filterDrinks}>Beer Glass</a>
          <a href="#2" id="parfait_glass"  onClick={filterDrinks}>Parfait Glass</a>
          <a href="#2" id="mason_jar"  onClick={filterDrinks}>Mason Jar</a>
          <a href="#2" id="margarita_glass"  onClick={filterDrinks}>Margarita Glass</a>
          <a href="#2" id="martini_glass"  onClick={filterDrinks}>Martini Glass</a>
          <a href="#2" id="balloon_glass"  onClick={filterDrinks}>Balloon Glass</a>
          <a href="#2" id="coupe_glass"  onClick={filterDrinks}>Coupe Glass</a>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">Ingredients</button>
        <div class="dropdown-content">
          <a href="#1" id="ordinary_drink" onClick={filterDrinks}>Ordinary Drink</a>
          <a href="#2" id="cocktail"  onClick={filterDrinks}>Cocktail</a>
          <a href="#3" id="milk_float_shake"  onClick={filterDrinks}>Milk / Float / Shake</a>
          <a href="#4" id="shot"  onClick={filterDrinks}>Shot</a>
          <a href="#5" id="cocoa"  onClick={filterDrinks}>Cocoa</a>
          <a href="#" id="other_unknown"  onClick={filterDrinks}>Other/Unknown</a>
          <a href="#" id="coffee_tea"  onClick={filterDrinks}>Coffee / Tea</a>
          <a href="#" id="homade_liqueur"  onClick={filterDrinks}>Homemade Liqueur</a>
          <a href="#" id="punch_party_drink"  onClick={filterDrinks}>Punch / Party Drink</a>
          <a href="#" id="beer"  onClick={filterDrinks}>Beer</a>
          <a href="#" id="soft_drink_soda"  onClick={filterDrinks}>Soft Drink / Soda</a>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">Alcohol Content</button>
        <div class="dropdown-content">
          <a href="#55" id="alcoholic" onClick={filterDrinks}>Alcoholic</a>
          <a href="#56" id="non_alcoholic"  onClick={filterDrinks}>Non Alcoholic</a>
          <a href="#57" id="optional_alcohol"  onClick={filterDrinks}>Optional Alcohol</a>
        </div>
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