require("dotenv").config();

const express = require("express");
const { Sequelize } = require("sequelize");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
