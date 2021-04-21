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
                  <img src="logo.png" />
                  <span class="card-title ">Diego Mendoza</span>
                </div>
                <div class="card-content">
                  <h5>Diego Mendoza did this.</h5>
                </div>
              </div>
            </div>
            <div class="col s12 m6">
              <div class="card">
                <div class="card-image">
                  <img src="logo.png" />
                  <span class="card-title ">Diego Mendoza</span>
                </div>
                <div class="card-content">
                  <h5>Diego Mendoza did this.</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <p>Copyright © 2021 BottomsUp</p>
        </footer>
      </div>
    </>
  )
}

export default AboutUs;
