
import '../SignIn/sign_in_page.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import axios from 'axios';

// Make axios call in an on submit function to the backend


function Register(){
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleSubmit = (evt) => {
      evt.preventDefault();
      axios.post("http://localhost:3000/register", {
        name,
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
              <form method="POST" action="http://localhost:3000/register">
                <div class="field-container">
                  <div class="field-label">Name</div>
                  <input class="sign-in-field" type="text" name="name" onChange={e => setName(e.target.value)}/>
                </div>
                <div class="field-container">
                    <div class="field-label">Email</div>
                    <input class="sign-in-field" id="emailField" type="text" name= "email" onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div class="field-container">
                    <div class="field-label">Password</div>
                    <input class="sign-in-field" id="pwdField" type="password" name = "password" onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div class="field-container">
                    <div class="field-label">Confirm Password</div>
                    <input class="sign-in-field" id="pwdConfirmField" type="password"></input>
                </div>
                  <input class= "sign-in-button mini" type ="submit"></input>
                <div class="sign-in-footer">Already have an account? <a href="./login">Sign in here</a></div>
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


export default Register;

