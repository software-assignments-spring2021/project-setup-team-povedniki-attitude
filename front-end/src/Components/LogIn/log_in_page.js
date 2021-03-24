
import '../SignIn/sign_in_page.css';
import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';


function LogIn(){

  return(
    <>
      <div id='pageContainer'>
        <HamburgerMenu></HamburgerMenu>
        <div className="App-header">
        <img id='logo' src='logo.png'></img>
        </div>
        <main>
            <div className="sign-in-container">
                <div class="field-container">
                    <div class="field-label">Email</div>
                    <input class="sign-in-field" id="emailField" type="text"></input>
                </div>
                <div class="field-container">
                    <div class="field-label">Password</div>
                    <input class="sign-in-field" id="pwdField" type="password"></input>
                </div>
                <div className="sign-in-button mini">Sign In</div>
                <div class="sign-in-footer">Don't have an account? <a href="./register">Register here</a></div>
            </div>
        </main>
        <footer>
          <p>Copyright © 2021 BottomsUp</p>
        </footer>
      </div>
    </>
  )
}

export default LogIn;
