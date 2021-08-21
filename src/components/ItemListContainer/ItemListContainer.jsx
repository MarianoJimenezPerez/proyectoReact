import React, { useEffect, useState } from 'react'
import { promisePedirDatos } from '../BaseDeDatos/promisePedirDatos'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {

    const { catId } = useParams()

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect( ()=> {
        setLoading(true)

        promisePedirDatos()
            .then(res => {
                if(catId){
                    const filtrado = res.filter(prod => prod.category === catId)
                    setData(filtrado)
                } else{
                    setData(res)
                }
            })
            .catch(err => console.log(err))
            .finally(()=> {
                setLoading(false)
            })
    }, [catId])
    
    return (
        <>
            {loading 
                ? <h2 className="t-center mt-2">...Cargando la tienda, aguarde un instante...</h2>
                : <ItemList productos={data}/>    
            }
        </>
    )
}