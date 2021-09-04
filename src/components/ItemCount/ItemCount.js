import React from 'react'
import { Link } from 'react-router-dom'

export const ItemCount = ({max, cantidad, setCantidad, agregado}) =>{

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
            {
                agregado
                    ?   <Link to="/cart" className="btn2">Terminar mi compra</Link>

                    :   <div>
                            <button className="btn-resta" onClick={handleRestar}>-</button>
                            <span className="m-side-1em">{cantidad}</span>
                            <button className="btn-suma " onClick={handleSumar}>+</button>
                        </div>          
            }
        </div>
    )
}