import Categories from "../Categories"
import { useState } from "react"
import {products} from './products'

const Clothes = ()=>{
    const [category, setCategory] = useState(false)

    return(
        <div className="coffee">
            <h1 className="coffee__title">одежда</h1>
            <div className="coffee__categories">
                <a className="coffee__categories" onClick={()=>setCategory(false)} href="#">все</a>
                <a className="coffee__categories" onClick={()=>setCategory('Top')} href="#">верх</a>
                <a className="coffee__categories" onClick={()=>setCategory('Bottom')} href="#">низ</a>
            </div>
            <Categories nameCategory = {category} products = {products}/>
        </div>
    )
}

export default Clothes
