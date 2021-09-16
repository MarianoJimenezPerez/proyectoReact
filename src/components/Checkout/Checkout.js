import React, {useContext, useState} from 'react'
import { Context } from '../../context/Context'
import { generarOrden } from '../firebase/generarOrden'


export const Checkout = () => {

    const {arrayCarrito, precioTotalCarrito} = useContext(Context)
    const [values, setValues] = useState({
        nombre: '',
        mail: '',
        tel: 0
    })
    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(values.nombre.length > 4 && values.mail.length > 4 && values.tel.length > 8) {
            generarOrden(values, arrayCarrito, precioTotalCarrito)
            alert ("su orden se generó correctamente")
        } else {
            alert ("Por favor introduce datos válidos para terminar la compra")
        }
        
    }

    return (
                <div>
                    <h2>Checkout</h2>
                    {!arrayCarrito.length
                        ?<h4>Aún no tienes productos en tu carrito</h4>
                        :<form onSubmit={handleSubmit}>
                            <input
                            type= "text"
                            value= {values.nombre}
                            onChange = {handleInputChange}
                            name="nombre"
                            required
                        />
                        <input
                            type= "email"
                            value= {values.mail}
                            onChange = {handleInputChange}
                            name="mail"
                            required
                        />
                        <input
                            type= "tel"
                            value= {values.tel}
                            onChange = {handleInputChange}
                            name="tel"
                            required
                        />
                        <button type="submit">Finalizar compra</button>
                        </form>
                    }
                </div>
            )
}