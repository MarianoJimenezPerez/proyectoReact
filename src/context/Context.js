import { createContext, useState } from "react"

export const Context = createContext()

export const CartProvider = ({children}) => {

    const [arrayCarrito, setArrayCarrito] = useState([])

    const [hayProductos, setHayProductos] = useState(false)
    
    const agregarAlCarrito = (prod) =>{
        setHayProductos(true)
        setArrayCarrito([
        ...arrayCarrito,
        prod
        ])
    }

    const eliminarDelCarrito = (id) => {
        setArrayCarrito( arrayCarrito.filter(prod => prod.id !== id) )
        if(arrayCarrito === []){
            setHayProductos(false)
        }
        else {
            setHayProductos(true)
        }
    }

    const cantidadCarrito = () => {
        return arrayCarrito.reduce( (acc, prod) => acc + prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setArrayCarrito([])
        setHayProductos(false)
    }

    const isInCart = (id) => { 
        return arrayCarrito.some(prod => prod.id === id)
    }

    const precioTotalCarrito = () => {
        return arrayCarrito.reduce( (acc, prod) => acc + prod.precioFinal * prod.cantidad, 0)
    }


    return(
        <Context.Provider value={{arrayCarrito, agregarAlCarrito, eliminarDelCarrito, cantidadCarrito, vaciarCarrito, isInCart, precioTotalCarrito, hayProductos}}>
            {children}
        </Context.Provider>
    )
}