const express = require("express");
const productController = require("../controller/product.controller");
const productRouter = express.Router();

productRouter.post("/newProduct", productController.createProduct);
productRouter.get("/productsList", productController.getAllProducts);

module.exports = productRouter;
