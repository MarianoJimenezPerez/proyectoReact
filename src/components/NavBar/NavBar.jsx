import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { Context } from './../../context/Context'

export const NavBar = () => {
    const {cantidadCarrito} = useContext(Context)
    return(

        <header className="header t-center">
            <nav className="nav">
                <h2>Mi Logo</h2>
                <ul className="nav">
                    <li><Link to={"/inicio"}>Inicio</Link></li>
                    <li><Link to={"/tienda"}>Tienda</Link></li>
                    <li><Link to={"/trabajando"}>Quienes somos</Link></li>
                    <li><Link to={"/trabajando"}>Contactanos</Link></li>
                    <li><Link to={"/cart"}><img src="/assets/images/carrito-de-compras.png" alt="carrito de compras" className="logo-carrito"/></Link><span>{cantidadCarrito()}</span></li>
                </ul>
            </nav>            
        </header>        
    ) 
}