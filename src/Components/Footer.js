import React from "react";


function Footer(){
    return (
        <div className={"text-center"}>
            <p>Copyright &copy; {(new Date().getFullYear())}</p>
        </div>
    )
}
export default Footer