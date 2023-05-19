import React from "react"
import './Product.css'

function Product({image, title, price}) {
    return(
        <div className="container">
            <div className="card">
                <img src={image} alt="Product"/>
                <h1>{title}</h1>
                <p className="price">${price}</p>
                <p className="about">iPhone 13 mini, the smallest member of the family, but powerful</p>
                <button>Add to Card</button>
            </div>
        </div>
    )
}

export default Product