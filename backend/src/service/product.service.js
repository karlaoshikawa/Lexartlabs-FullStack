const { Product } = require("../models/index");

async function insertProduct(productData) {
  let productsToInsert = [];

  if (Array.isArray(productData)) {
    // Estrutura 3
    productData.forEach((product) => {
      product.data.forEach((item) => {
        productsToInsert.push({
          name: product.name,
          brand: product.brand,
          model: product.model,
          price: item.price,
          color: item.color,
        });
      });
    });
  } else {
    // Estrutura 1 ou 2
    if (productData.details) {
      // Estrutura 2
      productsToInsert.push({
        name: productData.name,
        brand: productData.details.brand,
        model: productData.details.model,
        price: productData.price,
        color: productData.details.color,
      });
    } else {
      // Estrutura 1
      productsToInsert.push({
        name: productData.name,
        brand: productData.brand,
        model: productData.model,
        price: productData.price,
        color: productData.color,
      });
    }
  }

  try {
    await Product.bulkCreate(productsToInsert);
    return { success: true, message: "Products inserted successfully." };
  } catch (error) {
    console.error("Error inserting products:", error);
    return {
      success: false,
      message: "An error occurred while inserting the products.",
    };
  }
}

async function getAllProducts() {
  try {
    const products = await Product.findAll();
    return { success: true, products };
  } catch (error) {
    console.error("Error getting products:", error);
    return {
      success: false,
      message: "An error occurred while getting the products.",
    };
  }
}

async function updateProductById(productId, productData) {
  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      return { success: false, message: "Product not found." };
    }

    await product.update({
      name: productData.name,
      brand: productData.brand,
      model: productData.model,
      price: productData.price,
      color: productData.color,
    });

    return { success: true, message: "Product updated successfully." };
  } catch (error) {
    console.error("Error updating product:", error);
    return {
      success: false,
      message: "An error occurred while updating the product.",
    };
  }
}

const deleteProduct = async (productId) => {
  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      throw new Error("Product not found");
    }

    await product.destroy();
    return { message: "Product deleted successfully" };
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  insertProduct,
  getAllProducts,
  updateProductById,
  deleteProduct,
};
