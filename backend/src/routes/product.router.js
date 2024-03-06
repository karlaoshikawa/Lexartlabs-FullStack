const express = require("express");
const productController = require("../controller/product.controller");
const productRouter = express.Router();
const verifyToken = require("../middlewares/validateToken");

productRouter.get("/productsList",verifyToken, productController.getAllProducts);
productRouter.post("/newProduct",verifyToken, productController.createProduct);
productRouter.post("/productUpdate/:id",verifyToken, productController.updateProductById);
productRouter.delete("/productDelete/:id",verifyToken, productController.deleteProduct);

module.exports = productRouter;
