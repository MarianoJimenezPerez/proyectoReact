import React, { useEffect, useState } from 'react'
import { promisePedirDatos } from '../BaseDeDatos/promisePedirDatos'
import { ItemList } from './ItemList'

export const ItemListContainer = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect( ()=> {
        setLoading(true)

        promisePedirDatos()
            .then(res => setData(res))
            .catch(err => console.log(err))
            .finally(()=> {
                setLoading(false)
            })
    }, [])
    
    return (
        <>
            {loading 
                ? <h2 className="t-center mt-2">...Cargando la tienda, aguarde un instante...</h2>
                : <ItemList productos={data}/>    
            }
        </>
    )
}