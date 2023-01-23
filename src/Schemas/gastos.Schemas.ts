import Joi from "joi";
import { Gastos } from "../protocols/gastos";

export const lancaGastosSchema: Joi.ObjectSchema<Gastos> = Joi.object({
  valor: Joi.number().required(),
  nome: Joi.string().required(),
});

export const alteraeFiltraGastosSchema: Joi.ObjectSchema<Gastos> = Joi.object({
  valor: Joi.number().required(),
});
