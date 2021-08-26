import React from 'react'
import { Link } from 'react-router-dom'

export const ItemDetail = ({img, category, nombre, autor, precioInicial, precioFinal, desc}) => {

    console.log(ItemDetail)

    return (
        <div>
            <img src={img} alt={nombre}></img>
            <h3>{nombre}</h3>
            <h4>Autor: {autor}</h4>
            <p className="t-line-through">{precioInicial}</p>
            <p>Precio: {precioFinal}</p>
            <p>{desc}</p>


            <Link to={`/category/${category}`} className="btn btn-primary">Volver</Link>
        </div>
    )
}