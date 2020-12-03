import React from "react";
import Parallax from "../components/homepage/ParallaxContainer";
import Recommended from "../components/homepage/Recommended";
import Contact from "../components/homepage/Contact";
import About from "../components/homepage/About";

function Homepage() {
    return (
        <div>
            <Parallax/>
            <Recommended/>
            <About/>
            <Contact/>
        </div>
    );
}

export default Homepage;
