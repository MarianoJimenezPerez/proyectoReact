import React from 'react'
import { Link } from 'react-router-dom'


export const Item = ( {id, img, nombre, autor,  precioInicial, precioFinal, desc} ) => {


    return (
        <div className="itemGrid card">
            <img src={img} alt={nombre} className="itemImg w-100"/>
            <h3 className="font-A-M-M itemName">{nombre}</h3>
            <h4 className="font-A-M-I-L itemAutor">Autor: {autor}</h4>
            <Link to={`/tienda/detail/${id}`} className="btn3 t-center verMas">Conocer detalles</Link> 
        </div>
    )
}