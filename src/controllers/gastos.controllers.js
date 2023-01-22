import { connection } from "../database/server.js";

export async function getGastos(req, res) {
  try {
    const lancamentos = await connection.query(`SELECT * FROM lancamentos`);
    res.status(201).send(lancamentos.rows);
  } catch (err) {
    res.sendStatus(400);
    console.log(err);
  }
}

export async function lancaGastos(req, res) {
  const { valor, nome } = req.body;

  try {
    await connection.query(
      `INSERT INTO lancamentos (valor, nome) VALUES ($1, $2)`,
      [valor, nome]
    );
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(400);
    console.log(err);
  }
}
export async function alteraGastos(req, res) {
  const { id } = req.params;
  const { valor } = req.body;

  try {
    await connection.query(`UPDATE lancamentos SET valor = $1 WHERE id = $2`, [
      valor,
      id,
    ]);
    res.status(201).send("valor alterado");
  } catch (err) {
    res.sendStatus(400);
    console.log(err);
  }
}

export async function deletaGastos(req, res) {
  const { id } = req.params;

  try {
    await connection.query(`DELETE FROM lancamentos WHERE id = $1`, [id]);
    res.status(201).send("Lancamento deletado com sucesso");
  } catch (err) {
    res.sendStatus(400);
    console.log(err);
  }
}
