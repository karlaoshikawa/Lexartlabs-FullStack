const productService = require("../service/product.service");

async function createProduct(req, res) {
  const productData = req.body;

  try {
    const result = await productService.insertProduct(productData);
    if (result.success) {
      return res.status(201).json({ message: result.message });
    } else {
      return res.status(400).json({ error: result.message });
    }
  } catch (error) {
    console.error("Error creating product:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
}

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res
      .status(400)
      .json({ error: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
};
