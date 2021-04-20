import './random_drink.css';
import React from 'react';
import {useEffect, useState} from 'react'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import axios from 'axios';


function Random_Drink(props){
    const [drinkInfo, setDrinkInfo] = useState([]);
    //const [cocktailItems, setCocktails] = useState([]);
    // useEffect(()=> {
    //     setDrinkInfo(props.location.state)
    //     }
    // )

    //const drinkName = "Moscow Mule"
    //const imageName = "https://www.liquor.com/thmb/hY8vXSQUQNgWxLN1c-3BntZo5fM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__03__07152853__moscow-mule-720x720-recipe-61ce552013b04880901b2abfb63017fd.jpg"
    

    function dispNutrition(){
        alert('NUTRITION FACTS')
    }

    function saveRec(){
        alert('Recipe Saved!')
    }

    function dispRatings(){
        alert('View Drink Ratings')
    }

    // function filterIngredients(rawData){
    //     rawData.map((data)=>{
    //       let ingredients =[]
    //       for (const[key,value] of Object.entries(data)){
    //         if(key.includes("strIngredient") &&value!== ""&& value!==null){
    //           ingredients.push(value)
    //         }
    //       }
    //       data["ingredients"]= ingredients;
    //     })
    //   }
    
    
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

      async function fetchData() {
        let data = await axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/random.php')
          //filterIngredients(response.data.drinks)
          filterIngredientsMeasure(data.data.drinks)
          setDrinkInfo(data.data.drinks);
          console.log(data.data)
        }
      
    
      useEffect(() => {
        // axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/random.php')
        //   .then( (response) => {
        //     //filterIngredients(response.data.drinks)
        //     filterIngredientsMeasure(response.data.drinks)
        //     setDrinkInfo(response.data.drinks);
        //     console.log(drinkInfo)
        //   })
        //   .catch( (err) => {
        //     console.log(err);
        //   })
        fetchData()
      }, [])

    return(
        <>
        <HamburgerMenu></HamburgerMenu>
        <header className="App-header">
        <img id='logo' src='logo.png'></img>
        </header>
        
        <main>
            {/* <div className = "drinkInfo">
                <img id = "Drink-Image" src={drinkInfo[0].strDrinkThumb}/>
                <h2 id = "Drink-Name">{drinkInfo[0].strDrink}</h2>
            </div> */}

            {/* <div className="recContainer">
                <p id = "Drink-Rec">
                    <h4>Glass Recommended:</h4> {drinkInfo[0].strGlass}
                    <h4>Description/Instructions:</h4> {drinkInfo[0].strInstructions}
                    <h4>Ingredients:</h4> {drinkInfo[0].ingredientsMeasure}
                    <div>
                    <ul>
                        {
                            drinkInfo[0].ingredientsMeasure.map((item) => {
                                return(
                                    <li>{item}</li>
                                )
                            })
                        }
                    </ul>
                    </div>
                     
                    
                </p>
            </div> */}
            
            <div className = "Button-Group">
                <button onClick={dispNutrition}>Nutrition Facts</button>
                <button onClick={saveRec}>Save Recipe</button>
                <button onClick={dispRatings}>Ratings</button>
            </div>
            
        </main>
        <footer>
          <p>Copyright © 2021 BottomsUp</p>
        </footer>
        </>
        )
    
}

export default Random_Drink;