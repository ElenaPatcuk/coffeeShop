import MiniCard from "./mini-card"
import logo from './icon/wave.svg'
import { Link, Outlet } from "react-router-dom"


const categoryes = [
    {id: 1, title:'КОФЕ', logo:'./icon/corn.svg', link:'/coffee', content:{
            'зерно':'/corn',
            'капсулы':'/capsules',
            'дрипы':'/drips',
            'аксессуары':'/accessory'
        }
    },
    {id: 2, title:'ОДЕЖДА', logo:'./icon/cloth.svg', link:'/clothes', content:{
            'верх':'/top',
            'низ':'/bottom'
        }
    },
    {id: 3, title:'РАЗНОЕ', logo:'./icon/other.svg', link:'/other', content:{
            'матча':'/match',
            'косметика':'/косметика',
            'фотопленка':'/film'
        }
    },
    {id: 4, title:'КОРЗИНА', logo:'./icon/basket.svg', link:'/basket', content:{
            'личный кабинент':'/personalArea',
            'оптовым клиентам':'/wholesaleCustomers',
            'поддержка':'/support'
        }
    }
]

const Navbar = ()=>{ 
    return(
        <>
            <div className="navbar container">
                <Link to=''>
                    <div className="navbar__title">surf coffee®<br/>official store</div>
                </Link>

                <MiniCard categoryes={categoryes}/>
                
                <div>
                    <img className="flex__child_logo" src={logo}></img>
                </div>
            </div>
            <Outlet/>
        </>

    )
}

export default Navbar