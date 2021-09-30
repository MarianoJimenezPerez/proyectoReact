import React, {useContext, useState} from 'react'
import { Redirect } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Context } from '../../context/Context'
import { generarOrden } from '../firebase/generarOrden'


export const Checkout = () => {

    const {arrayCarrito, precioTotalCarrito, vaciarCarrito} = useContext(Context)
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
            .then ( res => {
                Swal.fire({
                    icon: 'success',
                    title: `Su orden fue generada correctamente con el número ${res}`,
                    timer: 3000
                })
                vaciarCarrito()
            })

            .catch( err => alert (err))
            
        } else {
            Swal.fire({
                icon: 'error',
                title: `Alguno de los campos ingresados es incorrecto`,
                confirmButtonText: 'Intentar de nuevo'
            })
        }
        
    }

    return (
                <div>
                    <h2 className="t-center">Checkout</h2>
                    {!arrayCarrito.length
                        ?<Redirect to="/tienda"/>
                        :<form onSubmit={handleSubmit} className="grilla-checkOut t-center">
                            <input
                            type= "text"
                            value= {values.nombre}
                            onChange = {handleInputChange}
                            name="nombre"
                            placeholder="Ingrese su nombre"
                            required
                        />
                        <input
                            type= "email"
                            value= {values.mail}
                            onChange = {handleInputChange}
                            name="mail"
                            placeholder="Ingrese su mail"
                            required
                        />
                        <input
                            type= "tel"
                            value= {values.tel}
                            onChange = {handleInputChange}
                            name="tel"
                            placeholder="Ingrese su teléfono"
                            required
                        />
                        <button type="submit" className="btn3">Finalizar compra</button>
                        </form>
                    }
                </div>
            )
}