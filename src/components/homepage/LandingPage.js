import React from "react";
import Banner from "../../images/FlowerBanner.jpg";


function LandingPage(){
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
export default LandingPage