import React from "react";
import {ReactComponent as MagnifyIcon} from '../../images/Icons/icons8-search.svg';
import NavMenu from "./NavMenu";
import NavCart from "./NavCart";


function Navbar(){
    return (
       <header className={"nav"}>

           <NavMenu/>

           <div className={"nav-search"}>
               <input className={"nav-search-bar"} placeholder="What are you looking for?" type="text"/>
               <button className={"nav-search-button"} type={"button"}>
                   <MagnifyIcon/>
               </button>
           </div>

           <NavCart/>

       </header>
    )
}
export default Navbar