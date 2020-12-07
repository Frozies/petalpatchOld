import React, { useState } from 'react';
import {ReactComponent as Menu} from "../../images/Icons/icons8-xbox-menu.svg";
import {useTransition, animated} from 'react-spring'

function NavMenu() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    //Fade in for menu
    const menuTransitions = useTransition(isMenuOpen, null, {
        from: { opacity: 0, transform: 'translateX(-100%)'},
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    return (
        <div className={"nav-menu"}>

            <div className={"navMenu-anim"}>
                {
                    menuTransitions.map(({ item, key, props }) =>
                        item &&
                        <animated.div
                            key={key}
                            style={props}
                        >
                            {/*<NavigationMenu
                            https://codesandbox.io/s/9o3lw5792w?file=/src/Dropdown.js:211-412 todo: add clicking outside of box.
                            */}



                            <div className={"navMenu"} capture}>
                                World         dfasdfasdfasdf sdfas dfasdf asdfa sdf
                            </div>

                        </animated.div>
                    )
                }
            </div>


            {/*Actual button*/}
            <button className={"nav-button"} type={"button"} onClick={()=>setMenuOpen(!isMenuOpen)}>
                <Menu/>
            </button>

            {/*Title*/}
            <h1 className={"nav-title"}>
                Petal Patch
            </h1>

        </div>
    );
}
export default NavMenu;