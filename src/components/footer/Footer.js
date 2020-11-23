import React from "react";


function Footer(){
    return (
        <div  className={"footer"}>
            <div className={"footer"}>
                <p className={"footer-text"}>Copyright &copy; {(new Date().getFullYear())}</p>
            </div>
        </div>
    )
}
export default Footer;