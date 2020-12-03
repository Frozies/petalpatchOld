import React, {useEffect, useRef, useState} from "react";
import Grass from "./Grass";
import Dimensions from "http";


function Footer(){


    const MyComponent = () => {
        const componentRef = useRef();
        const { width, height } = useContainerDimensions(componentRef);

        return (
            <div ref={componentRef}>
                <p>Width: {width}</p>
                <p>Height: {height}</p>
            </div>
        )

    }

    return (
        <div> {MyComponent} WHY DOES THIS NOT WORK </div>
    )


    // return (
    //     <div  className={"footer"}>
    //         <div className={"footer-sky"}>
    //             <p>Copyright &copy; {(new Date().getFullYear())}</p>
    //         </div>
    //         <div className={"footer-ground"}>
    //             {/*TODO: Fit grass to screen width, and populate with flowers.*/}
    //             <Grass/>
    //
    //         </div>
    //     </div>
    // )

}
export default Footer

/*https://stackoverflow.com/questions/43817118/how-to-get-the-width-of-a-react-element*/

export const useContainerDimensions = myRef => {
    const getDimensions = () => ({
        width: myRef.current.offsetWidth,
        height: myRef.current.offsetHeight
    })

    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const handleResize = () => {
            setDimensions(getDimensions())
        }

        if (myRef.current) {
            setDimensions(getDimensions())
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [myRef])

    return dimensions;
};