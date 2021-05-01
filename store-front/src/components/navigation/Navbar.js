import React from "react";
import {ReactComponent as MagnifyIcon} from '../../../public/imgs/Icons/icons8-search.svg';
import NavMenu from "./NavMenu";
import NavCart from "./NavCart";


function Navbar(){
    return (
       <header className={"nav"}>

           <NavMenu/>

           <div className={"nav-search"}>
               {/*Todo: make the whole searchbar light up when focused.
               The magnifying glass outline doesnt change color when the search bar is clicked on.
               Also now the border boxes in between the two are back*/}

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