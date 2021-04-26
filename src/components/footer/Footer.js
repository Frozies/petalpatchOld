import React from "react";
import {ReactComponent as Mana} from "../../../public/imgs/Icons/icons8-mana-64.svg";
import {ReactComponent as Facebook} from "../../../public/imgs/Icons/icons8-facebook-64.svg";
import {ReactComponent as Phone} from "../../../public/imgs/Icons/icons8-phone-64.svg";
import {ReactComponent as Instagram} from "../../../public/imgs/Icons/icons8-instagram-64.svg";
import {ReactComponent as Yelp} from "../../../public/imgs/Icons/icons8-yelp-64.svg";
import {ReactComponent as Maps} from "../../../public/imgs/Icons/icons8-google-maps-old-64.svg";


function Footer(){
    return (
        <div  className={"footer"}>
            <div className={"footer-address"}>
                <h1>The Petal Patch</h1>

                <a href={"https://goo.gl/maps/JZmf9mFHg56jrx9N9"} target="_blank" rel="noreferrer">
                    12715-2 McGregor Boulevard, Fort Myers, FL, 33919, United States</a>
                <br/>
                <a href="tel:239-208-3116">239-208-3116</a>
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