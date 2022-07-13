import express from "express";

/**
 * CRUD
 * Create
 * Read
 * Uptade
 * Delete
 */

const server = express();

server.get("/carro", (req, res) => {
  res.status(201).send("Carros");
});

server.delete("/carro/:cor", (req, res) => {
  const cor = req.params.cor;

  res.status(202).send(`${cor} deletada`);
});

server.put("/carro/:cor", (req, res) => {
  const cor = req.params.cor;

  res.status(200).send(`Update na cor ${cor}`);
});

server.post("/carro/:cor", (req, res) => {
  const cor = req.params.cor;

  res.status(200).send(cor);
});

server.listen(3000, () => {
  console.log("Serve rodando na porta 3000");
});
