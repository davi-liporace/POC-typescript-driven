import { Router } from "express";
import {
  alteraGastos,
  deletaGastos,
  filtraGastos,
  getGastos,
  lancaGastos,
} from "../controllers/gastos.controllers.js";
import {
  alteraFiltraGastosValidation,
  gastosValidation,
} from "../middlewares/gastos.middlewares.js";

const ListaGastos = Router();
ListaGastos.get("/gastos", getGastos);
ListaGastos.get("/gastos/valormin", alteraFiltraGastosValidation, filtraGastos);
ListaGastos.post("/gastos/post", gastosValidation, lancaGastos);
ListaGastos.put("/gastos/:id", alteraFiltraGastosValidation, alteraGastos);
ListaGastos.delete("/gastos/:id", deletaGastos);

export default ListaGastos;
