import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../firebase/config'


export const ItemListContainer = () => {


    const { catId } = useParams()

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect( ()=> {
        setLoading(true)
        const bd = getFirestore()
        const productos = bd.collection('productos')

        if (catId) {
            const filtrado = productos.where('category', '==', catId)
            filtrado.get()
            .then((resp) => {
                const data = resp.docs.map((doc) => ({...doc.data(), id: doc.id}))
                console.log(data)
                setData(data)
            })
            .finally(()=>{
            setLoading(false)
            })
        }
        else {
            productos.get()
            .then((resp) => {
                const data = resp.docs.map((doc) => ({...doc.data(), id: doc.id}))
                console.log(data)
                setData(data)
                })
            .finally(()=>{
                setLoading(false)
            })
        }
        
        
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