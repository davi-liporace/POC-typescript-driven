import { Router } from "express";
import {
  alteraGastos,
  deletaGastos,
  getGastos,
  lancaGastos,
} from "../controllers/gastos.controllers.js";

const ListaGastos = Router();
ListaGastos.get("/gastos", getGastos);
ListaGastos.post("/gastos/post", lancaGastos);
ListaGastos.put("/gastos/:id", alteraGastos);
ListaGastos.delete("/gastos/:id", deletaGastos);

export default ListaGastos;
