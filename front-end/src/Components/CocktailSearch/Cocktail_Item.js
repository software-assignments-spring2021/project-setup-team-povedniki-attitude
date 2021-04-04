import React from 'react';
import {Link} from 'react-router-dom'



function Cocktail_Item({name,image,ingredients,instructions}){
    return(
        <Link to={{
            pathname: "/drinkrecipe",
            state: {
                name,
                image,
                ingredients,
                instructions
                }
            }}>
        <div className="Cocktail_Item">
            <h3 className="name">{name}</h3>
           {/* </div><div className="Name"> {name}</div> */}

           <div className="content">
           <img src ={image} alt={''}/>
           
           {/* <div className="ingredients">{ingredients}</div> */}
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
  