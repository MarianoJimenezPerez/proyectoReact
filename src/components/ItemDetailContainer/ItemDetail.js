import React from 'react'
import { Link } from 'react-router-dom'

export const ItemDetail = ({img, category, nombre, autor, precioInicial, precioFinal, desc}) => {

    return (
        <div className="bookgrid">
            <img src={img} alt={nombre} className="book-img"></img>
            <div className="book-name-and-autor">
                <h3>{nombre}</h3>
                <h4>Autor: {autor}</h4>
            </div>            
            <p className="book-description t-justify font-A-M-I-L">{desc}</p>
            <div className="book-price">
                <p className="t-line-through">${precioInicial}</p>
                <p>${precioFinal}</p>                
            </div>
            <div className="d-flex flex-direction-row justify-content-space-between align-items-center">
                <div className="d-flex flex-direction-row align-items-center justify-content-space-between">
                    <div className="d-flex flex-direction-row t-center">
                        <button className="btn-resta">-</button>
                        <span className="m-side-1em">1</span>
                        <button className="btn-suma ">+</button>
                    </div>
                    <Link to={``}><span className="botones btn2">Agregar al carrito</span></Link>
                </div>
                <div>
                    <Link to={`../category/${category}`}><span className="botones btn3">Títulos relacionados</span></Link>
                    <Link to={`../`}><span className="botones btn1">Volver</span></Link>
                </div>
            </div>               
        </div>
    )
}