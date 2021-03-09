import React from "react";
import Parallax from "../components/homepage/ParallaxContainer";
import Recommended from "../components/homepage/Recommended";
import Contact from "../components/homepage/Contact";
import About from "../components/homepage/About";
import Awards from "../components/homepage/Awards";

function Homepage() {
    return (

        /*does the website need to be this compressed?*/
        <div>
            <Parallax/>
            <Recommended/>
            <About/>
            <Awards/>
            <Contact/>
        </div>
    );
}

export default Homepage;
