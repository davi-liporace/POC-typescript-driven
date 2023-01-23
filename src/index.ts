import express from "express";
import ListaGastos from "./routes/gastos.routes.js";



const app = express();


app.use(express.json());
app.use(ListaGastos);

const port = 4000;
app.listen(port, () => console.log(`Server running in port 4000`));
