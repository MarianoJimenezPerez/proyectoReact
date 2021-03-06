import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../firebase/config'
import { ItemDetail } from './ItemDetail'

export const ItemDetailContainer = () => {

    const { itemId } = useParams()

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{

        setLoading(true)


        const bd = getFirestore()
        const productos = bd.collection('productos')
        const item = productos.doc(itemId)

        item.get()
        .then((doc) =>{
            setItem({...doc.data(), id: doc.id})
        })

        .finally(()=> { setLoading(false)})	

    }, [itemId])


    return (
        <div>
            {loading 
                ? <h2 className="t-center">Cargando...</h2>
                : <ItemDetail {...item}/>
            }
        </div>
    )
}
