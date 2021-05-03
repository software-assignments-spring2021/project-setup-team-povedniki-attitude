
import '../SignIn/sign_in_page.css';
import React, { useState } from 'react';
//import ReactDOM from 'react-dom';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import axios from 'axios';

function LogIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleSubmit = (evt) => {
      evt.preventDefault();
      axios.post("http://localhost:3000/signin", {
        email,
        password
    } )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return(
    <>
      <div id='pageContainer'>
        <HamburgerMenu></HamburgerMenu>
        <div className="App-header">
        <img id='logo' src='logo.png'></img>
        </div>
        <main>
            <div className="sign-in-container">
            <form onSubmit={handleSubmit}>
                <div class="field-container">
                    <div class="field-label">Email</div>
                    <input class="sign-in-field" id="emailField" type="text" onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div class="field-container">
                    <div class="field-label">Password</div>
                    <input class="sign-in-field" id="pwdField" type="password" onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div className="sign-in-button mini">Sign In
                <input class= "sign-in-footer" type ="submit"></input>
                </div>
                <div class="sign-in-footer">Don't have an account? <a href="./register">Register here</a></div>
                </form>
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
