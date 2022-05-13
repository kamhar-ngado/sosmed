import express from "express";

const router = express.Router();

let name = "tata ta ta....";
let result = name.toUpperCase();

router.get("/", (req, res) => {
  res.send(`${result}`);
});

export default router;
