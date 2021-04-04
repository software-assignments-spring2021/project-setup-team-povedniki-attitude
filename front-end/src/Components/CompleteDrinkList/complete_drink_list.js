import './complete_drink_list.css';
import React, { useState, useEffect } from 'react';
import Cocktail_Item from './Cocktail_Item'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import axios from 'axios';

function CompleteDrinkList(){


    return(
        <>
        <HamburgerMenu></HamburgerMenu>
        <header className="App-header">
        <img id='logo' src='logo.png'></img>
        </header>

        <footer>
          <p>Copyright © 2021 BottomsUp</p>
        </footer>

      </>
    )

}

export default CompleteDrinkList;
