import React from 'react';

function Cocktail_Item({name,image,alcoholType}){
    return(
        <div className="Cocktail_Item">
           name:{name}
           <img src ={image}/>
           alcoholType:{alcoholType}

        </div>
    )
}
export default Cocktail_Item;
  