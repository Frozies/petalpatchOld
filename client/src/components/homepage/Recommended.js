import React from "react";
import ProductPreview from "../product-page/ProductPreview";


function Recommended(){
    return (
        <div className={"recommended"}>
            <span className={"recommended-text"}>
                Recommended
            </span>
            <div className={"recommended-products"}>
                <ProductPreview/>
                <ProductPreview/>
                <ProductPreview/>
                <ProductPreview/>
            </div>
        </div>
    )
}
export default Recommended