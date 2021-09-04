import { createContext, useState } from "react"

export const Context = createContext()

export const CartProvider = ({children}) => {

    const [arrayCarrito, setArrayCarrito] = useState([])

    const agregarAlCarrito = (prod) =>{
        setArrayCarrito([
        ...arrayCarrito,
        prod
        ])
    }

    const eliminarDelCarrito = (id) => {
        setArrayCarrito( arrayCarrito.filter(prod => prod.id !== id) )
    }

    const cantidadCarrito = () => {
        return arrayCarrito.reduce( (acc, prod) => acc + prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setArrayCarrito([])
    }

    const isInCart = (id) => { 
        return arrayCarrito.some(prod => prod.id === id)
    }


    return(
        <Context.Provider value={{arrayCarrito, agregarAlCarrito, eliminarDelCarrito, cantidadCarrito, vaciarCarrito, isInCart}}>
            {children}
        </Context.Provider>
    )
}