import React from 'react'
import { Link } from 'react-router-dom'


export const Item = ( {id, img, nombre, autor,  precioInicial, precioFinal, desc} ) => {


    return (
        <div>
            <img src={img} alt={nombre}/>
            <h3>{nombre}</h3>
            <h4>Autor: {autor}</h4>
            <p className="t-line-through">${precioInicial}</p>
            <p>${precioFinal}</p>
            <p>{desc}</p>
            <Link to={`/tienda/detail/${id}`}>Conocer detalles</Link>
        </div>
    )
}