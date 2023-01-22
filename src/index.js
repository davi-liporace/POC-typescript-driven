import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ListaGastos from "./routes/gastos.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(ListaGastos);

const port = 4000;
app.listen(port, () => console.log(`Server running in port 4000`));
