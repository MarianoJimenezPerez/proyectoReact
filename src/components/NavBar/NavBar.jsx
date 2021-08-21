import React from 'react'
import {Link} from 'react-router-dom'

export const NavBar = () => {

    return(

        <header className="header t-center">
            <nav className="nav">
                <h2>Mi Logo</h2>
                <ul className="nav">
                    <li><Link to={"/inicio"}>Inicio</Link></li>
                    <li><Link to={"/tienda"}>Tienda</Link></li>
                    <li>Quienes somos</li>
                    <li>Contacto</li>
                </ul>
            </nav>            
        </header>        
    ) 
}