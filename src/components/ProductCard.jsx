import React from "react";

const ProductCard = (props) =>{
    return(
        <div className="products__card" key={props.array.id}>
            <div className="products__card_gray">
                <img className="products__card_img" src={props.array.img} style={{width:'200px'}}/>
            </div>
            <div className="products__card_content">
                <p className="products__card_title">{props.array.name}</p>
                <p>{props.array.price}</p>
            </div>
        </div>
    )
}

export default ProductCard