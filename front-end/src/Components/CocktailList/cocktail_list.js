import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import './cocktail_list.css';
import React, {useState, useEffect} from 'react';
import Cocktail_Item from './Cocktail_Item';
import axios from 'axios';


function Cocktail_List(){
  const [cocktailItems, setCocktails] = useState([]);
  const[DrinksArray, setDrinks] = useState([]);

  function filterIngredients(rawData){
    console.log(rawData.length);
    for (var i = 0; i < rawData.length; i++) {
      console.log(rawData[i]);
    }
    [...rawData].map((data)=>{
      //rawData.map((data)=>{
      let ingredients =[]
      for (const[key,value] of Object.entries(data)){
        if(key.includes("strIngredient") &&value!== ""&& value!==null){
          ingredients.push(value)
        }
      }
      data["ingredients"]= ingredients;
      console.log(data);
    })
    console.log(rawData)
  }

  function getIngredients(rawData) {
    let drinks = []
    rawData.forEach((drink) => {
    axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`)
    .then((data) => {
    // console.log(data)
    drinks.push(data.data.drinks[0])
    setDrinks([...DrinksArray, data.data.drinks[0]])
        }).catch(err => console.log(err))
    })
    //I tried to do it with the use state but when i do this it only returns one object
    //filterIngredients(DrinksArray);
    //console.log(DrinksArray)

    filterIngredients(drinks)
    console.log(drinks)
    
}

  useEffect(() => {

    let storage = (window.localStorage.getItem('ingredients'));
    storage = storage.split("\"");
    for (let j = 0; j < storage.length; j++) {
      storage.splice(j, 1);
    }

    axios(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${storage.join(",")}`)
      .then( (response) => {
        getIngredients(response.data.drinks);
        setCocktails(response.data.drinks);
      })
      .catch( (err) => {
        console.log(err);
      })
      
  }, [])

    // let cocktailItems=[{
    //     name: "Martini",
    //     matchScore: 99,
    //     image:"https://www.liquor.com/thmb/hY8vXSQUQNgWxLN1c-3BntZo5fM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__03__07152853__moscow-mule-720x720-recipe-61ce552013b04880901b2abfb63017fd.jpg",
    //     description: "vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec",
    //     ingredients: ["Tequila", "Lime"]
    // },{
    //     name: "Gin and Tonic",
    //     matchScore: 75,
    //     image:"https://www.liquor.com/thmb/hY8vXSQUQNgWxLN1c-3BntZo5fM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__03__07152853__moscow-mule-720x720-recipe-61ce552013b04880901b2abfb63017fd.jpg",
    //     description: "suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed",
    //     ingredients: "Tequila, Lime"
    // },{
    //     name: "Vodka Soda",
    //     matchScore: 60,
    //     image:"https://www.liquor.com/thmb/hY8vXSQUQNgWxLN1c-3BntZo5fM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__03__07152853__moscow-mule-720x720-recipe-61ce552013b04880901b2abfb63017fd.jpg",
    //     description: "mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus",
    //     ingredients: "Tequila, Lime"
    // },]

    return(
        <>
        <HamburgerMenu></HamburgerMenu>
        <header className="App-header">
        <img id='logo' src='logo.png'></img>
        </header>
      <main>
        {/* <form>
          <input type='text' id="ingredientInput" name='ingredient' placeholder='Please Enter Ingredients'/>
          <input type='submit' name='ingSubmit' value='Submit'/>
        </form> */}



        <div id="SearchContainer">
          {
            cocktailItems.map((item, index)=> {
                return(
                    <>
                    <Cocktail_Item key ={index} 
                    //this is hardcoded for now
                    name={item.strDrink}
                    image= {item.strDrinkThumb}
                    drinkID = {item.idDrink}/>
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

export default Cocktail_List