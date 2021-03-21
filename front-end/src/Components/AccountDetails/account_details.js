import './account_details.css';
import React from 'react';
import ReactDOM from 'react-dom';



function AccountDetails(){
    return(
        <>
        <header className="App-header">
        <h1>BottomsUp</h1>
        </header>
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <p><u>Account Details</u></p>
        </div>
        <div>
            <p id="ProfilePic">Profile Picture</p>
            {/* <img src="./front-end/src/logo.svg" ></img> */}
            <p id="AccountName">Account Username</p>
        </div>
        <div>
            <p id="AccountProperties">Email:</p>
            <p id="AccountProperties">Age:</p>
            <p id="AccountProperties">Member Since:</p>
            <p id="AccountProperties">Favorite Drinks:</p>
            <p id="AccountProperties">Favorite Ingredients:</p>
            <p id="AccountProperties">History:</p>
        </div>



      </>
    )

}

export default AccountDetails;