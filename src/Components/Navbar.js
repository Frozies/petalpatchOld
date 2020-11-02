import React from "react";
import {ReactComponent as MagnifyIcon} from '../images/icons8-search.svg';
import {ReactComponent as ShoppingCart} from '../images/icons8-food-cart.svg';
import {ReactComponent as Menu} from '../images/icons8-xbox-menu.svg';


function Navbar(){
    return (
        <div>
            <header className={"flex flex-wrap items-center bg-gray-500 bg-opacity-100 p-2 shadow"}>
                <div className={"flex flex-1 items-center"}>
                    <button type={"button"} className={"focus:outline-none"}>
                        <Menu className={"pr-1"}/>
                    </button>
                    <h1>
                        Petal Patch
                    </h1>
                </div>
                <div className={"flex flex-center object-fill"}>
                    <button type={"button"} className={"focus:outline-none "}>
                        <MagnifyIcon className={""}/>
                    </button>
                    <input className={"focus:outline-none rounded h-7"}/>
                </div>
                <div className={"flex-1 text-right"}>
                    <button type={"button"} className={"focus:outline-none px-10"}>
                        {/* Below is the basis of a number of items that are currently in the shopping cart
                        I cant get the z-index to work properly to overlay the number in the top right corner of the cart
                        */}
                        <div className={"z-20 rounded-full bg-indigo-500 uppercase font-bold" +
                        "shadow text-white -mt-6"}>
                            3
                        </div>
                        <ShoppingCart className={"z-10"}/>
                    </button>
                </div>
            </header>

        </div>
    )
}
export default Navbar