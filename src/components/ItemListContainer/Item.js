import React from 'react'

export const Item = ( {img, nombre, precioInicial, precioFinal, desc} ) => {


    return (
        <div className="card">
            <img src={img} alt={nombre}/>
            <h3>{nombre}</h3>
            <p>{precioInicial}</p>
            <p>{precioFinal}</p>
            <p>{desc}</p>
        </div>
    )
}