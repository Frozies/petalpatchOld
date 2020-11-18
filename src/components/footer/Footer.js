import React from "react";
import Grass from "./Grass";
import Dimensions from "http";


function Footer(){

    return (
        <div className={"footer"}>
            <div className={"footer-sky"}>
                <p>Copyright &copy; {(new Date().getFullYear())}</p>
            </div>
            <div className={"footer-ground"}>
                {/*TODO: Fit grass to screen width, and populate with flowers.*/}
                <Grass/>

            </div>
        </div>
    )
}
export default Footer