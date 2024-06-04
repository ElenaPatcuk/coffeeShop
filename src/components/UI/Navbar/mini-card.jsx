import React from "react"
import { Link } from "react-router-dom"

function MiniCard(props){
    const content = props.categoryes.map((c)=>
        <div className="flex">
            <div className="flex__child">
                <img className="flex__child_logo" key={c.id} src={require(`${c.logo}`)}/>
            </div>
            
            <div className="flex__child">
                <Link key={c.id} to={c.link}>
                    <h2>{c.title}</h2>
                </Link>
                <ul>
                    {Object.keys(c.content).map((k)=>
                        <li>
                            <Link to={c.content[k]}><a key={k} href='#'>{k}</a></Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>    
    )

    return(
        content
    )
}

export default MiniCard