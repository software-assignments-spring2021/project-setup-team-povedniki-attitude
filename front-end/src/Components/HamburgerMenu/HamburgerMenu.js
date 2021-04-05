import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './HamburgerMenu.css';

function HamburgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const onMenuOpen = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <Menu isOpen={menuOpen} onOpen={onMenuOpen} >
                <div className='itemContainer'>
                    <img className='icon' src='./img/home.png'></img>
                    <a id="home" className="bm-item menu-item" href="/">Home</a>
                </div>
                <div className='itemContainer'>
                    <img className='icon' src='./img/search.png'></img>
                    <a id="about" className="bm-item menu-item" href="/searchpage">Search for a Drink</a>
                </div>
                <div className='itemContainer'>
                    <img className='icon' src='./img/search.png'></img>
                    <a id="list" className="bm-item menu-item" href="/completedrinklist">Complete Drink Directory</a>
                </div>
                <div className='itemContainer'>
                    <img className='icon' src='./img/account.png'></img>
                    <a id="contact" className="bm-item menu-item" href="/signin">Account</a>
                </div>
            </Menu>
        </>
    )
}

export default HamburgerMenu;