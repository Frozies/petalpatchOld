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
        </div>
    )
}
export default HomeHeader