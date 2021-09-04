import React, {useContext} from 'react'
import { Context } from '../../context/Context'

export const Cart = () => {

    const {arrayCarrito, eliminarDelCarrito, vaciarCarrito} = useContext(Context)

    return (
        <div className="cart-container t-center">
            <div className="head-carrito">
                <h1>Tu resumen de compra</h1>
                <span onClick={vaciarCarrito} className=" btn1">Vaciar carro</span>
                <span className= "btn2">Terminar mi compra</span>
            </div>            
            <table>
                <thead>
                    <tr>
                        <th className="t-center">Libro</th>
                        <th className="t-center">Nombre</th>
                        <th className="t-center">Cantidad</th>
                        <th className="t-center">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arrayCarrito.map(prod => (
                                <tr key={prod.id}>
                                    <td>
                                        <img src={prod.img} alt={prod.nombre}></img>
                                    </td>
                                    <td>
                                        <h3>{prod.nombre}</h3>
                                    </td>
                                    <td>
                                        <h4>{prod.cantidad}</h4>
                                    </td>
                                    <td>
                                        <h4 className="mb-1">${prod.precioFinal  * prod.cantidad}</h4>
                                        <span onClick={() => eliminarDelCarrito(prod.id)} className="btn3">Eliminar item</span>
                                    </td>                              
                                </tr>
                        ))
                    }
                </tbody>
                
            </table>
            
        </div>
    )
}