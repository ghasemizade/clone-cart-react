import React from "react"
import './Product.css'

function Product() {
    return(
        <div>
            {/* <h2>Product Card</h2> */}
            <div className="card">
                <img src='iphon13.jpg' alt="Product"/>
                <h1>IPHONE</h1>
                <p className="price">$999</p>
                <p className="about">iPhone 13 mini, the smallest member of the family, but powerful</p>
                <button>Add to Card</button>
            </div>
        </div>
    )
}

export default Product