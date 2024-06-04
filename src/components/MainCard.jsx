import React from "react";

function MainCard(props){
    const content = props.products.map((product)=>
        <div className='main-products__card' style={{background: `${product.color}`, color: `${product.txtColor}`}}>
            <img className="main-products__card_img"
                src={require(`../pages/img/${product.img}`)}/>
            <p className="main-products__card_title">{product.title}</p>
        </div>    
    )

    return(
        content
    )
}

export default MainCard