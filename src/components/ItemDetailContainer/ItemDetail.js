import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import { Context } from './../../context/Context'

export const ItemDetail = ({id, img, category, nombre, autor, precioInicial, precioFinal, stock, desc}) => {

    const [cantidad, setCantidad] = useState(1)
    const {agregarAlCarrito, isInCart} = useContext(Context)
    const handleAgregar = () =>{
        agregarAlCarrito({
            id, img, category, nombre, autor, precioFinal, cantidad
        })
    }

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
                        <ItemCount
                        max={stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        agregado= {isInCart(id)}
                        />
                    </div>
                    <span className="botones btn2" onClick={handleAgregar}>Agregar al carrito</span>
                </div>
                <div>
                    <Link to={`../category/${category}`}><span className="botones btn3">Títulos relacionados</span></Link>
                    <Link to={`../`}><span className="botones btn1">Volver</span></Link>
                </div>
            </div>               
        </div>
    )
}