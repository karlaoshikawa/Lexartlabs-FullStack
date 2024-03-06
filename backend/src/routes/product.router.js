const express = require("express");
const productController = require("../controller/product.controller");
const productRouter = express.Router();

productRouter.get("/productsList", productController.getAllProducts);
productRouter.post("/newProduct", productController.createProduct);
productRouter.post("/productUpdate/:id", productController.updateProductById);

module.exports = productRouter;
