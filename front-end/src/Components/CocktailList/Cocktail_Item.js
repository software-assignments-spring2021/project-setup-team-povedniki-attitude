import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


function Cocktail_Item({name, image, drinkID}){
    const [cocktail, setCocktail] = useState();
    let ingredients =[]

    function filterIngredients(rawData){
      rawData.map((data)=>{
        for (const[key,value] of Object.entries(data)){
          if(key.includes("strIngredient") &&value!== ""&& value!==null){
            ingredients.push(value)
          }
        }
        data["ingredients"]= ingredients;
      })
    }

    useEffect(() => {
        axios(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${drinkID}`)
            .then( (response) => {
                filterIngredients(response.data.drinks);
                setCocktail(response.data.drinks);
                console.log(cocktail);
            })
            .catch( (err) => {
                console.log(err);
        })
          
    }, [])

    // const instructions = cocktail.strInstructions
    // const ingredients = cocktail.ingredients
    // const ingredientsMeasure = cocktail.ingredientsMeasure 
    // const glass = cocktail.strGlass

    return(
        <Link to={{
            pathname: "/drinkrecipe",
            state: {
                name,
                image,
                ingredients,
                // instructions,
                // ingredientsMeasure,
                // glass
                }
            }}>
            <div className="Cocktail_Item">
                <h3 className="name">{name}</h3>
                <div className="content">
                    <img src ={image} alt=''/>
                    <div className= "ingredientsContainer">
                        <h4>Ingredients needed:</h4>
                        <ul>
                            {
                                ingredients.map((ingredient) => {
                                    return (
                                        <li className= "ingredients">{ingredient}</li>
                                    )
                                })
                            } 
                        </ul>
                    </div>
                </div>  
            </div>  
        </Link>
    )
}
export default Cocktail_Item;