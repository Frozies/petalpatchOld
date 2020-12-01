import React from "react";
import Parallax from "../components/homepage/ParallaxContainer";
import Recommended from "../components/homepage/Recommended";
import Contact from "../components/homepage/Contact";

function Homepage() {
    return (
        <div>
            <Parallax/>
            <Recommended/>
            {/*About us*/}
            {/*Awards and bandit*/}
            <Contact/>
        </div>
    );
}

export default Homepage;
