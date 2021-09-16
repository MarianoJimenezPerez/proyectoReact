import React, {useContext} from 'react'
import { Context } from '../../context/Context'
import { Link } from 'react-router-dom'

export const Cart = () => {

    const {arrayCarrito, eliminarDelCarrito, vaciarCarrito, precioTotalCarrito, hayProductos} = useContext(Context)

    return (
        <div>
            {
                hayProductos
                ? <div className="cart-container t-center">
                    <div className="head-carrito">
                        <h1>Tu resumen de compra</h1>
                        <div>
                            <span onClick={vaciarCarrito} className=" btn1">Vaciar carro</span>
                            <Link to={"/checkout"} className= "btn2">Terminar mi compra</Link>
                            <span>Total ${precioTotalCarrito()}</span>
                        </div>                
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
                                                <img src={prod.img} alt={prod.nombre} className="h-150px"></img>
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
                : <div className="cart-container t-center">
                    <h2 className="mb-1">No tienes productos en tu carrito, visitá nuestra tienda</h2>
                    <Link to={"/tienda"} className="btn3">Ir a la tienda</Link>
                    </div>
            }
        </div>
    )
}