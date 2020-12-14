import React, { useState } from 'react';
import {ReactComponent as MenuIcon} from "../../images/Icons/icons8-xbox-menu.svg";
 import { slide as Menu } from 'react-burger-menu'

function NavMenu() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <div className={"nav-menu"}>
            {/*Sidebar Menu*/}
                <Menu isOpen={ isMenuOpen } className={"navMenu"}>
                    <div className={"navMenu-content"}>
                        <h1>Petal Patch</h1>
                        <a id="home" className="menu-item" href="/">Home</a>
                        <br/>
                        <a id="about" className="menu-item" href="/about">About</a>
                        <br/>
                        <a id="contact" className="menu-item" href="/contact">Contact</a>
                    </div>
                </Menu>


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