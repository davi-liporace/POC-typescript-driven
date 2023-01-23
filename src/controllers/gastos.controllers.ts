import { Request, Response } from "express";
import { number } from "joi";
import { connection } from "../database/server.js";
import { Gastos } from "../protocols/gastos.js";
import gastosRepository from "../repository/repository.js";


export async function getGastos(req: Request, res: Response) : Promise<void> {
  try {
    const lancamentos = await gastosRepository.queryGetGastos();
    res.status(201).send(lancamentos.rows);
  } catch (err) {
    res.sendStatus(400);
    console.log(err);
  }
}

export async function lancaGastos(req: Request, res: Response) : Promise<void> {
  const { valor, nome } = req.body as Gastos;

  try {
    await gastosRepository.queryLancaGastos(valor, nome)
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(400);
    console.log(err);
  }
}
export async function alteraGastos(req:Request, res: Response) : Promise<void> {
  const { id } = req.params;
  const { valor } = req.body as Gastos;

  try {
    const teste = await gastosRepository.queryAlteraGastos(valor, Number(id))
    console.log(teste)
    res.status(201).send("valor alterado");
  } catch (err) {
    res.sendStatus(400);
    console.log(err);
  }
}

export async function deletaGastos(req: Request, res: Response) : Promise<void> {
  const { id } = req.params;

  try {
    await gastosRepository.queryDeletaGastos(Number(id));
    res.status(201).send("Lancamento deletado com sucesso");
  } catch (err) {
    res.sendStatus(400);
    console.log(err);
  }
}

export async function filtraGastos(req:Request, res:Response) : Promise<void> {
  const { valor } = req.body as Gastos;

  try {
    const lancamentosFiltrados = await gastosRepository.queryFiltraGastos(valor);
    res.status(201).send(lancamentosFiltrados.rows);
  } catch (err) {
    res.sendStatus(400);
    console.log(err);
  }
}
