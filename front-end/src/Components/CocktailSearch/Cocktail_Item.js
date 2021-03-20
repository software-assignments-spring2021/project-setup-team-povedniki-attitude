import React from 'react';
import {Link} from 'react-router-dom'



function Cocktail_Item({name,image,description}){
    return(
        <Link to={{
            pathname: "/drinkrecipe",
            state: {
                name,
                image,
                description,
                }
            }}>
        <div className="Cocktail_Item">
            <h3 className="name">{name}</h3>
           {/* </div><div className="Name"> {name}</div> */}

           <div className="content">
           <img src ={image}/>
           
           <div className="description">Description: {description}</div>
           

            </div>  
        </div>  
        </Link>
    )
}
export default Cocktail_Item;
  