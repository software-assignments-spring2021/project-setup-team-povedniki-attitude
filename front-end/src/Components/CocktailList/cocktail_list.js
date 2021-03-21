

import './cocktail_list.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Cocktail_Item from './Cocktail_Item'
import {Link} from 'react-router-dom'


function Cocktail_List(){

    let cocktailItems=[{
        name: "Martini",
        matchScore: 99,
        image:"https://www.liquor.com/thmb/hY8vXSQUQNgWxLN1c-3BntZo5fM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__03__07152853__moscow-mule-720x720-recipe-61ce552013b04880901b2abfb63017fd.jpg",
        description: "vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec",
        ingredients: ["Tequila", "Lime"]
    },{
        name: "Gin and Tonic",
        matchScore: 75,
        image:"https://www.liquor.com/thmb/hY8vXSQUQNgWxLN1c-3BntZo5fM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__03__07152853__moscow-mule-720x720-recipe-61ce552013b04880901b2abfb63017fd.jpg",
        description: "suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed",
        ingredients: "Tequila, Lime"
    },{
        name: "Vodka Soda",
        matchScore: 60,
        image:"https://www.liquor.com/thmb/hY8vXSQUQNgWxLN1c-3BntZo5fM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__03__07152853__moscow-mule-720x720-recipe-61ce552013b04880901b2abfb63017fd.jpg",
        description: "mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus",
        ingredients: "Tequila, Lime"
    },]

    return(
        <>
        <header className="App-header">
        <h1>BottomsUp</h1>
        </header>
      <main>
        <form>
          <input type='text' id="ingredient" name='ingredient' placeholder='Please Enter Ingredients'/>
          <input type='submit' name='ingSubmit' value='Submit'/>
        </form>



        <div id="SearchContainer">
          {
            cocktailItems.map((item, index)=> {
                return(
                    <>
                    <Cocktail_Item key ={index} 
                    //this is hardcoded for now
                    name={item.name}
                    matchScore = {item.matchScore}
                    image= {item.image}
                    description={item.description}
                    ingredients = {item.ingredients}/>
                    </>
                ) 
            })
          }
        </div>
        
      </main>
      </>
    )
    

}

export default Cocktail_List