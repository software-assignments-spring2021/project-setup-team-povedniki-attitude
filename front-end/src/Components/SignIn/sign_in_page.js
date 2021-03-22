
import './sign_in_page.css';
import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';


function SignIn(){

  return(
    <>
      <div id='pageContainer'>
        <HamburgerMenu></HamburgerMenu>
        <div className="App-header">
        <img id='logo' src='logo.png'></img>
        </div>
        <main>
            <div className="sign-in-container">
                <div className="sign-in-button">Sign In</div>
                <div className="sign-in-button">Register</div>
                <a href=".."><div className="sign-in-button" id="guest">Search as Guest</div></a>
            </div>
        </main>
        <footer>
          <p>Copyright © 2021 BottomsUp</p>
        </footer>
      </div>
    </>
  )
}

export default SignIn;
