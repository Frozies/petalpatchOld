import React from "react";
import {ReactComponent as Mana} from "../../images/Icons/icons8-mana-64.svg";
import {ReactComponent as Facebook} from "../../images/Icons/icons8-facebook-64.svg";
import {ReactComponent as Phone} from "../../images/Icons/icons8-phone-64.svg";
import {ReactComponent as Instagram} from "../../images/Icons/icons8-instagram-64.svg";
import {ReactComponent as Yelp} from "../../images/Icons/icons8-yelp-64.svg";
import {ReactComponent as Maps} from "../../images/Icons/icons8-google-maps-old-64.svg";


function Footer(){
    return (
        <div  className={"footer"}>
            <div className={"footer-address"}>
                239-xxx-xxxx
                {/*Petal Patch*/}
                {/*Address*/}
                {/*Phone Number*/}
            </div>

            <div className={"footer-copy"}>
                <Mana/>
                <div className={"footer-copy-text"}>
                    <h4>Copyright &copy; {(new Date().getFullYear())}</h4>
                    <h6>Made with love by Davin</h6>
                </div>
                <Mana/>
            </div>

            <div className={"footer-social"}>
                <Facebook/>
                <Phone/>
                <Instagram/>
                <Yelp/>
                <Maps/>
            </div>

        </div>
    )
}
export default Footer;