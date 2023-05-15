import React from "react"

function Product() {
    return(
        <div>
            <h2>Product Card</h2>
            <div className="card">
                <img src={require('img/iphon13.jpg')} alt="Product"/>
                <h1>IPHONE</h1>
            </div>
        </div>
    )
}

export default Product