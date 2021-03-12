import React from 'react';
import {ReactComponent as ShoppingCart} from "../../images/Icons/icons8-food-cart.svg";

function NavCart () {

    return (
        <div className={"nav-cart"}>

            <button className={"nav-button"} type={"button"}>
                <ShoppingCart/>
                <div className={"nav-cart-amount"}>
                    10
                </div>
            </button>
        </div>
    );
}
export default NavCart;