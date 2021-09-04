import React, {useContext} from 'react'
import { Context } from '../../context/Context'

export const Cart = () => {

    const {arrayCarrito, eliminarDelCarrito, vaciarCarrito} = useContext(Context)

    return (
        <div>
            <h1>Tu resumen de compra</h1>
            {
                arrayCarrito.map(prod => (
                    <div key={prod.id}>
                        <img src={prod.img}></img>
                        <h3>{prod.nombre}</h3>
                        <h4>Cantidad: {prod.cantidad}</h4>
                        <h4>Precio: {prod.precioFinal  * prod.cantidad}</h4>
                    </div>
                ))
            }
        </div>
    )
}