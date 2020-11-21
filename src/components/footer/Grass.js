import React, {useEffect, useState} from 'react';
import {ReactComponent as Sunflower} from '../../images/icons8-sunflower.svg';


function Grass() {
        const size = useWindowSize();


        let grassArray = [];
        let f = 0;

        for (let i = 0 ;
             size.width*0.9 <= 100
            ; i++) { /*size.width/7 magic number*/

                grassArray.push(
                    <div className={"footer-blade"}
                         key={i}/>
                    );


                if(f>25 && f / i > 0.1){ /* TODO: wtf does this do exactly? write a comment*/
                        grassArray.push(<div className={"footer-sunflower"} key={i+1}/>);
                        f = 0;
                        i++;
                }else{
                        f ++;
                }
        }

    return(
        <div className={"grass"}>
                {grassArray}
        </div>
    )
}
export default Grass;

function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
        const [windowSize, setWindowSize] = useState({
                width: undefined,
                height: undefined,
        });

        useEffect(() => {
                // Handler to call on window resize
                function handleResize() {
                        // Set window width/height to state
                        setWindowSize({
                                width: window.innerWidth,
                                height: window.innerHeight,
                        });
                }

                // Add event listener
                window.addEventListener("resize", handleResize);

                // Call handler right away so state gets updated with initial window size
                handleResize();

                // Remove event listener on cleanup
                return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount

        return windowSize;
}



