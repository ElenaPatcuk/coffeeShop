import { Link } from "react-router-dom"

const Footer = ()=>{ 
    return(
        <div className="footer container">
            <div className="footer__title">2023 surf coffee®</div>
            <div className="footer__link">
                <Link to='/personalArea'>личный кабинет</Link>
                <Link to='/support'>поддержка</Link>
                <Link to='/wholesaleCustomers'>оптовым клиентам</Link>       
            </div>
        </div>
    )
}

export default Footer
