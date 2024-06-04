import React from "react";
import MainCard from "../components/MainCard";

const mainProducts = [
    {id: 1, title:'зерно', img:'corn.png', color:'#46504f', txtColor:'#E5E5E5'},
    {id: 2, title:'капсулы', img:'capsules.png', color:'#C59C6E', txtColor:'#000000'},
    {id: 3, title:'дрипы', img:'drips.png', color:'#CAC198', txtColor:'#000000'},
    {id: 4, title:'аксессуары', img:'accessories.png', color:'black', txtColor:'#E5E5E5'},
    {id: 5, title:'жилет', img:'vest.png', color:'#E5E5E5', txtColor:'#000000'},
    {id: 6, title:'футболки', img:'t-shirt.png', color:'#C59C6E', txtColor:'#E5E5E5'},
    {id: 7, title:'сумки', img:'bags.png', color:'#46504f', txtColor:'#E5E5E5'},
    {id: 8, title:'пленка', img:'film.png', color:'#E5E5E5', txtColor:'#000000'},
    {id: 1, title:'матча', img:'matcha.png', color:'#E5E5E5', txtColor:'#000000'},
    {id: 2, title:'косметика', img:'cosmetics.png', color:'#CAC198', txtColor:'#000000'}
]

const Main = ()=>{
    return(
        <div className="main">
            <div className="poster">
                <h1 className="poster__title">nice<br/>good-looking<br/>amusing</h1>
                <p className="poster__descr">irrelevant item by hrlsn.co & propaganda machine</p>
                <h1 className="poster__title">but still<br/>irrelevant</h1>
            </div>
            <div className="main-products">
                <MainCard products={mainProducts}/>
            </div>
        </div>
        
    )
}

export default Main