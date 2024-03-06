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
    res.status(400).json({ error: error.message });
  }
};

async function updateProductById(req, res) {
  const productId = req.params.id;
  const productData = req.body;
  const result = await productService.updateProductById(productId, productData);

  if (result.success) {
    res.status(200).json({ message: result.message });
  } else {
    res.status(400).json({ error: result.message });
  }
}

async function deleteProduct(req, res) {
  const productId = req.params.id;
  try {
    const result = await productService.deleteProduct(productId);
    res.status(200).json({ message: result.message });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


module.exports = {
  createProduct,
  getAllProducts,
  updateProductById,
  deleteProduct,
};
