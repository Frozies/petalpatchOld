import React from "react";
import Bandit from "../../images/bandit.jpg";
import award2018 from "../../images/Awards/2018Award.jpg"
import award2019 from "../../images/Awards/2019Award.jpg"
import award2020 from "../../images/Awards/2020Award.jpg"

function About(){
    return (
        <div className={"about"}>
            <h1>About</h1>

            <div className={"about-info"}>
                <div className={"img-wrapper"}>
                    <img src={Bandit} alt={"Bandit"}/>
                </div>
                <span> {/*TODO: Reread this and check for spelling errors*/}
                    We here at The Petal Patch are more than just a florist we are family. We love what we do here
                    everyday and this is our happy place. Our arrangements are made with smiles and love. With more then
                    25 years of floral design let us design the perfect bouquet for you! Whether it be an anniversary,
                    birthday, get well, event, holiday, thinking of you, new baby, new home, wedding or sympathy
                    arrangement we got you covered! Our staff is polite, super talented and we always deliver with a
                    smile.
                </span>
            </div>
        </div>
    )
}
export default About