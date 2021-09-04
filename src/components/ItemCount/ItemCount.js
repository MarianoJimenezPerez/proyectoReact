import React from 'react'

export const ItemCount = ({max, cantidad, setCantidad}) =>{

    const handleSumar = () =>{
        if(cantidad < max){
            setCantidad(cantidad + 1)
        }
    }
    const handleRestar = () =>{
        if(cantidad > 1){
            setCantidad(cantidad - 1)
        }
    }

    return(
        <div>
            <button className="btn-resta" onClick={handleRestar}>-</button>
            <span className="m-side-1em">{cantidad}</span>
            <button className="btn-suma " onClick={handleSumar}>+</button>
        </div>
    )
}