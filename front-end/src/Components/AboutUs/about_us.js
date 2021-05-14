// import '../AboutUs/materialize.css'
import '../AboutUs/about_us.css';
import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';


function AboutUs(){

  return(
    <>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <div id='pageContainer'>
        <HamburgerMenu></HamburgerMenu>
        <div className="App-header">
          <img id='logo' src='logo.png'></img>
        </div>
        <div class="container">
          <div class="row">
            <div class="col s12 m6">
              <div class="card">
                <div class="card-image">
                  <img src={"/img/Diego.png"} alt="Cannot Display" class="first_image" />
                </div>
                <div class="card-content">
                  <span class="card-title">Diego Mendoza</span>
                  <hr></hr>
                  <h4 class="spacing">He is a senior majoring in Finance and Computer Science. He built the about us page and the front end of the cocktail list page.
                  </h4>
                  <h4>
                    Favorite Drink: Gin and Tonic
                  </h4>
                </div>
              </div>
            </div>
            <div class="col s12 m6">
              <div class="card">
                <div class="card-image">
                  <img src={"/img/Dhruv.jpeg"} alt = "Cannot Display" class="first_image"/>
                </div>
                <div class="card-content">
                  <span class="card-title">Dhruv Shetty</span>
                  <hr></hr>
                  <h4 class="spacing">
                    He is senior at the Stern School of Business majoring in Finance and Computer Science. 
                    He built the account details, drink directory, and filter pages.
                  </h4>
                  <h4>
                    Favorite Drink: Moscow Mule
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col s12 m6">
              <div class="card">
                <div class="card-image">
                  <img src={"/img/Charles.jpeg"} alt = "Cannot Display" class="first_image"/>
                </div>
                <div class="card-content">
                  <span class="card-title" text = "black">Charles Condon</span>
                  <hr></hr>
                  <h4 class="spacing">He is a senior at NYU CAS majoring in Computer Science with a concentration on Web Development.
                                      For this project he was in charge of the Home page, css styling, the database, express routing, and the hamburger menu.</h4>
                  <h4>Favorite Drink: Rum and Coke</h4>
                </div>
              </div>
            </div>
            <div class="col s12 m6">
              <div class="card">
                <div class="card-image">
                  <img src={"/img/Humza.jpeg"} alt = "Cannot Display" class="first_image"/>
                </div>
                <div class="card-content">
                  <span class="card-title ">Humza Khan</span>
                  <hr></hr>
                  <h4 class="spacing">Diego Mendoza did this.</h4><br></br><br></br><br></br><br></br>
                  <h4>Favorite Drink: </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col s12 m6">
              <div class="card">
                <div class="card-image">
                  <img src={"/img/Maria.jpeg"} alt = "Cannot Display" class="first_image"/>
                </div>
                <div class="card-content">
                  <span class="card-title">Maria Hatzioanidis</span>
                  <hr></hr>
                  <h4 class="spacing">Maria is a senior at Gallatin concentrating in architecture and furniture design and minoring in computer science. She has been working on the drink search page and implementing the search components through the back end. </h4>
                  <h4 class="spacing">Favorite Drink: Dark 'n' Stormy</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col s12 m6">
              <div class="card">
                <div class="card-image">
                  <img src={"/img/Maneesh.jpeg"} alt = "Cannot Display" class="first_image"/>
                </div>
                <div class="card-content">
                  <span class="card-title ">Maneesh Karnati</span>
                  <hr></hr>
                  <h4 class="spacing">He is a senior at NYU Stern, and he is a Finance and Computer Science major. 
                  For this project, he was responsible for the individual drink pages as well as the randomized drink feature. 
                  </h4>
                  <h4>Favorite Drink: Michelob Ultra Pure Gold</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <footer>
          <p>Copyright © 2021 BottomsUp</p>
        </footer> */}
      </div>
    </>
  )
}

export default AboutUs;
