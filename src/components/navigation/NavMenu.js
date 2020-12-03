import React, { useState } from 'react';
import {ReactComponent as Menu} from "../../images/Icons/icons8-xbox-menu.svg";
import {useTransition, animated} from 'react-spring'

function NavMenu() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const menuTransitions = useTransition(isMenuOpen, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    return (
        <div className={"nav-menu"}>
            {
                menuTransitions.map(({ item, key, props }) =>
                    item &&
                    <animated.div
                        key={key}
                        style={props}
                        className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"
                    >
                        {/*<NavigationMenu*/}
                        {/*    closeMenu={() => setShowMenu(false)}*/}
                        {/*/>*/}
                        <div className={"navMenu"}>
                            World
                        </div>

                    </animated.div>
                )
            }





            <button className={"nav-button"} type={"button"} onClick={()=>setMenuOpen(!isMenuOpen)}>
                <Menu/>
            </button>
            <h1 className={"nav-text"}>
                Petal Patch
            </h1>

        </div>
    );
}
export default NavMenu;