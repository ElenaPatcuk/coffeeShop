import React from "react";
import ProductCard from "../components/ProductCard";


const Categories = (props)=>{
    const products = props.products
    const nameCategory = props.nameCategory
    const keys = Object.keys(products)
    const card =  []

    if (nameCategory){
        card.push(
            products[nameCategory].map((array) => 
                <ProductCard key={array.id} array={array}/>
            )
        )
    }else {
        keys.forEach(key => {
            card.push(
                products[key].map((array)=>
                    <ProductCard key={array.id} array={array}/>    
                )
            )
        }
    )}

    return(
        <div className="products">
            {card}
        </div>
        
    )
}

export default Categories