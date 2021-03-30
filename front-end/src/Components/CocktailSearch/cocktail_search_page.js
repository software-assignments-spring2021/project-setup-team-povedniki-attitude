import './cocktail_search_page.css';
import React, { useState, useEffect } from 'react';
import Cocktail_Item from './Cocktail_Item'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import axios from 'axios';

//import axios from "axios";


function Cocktail_Search_Page(){
  let TrendingTitle = "Trending Recipes...";
  const [title, setTitle] = useState(TrendingTitle);
  const [cocktailItems, setCocktails] = useState([]);

  useEffect(() => {
    axios('https://www.thecocktaildb.com/api/json/v2/9973533/latest.php')
      .then( (response) => {
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
      // fetch("csvjson.json")
      //     .then(response => response.text())
      //     // .then((data) => setCocktails(data));
      //     .then((data) => console.log(data));
      // })
  }, [])
  const onSubmit = e => {
    e.preventDefault();
    setTitle("");
    
    let inputDrink = e.currentTarget.previousElementSibling.value;
    axios.get('/searchpage', {
      params: {
        drink: inputDrink
      }
    })
    .then(function (response) {
      //in here put response.data.drinks into the coctailItmes list
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  // let cocktailItems=[{
  //   name: "Martini",
  //   image:"https://www.liquor.com/thmb/hY8vXSQUQNgWxLN1c-3BntZo5fM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__03__07152853__moscow-mule-720x720-recipe-61ce552013b04880901b2abfb63017fd.jpg",
  //   description: "vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec"
  // },{
  // name: "Gin and Tonic",
  //   image:"https://www.liquor.com/thmb/hY8vXSQUQNgWxLN1c-3BntZo5fM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__03__07152853__moscow-mule-720x720-recipe-61ce552013b04880901b2abfb63017fd.jpg",
  //   description: "suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed"
  // },{
  //   name: "Vodka Soda",
  //     image:"https://www.liquor.com/thmb/hY8vXSQUQNgWxLN1c-3BntZo5fM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__03__07152853__moscow-mule-720x720-recipe-61ce552013b04880901b2abfb63017fd.jpg",
  //     description: "mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus"
  //   },
  // ]
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
        </form>
        <div id="SearchContainer">
          <div id = "Suggestion"> {title} </div>
          {
            cocktailItems.map((item, index)=> {
             return(
               <>
               <Cocktail_Item key ={index} 
               //this is hardcoded for now
               name={item.strDrink}
               image= {item.strDrinkThumb}
               description={item.strInstructions}/>
               </>
             ) 
            })
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
  
  