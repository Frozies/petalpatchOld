import React, { useState } from 'react';
import {ReactComponent as MenuIcon} from "../../images/Icons/icons8-xbox-menu.svg";
 import { slide as Menu } from 'react-burger-menu'

function NavMenu() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <div className={"nav-menu"}>

            <div className={"navMenu-anim"}>
                <Menu isOpen={ isMenuOpen }>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                </Menu>
            </div>


            {/*Actual button*/}
            <button className={"nav-button"} type={"button"} onClick={()=>setMenuOpen(!isMenuOpen)}>
                <MenuIcon/>
            </button>

            {/*Title*/}
            <h1 className={"nav-title"}>
                Petal Patch
            </h1>

        </div>
    );
}
export default NavMenu;