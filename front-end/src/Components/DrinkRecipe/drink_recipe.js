import './drink_recipe.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {useEffect, useState} from 'react'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';


function Drink_Recipe(props){
    const [drinkInfo, setDrinkInfo] = useState({});
    useEffect(()=> {
            setDrinkInfo(props.location.state)
            }
    )

    const drinkName = "Moscow Mule"
    const imageName = "https://www.liquor.com/thmb/hY8vXSQUQNgWxLN1c-3BntZo5fM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__03__07152853__moscow-mule-720x720-recipe-61ce552013b04880901b2abfb63017fd.jpg"
    

    function dispNutrition(){
        alert('NUTRITION FACTS')
    }

    function saveRec(){
        alert('Recipe Saved!')
    }

    function dispRatings(){
        alert('View Drink Ratings')
    }

    return(
        <>
        <HamburgerMenu></HamburgerMenu>
        <header className="App-header">
        <h1>BottomsUp</h1>
        </header>

        <main>

            <div className = "drinkInfo">
                <img  id = "Drink-Image" src={drinkInfo.image}/>
                <h2 id = "Drink-Name">{drinkInfo.name}</h2>
            </div>

            <div className="recContainer">
                <p id = "Drink-Rec">Description: {drinkInfo.description}</p>
            </div>
            
            <div className = "Button-Group">
                <button onClick={dispNutrition}>Nutrition Facts</button>
                <button onClick={saveRec}>Save Recipe</button>
                <button onClick={dispRatings}>Ratings</button>
            </div>
            
        </main>

        </>
        )
    
}

export default Drink_Recipe;