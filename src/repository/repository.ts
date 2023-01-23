import { QueryResult } from "pg";
import { connection } from "../database/server.js";
import { Gastos } from "../protocols/gastos.js";


export async function queryLancaGastos(valor: number, nome: string): Promise<QueryResult<Gastos>>{
    return (
        connection.query(
            `INSERT INTO lancamentos (valor, nome) VALUES ($1, $2)`,
            [valor, nome]
          )
    )

}

export async function queryGetGastos() :Promise<QueryResult<object>>{
    return(
        connection.query(`SELECT * FROM lancamentos`)
    )
}


export async function queryAlteraGastos(valor:number, id:number):Promise<QueryResult<object>>{
    return(
        connection.query(`UPDATE lancamentos SET valor = $1 WHERE id = $2`, [
            valor,
            id,
          ])
    )
}

export async function queryDeletaGastos(id:number):Promise<QueryResult<object>>{
    return(
        connection.query(`DELETE FROM lancamentos WHERE id = $1`, [id])
    )
}

export async function queryFiltraGastos(valor:number):Promise<QueryResult<object>>{
    return(
        connection.query(
            `SELECT * FROM lancamentos WHERE valor >= $1;`,
            [valor]
          )  
    )
}

const gastosRepository = {queryLancaGastos,queryGetGastos, queryAlteraGastos,queryDeletaGastos,queryFiltraGastos} 

export default gastosRepository