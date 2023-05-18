import React from "react"
import './Product.css'

function Product(props) {
    return(
        <div className="container">
            {/* <h2>Product Card</h2> */}
            <div className="card">
                <img src={props.image} alt="Product"/>
                <h1>{props.title}</h1>
                <p className="price">${props.price}</p>
                <p className="about">iPhone 13 mini, the smallest member of the family, but powerful</p>
                <button>Add to Card</button>
            </div>
        </div>
    )
}

export default Product