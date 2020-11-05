import React from "react";
import {ReactComponent as MagnifyIcon} from '../images/icons8-search.svg';
import {ReactComponent as ShoppingCart} from '../images/icons8-food-cart.svg';
import {ReactComponent as Menu} from '../images/icons8-xbox-menu.svg';


function Navbar(){
    return (
       <header className={"nav"}>

           <div className={"nav-menu"}>
               <button type={"button"}>
                   <Menu/>
               </button>
               <h1>
                   Petal Patch
               </h1>
           </div>

           <div className={"nav-search"}>
               <MagnifyIcon/>
               <div className={"nav-search-bar"}>
                   <input type="text"/>
               </div>
           </div>

           <div className={"nav-cart"}>
               <button type={"button"}>
                   <ShoppingCart/>
                   <div className={"nav-cart-amount"}>
                       3
                   </div>
               </button>
           </div>
       </header>
    )
}
export default Navbar