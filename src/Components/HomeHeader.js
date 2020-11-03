import React from "react";
import Banner from "../images/FlowerBanner.jpg";


function HomeHeader(){
    return (
        <div style={{
            backgroundImage: `url(${Banner})`,
            backgroundPosition: 'center',
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
            height: '100vh'
        }}>
            <h1>
                Petal Patch
            </h1>
        </div>
    )
}
export default HomeHeader