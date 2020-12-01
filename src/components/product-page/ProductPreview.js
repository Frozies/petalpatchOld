import React from "react";
import {ReactComponent as ProductImg} from "../../images/icons8-sunflower.svg";


function ProductPreview(){
    return (
        <div className={"productPreview"}>
            <div className={"productPreview-img"}>
                <ProductImg/>
            </div>
            Sunflowers
        </div>
    )
}
export default ProductPreview