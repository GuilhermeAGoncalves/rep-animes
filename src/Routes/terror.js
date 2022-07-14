import { Router } from "express";

const animeTerror = new Router();

animeTerror.get("/", (req, res) => {
  res.send("as");
});

export default animeTerror;
