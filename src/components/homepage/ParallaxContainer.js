import React from "react";
import Banner from "../../images/FlowerBanner_New.jpg";
import {Parallax} from 'react-scroll-parallax';

const ParallaxImage = () => (
        <Parallax className={"home-background"}  tagOuter="figure">
            <img className={"home-background-img"} src={Banner}  alt={"d"}/>
            <button className={"home-button"}>Hello</button>
        </Parallax>
);
export default ParallaxImage;