import React from "react";
import Banner from "../images/FlowerBanner.jpg";


function HomeHeader(){
    return (
        <div style={{
            backgroundImage: `url(${Banner})`,
            backgroundPosition: 'center',
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
            height: 'screen'
        }}>
            <h1 className={'text-6xl text-white'}>
                Petal Patch
            </h1>
        </div>
    )
}
export default HomeHeader