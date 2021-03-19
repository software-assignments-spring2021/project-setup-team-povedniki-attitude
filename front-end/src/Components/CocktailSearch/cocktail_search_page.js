import './Cocktail_Search_Page.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Cocktail_Item from './Cocktail_Item'

function Cocktail_Search_Page(){
  let cocktailItems=[{
    name: "Martini",
    image:"",
    alcoholType: "Vodka"
  },{
  name: "Gin and Tonic",
    image:"",
    alcoholType: "Gin"
  },{
    name: "Vodka Soda",
      image:"",
      alcoholType: "Vodka"
    },
]
      return(
        <>
        <header className="App-header">
        <h1>BottomsUp</h1>
        </header>
      <main>
        <form>
          <input type='text' id="ingredient" name='ingredient' placeholder='Search For Cocktail'/>
          <input type='submit' name='ingSubmit' value='Submit'/>
        </form>
        <div id="SearchContainer">
          {
            cocktailItems.map((item, index)=> {
             return(
               <>
               <Cocktail_Item key ={index} 
               name={item.name}
               image={item.image}
               alcoholType={item.alcoholType}/>
               </>
             ) 
            })
          }
        </div>
        
      </main>
      </>
    )

    
  }
  export default Cocktail_Search_Page;
  
  