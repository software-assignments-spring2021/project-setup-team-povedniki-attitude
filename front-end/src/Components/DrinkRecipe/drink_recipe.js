import './drink_recipe.css';
import React from 'react';
import {useEffect, useState} from 'react'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';


function Drink_Recipe(props){
    const [drinkInfo, setDrinkInfo] = useState({});
    let drinks = props.location.state;
    useEffect(()=> {
        setDrinkInfo(props.location.state)
        }, [props.location.state]
    )

    //const drinkName = "Moscow Mule"
    //const imageName = "https://www.liquor.com/thmb/hY8vXSQUQNgWxLN1c-3BntZo5fM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__03__07152853__moscow-mule-720x720-recipe-61ce552013b04880901b2abfb63017fd.jpg"
    

    // function dispNutrition(){
    //     alert('NUTRITION FACTS')
    // }

    // function saveRec(){
    //     alert('Recipe Saved!')
    // }

    // function dispRatings(){
    //     alert('View Drink Ratings')
    // }

    return(
        <>
        <HamburgerMenu></HamburgerMenu>
        <header className="App-header">
        <img id='logo' src='logo.png' alt=""></img>
        </header>
        
        <main>

            <div className = "drinkInfo">
                <img  id = "Drink-Image" src={drinkInfo.image} alt=""/>
                <h2 id = "Drink-Name">{drinkInfo.name}</h2>
            </div>

            <div className="recContainer">
                <p id = "Drink-Rec">
                    <h4 className="space">Glass Recommended:</h4> {drinks.glass}
                    <h4 className="space">Description/Instructions:</h4> {drinks.instructions}
                    <h4 className="space">Ingredients:</h4> {drinks.ingredients.map( (ingredient) => {
                        return(
                            <li>{ingredient}</li>
                        )
                    })}
                    {/* <h4>Measurements:</h4> {drinkInfo.ingredientsMeasure} */}
                    {/* <h4>Ingredients:</h4> */}
                    {/* <div>
                    <ul>
                        {
                            drinkInfo?.ingredientsMeasure.map((item) => {
                                return(
                                    <li>{item}</li>
                                )
                            })
                        }
                    </ul>
                    </div> */}
                     
                    
                </p>
            </div>
            
            {/* <div className = "Button-Group">
                <button onClick={dispNutrition}>Nutrition Facts</button>
                <button onClick={saveRec}>Save Recipe</button>
                <button onClick={dispRatings}>Ratings</button>
            </div> */}
            
        </main>
        <footer>
          <p>Copyright © 2021 BottomsUp</p>
        </footer>
        </>
        )
    
}

export default Drink_Recipe;