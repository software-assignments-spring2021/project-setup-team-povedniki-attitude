import './account_details.css';
import React from 'react';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

function AccountDetails(){


    const imageName = "https://www.liquor.com/thmb/hY8vXSQUQNgWxLN1c-3BntZo5fM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__03__07152853__moscow-mule-720x720-recipe-61ce552013b04880901b2abfb63017fd.jpg"

    return(
        <>
        <HamburgerMenu></HamburgerMenu>
        <header className="App-header">
        <img id='logo' src='logo.png'></img>
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
            <img id="ProfilePic" src="https://www.liquor.com/thmb/hY8vXSQUQNgWxLN1c-3BntZo5fM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__03__07152853__moscow-mule-720x720-recipe-61ce552013b04880901b2abfb63017fd.jpg" alt="new" />;
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
