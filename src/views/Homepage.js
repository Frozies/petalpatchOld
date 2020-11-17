import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

function Homepage() {
    return (
        <div>
            <Navbar/>
            <LandingPage/>
            <Footer/>
        </div>
    );
}

export default Homepage;
