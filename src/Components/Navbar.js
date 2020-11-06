import React from "react";
import {ReactComponent as MagnifyIcon} from '../images/icons8-search.svg';
import {ReactComponent as ShoppingCart} from '../images/icons8-food-cart.svg';
import {ReactComponent as Menu} from '../images/icons8-xbox-menu.svg';


function Navbar(){
    return (
       <header className={"nav"}>

           <div className={"nav-menu"}>
               <button className={"nav-button"} type={"button"}>
                   <Menu/>
               </button>
               <h1 className={"nav-text"}>
                   Petal Patch
               </h1>
           </div>

           <div className={"nav-search"}>
               <input className={"nav-search-bar"} placeholder="What are you looking for?" type="text"/>
               <button className={"nav-button"} type={"button"}>
                   <MagnifyIcon/>
               </button>
           </div>

           <div className={"nav-cart"}>
               <button className={"nav-button"} type={"button"}>
                   <ShoppingCart/>
                   <div className={"nav-cart-amount"}>
                       10
                   </div>
               </button>
           </div>
       </header>
    )
}
export default Navbar