import { baseDeDatos } from "../BaseDeDatos/baseDeDatos"

export const promisePedirDatos = () => {

    return new Promise((resolve, reject) => {

            setTimeout(()=>{
                resolve(baseDeDatos)
            }, 2000)

    })
}