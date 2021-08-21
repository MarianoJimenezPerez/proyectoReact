import React from 'react'

export const Item = ( {img, nombre, autor,  precioInicial, precioFinal, desc} ) => {


    return (
        <div className="card">
            <img src={img} alt={nombre}/>
            <h3>{nombre}</h3>
            <h4>Autor: {autor}</h4>
            <p className="t-line-through">${precioInicial}</p>
            <p>${precioFinal}</p>
            <p>{desc}</p>
        </div>
    )
}