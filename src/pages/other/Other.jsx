import Categories from '../Categories'
import { useState } from "react"
import {products} from './products'

const Other = ()=>{
    const [category, setCategory] = useState(false)

    return(
        <div className="coffee">
            <h1 className="coffee__title">разное</h1>
            <div className="coffee__categories">
                <a className="coffee__categories" onClick={()=>setCategory(false)} href="#">все</a>
                <a className="coffee__categories" onClick={()=>setCategory('Matcha')} href="#">матча</a>
                <a className="coffee__categories" onClick={()=>setCategory('Cosmetic')} href="#">косметика</a>
                <a className="coffee__categories" onClick={()=>setCategory('Film')} href="#">фотопленка</a>
            </div>
            <Categories nameCategory = {category} products = {products}/>
        </div>
    )
}

export default Other