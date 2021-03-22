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
            <Menu isOpen={menuOpen} onOpen={onMenuOpen} width={'20%'}>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/searchpage">Search for a Drink</a>
                <a id="contact" className="menu-item" href="/signin">Account</a>
            </Menu>
        </>
    )
}

export default HamburgerMenu;