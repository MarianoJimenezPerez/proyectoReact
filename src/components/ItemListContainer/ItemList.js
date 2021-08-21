import React from 'react'
import { Item } from './Item'

export const ItemList = ( {productos = []} ) => {

    return (
        <section >
            <h2 className="t-center mt-2">Bienvenido a la tienda de libros</h2>
            <div className="grid-responsive mt-10">

                {productos.map((prod) => <Item key={prod.id} {...prod}/> )}

            </div>
        </section>
    )
}
