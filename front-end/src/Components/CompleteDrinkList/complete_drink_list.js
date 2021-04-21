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









    //filter by ingredient
    if (document.getElementById('light_rum')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Light rum')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('applejack')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Applejack')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('gin')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Gin')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('dark_rum')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Dark rum')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('sweet_vermouth')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Sweet Vermouth')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('strawberry_schnapps')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Strawberry schnapps')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('scotch')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Scotch')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('apricot_brandy')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Apricot brandy')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('triple_sec')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Triple sec')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('southern_comfort')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Southern Comfort')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('orange_bitters')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i="Orange bitters"')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('brandy')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Brandy')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('lemon_vodka')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Lemon vodka')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('blended_whiskey')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Blended whiskey')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('dry_vermouth')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i="Dry Vermouth"')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('amaretto')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Amaretto')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('tea')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Tea')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('champagne')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Champagne')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('coffee_liqueur')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Coffee liqueur')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('bourbon')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Bourbon')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('tequila')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Tequila')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('vodka')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Vodka')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('anejo_rum')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Añejo rum')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('bitters')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Bitters')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('sugar')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Sugar')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('kahlua')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Kahlua')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('demerara_sugar')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=demerara Sugar')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('dubonnet_rouge')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Dubonnet Rouge')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('watermelon')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Watermelon')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('lime_juice')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Lime juice')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('irish_whiskey')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Irish whiskey')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('apple_brandy')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Apple brandy')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('carbonated_water')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Carbonated water')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('cherry_brandy')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Cherry brandy')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('creme_de_cacao')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Creme de Cacao')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('grenadine')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Grenadine')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('port')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Port')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('coffee_brandy')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Coffee brandy')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('red_wine')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Red wine')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('rum')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Rum')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('grapefruit_juice')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Grapefruit juice')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('ricard')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Ricard')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('sherry')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Sherry')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('cognac')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Cognac')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('sloe_gin')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Sloe gin')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('apple_juice')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Apple juice')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('pineapple_juice')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Pineapple juice')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('lemon_juice')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Lemon juice')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('sugar_syrup')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Sugar syrup')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('milk')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Milk')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }

    if (document.getElementById('strawberries')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Strawberries')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('cocolate_syrup')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Chocolate syrup')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('yoghurt')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Yoghurt')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('mango')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Mango')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('ginger')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Ginger')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('lime')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Lime')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('cantaloupe')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Cantaloupe')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('berries')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Berries')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('grapes')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Grapes')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('kiwi')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Kiwi')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('tomato_juice')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Tomato juice')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('cocoa_powder')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Cocoa powder')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('chocolate')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Chocolate')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('heavy_cream')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i="Heavy cream"')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('galliano')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Galliano')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('peach_vodka')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i="Peach Vodka"')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('ouzo')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Ouzo')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('coffee')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Coffee')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('spiced_rum')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Spiced rum')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('water')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Water')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('espresso')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Espresso')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('angelica_root')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Angelica root')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('orange')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Orange')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('cranberries')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Cranberries')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('johnnie_walker')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Johnnie Walker')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('apple_cider')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Apple cider')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('everclear')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Everclear')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('cranberry_juice')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Cranberry juice')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('egg_yolk')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Egg yolk')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('egg')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Egg')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('grape_juice')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Grape juice')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('peach_nectar')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Peach nectar')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('lemon')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Lemon')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('firewater')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Firewater')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('lemonade')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Lemonade')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('lager')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Lager')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('whiskey')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Whiskey')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('absolut_citron')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Absolut Citron')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('pisco')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Pisco')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('irish_cream')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Irish cream')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('ale')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Ale')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('chocolate_liqueur')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Chocolate liqueur')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('midori_melon_liqueur')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Midori melon liqueur')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('sambuca')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Sambuca')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('cider')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Cider')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('sprite')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Sprite')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('7_up')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=7-Up')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('blackberry_brandy')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Blackberry brandy')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('peppermint_schnapps')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Peppermint schnapps')
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
    }
    
    if (document.getElementById('creme_de_cassis')){
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Creme de Cassis')
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
          <a href="#12" id="highball_glass" onClick={filterDrinks}>Highball Glass</a>
          <a href="#13" id="cocktail_glass"  onClick={filterDrinks}>Cocktail glass</a>
          <a href="#14" id="oldfashioned_glass"  onClick={filterDrinks}>Old-fashioned glass</a>
          <a href="#15" id="whiskey_glass"  onClick={filterDrinks}>Whiskey Glass</a>
          <a href="#16" id="collins_glass"  onClick={filterDrinks}>Collins Glass</a>
          <a href="#17" id="pousse_cafe_glass"  onClick={filterDrinks}>Pousse Cafe Glass</a>
          <a href="#18" id="champagne_flute"  onClick={filterDrinks}>Champagne Flute</a>
          <a href="#19" id="whiskey_sour_glass"  onClick={filterDrinks}>Whiskey Sour Glass</a>
          <a href="#20" id="cordial_glass"  onClick={filterDrinks}>Cordial Glass</a>
          <a href="#21" id="brandy_snifter"  onClick={filterDrinks}>Brandy Snifter</a>
          <a href="#22" id="white_wine_glass"  onClick={filterDrinks}>White Wine Glass</a>
          <a href="#23" id="nick_and_nora_glass"  onClick={filterDrinks}>Nick and Nora Glass</a>
          <a href="#24" id="hurricane_glass"  onClick={filterDrinks}>Hurricane Glass</a>
          <a href="#25" id="coffee_mug"  onClick={filterDrinks}>Coffee Mug</a>
          <a href="#26" id="shot_glass"  onClick={filterDrinks}>Shot Glass</a>
          <a href="#27" id="jar"  onClick={filterDrinks}>Jar</a>
          <a href="#28" id="irish_coffee_cup"  onClick={filterDrinks}>Irish Coffee Cup</a>
          <a href="#29" id="punch_bowl"  onClick={filterDrinks}>Punch Bowl</a>
          <a href="#30" id="pitcher"  onClick={filterDrinks}>Pitcher</a>
          <a href="#31" id="pint_glass"  onClick={filterDrinks}>Pint Glass</a>
          <a href="#32" id="copper_mug"  onClick={filterDrinks}>Copper Mug</a>
          <a href="#33" id="wine_glass"  onClick={filterDrinks}>Wine Glass</a>
          <a href="#34" id="beer_mug"  onClick={filterDrinks}>Beer Mug</a>
          <a href="#35" id="margarita_coupette_glass"  onClick={filterDrinks}>Margarita/Coupette Glass</a>
          <a href="#36" id="beer_pilsner"  onClick={filterDrinks}>Beer Pilsner</a>
          <a href="#37" id="beer_glass"  onClick={filterDrinks}>Beer Glass</a>
          <a href="#38" id="parfait_glass"  onClick={filterDrinks}>Parfait Glass</a>
          <a href="#39" id="mason_jar"  onClick={filterDrinks}>Mason Jar</a>
          <a href="#40" id="margarita_glass"  onClick={filterDrinks}>Margarita Glass</a>
          <a href="#41" id="martini_glass"  onClick={filterDrinks}>Martini Glass</a>
          <a href="#42" id="balloon_glass"  onClick={filterDrinks}>Balloon Glass</a>
          <a href="#43" id="coupe_glass"  onClick={filterDrinks}>Coupe Glass</a>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">Ingredients</button>
        <div class="dropdown-content">
          <a href="#44" id="light_rum"  onClick={filterDrinks}>Light Rum</a>
          <a href="#45" id="applejack"  onClick={filterDrinks}>Applejack</a>
          <a href="#46" id="gin"  onClick={filterDrinks}>Gin</a>
          <a href="#47" id="dark_rum"  onClick={filterDrinks}>Dark Rum</a>
          <a href="#48" id="sweet_vermouth"  onClick={filterDrinks}>Sweet Vermouth</a>
          <a href="#49" id="strawberry_schnapps"  onClick={filterDrinks}>Strawberry Schnapps</a>
          <a href="#50" id="scotch"  onClick={filterDrinks}>Scotch</a>
          <a href="#51" id="apricot_brandy"  onClick={filterDrinks}>Apricot Brandy</a>
          <a href="#52" id="triple_sec"  onClick={filterDrinks}>Triple Sec</a>
          <a href="#53" id="southern_comfort"  onClick={filterDrinks}>Southern Comfort</a>
          <a href="#54" id="orange_bitters"  onClick={filterDrinks}>Orange Bitters</a>
          <a href="#55" id="brandy"  onClick={filterDrinks}>Brandy</a>
          <a href="#56" id="lemon_vodka"  onClick={filterDrinks}>Lemon Vodka</a>
          <a href="#57" id="blended_whiskey"  onClick={filterDrinks}>Blended Whiskey</a>
          <a href="#58" id="dry_vermouth"  onClick={filterDrinks}>Dry Vermouth</a>
          <a href="#59" id="amaretto"  onClick={filterDrinks}>Amaretto</a>
          <a href="#60" id="tea"  onClick={filterDrinks}>Tea</a>
          <a href="#61" id="champagne"  onClick={filterDrinks}>Champagne</a>
          <a href="#62" id="coffee_liqueur"  onClick={filterDrinks}>Coffee Liqueur</a>
          <a href="#63" id="bourbon"  onClick={filterDrinks}>Bourbon</a>
          <a href="#64" id="tequila"  onClick={filterDrinks}>Tequila</a>
          <a href="#65" id="vodka"  onClick={filterDrinks}>Vodka</a>
          <a href="#66" id="anejo_rum"  onClick={filterDrinks}>Añejo Rum</a>
          <a href="#67" id="bitters"  onClick={filterDrinks}>Bitters</a>
          <a href="#68" id="sugar"  onClick={filterDrinks}>Sugar</a>
          <a href="#69" id="kahlua"  onClick={filterDrinks}>Kahlua</a>
          <a href="#70" id="demerara_sugar"  onClick={filterDrinks}>Demerara Sugar</a>
          <a href="#71" id="dubonnet_rouge"  onClick={filterDrinks}>Dubonnet Rouge</a>
          <a href="#72" id="watermelon"  onClick={filterDrinks}>Watermelon</a>
          <a href="73" id="lime_juice"  onClick={filterDrinks}>Lime Juice</a>
          <a href="#74" id="irish_whiskey"  onClick={filterDrinks}>Irish Whiskey</a>
          <a href="#75" id="apple_brandy"  onClick={filterDrinks}>Apple Brandy</a>
          <a href="#76" id="carbonated_water"  onClick={filterDrinks}>Carbonated Water</a>
          <a href="#77" id="cherry_brandy"  onClick={filterDrinks}>Cherry Brandy</a>
          <a href="#78" id="creme_de_cacao"  onClick={filterDrinks}>Creme de Cacao</a>
          <a href="#79" id="grenadine"  onClick={filterDrinks}>Grenadine</a>
          <a href="#80" id="port"  onClick={filterDrinks}>Port</a>
          <a href="#81" id="coffee_brandy"  onClick={filterDrinks}>Coffee Brandy</a>
          <a href="#82" id="red_wine"  onClick={filterDrinks}>Red Wine</a>
          <a href="#83" id="rum"  onClick={filterDrinks}>Rum</a>
          <a href="#84" id="grapefruit_juice"  onClick={filterDrinks}>Grapefruit Juice</a>
          <a href="#85" id="ricard"  onClick={filterDrinks}>Ricard</a>
          <a href="#86" id="sherry"  onClick={filterDrinks}>Sherry</a>
          <a href="#87" id="cognac"  onClick={filterDrinks}>Cognac</a>
          <a href="#88" id="sloe_gin"  onClick={filterDrinks}>Sloe Gin</a>
          <a href="#89" id="apple_juice"  onClick={filterDrinks}>Apple Juice</a>
          <a href="#90" id="pineapple_juice"  onClick={filterDrinks}>Pineapple Juice</a>
          <a href="#91" id="lemon_juice"  onClick={filterDrinks}>Lemon Juice</a>
          <a href="#92" id="sugar_syrup"  onClick={filterDrinks}>Sugar Syrup</a>
          <a href="#93" id="milk"  onClick={filterDrinks}>Milk</a>
          <a href="#94" id="strawberries"  onClick={filterDrinks}>Strawberries</a>
          <a href="#95" id="cocolate_syrup"  onClick={filterDrinks}>Chocolate Syrup</a>
          <a href="#96" id="yoghurt"  onClick={filterDrinks}>Yoghurt</a>
          <a href="#97" id="mango"  onClick={filterDrinks}>Mango</a>
          <a href="#98" id="ginger"  onClick={filterDrinks}>Ginger</a>
          <a href="#99" id="lime"  onClick={filterDrinks}>Lime</a>
          <a href="#100" id="cantaloupe"  onClick={filterDrinks}>Cantaloupe</a>
          <a href="#101" id="berries"  onClick={filterDrinks}>Berries</a>
          <a href="#102" id="grapes"  onClick={filterDrinks}>Grapes</a>
          <a href="#103" id="kiwi"  onClick={filterDrinks}>Kiwi</a>
          <a href="#104" id="tomato_juice"  onClick={filterDrinks}>Tomato Juice</a>
          <a href="#105" id="cocoa_powder"  onClick={filterDrinks}>Cocoa Powder</a>
          <a href="#106" id="chocolate"  onClick={filterDrinks}>Chocolate</a>
          <a href="#107" id="heavy_cream"  onClick={filterDrinks}>Heavy Cream</a>
          <a href="#108" id="galliano"  onClick={filterDrinks}>Galliano</a>
          <a href="#109" id="peach_vodka"  onClick={filterDrinks}>Peach Vodka</a>
          <a href="#110" id="ouzo"  onClick={filterDrinks}>Ouzo</a>
          <a href="#111" id="coffee"  onClick={filterDrinks}>Coffee</a>
          <a href="#112" id="spiced_rum"  onClick={filterDrinks}>Spiced Rum</a>
          <a href="#113" id="water"  onClick={filterDrinks}>Water</a>
          <a href="#114" id="espresso"  onClick={filterDrinks}>Espresso</a>
          <a href="#115" id="angelica_root"  onClick={filterDrinks}>Angelica Root</a>
          <a href="#116" id="orange"  onClick={filterDrinks}>Orange</a>
          <a href="#117" id="cranberries"  onClick={filterDrinks}>Cranberries</a>
          <a href="#118" id="johnnie_walker"  onClick={filterDrinks}>Johnnie Walker</a>
          <a href="#119" id="apple_cider"  onClick={filterDrinks}>Apple Cider</a>
          <a href="#120" id="everclear"  onClick={filterDrinks}>Everclear</a>
          <a href="#121" id="cranberry_juice"  onClick={filterDrinks}>Cranberry Juice</a>
          <a href="#122" id="egg_yolk"  onClick={filterDrinks}>Egg yolk</a>
          <a href="#123" id="egg"  onClick={filterDrinks}>Egg</a>
          <a href="#124" id="grape_juice"  onClick={filterDrinks}>Grape Juice</a>
          <a href="#125" id="peach_nectar"  onClick={filterDrinks}>Peach Nectar</a>
          <a href="#126" id="lemon"  onClick={filterDrinks}>Lemon</a>
          <a href="#127" id="firewater"  onClick={filterDrinks}>Firewater</a>
          <a href="#128" id="lemonade"  onClick={filterDrinks}>Lemonade</a>
          <a href="#129" id="lager"  onClick={filterDrinks}>Lager</a>
          <a href="#130" id="whiskey"  onClick={filterDrinks}>Whiskey</a>
          <a href="#131" id="absolut_citron"  onClick={filterDrinks}>Absolut Citron</a>
          <a href="#132" id="pisco"  onClick={filterDrinks}>Pisco</a>
          <a href="#134" id="irish_cream"  onClick={filterDrinks}>Irish Cream</a>
          <a href="#135" id="ale"  onClick={filterDrinks}>Ale</a>
          <a href="#136" id="chocolate_liqueur"  onClick={filterDrinks}>Chocolate Liqueur</a>
          <a href="#137" id="midori_melon_liqueur"  onClick={filterDrinks}>Midori Melon Liqueur</a>
          <a href="#138" id="sambuca"  onClick={filterDrinks}>Sambuca</a>
          <a href="#139" id="cider"  onClick={filterDrinks}>Cider</a>
          <a href="#140" id="sprite"  onClick={filterDrinks}>Sprite</a>
          <a href="#141" id="7_up"  onClick={filterDrinks}>7-Up</a>
          <a href="#142" id="blackberry_brandy"  onClick={filterDrinks}>Blackberry Brandy</a>
          <a href="#143" id="peppermint_schnapps"  onClick={filterDrinks}>Peppermint Schnapps</a>
          <a href="#144" id="creme_de_cassis"  onClick={filterDrinks}>Creme de Cassis</a>
          
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">Alcohol Content</button>
        <div class="dropdown-content">
          <a href="#145" id="alcoholic" onClick={filterDrinks}>Alcoholic</a>
          <a href="#146" id="non_alcoholic"  onClick={filterDrinks}>Non Alcoholic</a>
          <a href="#147" id="optional_alcohol"  onClick={filterDrinks}>Optional Alcohol</a>
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