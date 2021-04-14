import React from "react";
import Banner from "../../../public/imgs/FlowerBanner_New.jpg";
import Bandit from "../../../public/imgs/bandit.jpg";


const ParallaxImage = () => {

    return (
        // <div className={"parallaxOuterBox"}>
        //     <Container scrollAxis="vertical">
        //         <Parallax y={[-45,15]} scrollAxis="vertical">
        //             <img src={Banner} className={"bannerContainer"} alt={"Alt"} />
        //         </Parallax>
        //     </Container>
        // </div>

       <div className={"parallaxImage"} style={{backgroundImage: `url(${'public/js/' + Banner})` }}>
           <div className={"parallaxContent"}>
                <button className={"heroButton"}>
                    Holidays
                </button>
               <button className={"heroButton"}>
                    Weddings
                </button>
               <button className={"heroButton"}>
                   Special Occasions
               </button>
               <button className={"heroButton"}>
                   Every day
               </button>

           </div>
       </div>
    )
};
export default ParallaxImage;