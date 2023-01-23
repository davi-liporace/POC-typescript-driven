import { NextFunction, Request, Response } from "express";
import {
  alteraeFiltraGastosSchema,
  lancaGastosSchema,
} from "../Schemas/gastos.Schemas.js";

export async function gastosValidation(req: Request, res: Response, next: NextFunction): Promise<Response> {
  const lancamentos = req.body;

  const { error } = lancaGastosSchema.validate(lancamentos, {
    abortEarly: false,
  });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }

  next();
}

export async function alteraFiltraGastosValidation(req: Request, res: Response, next: NextFunction) :Promise<Response> {
  const lancamentos = req.body;

  const { error } = alteraeFiltraGastosSchema.validate(lancamentos, {
    abortEarly: false,
  });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }

  next();
}
