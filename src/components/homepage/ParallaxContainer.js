import React from "react";
import Banner from "../../images/FlowerBanner_New.jpg";
import { Parallax } from 'react-parallax';

const ParallaxContainer = () => (
    <Parallax
        blur={1}
        bgImage={Banner}
        bgImageAlt="the cat"
        strength={500}>
        <div style={{ height: '80vh', width: 'auto'}}/>
        <div className={"home-text"}>
            Home
        </div>

    </Parallax>
);
export default ParallaxContainer