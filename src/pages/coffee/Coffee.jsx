import Categories from "../Categories"
import { useState } from "react"
import {products} from './products'

function Coffee(props){
    const [category, setCategory] = useState(false)
    // setCategory('Corn')
    const title = props.title

    return(
        <div className="coffee">
            <h1 className="coffee__title">кофе</h1>
            <div className="coffee__categories">
                <a className="coffee__categories" onClick={()=>setCategory(false)} href="#">все</a>
                <a className="coffee__categories" onClick={()=>setCategory('Corn')} href="#">зерно</a>
                <a className="coffee__categories" onClick={()=>setCategory('Capsules')} href="#">капсулы</a>
                <a className="coffee__categories" onClick={()=>setCategory('Drips')} href="#">дрипы</a>
                <a className="coffee__categories" onClick={()=>setCategory('Accessory')} href="#">аксессуары</a>
            </div>
            <Categories nameCategory = {title ? title:category} products = {products}/>
        </div>
    )
}

export default Coffee