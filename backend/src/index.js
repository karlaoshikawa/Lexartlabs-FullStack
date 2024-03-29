require("dotenv").config();

const pg = require("pg");
const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 3000;

const userRoute = require("./routes/user.router");
const productRoute = require("./routes/product.router");

const app = express();
app.use(express.json());

// const url = "https://backend-lime-kappa.vercel.app/";

const corsOptions = {
  origin: true,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello!!");
});
app.use("/users", userRoute);
app.use("/products", productRoute);

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

module.exports = app;