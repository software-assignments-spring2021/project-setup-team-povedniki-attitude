import React from 'react';

function Cocktail_Item({name,image,alcoholType}){
    return(
        <div className="Cocktail_Item">
           <div>{name}</div>
           
           <img src ={image}/>
           <div>alcoholType:{alcoholType}</div>

        </div>
    )
}
export default Cocktail_Item;
  