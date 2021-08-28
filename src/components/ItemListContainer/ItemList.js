import React from 'react'
import { Item } from './Item'
import { Link } from 'react-router-dom'

export const ItemList = ( {productos = []} ) => {

    return (
        <section >
            <h2 className="t-center mt-2">Bienvenido a la tienda de libros</h2>
            <div>
                <ul className="ul-filtro">
                    Filtro por categoría
                    <Link to={"/tienda"}>Todos</Link>
                    <Link to={"/tienda/category/terror"}>Terror</Link>
                    <Link to={"/tienda/category/ficcion"}>Ficción</Link>
                    <Link to={"/tienda/category/humanidad"}>Humanidad</Link>
                    <Link to={"/tienda/category/romantica"}>Romántica</Link>
                </ul>
            </div>            
            <div className="grid-responsive mt-10">

                {productos.map((prod) => <Item key={prod.id} {...prod}/> )}

            </div>
        </section>
    )
}
