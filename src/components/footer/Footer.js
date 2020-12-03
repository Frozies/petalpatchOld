import React from "react";
import {ReactComponent as Mana} from "../../images/Icons/icons8-mana-64.svg";


function Footer(){
    return (
        <div  className={"footer"}>
            <div className={"footer"}>
                {/*Left*/}
                {/*Petal Patch*/}
                {/*Address*/}
                {/*Phone Number*/}

                {/*Centered*/}
                <p className={"footer-text"}>Copyright &copy; {(new Date().getFullYear())}</p>

                {/*Put this below the copyright*/}
                <div>
                    <Mana/>
                    <h3>Made with love by Davin</h3>
                    <Mana/>
                </div>

                {/*Social Media Icons*/}
            </div>
        </div>
    )
}
export default Footer;