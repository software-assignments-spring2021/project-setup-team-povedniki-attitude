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


  


  function filterDrinks(click_id) {

    //api
    let api_link = click_id.target.id;

    //filter by drink type
      axios('https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?' + api_link)
      .then( (response) => {
        filterIngredients(response.data.drinks)
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
      console.log(click_id.target.id);
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
          <a href="#OrdinaryDrink" id="c=Ordinary Drink" onClick={filterDrinks}>Ordinary Drink</a>
          <a href="#Cocktail" id="c=Cocktail"  onClick={filterDrinks}>Cocktail</a>
          <a href="#Milk / Float / Shake" id="c=Milk / Float / Shake"  onClick={filterDrinks}>Milk / Float / Shake</a>
          <a href="#Shot" id="c=Shot"  onClick={filterDrinks}>Shot</a>
          <a href="#Cocoa" id="c=Cocoa"  onClick={filterDrinks}>Cocoa</a>
          <a href="#Other/Unknown" id="c=Other/Unknown"  onClick={filterDrinks}>Other/Unknown</a>
          <a href="#Coffee / Tea" id="c=Coffee / Tea"  onClick={filterDrinks}>Coffee / Tea</a>
          <a href="#Homemade Liqueur" id="c=Homemade Liqueur"  onClick={filterDrinks}>Homemade Liqueur</a>
          <a href="#Punch / Party Drink" id="c=Punch / Party Drink"  onClick={filterDrinks}>Punch / Party Drink</a>
          <a href="#Beer" id="c=Beer"  onClick={filterDrinks}>Beer</a>
          <a href="#Soft Drink / Soda" id="c=Soft Drink / Soda"  onClick={filterDrinks}>Soft Drink / Soda</a>
        </div>
      </div>
      
      <div class="dropdown">
        <button class="dropbtn">Glasses</button>
        <div class="dropdown-content">
          <a href="#highball_glass" id="g=highball_glass" onClick={filterDrinks}>Highball Glass</a>
          <a href="#cocktail_glass" id="g=cocktail_glass"  onClick={filterDrinks}>Cocktail glass</a>
          <a href="#Old-fashioned glass" id="g=Old-fashioned glass"  onClick={filterDrinks}>Old-fashioned glass</a>
          <a href="#whiskey_glass" id="g=whiskey_glass"  onClick={filterDrinks}>Whiskey Glass</a>
          <a href="#collins_glass" id="g=collins_glass"  onClick={filterDrinks}>Collins Glass</a>
          <a href="#pousse_cafe_glass" id="g=pousse_cafe_glass"  onClick={filterDrinks}>Pousse Cafe Glass</a>
          <a href="#champagne_flute" id="g=champagne_flute"  onClick={filterDrinks}>Champagne Flute</a>
          <a href="#whiskey_sour_glass" id="g=whiskey_sour_glass"  onClick={filterDrinks}>Whiskey Sour Glass</a>
          <a href="#cordial_glass" id="g=cordial_glass"  onClick={filterDrinks}>Cordial Glass</a>
          <a href="#brandy_snifter" id="g=brandy_snifter"  onClick={filterDrinks}>Brandy Snifter</a>
          <a href="#white_wine_glass" id="g=white_wine_glass"  onClick={filterDrinks}>White Wine Glass</a>
          <a href="#nick_and_nora_glass" id="g=nick_and_nora_glass"  onClick={filterDrinks}>Nick and Nora Glass</a>
          <a href="#hurricane_glass" id="g=hurricane_glass"  onClick={filterDrinks}>Hurricane Glass</a>
          <a href="#coffee_mug" id="g=coffee_mug"  onClick={filterDrinks}>Coffee Mug</a>
          <a href="#shot_glass" id="g=shot_glass"  onClick={filterDrinks}>Shot Glass</a>
          <a href="#jar" id="g=jar"  onClick={filterDrinks}>Jar</a>
          <a href="#irish_coffee_cup" id="g=irish_coffee_cup"  onClick={filterDrinks}>Irish Coffee Cup</a>
          <a href="#punch_bowl" id="g=punch_bowl"  onClick={filterDrinks}>Punch Bowl</a>
          <a href="#pitcher" id="g=pitcher"  onClick={filterDrinks}>Pitcher</a>
          <a href="#pint_glass" id="g=pint_glass"  onClick={filterDrinks}>Pint Glass</a>
          <a href="#copper_mug" id="g=copper_mug"  onClick={filterDrinks}>Copper Mug</a>
          <a href="#wine_glass" id="g=wine_glass"  onClick={filterDrinks}>Wine Glass</a>
          <a href="#beer_mug" id="g=beer_mug"  onClick={filterDrinks}>Beer Mug</a>
          <a href="#Margarita/Coupette glass" id="g=Margarita/Coupette glass"  onClick={filterDrinks}>Margarita/Coupette Glass</a>
          <a href="#beer_pilsner" id="g=beer_pilsner"  onClick={filterDrinks}>Beer Pilsner</a>
          <a href="#beer_glass" id="g=beer_glass"  onClick={filterDrinks}>Beer Glass</a>
          <a href="#parfait_glass" id="g=parfait_glass"  onClick={filterDrinks}>Parfait Glass</a>
          <a href="#mason_jar" id="g=mason_jar"  onClick={filterDrinks}>Mason Jar</a>
          <a href="#margarita_glass" id="g=margarita_glass"  onClick={filterDrinks}>Margarita Glass</a>
          <a href="#martini_glass" id="g=martini_glass"  onClick={filterDrinks}>Martini Glass</a>
          <a href="#balloon_glass" id="g=balloon_glass"  onClick={filterDrinks}>Balloon Glass</a>
          <a href="#coupe_glass" id="g=coupe_glass"  onClick={filterDrinks}>Coupe Glass</a>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">Ingredients</button>
        <div class="dropdown-content">
          <a href="#light_rum" id="i=light_rum"  onClick={filterDrinks}>Light Rum</a>
          <a href="#applejack" id="i=applejack"  onClick={filterDrinks}>Applejack</a>
          <a href="#gin" id="i=gin"  onClick={filterDrinks}>Gin</a>
          <a href="#dark_rum" id="i=dark_rum"  onClick={filterDrinks}>Dark Rum</a>
          <a href="#sweet_vermouth" id="i=sweet_vermouth"  onClick={filterDrinks}>Sweet Vermouth</a>
          <a href="#strawberry_schnapps" id="i=strawberry_schnapps"  onClick={filterDrinks}>Strawberry Schnapps</a>
          <a href="#scotch" id="i=scotch"  onClick={filterDrinks}>Scotch</a>
          <a href="#apricot_brandy" id="i=apricot_brandy"  onClick={filterDrinks}>Apricot Brandy</a>
          <a href="#triple_sec" id="i=triple_sec"  onClick={filterDrinks}>Triple Sec</a>
          <a href="#southern_comfort" id="i=southern_comfort"  onClick={filterDrinks}>Southern Comfort</a>
          <a href="#orange_bitters" id="i=orange_bitters"  onClick={filterDrinks}>Orange Bitters</a>
          <a href="#brandy" id="i=brandy"  onClick={filterDrinks}>Brandy</a>
          <a href="#lemon_vodka" id="i=lemon_vodka"  onClick={filterDrinks}>Lemon Vodka</a>
          <a href="#blended_whiskey" id="i=blended_whiskey"  onClick={filterDrinks}>Blended Whiskey</a>
          <a href="#dry_vermouth" id="i=dry_vermouth"  onClick={filterDrinks}>Dry Vermouth</a>
          <a href="#amaretto" id="i=amaretto"  onClick={filterDrinks}>Amaretto</a>
          <a href="#tea" id="i=tea"  onClick={filterDrinks}>Tea</a>
          <a href="#champagne" id="i=champagne"  onClick={filterDrinks}>Champagne</a>
          <a href="#coffee_liqueur" id="i=coffee_liqueur"  onClick={filterDrinks}>Coffee Liqueur</a>
          <a href="#bourbon" id="i=bourbon"  onClick={filterDrinks}>Bourbon</a>
          <a href="#tequila" id="i=tequila"  onClick={filterDrinks}>Tequila</a>
          <a href="#vodka" id="i=vodka"  onClick={filterDrinks}>Vodka</a>
          <a href="#anejo_rum" id="i=anejo_rum"  onClick={filterDrinks}>Añejo Rum</a>
          <a href="#bitters" id="i=bitters"  onClick={filterDrinks}>Bitters</a>
          <a href="#sugar" id="i=sugar"  onClick={filterDrinks}>Sugar</a>
          <a href="#kahlua" id="i=kahlua"  onClick={filterDrinks}>Kahlua</a>
          <a href="#demerara_sugar" id="i=demerara_sugar"  onClick={filterDrinks}>Demerara Sugar</a>
          <a href="#dubonnet_rouge" id="i=dubonnet_rouge"  onClick={filterDrinks}>Dubonnet Rouge</a>
          <a href="#watermelon" id="i=watermelon"  onClick={filterDrinks}>Watermelon</a>
          <a href="#lime_juice" id="i=Lime juice"  onClick={filterDrinks}>Lime Juice</a>
          <a href="#irish_whiskey" id="i=irish_whiskey"  onClick={filterDrinks}>Irish Whiskey</a>
          <a href="#apple_brandy" id="i=apple_brandy"  onClick={filterDrinks}>Apple Brandy</a>
          <a href="#carbonated_water" id="i=carbonated_water"  onClick={filterDrinks}>Carbonated Water</a>
          <a href="#cherry_brandy" id="i=cherry_brandy"  onClick={filterDrinks}>Cherry Brandy</a>
          <a href="#creme_de_cacao" id="i=creme_de_cacao"  onClick={filterDrinks}>Creme de Cacao</a>
          <a href="#grenadine" id="i=grenadine"  onClick={filterDrinks}>Grenadine</a>
          <a href="#port" id="i=port"  onClick={filterDrinks}>Port</a>
          <a href="#coffee_brandy" id="i=coffee_brandy"  onClick={filterDrinks}>Coffee Brandy</a>
          <a href="#red_wine" id="i=red_wine"  onClick={filterDrinks}>Red Wine</a>
          <a href="#rum" id="i=rum"  onClick={filterDrinks}>Rum</a>
          <a href="#grapefruit_juice" id="i=grapefruit_juice"  onClick={filterDrinks}>Grapefruit Juice</a>
          <a href="#ricard" id="i=ricard"  onClick={filterDrinks}>Ricard</a>
          <a href="#sherry" id="i=sherry"  onClick={filterDrinks}>Sherry</a>
          <a href="#cognac" id="i=cognac"  onClick={filterDrinks}>Cognac</a>
          <a href="#sloe_gin" id="i=sloe_gin"  onClick={filterDrinks}>Sloe Gin</a>
          <a href="#apple_juice" id="i=apple_juice"  onClick={filterDrinks}>Apple Juice</a>
          <a href="#pineapple_juice" id="i=pineapple_juice"  onClick={filterDrinks}>Pineapple Juice</a>
          <a href="#lemon_juice" id="i=lemon_juice"  onClick={filterDrinks}>Lemon Juice</a>
          <a href="#sugar_syrup" id="i=sugar_syrup"  onClick={filterDrinks}>Sugar Syrup</a>
          <a href="#milk" id="i=milk"  onClick={filterDrinks}>Milk</a>
          <a href="#strawberries" id="i=strawberries"  onClick={filterDrinks}>Strawberries</a>
          <a href="#cocolate_syrup" id="i=chocolate_syrup"  onClick={filterDrinks}>Chocolate Syrup</a>
          <a href="#yoghurt" id="i=yoghurt"  onClick={filterDrinks}>Yoghurt</a>
          <a href="#mango" id="i=mango"  onClick={filterDrinks}>Mango</a>
          <a href="#ginger" id="i=ginger"  onClick={filterDrinks}>Ginger</a>
          <a href="#lime" id="i=lime"  onClick={filterDrinks}>Lime</a>
          <a href="#cantaloupe" id="i=cantaloupe"  onClick={filterDrinks}>Cantaloupe</a>
          <a href="#berries" id="i=berries"  onClick={filterDrinks}>Berries</a>
          <a href="#grapes" id="i=grapes"  onClick={filterDrinks}>Grapes</a>
          <a href="#kiwi" id="i=kiwi"  onClick={filterDrinks}>Kiwi</a>
          <a href="#tomato_juice" id="i=tomato_juice"  onClick={filterDrinks}>Tomato Juice</a>
          <a href="#cocoa_powder" id="i=cocoa_powder"  onClick={filterDrinks}>Cocoa Powder</a>
          <a href="#chocolate" id="i=chocolate"  onClick={filterDrinks}>Chocolate</a>
          <a href="#heavy_cream" id="i=heavy_cream"  onClick={filterDrinks}>Heavy Cream</a>
          <a href="#galliano" id="i=galliano"  onClick={filterDrinks}>Galliano</a>
          <a href="#peach_vodka" id="i=peach_vodka"  onClick={filterDrinks}>Peach Vodka</a>
          <a href="#ouzo" id="i=ouzo"  onClick={filterDrinks}>Ouzo</a>
          <a href="#coffee" id="i=coffee"  onClick={filterDrinks}>Coffee</a>
          <a href="#spiced_rum" id="i=spiced_rum"  onClick={filterDrinks}>Spiced Rum</a>
          <a href="#water" id="i=water"  onClick={filterDrinks}>Water</a>
          <a href="#espresso" id="i=espresso"  onClick={filterDrinks}>Espresso</a>
          <a href="#angelica_root" id="i=angelica_root"  onClick={filterDrinks}>Angelica Root</a>
          <a href="#orange" id="i=orange"  onClick={filterDrinks}>Orange</a>
          <a href="#cranberries" id="i=cranberries"  onClick={filterDrinks}>Cranberries</a>
          <a href="#johnnie_walker" id="i=johnnie_walker"  onClick={filterDrinks}>Johnnie Walker</a>
          <a href="#apple_cider" id="i=apple_cider"  onClick={filterDrinks}>Apple Cider</a>
          <a href="#everclear" id="i=everclear"  onClick={filterDrinks}>Everclear</a>
          <a href="#cranberry_juice" id="i=cranberry_juice"  onClick={filterDrinks}>Cranberry Juice</a>
          <a href="#egg_yolk" id="i=egg_yolk"  onClick={filterDrinks}>Egg yolk</a>
          <a href="#egg" id="i=egg"  onClick={filterDrinks}>Egg</a>
          <a href="#grape_juice" id="i=grape_juice"  onClick={filterDrinks}>Grape Juice</a>
          <a href="#peach_nectar" id="i=peach_nectar"  onClick={filterDrinks}>Peach Nectar</a>
          <a href="#lemon" id="i=lemon"  onClick={filterDrinks}>Lemon</a>
          <a href="#firewater" id="i=firewater"  onClick={filterDrinks}>Firewater</a>
          <a href="#lemonade" id="i=lemonade"  onClick={filterDrinks}>Lemonade</a>
          <a href="#lager" id="i=lager"  onClick={filterDrinks}>Lager</a>
          <a href="#whiskey" id="i=whiskey"  onClick={filterDrinks}>Whiskey</a>
          <a href="#absolut_citron" id="i=absolut_citron"  onClick={filterDrinks}>Absolut Citron</a>
          <a href="#pisco" id="i=pisco"  onClick={filterDrinks}>Pisco</a>
          <a href="#irish_cream" id="i=irish_cream"  onClick={filterDrinks}>Irish Cream</a>
          <a href="#ale" id="i=ale"  onClick={filterDrinks}>Ale</a>
          <a href="#chocolate_liqueur" id="i=chocolate_liqueur"  onClick={filterDrinks}>Chocolate Liqueur</a>
          <a href="#midori_melon_liqueur" id="i=midori_melon_liqueur"  onClick={filterDrinks}>Midori Melon Liqueur</a>
          <a href="#sambuca" id="i=sambuca"  onClick={filterDrinks}>Sambuca</a>
          <a href="#cider" id="i=cider"  onClick={filterDrinks}>Cider</a>
          <a href="#sprite" id="i=sprite"  onClick={filterDrinks}>Sprite</a>
          <a href="#7-Up" id="i=7-Up"  onClick={filterDrinks}>7-Up</a>
          <a href="#blackberry_brandy" id="i=blackberry_brandy"  onClick={filterDrinks}>Blackberry Brandy</a>
          <a href="#peppermint_schnapps" id="i=peppermint_schnapps"  onClick={filterDrinks}>Peppermint Schnapps</a>
          <a href="#creme_de_cassis" id="i=creme_de_cassis"  onClick={filterDrinks}>Creme de Cassis</a>
          
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn">Alcohol Content</button>
        <div class="dropdown-content">
          <a href="#alcoholic" id="a=alcoholic" onClick={filterDrinks}>Alcoholic</a>
          <a href="#non_alcoholic" id="a=non_alcoholic"  onClick={filterDrinks}>Non Alcoholic</a>
          <a href="#optional_alcohol" id="a=optional_alcohol"  onClick={filterDrinks}>Optional Alcohol</a>
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